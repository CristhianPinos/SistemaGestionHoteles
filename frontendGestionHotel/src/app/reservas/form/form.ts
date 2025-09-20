import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ReservasService } from '../../services/reservas.service';
import { Reservas } from '../../models/Reservas';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-reservas-form',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './form.html',
  styleUrls: ['./form.css']
})
export class FormComponent implements OnInit {
  reserva: Reservas = { habitacionId: 0, huespedId: 0, fechaInicio: '', fechaFin: '', estado: '' };
  editMode = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private reservaService: ReservasService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.editMode = true;
      this.reservaService.getById(+id).subscribe(r => this.reserva = r);
    }
  }

  save(): void {
  if (this.editMode) {
    this.reservaService.update(this.reserva.reservaId!, this.reserva).subscribe({
      next: () => this.router.navigate(['/reservas']),
      error: (err) => {
        console.error(err);
        alert('No se pudo actualizar la reserva. Verifique los datos.');
      }
    });
  } else {
    this.reservaService.create(this.reserva).subscribe({
      next: () => this.router.navigate(['/reservas']),
      error: (err) => {
        console.error(err);
        alert('No se pudo guardar la reserva. Verifique los IDs de habitación y huésped.');
      }
    });
  }
  }
}
