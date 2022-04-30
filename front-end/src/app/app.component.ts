import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

	constructor(private router: Router){

	}
	ngOnInit(): void {
		const barerToken = sessionStorage.getItem('BARER_TOKEN');

		if(barerToken){
			this.router.navigateByUrl("/movimentacao")
		}else{
			this.router.navigateByUrl("/login")
		}
	}
}
