import { Component, OnInit } from '@angular/core';
import { ReservasService } from '../../services/reservas.service';
import { Reservas } from '../../models/Reservas';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-reservas-list',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './list.html',
  styleUrls: ['./list.css']
})
export class ListComponent implements OnInit {
  reservas: Reservas[] = [];

  constructor(private reservaService: ReservasService) {}

  ngOnInit(): void {
    this.loadReservas();
  }

  loadReservas(): void {
    this.reservaService.getAll().subscribe({
      next: (data) => this.reservas = data,
      error: (err) => console.error(err)
    });
  }

  deleteReserva(id: number): void {
    if (confirm('¿Seguro que quieres eliminar esta reserva?')) {
      this.reservaService.delete(id).subscribe({
        next: () => this.loadReservas(),
        error: (err) => console.error(err)
      });
    }
  }
}