using backendGestionHotel.Models;
using Microsoft.EntityFrameworkCore;

namespace backendGestionHotel.Data
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }
        public DbSet<HabitacionesModel> Habitaciones { get; set; }
        public DbSet<HuespedesModel> Huespedes { get; set; }
        public DbSet<ReservasModel> Reservas { get; set; }
    }
}
