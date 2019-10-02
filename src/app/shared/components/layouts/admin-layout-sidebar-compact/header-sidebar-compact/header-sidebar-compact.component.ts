import { Component, OnInit } from "@angular/core";
import { NavigationService } from "src/app/shared/services/navigation.service";
import { SearchService } from "src/app/shared/services/search.service";
import { AuthService } from "src/app/shared/services/auth.service";

@Component({
  selector: "app-header-sidebar-compact",
  templateUrl: "./header-sidebar-compact.component.html",
  styleUrls: ["./header-sidebar-compact.component.scss"]
})
export class HeaderSidebarCompactComponent implements OnInit {

  constructor(
    private navService: NavigationService,
    public searchService: SearchService,
    private auth: AuthService
  ) {
  }

  ngOnInit() {}

  toggelSidebar() {
    const state = this.navService.sidebarState;
    state.sidenavOpen = !state.sidenavOpen;
    state.childnavOpen = !state.childnavOpen;
  }

  signout() {
    console.log(this.auth.currentUser().uid);
    // this.auth.signout();
  }
}
