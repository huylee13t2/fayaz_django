import { Component, OnInit, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { SimpleNotificationsModule, NotificationsService } from 'angular2-notifications';
import {ActivatedRoute} from '@angular/router';

// service
import { MainService } from '../app.service'

@Component({
	selector: 'land-page',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class LandPageComponent implements OnInit {
	
	public token : string;

	constructor(
		private router: Router,
		private _main: MainService,
		private _service: NotificationsService,
		private route : ActivatedRoute
	){ 
		this.token = localStorage.getItem('token');
		console.log(this.token)
		if(this.token != null){
			this.router.navigate(['dashboard']);
		}
	}

	ngOnInit(): void{
		
	}

}
