import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HuespedesService } from '../../services/huespedes.service';
import { Huespedes } from '../../models/Huespedes';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-huespedes-form',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './form.html',
  styleUrls: ['./form.css']
})
export class FormComponent implements OnInit {
  huesped: Huespedes = { nombre: '', apellido: '', email: '', telefono: ''};
  editMode = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private huespedService: HuespedesService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.editMode = true;
      this.huespedService.getById(+id).subscribe(h => this.huesped = h);
    }
  }

  save(): void {
    if (this.editMode) {
      this.huespedService.update(this.huesped.huespedId!, this.huesped).subscribe(() => {
        this.router.navigate(['/huespedes']);
      });
    } else {
      this.huespedService.create(this.huesped).subscribe(() => {
        this.router.navigate(['/huespedes']);
      });
    }
  }
}