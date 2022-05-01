import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Movimentacao } from './Movimentacao';

@Injectable({
  providedIn: 'root'
})
export class MovimentacaoService {

  constructor(private http: HttpClient) { }


  public listar(page: number = 0, size: number = 10): Observable<any>{
    return this.http.get<any>(`/movimentacao/lista?page=${page}&size=${size}`);
  }
}
