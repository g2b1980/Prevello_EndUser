namespace Prevello.Api.Models;

/// <summary>
/// Base entity with TenantId baked in from day one.
/// All tenant-scoped entities should inherit from this.
/// </summary>
public abstract class BaseEntity
{
    public Guid Id { get; set; }

    /// <summary>
    /// Tenant discriminator - single value now, global query filter ready for multi-tenancy later.
    /// </summary>
    public Guid TenantId { get; set; }

    public DateTime CreatedAt { get; set; } = DateTime.UtcNow;
    public string? CreatedBy { get; set; }
    public DateTime? UpdatedAt { get; set; }
    public string? UpdatedBy { get; set; }
}
