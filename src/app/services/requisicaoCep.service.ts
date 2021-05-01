import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cep } from '../models/cep';

@Injectable({
  providedIn: 'root',
})
export class RequisicaoCepService {
  private baseURL = 'https://viacep.com.br/ws/';

  constructor(private http: HttpClient) {}

  getEndereco(cep: string): Observable<Cep> {
    return this.http.get<Cep>(`${this.baseURL}/${cep}/json`);
  }
}
