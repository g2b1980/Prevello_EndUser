using System.Text;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Microsoft.Identity.Web;
using Microsoft.IdentityModel.Tokens;
using Prevello.Api.Data;
using Prevello.Api.Models;

var builder = WebApplication.CreateBuilder(args);

// ----- Database -----
builder.Services.AddDbContext<ApplicationDbContext>(options =>
    options.UseSqlServer(builder.Configuration.GetConnectionString("DefaultConnection")));

// ----- ASP.NET Core Identity (local accounts) -----
builder.Services.AddIdentity<ApplicationUser, IdentityRole>(options =>
    {
        options.Password.RequireDigit = true;
        options.Password.RequireLowercase = true;
        options.Password.RequireUppercase = true;
        options.Password.RequireNonAlphanumeric = true;
        options.Password.RequiredLength = 8;
        options.User.RequireUniqueEmail = true;
        options.SignIn.RequireConfirmedEmail = false; // Relax for dev
    })
    .AddEntityFrameworkStores<ApplicationDbContext>()
    .AddDefaultTokenProviders();

// ----- Authentication: dual scheme (JWT for local + Entra ID) -----
var jwtKey = builder.Configuration["Jwt:Key"] ?? "PrevelloDevSecretKey_ChangeInProduction_AtLeast32Chars!";

builder.Services.AddAuthentication(options =>
    {
        options.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme;
        options.DefaultChallengeScheme = JwtBearerDefaults.AuthenticationScheme;
    })
    .AddJwtBearer(options =>
    {
        options.TokenValidationParameters = new TokenValidationParameters
        {
            ValidateIssuer = true,
            ValidateAudience = true,
            ValidateLifetime = true,
            ValidateIssuerSigningKey = true,
            ValidIssuer = builder.Configuration["Jwt:Issuer"] ?? "Prevello.Api",
            ValidAudience = builder.Configuration["Jwt:Audience"] ?? "Prevello.Client",
            IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(jwtKey))
        };
    });

// Entra ID as secondary auth scheme
builder.Services.AddMicrosoftIdentityWebApiAuthentication(builder.Configuration, configSectionName: "AzureAd", jwtBearerScheme: "AzureAd");

// ----- Authorization -----
builder.Services.AddAuthorizationBuilder()
    .AddPolicy("EntraId", policy =>
    {
        policy.AuthenticationSchemes.Add("AzureAd");
        policy.RequireAuthenticatedUser();
    })
    .AddPolicy("LocalOrEntra", policy =>
    {
        policy.AuthenticationSchemes.Add(JwtBearerDefaults.AuthenticationScheme);
        policy.AuthenticationSchemes.Add("AzureAd");
        policy.RequireAuthenticatedUser();
    });

// ----- CORS (Angular dev server) -----
builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowAngularDev", policy =>
    {
        policy.WithOrigins(
                builder.Configuration.GetValue<string>("Cors:AllowedOrigins") ?? "http://localhost:4200")
            .AllowAnyHeader()
            .AllowAnyMethod()
            .AllowCredentials();
    });
});

// ----- Controllers & OpenAPI -----
builder.Services.AddControllers();
builder.Services.AddOpenApi();
builder.Services.AddHttpContextAccessor();

var app = builder.Build();

// ----- Middleware Pipeline -----
if (app.Environment.IsDevelopment())
{
    app.MapOpenApi();
}

app.UseHttpsRedirection();
app.UseCors("AllowAngularDev");
app.UseAuthentication();
app.UseAuthorization();
app.MapControllers();

app.Run();
