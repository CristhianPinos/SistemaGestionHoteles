import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HabitacionesService } from '../../services/habitaciones.service';
import { Habitaciones } from '../../models/Habitaciones';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-habitaciones-form',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './form.html',
  styleUrls: ['./form.css']
})
export class FormComponent implements OnInit {
  habitacion: Habitaciones = { numero: '', tipo: '', precio: 0, disponible: true };
  editMode = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private habitacionService: HabitacionesService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.editMode = true;
      this.habitacionService.getById(+id).subscribe(h => this.habitacion = h);
    }
  }

  save(): void {
    if (this.editMode) {
      this.habitacionService.update(this.habitacion.habitacionId!, this.habitacion).subscribe(() => {
        this.router.navigate(['/habitaciones']);
      });
    } else {
      this.habitacionService.create(this.habitacion).subscribe(() => {
        this.router.navigate(['/habitaciones']);
      });
    }
  }
}