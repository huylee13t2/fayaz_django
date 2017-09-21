import { Component } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';

const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

@Component({
	selector: 'page-login',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class LoginComponent {
	user : any = {};

	
}
