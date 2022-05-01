import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { LOCALE_ID, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpInterceptService } from './config/http-intercept/http-intercept.service';
import { MeterialModule } from './config/meterial/meterial.module';
import { LoginComponent } from './pages/login/login.component';
import { MovimentacaoComponent } from './pages/movimentacao/movimentacao.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MovimentacaoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MeterialModule,
    BrowserAnimationsModule
  ],
  providers: [
    {
      provide: LOCALE_ID, useValue: 'pt-BR',
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpInterceptService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
