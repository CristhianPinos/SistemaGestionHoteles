import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Huespedes } from '../models/Huespedes';

@Injectable({ providedIn: 'root' })
export class HuespedesService {
  private baseUrl = 'https://localhost:7119/api/Huespedes';

  constructor(private http: HttpClient) {}

  getAll(): Observable<Huespedes[]> {
    return this.http.get<Huespedes[]>(this.baseUrl);
  }

  getById(id: number): Observable<Huespedes> {
    return this.http.get<Huespedes>(`${this.baseUrl}/${id}`);
  }

  create(h: Huespedes): Observable<Huespedes> {
    return this.http.post<Huespedes>(this.baseUrl, h);
  }

  update(id: number, h: Huespedes) {
    return this.http.put(`${this.baseUrl}/${id}`, h);
  }

  delete(id: number) {
  return this.http.delete(`${this.baseUrl}/${id}`);
  }
}
