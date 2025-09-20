import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Reservas } from '../models/Reservas';

@Injectable({ providedIn: 'root' })
export class ReservasService {
  private baseUrl = 'https://localhost:7119/api/Reservas';

  constructor(private http: HttpClient) {}

  getAll(): Observable<Reservas[]> {
  return this.http.get<Reservas[]>(this.baseUrl);
  }

  getById(id: number): Observable<Reservas> {
  return this.http.get<Reservas>(`${this.baseUrl}/${id}`);
  }

  create(r: Reservas): Observable<Reservas> {
  return this.http.post<Reservas>(this.baseUrl, r);
  }

  update(id: number, r: Reservas) {
  return this.http.put(`${this.baseUrl}/${id}`, r);
  }

  delete(id: number) {
  return this.http.delete(`${this.baseUrl}/${id}`);
  }
}
