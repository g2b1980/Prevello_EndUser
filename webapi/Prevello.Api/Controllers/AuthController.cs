using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Protocols;
using Microsoft.IdentityModel.Protocols.OpenIdConnect;
using Microsoft.IdentityModel.Tokens;
using Prevello.Api.Data;
using Prevello.Api.Models;
using Prevello.Api.Models.Auth;

namespace Prevello.Api.Controllers;

[ApiController]
[Route("api/[controller]")]
public class AuthController : ControllerBase
{
    private readonly UserManager<ApplicationUser> _userManager;
    private readonly SignInManager<ApplicationUser> _signInManager;
    private readonly IConfiguration _configuration;
    private readonly ApplicationDbContext _dbContext;
    private readonly ILogger<AuthController> _logger;

    // Default tenant for single-tenant mode
    private static readonly Guid DefaultTenantId = Guid.Parse("00000000-0000-0000-0000-000000000001");

    // Frontend SPA client ID (audience of ID tokens)
    private const string SpaClientId = "9a514d86-f3f3-481e-b99e-b474431ded80";

    public AuthController(
        UserManager<ApplicationUser> userManager,
        SignInManager<ApplicationUser> signInManager,
        IConfiguration configuration,
        ApplicationDbContext dbContext,
        ILogger<AuthController> logger)
    {
        _userManager = userManager;
        _signInManager = signInManager;
        _configuration = configuration;
        _dbContext = dbContext;
        _logger = logger;
    }

    /// <summary>
    /// Register a new local account.
    /// </summary>
    [HttpPost("register")]
    public async Task<ActionResult<AuthResponse>> Register([FromBody] RegisterRequest request)
    {
        var user = new ApplicationUser
        {
            UserName = request.Email,
            Email = request.Email,
            FirstName = request.FirstName,
            LastName = request.LastName,
            DisplayName = $"{request.FirstName} {request.LastName}".Trim(),
            TenantId = DefaultTenantId
        };

        var result = await _userManager.CreateAsync(user, request.Password);

        if (!result.Succeeded)
        {
            return BadRequest(new AuthResponse
            {
                Succeeded = false,
                Errors = result.Errors.Select(e => e.Description)
            });
        }

        var token = GenerateJwtToken(user);

        return Ok(new AuthResponse
        {
            Succeeded = true,
            Token = token,
            DisplayName = user.DisplayName,
            Email = user.Email
        });
    }

    /// <summary>
    /// Sign in with local account credentials.
    /// </summary>
    [HttpPost("login")]
    public async Task<ActionResult<AuthResponse>> Login([FromBody] LoginRequest request)
    {
        var user = await _userManager.FindByEmailAsync(request.Email);
        if (user == null || !user.IsActive)
        {
            return Unauthorized(new AuthResponse
            {
                Succeeded = false,
                Errors = new[] { "Invalid email or password." }
            });
        }

        var result = await _signInManager.CheckPasswordSignInAsync(user, request.Password, lockoutOnFailure: true);

        if (!result.Succeeded)
        {
            return Unauthorized(new AuthResponse
            {
                Succeeded = false,
                Errors = new[] { "Invalid email or password." }
            });
        }

        // Update last login
        user.LastLoginAt = DateTime.UtcNow;
        await _userManager.UpdateAsync(user);

        var token = GenerateJwtToken(user);

        return Ok(new AuthResponse
        {
            Succeeded = true,
            Token = token,
            DisplayName = user.DisplayName,
            Email = user.Email
        });
    }

