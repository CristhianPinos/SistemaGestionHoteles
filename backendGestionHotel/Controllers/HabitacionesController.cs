using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using backendGestionHotel.Data;
using backendGestionHotel.Models;

namespace backendGestionHotel.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class HabitacionesController : ControllerBase
    {
        private readonly AppDbContext _context;

        public HabitacionesController(AppDbContext context)
        {
            _context = context;
        }

        // GET: api/Habitaciones
        [HttpGet]
        public async Task<ActionResult<IEnumerable<HabitacionesModel>>> GetHabitaciones()
        {
            return await _context.Habitaciones.ToListAsync();
        }

        // GET: api/Habitaciones/5
        [HttpGet("{id}")]
        public async Task<ActionResult<HabitacionesModel>> GetHabitacionesModel(int id)
        {
            var habitacionesModel = await _context.Habitaciones.FindAsync(id);

            if (habitacionesModel == null)
            {
                return NotFound();
            }

            return habitacionesModel;
        }

        // PUT: api/Habitaciones/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutHabitacionesModel(int id, HabitacionesModel habitacionesModel)
        {
            if (id != habitacionesModel.HabitacionId)
            {
                return BadRequest();
            }

            _context.Entry(habitacionesModel).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!HabitacionesModelExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/Habitaciones
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<HabitacionesModel>> PostHabitacionesModel(HabitacionesModel habitacionesModel)
        {
            _context.Habitaciones.Add(habitacionesModel);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetHabitacionesModel", new { id = habitacionesModel.HabitacionId }, habitacionesModel);
        }

        // DELETE: api/Habitaciones/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteHabitacionesModel(int id)
        {
            var habitacionesModel = await _context.Habitaciones.FindAsync(id);
            if (habitacionesModel == null)
            {
                return NotFound();
            }

            _context.Habitaciones.Remove(habitacionesModel);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool HabitacionesModelExists(int id)
        {
            return _context.Habitaciones.Any(e => e.HabitacionId == id);
        }
    }
}
