import { Component, OnInit } from '@angular/core';
import { HabitacionesService } from '../../services/habitaciones.service';
import { Habitaciones } from '../../models/Habitaciones';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-habitaciones-list',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './list.html',
  styleUrls: ['./list.css']
})
export class ListComponent implements OnInit {
  habitaciones: Habitaciones[] = [];

  constructor(private habitacionService: HabitacionesService) {}

  ngOnInit(): void {
    this.loadHabitaciones();
  }

  loadHabitaciones(): void {
    this.habitacionService.getAll().subscribe({
      next: (data) => this.habitaciones = data,
      error: (err) => console.error(err)
    });
  }

  deleteHabitacion(id: number): void {
    if (confirm('¿Seguro que quieres eliminar esta habitación?')) {
      this.habitacionService.delete(id).subscribe({
        next: () => this.loadHabitaciones(),
        error: (err) => console.error(err)
      });
    }
  }
}