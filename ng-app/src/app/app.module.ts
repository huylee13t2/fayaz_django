import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MdButtonModule, MdCheckboxModule} from '@angular/material';

import { AppRoutingModule } from './app-routing.module';

import { MainComponent } from './main/app.component';
import { DashboardComponent } from './dashboard/app.component';
// auth
import { LoginComponent } from './auth/login/app.component';
import { RegisterComponent } from './auth/register/app.component';
import { LoginRegisterComponent } from './auth/login_register/app.component';

@NgModule({
	declarations: [
		MainComponent,
		DashboardComponent,
		// auth
		LoginComponent,
		RegisterComponent,
		LoginRegisterComponent,
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		FormsModule,
		HttpModule,
		BrowserAnimationsModule,
		MdButtonModule, 
		MdCheckboxModule,
	],
	exports: [MdButtonModule, MdCheckboxModule],
	providers: [],
	bootstrap: [MainComponent]
})
export class AppModule { }
