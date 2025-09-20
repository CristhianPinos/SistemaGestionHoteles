import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Habitaciones } from '../models/Habitaciones';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class HabitacionesService {
  private baseUrl = 'https://localhost:7119/api/Habitaciones';
  
  constructor(private http: HttpClient) {}

  getAll(): Observable<Habitaciones[]> {
    return this.http.get<Habitaciones[]>(this.baseUrl);
  }

  getById(id: number) {
    return this.http.get<Habitaciones>(`${this.baseUrl}/${id}`);
  }

  create(h: Habitaciones) {
    return this.http.post<Habitaciones>(this.baseUrl, h);
  }

  update(id: number, h: Habitaciones) {
    return this.http.put(`${this.baseUrl}/${id}`, h);
  }

  delete(id: number) {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }
}
