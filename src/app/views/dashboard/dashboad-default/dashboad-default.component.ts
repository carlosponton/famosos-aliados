import { Component, OnInit } from '@angular/core';
import { AllyService } from 'src/app/shared/services/ally.service';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
	selector: 'app-dashboad-default',
	templateUrl: './dashboad-default.component.html',
	styleUrls: ['./dashboad-default.component.css']
})
export class DashboadDefaultComponent implements OnInit {

	ally;
	showAlly = false;

	constructor(private allyService: AllyService, private auth: AuthService) { }

	ngOnInit() {
		this.allyService.getCelebrityLeadById(this.auth.currentUser().uid).then(allySnap =>
			allySnap.forEach(document => {
				this.ally = document.data();
				this.showAlly = true;
			}));
	}

}
