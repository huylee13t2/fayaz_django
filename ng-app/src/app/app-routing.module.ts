import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MainComponent }   from './main/app.component';
import { DashboardComponent }   from './dashboard/app.component';
// auth
import { LoginComponent }   from './auth/login/app.component';
import { RegisterComponent }   from './auth/register/app.component';

const routes: Routes = [
	{ path: '', redirectTo: 'dashboard', pathMatch: 'full' },
	{ path: 'dashboard',  component: DashboardComponent },
	{ path: 'login',  component: LoginComponent },
	{ path: 'register',  component: RegisterComponent },
];

@NgModule({
	imports: [ RouterModule.forRoot(routes, { useHash: true }) ],
	exports: [ RouterModule ]
})
export class AppRoutingModule {}
