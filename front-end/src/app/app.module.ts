import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpInterceptService } from './config/http-intercept/http-intercept.service';
import { LoginComponent } from './pages/login/login.component';
import { MovimentacaoComponent } from './pages/movimentacao/movimentacao.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MovimentacaoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpInterceptService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
