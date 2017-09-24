import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SimpleNotificationsModule, NotificationsService } from 'angular2-notifications';

// service
import { MainService } from '../../app.service'

@Component({
	selector: 'page-register',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class RegisterComponent {
	user : any = {
		type_account : 'paid',
	};
	forgot_pass : boolean;

	constructor(
		private router: Router,
		private _main: MainService,
		private _service: NotificationsService,
		){ 
		this.forgot_pass = true;
	}

	public options = {
		position: ["bottom", "right"],
		timeOut: 2000,
		lastOnBottom: true,
		showProgressBar: true,
		pauseOnHover: true,
		clickToClose: true
	}

	onBlurMethod(){
		console.log(this.user)
		if(this.user.password != this.user.re_password){
			this.forgot_pass = false;
			console.log(this.forgot_pass)
		} else{
			console.log(this.forgot_pass)
			this.forgot_pass = true;
		}
	}

	register() {
		console.log('register...........')
		console.log(this.user)

		this._main.signup(this.user).then(res => {
			console.log(res)
			if(res.result > 0){
				console.log('Signup!')
				this._service.success('Notification', 'Register succes!', this.options);
				this.router.navigate(['/login']);
			}
		});
	}

	ngOnInit(): void{

	}
}
