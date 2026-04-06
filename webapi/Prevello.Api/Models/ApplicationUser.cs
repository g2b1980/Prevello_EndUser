using Microsoft.AspNetCore.Identity;

namespace Prevello.Api.Models;

/// <summary>
/// Application user extending ASP.NET Core Identity.
/// Supports both local accounts and Entra ID external logins.
/// </summary>
public class ApplicationUser : IdentityUser
{
    public string? FirstName { get; set; }
    public string? LastName { get; set; }
    public string? DisplayName { get; set; }
    
    /// <summary>
    /// Tenant the user belongs to. Required for future multi-tenancy.
    /// </summary>
    public Guid TenantId { get; set; }
    public Tenant? Tenant { get; set; }

    /// <summary>
    /// Object ID from Entra ID (null for local accounts).
    /// </summary>
    public string? EntraObjectId { get; set; }

    public bool IsActive { get; set; } = true;
    public DateTime CreatedAt { get; set; } = DateTime.UtcNow;
    public DateTime? LastLoginAt { get; set; }
}
