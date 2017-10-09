import { Component, OnInit, Inject } from '@angular/core';
import { SimpleNotificationsModule, NotificationsService } from 'angular2-notifications';
import { Router } from '@angular/router';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class InviteComponent implements OnInit {

	public token : string;
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
		@Inject(Window) private _window: Window,
		private _service: NotificationsService,
		private router: Router,

	){ 
		this.token = localStorage.getItem('token');
		console.log(this._window.location.host)
		this.url_invite = this._window.location.host + '/#/account/' + this.token;
		console.log(this.url_invite)

		setTimeout(() => {
			this._service.warn('Notification', 'You need 5 invitees to signup in order to get your access to the dashboard', this.options);
		}, 500);
	}

	logout(){
		console.log('logout')
		localStorage.clear();
		this.router.navigate(['account']);
	}

	ngOnInit(): void{

	}

}
