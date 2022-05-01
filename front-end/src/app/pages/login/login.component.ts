import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/config/auth/auth.service';
import { Login } from './Login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public loginForm = this.formBuilder.group(new Login());

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) { }


  ngOnInit(): void { }

  logar(): void {
    let login = new Login();
    login.email = this.loginForm.value.email;
    login.senha = this.loginForm.value.senha;

    this.authService.logar(login).subscribe((retorno) =>{
  
      sessionStorage.setItem("BARER_TOKEN", retorno.token);

      this.router.navigateByUrl("/movimentacao")
    })
  }
}
