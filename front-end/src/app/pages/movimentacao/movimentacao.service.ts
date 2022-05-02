import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
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

  public listarAgrupados(): Observable<any>{
    return this.http.get<any>(`/movimentacao/lista-agrupada`);
  }

  public uploadBatchCnab(file: File): Observable<any>{
    const params = new HttpParams();
    const headers = new HttpHeaders();

    headers.set('Accept', 'multipart/form-data');
    
    const formData: FormData = new FormData();
    formData.append('arquivo', file, file.name);
    
    return this.http.post<any>(`/movimentacao/upload-batch`, formData, {params, headers});
  }
}
