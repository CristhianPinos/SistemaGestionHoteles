import { Component, OnInit } from '@angular/core';
import { HuespedesService } from '../../services/huespedes.service';
import { Huespedes } from '../../models/Huespedes';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-huespedes-list',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './list.html',
  styleUrls: ['./list.css']
})
export class ListComponent implements OnInit {
  huespedes: Huespedes[] = [];

  constructor(private huespedService: HuespedesService) {}

  ngOnInit(): void {
    this.loadHuespedes();
  }

  loadHuespedes(): void {
    this.huespedService.getAll().subscribe({
      next: (data) => this.huespedes = data,
      error: (err) => console.error(err)
    });
  }

  deleteHuesped(id: number): void {
    if (confirm('¿Seguro que quieres eliminar este huésped?')) {
      this.huespedService.delete(id).subscribe({
        next: () => this.loadHuespedes(),
        error: (err) => console.error(err)
      });
    }
  }
}