    /// <summary>
    /// Exchange an Entra ID token for a Prevello JWT.
    /// The frontend sends the access/ID token from MSAL redirect login.
    /// We validate the token against Entra ID's signing keys, extract claims,
    /// find-or-create the user, and issue our own JWT.
    /// </summary>
    [HttpPost("entra-login")]
    public async Task<ActionResult<AuthResponse>> EntraLogin([FromBody] EntraLoginRequest request)
    {
        if (string.IsNullOrWhiteSpace(request.AccessToken))
        {
            return BadRequest(new AuthResponse
            {
                Succeeded = false,
                Errors = new[] { "Access token is required." }
            });
        }

        try
        {
            var tenantId = _configuration["AzureAd:TenantId"];
            var backendClientId = _configuration["AzureAd:ClientId"];       // 51ccc76e-...
            var backendAudience = _configuration["AzureAd:Audience"];       // api://51ccc76e-...

            _logger.LogInformation("[EntraLogin] Starting token validation. TenantId={TenantId}, BackendClientId={BackendClientId}", tenantId, backendClientId);

            // Fetch Entra ID's OpenID Connect signing keys
            var configManager = new ConfigurationManager<OpenIdConnectConfiguration>(
                $"https://login.microsoftonline.com/{tenantId}/v2.0/.well-known/openid-configuration",
                new OpenIdConnectConfigurationRetriever());

            var openIdConfig = await configManager.GetConfigurationAsync();
            _logger.LogInformation("[EntraLogin] Fetched {KeyCount} signing keys from OpenID Connect metadata", openIdConfig.SigningKeys.Count);

            var validIssuers = new[]
            {
                $"https://login.microsoftonline.com/{tenantId}/v2.0",
                $"https://sts.windows.net/{tenantId}/"
            };

            ClaimsPrincipal? principal = null;

            // ----- Strategy 1: Validate the ID token (audience = SPA client ID) -----
            if (!string.IsNullOrWhiteSpace(request.IdToken))
            {
                _logger.LogInformation("[EntraLogin] Attempting ID token validation (audience={Audience})", SpaClientId);
                try
                {
                    var idTokenParams = new TokenValidationParameters
                    {
                        ValidateIssuer = true,
                        ValidIssuers = validIssuers,
                        ValidateAudience = true,
                        ValidAudiences = new[] { SpaClientId },
                        ValidateLifetime = true,
                        IssuerSigningKeys = openIdConfig.SigningKeys,
                        // MSAL redirect flow includes a nonce in the ID token, but we don't have
                        // the original nonce to validate against. This is safe because we still
                        // validate the signature, issuer, audience, and lifetime.
                        ValidateTokenReplay = false,
                    };

                    var handler = new JwtSecurityTokenHandler();
                    // Read the raw token first to check for nonce
                    var rawIdToken = handler.ReadJwtToken(request.IdToken);
                    if (rawIdToken.Payload.ContainsKey("nonce"))
                    {
                        _logger.LogInformation("[EntraLogin] ID token contains nonce claim, skipping nonce validation");
                    }

                    principal = handler.ValidateToken(request.IdToken, idTokenParams, out _);
                    _logger.LogInformation("[EntraLogin] ID token validated successfully");
                }
                catch (SecurityTokenException ex)
                {
                    _logger.LogWarning(ex, "[EntraLogin] ID token validation failed: {Message}", ex.Message);
                    principal = null;
                }
            }

            // ----- Strategy 2: Validate the access token (audience = backend API) -----
            if (principal == null)
            {
                _logger.LogInformation("[EntraLogin] Attempting access token validation (audiences={BackendClientId}, {BackendAudience})", backendClientId, backendAudience);
                try
                {
                    var accessTokenParams = new TokenValidationParameters
                    {
                        ValidateIssuer = true,
                        ValidIssuers = validIssuers,
                        ValidateAudience = true,
                        ValidAudiences = new[]
                        {
                            backendClientId,            // 51ccc76e-...
                            backendAudience,            // api://51ccc76e-...
                            SpaClientId,                // 9a514d86-... (fallback)
                            $"api://{SpaClientId}"      // api://9a514d86-... (fallback)
                        },
                        ValidateLifetime = true,
                        IssuerSigningKeys = openIdConfig.SigningKeys,
                        ValidateTokenReplay = false,
                    };

                    var handler = new JwtSecurityTokenHandler();

                    // Log the access token's audience for debugging
                    var rawAccessToken = handler.ReadJwtToken(request.AccessToken);
                    _logger.LogInformation("[EntraLogin] Access token aud={Audience}, iss={Issuer}",
                        string.Join(",", rawAccessToken.Audiences), rawAccessToken.Issuer);

                    principal = handler.ValidateToken(request.AccessToken, accessTokenParams, out _);
                    _logger.LogInformation("[EntraLogin] Access token validated successfully");
                }
                catch (SecurityTokenException ex)
                {
                    _logger.LogError(ex, "[EntraLogin] Access token validation also failed: {Message}", ex.Message);
                    return Unauthorized(new AuthResponse
                    {
                        Succeeded = false,
                        Errors = new[] { $"Token validation failed: {ex.Message}" }
                    });
                }
            }

            // Extract claims from the validated token
            var objectId = principal.FindFirstValue("oid")
                           ?? principal.FindFirstValue("http://schemas.microsoft.com/identity/claims/objectidentifier");
            var email = principal.FindFirstValue("preferred_username")
                        ?? principal.FindFirstValue(ClaimTypes.Email)
                        ?? principal.FindFirstValue("email")
                        ?? principal.FindFirstValue("upn");
            var displayName = principal.FindFirstValue("name")
                              ?? principal.FindFirstValue(ClaimTypes.Name);
            var firstName = principal.FindFirstValue("given_name")
                            ?? principal.FindFirstValue(ClaimTypes.GivenName);
            var lastName = principal.FindFirstValue("family_name")
                           ?? principal.FindFirstValue(ClaimTypes.Surname);

            _logger.LogInformation("[EntraLogin] Extracted claims: oid={ObjectId}, email={Email}, name={DisplayName}",
                objectId, email, displayName);

            if (string.IsNullOrWhiteSpace(objectId))
            {
                return BadRequest(new AuthResponse
                {
                    Succeeded = false,
                    Errors = new[] { "Could not extract user identifier from Entra ID token." }
                });
            }

            if (string.IsNullOrWhiteSpace(email))
            {
                return BadRequest(new AuthResponse
                {
                    Succeeded = false,
                    Errors = new[] { "Could not extract email from Entra ID token. Ensure the app registration has email claims configured." }
                });
            }

            // Find existing user by EntraObjectId or create a new one
            var user = await _dbContext.Users
                .FirstOrDefaultAsync(u => u.EntraObjectId == objectId);

            if (user == null)
            {
                // Check if a local account with the same email exists
                user = await _userManager.FindByEmailAsync(email);

                if (user != null)
                {
                    // Link the existing local account to Entra ID
                    _logger.LogInformation("[EntraLogin] Linking existing local account {Email} to Entra ObjectId {ObjectId}", email, objectId);
                    user.EntraObjectId = objectId;
                    if (string.IsNullOrWhiteSpace(user.DisplayName))
                        user.DisplayName = displayName;
                    if (string.IsNullOrWhiteSpace(user.FirstName))
                        user.FirstName = firstName;
                    if (string.IsNullOrWhiteSpace(user.LastName))
                        user.LastName = lastName;
                }
                else
                {
                    // Create a new user from Entra ID claims
                    _logger.LogInformation("[EntraLogin] Creating new user for {Email} with Entra ObjectId {ObjectId}", email, objectId);
                    user = new ApplicationUser
                    {
                        UserName = email,
                        Email = email,
                        EmailConfirmed = true,  // Entra ID accounts are pre-verified
                        FirstName = firstName,
                        LastName = lastName,
                        DisplayName = displayName ?? email,
                        EntraObjectId = objectId,
                        TenantId = DefaultTenantId,
                        IsActive = true
                    };

                    var createResult = await _userManager.CreateAsync(user);
                    if (!createResult.Succeeded)
                    {
                        _logger.LogError("[EntraLogin] Failed to create user: {Errors}",
                            string.Join(", ", createResult.Errors.Select(e => e.Description)));
                        return BadRequest(new AuthResponse
                        {
                            Succeeded = false,
                            Errors = createResult.Errors.Select(e => e.Description)
                        });
                    }
                }
            }

            if (!user.IsActive)
            {
                return Unauthorized(new AuthResponse
                {
                    Succeeded = false,
                    Errors = new[] { "This account has been deactivated." }
                });
            }

            // Update last login
            user.LastLoginAt = DateTime.UtcNow;
            await _userManager.UpdateAsync(user);

            // Generate Prevello JWT
            var token = GenerateJwtToken(user);
            _logger.LogInformation("[EntraLogin] Successfully issued Prevello JWT for {Email}", email);

            return Ok(new AuthResponse
            {
                Succeeded = true,
                Token = token,
                DisplayName = user.DisplayName,
                Email = user.Email
            });
        }
        catch (Exception ex)
        {
            _logger.LogError(ex, "[EntraLogin] Unhandled exception during Entra ID authentication");
            return StatusCode(500, new AuthResponse
            {
                Succeeded = false,
                Errors = new[] { $"An error occurred during Entra ID authentication: {ex.Message}" }
            });
        }
    }

