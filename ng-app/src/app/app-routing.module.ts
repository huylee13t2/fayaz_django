import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MainComponent }   from './main/app.component';
import { LandPageComponent }   from './land-page/app.component';
import { DashboardComponent }   from './dashboard/app.component';
import { InviteComponent }   from './invite/app.component';
import { ProfileComponent }   from './profile/app.component';
// auth
import { LoginRegisterComponent }   from './auth/login_register/app.component';

const routes: Routes = [
	// { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
	{ path: '',  component: LandPageComponent },
	{ path: 'dashboard',  component: DashboardComponent },
	{ path: 'invite',  component: InviteComponent },
	{ path: 'profile',  component: ProfileComponent },
	{ path: 'account',  component: LoginRegisterComponent },
	{ path: 'account/:token',  component: LoginRegisterComponent },
];

@NgModule({
	imports: [ RouterModule.forRoot(routes, { useHash: true }) ],
	exports: [ RouterModule ]
})
export class AppRoutingModule {}
