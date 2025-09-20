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
    public class ReservasController : ControllerBase
    {
        private readonly AppDbContext _context;

        public ReservasController(AppDbContext context)
        {
            _context = context;
        }

        // GET: api/Reservas
        [HttpGet]
        public async Task<ActionResult<IEnumerable<ReservasModel>>> GetReservas()
        {
            return await _context.Reservas.ToListAsync();
        }

        // GET: api/Reservas/5
        [HttpGet("{id}")]
        public async Task<ActionResult<ReservasModel>> GetReservasModel(int id)
        {
            var reservasModel = await _context.Reservas.FindAsync(id);

            if (reservasModel == null)
            {
                return NotFound();
            }

            return reservasModel;
        }

        // PUT: api/Reservas/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutReservasModel(int id, ReservasModel reservasModel)
        {
            if (id != reservasModel.ReservaId)
            {
                return BadRequest();
            }

            _context.Entry(reservasModel).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ReservasModelExists(id))
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

        // POST: api/Reservas
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<ReservasModel>> PostReservasModel(ReservasModel reservasModel)
        {
            _context.Reservas.Add(reservasModel);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetReservasModel", new { id = reservasModel.ReservaId }, reservasModel);
        }

        // DELETE: api/Reservas/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteReservasModel(int id)
        {
            var reservasModel = await _context.Reservas.FindAsync(id);
            if (reservasModel == null)
            {
                return NotFound();
            }

            _context.Reservas.Remove(reservasModel);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool ReservasModelExists(int id)
        {
            return _context.Reservas.Any(e => e.ReservaId == id);
        }
    }
}
