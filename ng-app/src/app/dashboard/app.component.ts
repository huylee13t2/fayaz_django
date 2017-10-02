import { Component, OnInit, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { SimpleNotificationsModule, NotificationsService } from 'angular2-notifications';
import {ActivatedRoute} from '@angular/router';

// service
import { MainService } from '../app.service'


@Component({
	selector: 'page-dashboard',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class DashboardComponent implements OnInit {

	public token : string;
	public user : any = {};
	// public url_http = 'http://localhost:8000/#/account/';
	public url_invite = '';

	public options = {
		position: ["bottom", "right"],
		timeOut: 2000,
		lastOnBottom: true,
		showProgressBar: true,
		pauseOnHover: true,
		clickToClose: true
	}
	
	constructor(
		private router: Router,
		private _main: MainService,
		private _service: NotificationsService,
		private route : ActivatedRoute
	){ 
		this.token = localStorage.getItem('token');
		console.log(this.token)
		if(this.token == null){
			this.router.navigate(['account']);
		}
	}

	logout(){
		console.log('logout')
		localStorage.clear();
		this.router.navigate(['account']);
	}

	ngOnInit(): void{
		this._main.getUser(this.token).then(res => {
			if(res.result > 0){
				this.user = res.data;
				console.log(this.user)
				if(this.user.invite < 5){
					this.router.navigate(['invite']);
				}
			} else{
				this._service.warn('Notification', 'Load data error!', this.options);
			}
		})
	}
}
