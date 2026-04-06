using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Prevello.Api.Data;

namespace Prevello.Api.Controllers;

[ApiController]
[Route("api/[controller]")]
public class HealthController : ControllerBase
{
    private readonly ApplicationDbContext _dbContext;

    public HealthController(ApplicationDbContext dbContext)
    {
        _dbContext = dbContext;
    }

    [HttpGet]
    public async Task<IActionResult> Get()
    {
        var canConnect = false;
        try
        {
            canConnect = await _dbContext.Database.CanConnectAsync();
        }
        catch
        {
            // Database not available
        }

        return Ok(new
        {
            Status = "Healthy",
            Timestamp = DateTime.UtcNow,
            Database = canConnect ? "Connected" : "Unavailable",
            Environment = Environment.GetEnvironmentVariable("ASPNETCORE_ENVIRONMENT") ?? "Unknown"
        });
    }
}
