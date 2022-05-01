import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './config/auth/auth.service';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

	constructor(
		private router: Router,
		private authService: AuthService
		){

	}
	ngOnInit(): void {
		
		this.authService.verificarToken().subscribe((data: any) => {
			this.router.navigateByUrl("/movimentacao")
		});
		
	}
}
