import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';

import { MainComponent } from './main/app.component';
import { DashboardComponent } from './dashboard/app.component';
// auth
import { LoginComponent } from './auth/login/app.component';
import { RegisterComponent } from './auth/register/app.component';

@NgModule({
	declarations: [
		MainComponent,
		DashboardComponent,
		// auth
		LoginComponent,
		RegisterComponent,
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		FormsModule,
		HttpModule,
	],
	providers: [],
	bootstrap: [MainComponent]
})
export class AppModule { }
