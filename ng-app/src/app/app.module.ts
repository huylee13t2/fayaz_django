import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
  MdAutocompleteModule,
  MdButtonModule,
  MdButtonToggleModule,
  MdCardModule,
  MdCheckboxModule,
  MdChipsModule,
  MdCoreModule,
  MdDatepickerModule,
  MdDialogModule,
  MdExpansionModule,
  MdGridListModule,
  MdIconModule,
  MdInputModule,
  MdListModule,
  MdMenuModule,
  MdNativeDateModule,
  MdPaginatorModule,
  MdProgressBarModule,
  MdProgressSpinnerModule,
  MdRadioModule,
  MdRippleModule,
  MdSelectModule,
  MdSidenavModule,
  MdSliderModule,
  MdSlideToggleModule,
  MdSnackBarModule,
  MdSortModule,
  MdTableModule,
  MdTabsModule,
  MdToolbarModule,
  MdTooltipModule,
} from '@angular/material';
import { SimpleNotificationsModule, PushNotificationsModule } from 'angular2-notifications';

import { AppRoutingModule } from './app-routing.module';

import { MainComponent } from './main/app.component';
import { NavComponent } from './nav/app.component';
import { LandPageComponent } from './land-page/app.component';
import { DashboardComponent } from './dashboard/app.component';
import { InviteComponent } from './invite/app.component';
import { ProfileComponent } from './profile/app.component';
// auth
import { LoginRegisterComponent } from './auth/login_register/app.component';

// service
import { MainService } from './app.service';

@NgModule({
	declarations: [
		MainComponent,
		NavComponent,
		LandPageComponent,
		DashboardComponent,
		InviteComponent,
		ProfileComponent,
		// auth
		LoginRegisterComponent,
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		FormsModule,
		HttpModule,
		BrowserAnimationsModule,
		SimpleNotificationsModule.forRoot(),
		PushNotificationsModule,
		// material
		MdAutocompleteModule,
		MdButtonModule,
		MdButtonToggleModule,
		MdCardModule,
		MdCheckboxModule,
		MdChipsModule,
		MdCoreModule,
		MdDatepickerModule,
		MdDialogModule,
		MdExpansionModule,
		MdGridListModule,
		MdIconModule,
		MdInputModule,
		MdListModule,
		MdMenuModule,
		MdNativeDateModule,
		MdPaginatorModule,
		MdProgressBarModule,
		MdProgressSpinnerModule,
		MdRadioModule,
		MdRippleModule,
		MdSelectModule,
		MdSidenavModule,
		MdSliderModule,
		MdSlideToggleModule,
		MdSnackBarModule,
		MdSortModule,
		MdTableModule,
		MdTabsModule,
		MdToolbarModule,
		MdTooltipModule,
	],
	exports: [
		MdAutocompleteModule,
		MdButtonModule,
		MdButtonToggleModule,
		MdCardModule,
		MdCheckboxModule,
		MdChipsModule,
		MdCoreModule,
		MdDatepickerModule,
		MdDialogModule,
		MdExpansionModule,
		MdGridListModule,
		MdIconModule,
		MdInputModule,
		MdListModule,
		MdMenuModule,
		MdNativeDateModule,
		MdPaginatorModule,
		MdProgressBarModule,
		MdProgressSpinnerModule,
		MdRadioModule,
		MdRippleModule,
		MdSelectModule,
		MdSidenavModule,
		MdSliderModule,
		MdSlideToggleModule,
		MdSnackBarModule,
		MdSortModule,
		MdTableModule,
		MdTabsModule,
		MdToolbarModule,
		MdTooltipModule,
	],
	providers: [
		MainService,
		{provide: Window, useValue: window},
	],
	bootstrap: [MainComponent]
})
export class AppModule { }
