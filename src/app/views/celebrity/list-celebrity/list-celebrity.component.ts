import { Component, OnInit } from '@angular/core';
import { AllyService } from 'src/app/shared/services/ally.service';
import { CelebrityService } from 'src/app/shared/services/celebrity.service';
import { AuthService } from 'src/app/shared/services/auth.service';
import { Observable } from 'rxjs';
import { Celebrity } from 'src/app/shared/interfaces/celebrity.interface';

@Component({
  selector: 'app-list-famous',
  templateUrl: './list-celebrity.component.html',
  styleUrls: ['./list-celebrity.component.scss']
})
export class ListCelebrityComponent implements OnInit {

  celebrities$ = new Observable<Celebrity[]>();

  constructor(
    private famousService: CelebrityService,
    private allyService: AllyService,
    private auth: AuthService,
  ) {

  }

  ngOnInit() {
    this.allyService.getCelebrityLeadById(this.auth.currentUser().uid).then(allySnap =>
      allySnap.forEach(document => {
        this.celebrities$ = this.famousService.getCelebrityByAlly(document.data().id).valueChanges();
      }));
  }

}
