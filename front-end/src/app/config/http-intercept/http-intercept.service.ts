import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpStatusCode } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
@Injectable()
export class HttpInterceptService implements HttpInterceptor {

  private BASE_URL = 'http://localhost:8080/movimentacao-api'

  constructor(
    private router: Router
  ) { }

  public intercept(
    request: HttpRequest<any>,
    next: HttpHandler): Observable<any> {

    const barerToken = sessionStorage.getItem('BARER_TOKEN');
    
    if (!barerToken && request.url != '/auth') {
      this.router.navigateByUrl("/login");
      throw new Error('Usuario não logado');
    }

    request = request.clone({ url: `${this.BASE_URL}${request.url}` });
    request = request.clone({ headers: request.headers.set('Authorization', 'Bearer ' + barerToken) });
        
    return next.handle(request)
      .pipe(
        catchError((this.handleError))
      );
  }

  private handleError(error: HttpErrorResponse) {

    switch (error.status) {

      case HttpStatusCode.Forbidden:

        if(window.location.pathname != '/login'){
          sessionStorage.clear();
          window.location.href = '/login';
        }

        break;
    }
    return throwError(() => new Error('Something bad happened; please try again later.'));
  }
}
