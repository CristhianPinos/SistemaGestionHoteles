using System.ComponentModel.DataAnnotations;
namespace backendGestionHotel.Models
{
    public class ReservasModel
    {
        [Key]
        public int ReservaId { get; set; }
        public int HabitacionId { get; set; }
        public int HuespedId { get; set; }
        public DateTime FechaInicio { get; set; }
        public DateTime FechaFin { get; set; }
        public string Estado { get; set; }

        public HabitacionesModel? Habitacion { get; set; }
        public HuespedesModel? Huesped { get; set; }
    }
}
