import { Component } from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class MainComponent {
	public options = {
		position: ["bottom", "right"],
		timeOut: 2000,
		lastOnBottom: true
	}
}
