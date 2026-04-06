namespace Prevello.Api.Models.Auth;

public class LoginRequest
{
    public string Email { get; set; } = string.Empty;
    public string Password { get; set; } = string.Empty;
    public bool RememberMe { get; set; }
}

public class RegisterRequest
{
    public string Email { get; set; } = string.Empty;
    public string Password { get; set; } = string.Empty;
    public string? FirstName { get; set; }
    public string? LastName { get; set; }
}

public class EntraLoginRequest
{
    /// <summary>
    /// The access token obtained from MSAL after Entra ID login.
    /// </summary>
    public string AccessToken { get; set; } = string.Empty;

    /// <summary>
    /// The ID token from MSAL (contains user profile claims).
    /// </summary>
    public string? IdToken { get; set; }
}

public class AuthResponse
{
    public bool Succeeded { get; set; }
    public string? Token { get; set; }
    public string? DisplayName { get; set; }
    public string? Email { get; set; }
    public IEnumerable<string>? Errors { get; set; }
}

public class UserInfoResponse
{
    public string Id { get; set; } = string.Empty;
    public string Email { get; set; } = string.Empty;
    public string? DisplayName { get; set; }
    public string? FirstName { get; set; }
    public string? LastName { get; set; }
    public Guid TenantId { get; set; }
    public bool IsEntraUser { get; set; }
}