    /// <summary>
    /// Get current user info from token.
    /// </summary>
    [HttpGet("me")]
    [Authorize]
    public async Task<ActionResult<UserInfoResponse>> Me()
    {
        var userId = User.FindFirstValue(ClaimTypes.NameIdentifier);
        if (userId == null)
            return Unauthorized();

        var user = await _userManager.FindByIdAsync(userId);
        if (user == null)
            return NotFound();

        return Ok(new UserInfoResponse
        {
            Id = user.Id,
            Email = user.Email!,
            DisplayName = user.DisplayName,
            FirstName = user.FirstName,
            LastName = user.LastName,
            TenantId = user.TenantId,
            IsEntraUser = !string.IsNullOrEmpty(user.EntraObjectId)
        });
    }

    private string GenerateJwtToken(ApplicationUser user)
    {
        var jwtKey = _configuration["Jwt:Key"] ?? "PrevelloDevSecretKey_ChangeInProduction_AtLeast32Chars!";
        var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(jwtKey));
        var creds = new SigningCredentials(key, SecurityAlgorithms.HmacSha256);

        var claims = new List<Claim>
        {
            new(ClaimTypes.NameIdentifier, user.Id),
            new(ClaimTypes.Email, user.Email!),
            new(ClaimTypes.Name, user.DisplayName ?? user.Email!),
            new("tenant_id", user.TenantId.ToString())
        };

        var token = new JwtSecurityToken(
            issuer: _configuration["Jwt:Issuer"] ?? "Prevello.Api",
            audience: _configuration["Jwt:Audience"] ?? "Prevello.Client",
            claims: claims,
            expires: DateTime.UtcNow.AddHours(8),
            signingCredentials: creds);

        return new JwtSecurityTokenHandler().WriteToken(token);
    }
}
