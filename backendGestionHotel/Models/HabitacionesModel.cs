using System.ComponentModel.DataAnnotations;
namespace backendGestionHotel.Models
{
    public class HabitacionesModel
    {
        [Key]
        public int HabitacionId { get; set; }
        public string Numero { get; set; }
        public string Tipo { get; set; }
        public decimal Precio { get; set; }
        public bool Disponible { get; set; }
    }
}
