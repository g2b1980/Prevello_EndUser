using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using Prevello.Api.Models;

namespace Prevello.Api.Data;

/// <summary>
/// Application database context with Identity support and TenantId global query filters.
/// </summary>
public class ApplicationDbContext : IdentityDbContext<ApplicationUser>
{
    private readonly Guid _tenantId;

    public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options, IHttpContextAccessor httpContextAccessor)
        : base(options)
    {
        // Resolve tenant from the current user's claims (defaults to empty Guid for unauthenticated)
        var tenantClaim = httpContextAccessor.HttpContext?.User?.FindFirst("tenant_id")?.Value;
        _tenantId = Guid.TryParse(tenantClaim, out var tid) ? tid : Guid.Empty;
    }

    public DbSet<Tenant> Tenants => Set<Tenant>();

    protected override void OnModelCreating(ModelBuilder builder)
    {
        base.OnModelCreating(builder);

        // Rename Identity tables to use "App" prefix for clarity
        builder.Entity<ApplicationUser>(b =>
        {
            b.ToTable("AppUsers");
            b.HasOne(u => u.Tenant)
                .WithMany(t => t.Users)
                .HasForeignKey(u => u.TenantId)
                .OnDelete(DeleteBehavior.Restrict);

            b.HasIndex(u => u.EntraObjectId)
                .IsUnique()
                .HasFilter("[EntraObjectId] IS NOT NULL");

            b.HasIndex(u => u.TenantId);
        });

        builder.Entity<Tenant>(b =>
        {
            b.ToTable("Tenants");
            b.HasKey(t => t.Id);
            b.HasIndex(t => t.Slug).IsUnique().HasFilter("[Slug] IS NOT NULL");
            b.Property(t => t.Name).HasMaxLength(256).IsRequired();
            b.Property(t => t.Slug).HasMaxLength(128);
        });

        // Seed a default tenant for single-tenant start
        var defaultTenantId = Guid.Parse("00000000-0000-0000-0000-000000000001");
        builder.Entity<Tenant>().HasData(new Tenant
        {
            Id = defaultTenantId,
            Name = "Default",
            Slug = "default",
            IsActive = true,
            CreatedAt = new DateTime(2026, 1, 1, 0, 0, 0, DateTimeKind.Utc)
        });

        // Apply global query filters for any future BaseEntity-derived entities
        // This pattern will automatically scope queries to the current tenant
        foreach (var entityType in builder.Model.GetEntityTypes())
        {
            if (typeof(BaseEntity).IsAssignableFrom(entityType.ClrType))
            {
                var method = typeof(ApplicationDbContext)
                    .GetMethod(nameof(ApplyTenantFilter), System.Reflection.BindingFlags.NonPublic | System.Reflection.BindingFlags.Static)!
                    .MakeGenericMethod(entityType.ClrType);

                method.Invoke(null, new object[] { builder, _tenantId });
            }
        }
    }

    private static void ApplyTenantFilter<TEntity>(ModelBuilder builder, Guid tenantId) where TEntity : BaseEntity
    {
        builder.Entity<TEntity>().HasQueryFilter(e => e.TenantId == tenantId);
        builder.Entity<TEntity>().HasIndex(e => e.TenantId);
    }

    /// <summary>
    /// Auto-populate audit fields and TenantId on save.
    /// </summary>
    public override int SaveChanges()
    {
        SetAuditFields();
        return base.SaveChanges();
    }

    public override Task<int> SaveChangesAsync(CancellationToken cancellationToken = default)
    {
        SetAuditFields();
        return base.SaveChangesAsync(cancellationToken);
    }

    private void SetAuditFields()
    {
        var entries = ChangeTracker.Entries<BaseEntity>();
        foreach (var entry in entries)
        {
            if (entry.State == EntityState.Added)
            {
                entry.Entity.CreatedAt = DateTime.UtcNow;
                if (entry.Entity.TenantId == Guid.Empty)
                    entry.Entity.TenantId = _tenantId;
            }

            if (entry.State == EntityState.Modified)
            {
                entry.Entity.UpdatedAt = DateTime.UtcNow;
            }
        }
    }
}
