using System.ComponentModel.DataAnnotations;
namespace backendGestionHotel.Models
{
    public class HuespedesModel
    {
        [Key]
        public int HuespedId { get; set; }
        public string Nombre { get; set; }
        public string Apellido { get; set; }
        public string Email { get; set; }
        public string Telefono { get; set; }
    }
}
