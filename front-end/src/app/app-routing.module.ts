import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { MovimentacaoComponent } from './pages/movimentacao/movimentacao.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'movimentacao', component: MovimentacaoComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
