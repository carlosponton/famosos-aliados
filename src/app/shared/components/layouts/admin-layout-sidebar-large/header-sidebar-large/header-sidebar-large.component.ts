import { Component, OnInit } from '@angular/core';
import { NavigationService } from '../../../../services/navigation.service';
import { SearchService } from '../../../../services/search.service';
import { AuthService } from '../../../../services/auth.service';
import { AllyService } from 'src/app/shared/services/ally.service';

@Component({
  selector: 'app-header-sidebar-large',
  templateUrl: './header-sidebar-large.component.html',
  styleUrls: ['./header-sidebar-large.component.scss']
})
export class HeaderSidebarLargeComponent implements OnInit {


  ally;
  showAlly = false;

  constructor(
    private navService: NavigationService,
    public searchService: SearchService,
    private auth: AuthService,
    private allyService: AllyService
  ) {

  }

  ngOnInit() {
    this.allyService.getCelebrityLeadById(this.auth.currentUser().uid) .then(allySnap =>
      allySnap.forEach(document => {
        this.ally = document.data();
        this.showAlly = true;
      }));
  }

  toggelSidebar() {
    const state = this.navService.sidebarState;
    if (state.childnavOpen && state.sidenavOpen) {
      return state.childnavOpen = false;
    }
    if (!state.childnavOpen && state.sidenavOpen) {
      return state.sidenavOpen = false;
    }
    if (!state.sidenavOpen && !state.childnavOpen) {
      state.sidenavOpen = true;
      setTimeout(() => {
        state.childnavOpen = true;
      }, 50);
    }
  }

  signout() {
    this.auth.signout();
  }

}
