import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Login } from 'src/app/pages/login/Login';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  public verificarToken(): Observable<Object>{
    return this.http.get(`/auth`);
  }

  public logar(login: Login): Observable<any>{
    return this.http.post<any>(`/auth`, login,);
  }

  public tipoTransacao(): Observable<Object>{
    return this.http.get("/tipo-transacao/lista")
  }
}
