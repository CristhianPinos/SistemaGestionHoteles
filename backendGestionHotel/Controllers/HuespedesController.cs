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
    public class HuespedesController : ControllerBase
    {
        private readonly AppDbContext _context;

        public HuespedesController(AppDbContext context)
        {
            _context = context;
        }

        // GET: api/Huespedes
        [HttpGet]
        public async Task<ActionResult<IEnumerable<HuespedesModel>>> GetHuespedes()
        {
            return await _context.Huespedes.ToListAsync();
        }

        // GET: api/Huespedes/5
        [HttpGet("{id}")]
        public async Task<ActionResult<HuespedesModel>> GetHuespedesModel(int id)
        {
            var huespedesModel = await _context.Huespedes.FindAsync(id);

            if (huespedesModel == null)
            {
                return NotFound();
            }

            return huespedesModel;
        }

        // PUT: api/Huespedes/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutHuespedesModel(int id, HuespedesModel huespedesModel)
        {
            if (id != huespedesModel.HuespedId)
            {
                return BadRequest();
            }

            _context.Entry(huespedesModel).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!HuespedesModelExists(id))
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

        // POST: api/Huespedes
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<HuespedesModel>> PostHuespedesModel(HuespedesModel huespedesModel)
        {
            _context.Huespedes.Add(huespedesModel);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetHuespedesModel", new { id = huespedesModel.HuespedId }, huespedesModel);
        }

        // DELETE: api/Huespedes/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteHuespedesModel(int id)
        {
            var huespedesModel = await _context.Huespedes.FindAsync(id);
            if (huespedesModel == null)
            {
                return NotFound();
            }

            _context.Huespedes.Remove(huespedesModel);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool HuespedesModelExists(int id)
        {
            return _context.Huespedes.Any(e => e.HuespedId == id);
        }
    }
}
