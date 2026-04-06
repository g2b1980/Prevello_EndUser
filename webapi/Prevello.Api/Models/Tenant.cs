namespace Prevello.Api.Models;

/// <summary>
/// Tenant entity - represents a customer/organization.
/// Single tenant for now, but the structure supports multi-tenancy.
/// </summary>
public class Tenant
{
    public Guid Id { get; set; }
    public string Name { get; set; } = string.Empty;
    public string? Slug { get; set; }
    public bool IsActive { get; set; } = true;
    public DateTime CreatedAt { get; set; } = DateTime.UtcNow;
    public DateTime? UpdatedAt { get; set; }

    // Navigation
    public ICollection<ApplicationUser> Users { get; set; } = new List<ApplicationUser>();
}
