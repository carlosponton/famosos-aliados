import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface IMenuItem {
    id?: string;
    title?: string;
    description?: string;
    type: string;       // Possible values: link/dropDown/extLink
    name?: string;      // Used as display text for item and title for separator type
    state?: string;     // Router state
    icon?: string;      // Material icon name
    tooltip?: string;   // Tooltip text
    disabled?: boolean; // If true, item will not be appeared in sidenav.
    sub?: IChildItem[]; // Dropdown items
    badges?: IBadge[];
    active?: boolean;
}
export interface IChildItem {
    id?: string;
    parentId?: string;
    type?: string;
    name: string;       // Display text
    state?: string;     // Router state
    icon?: string;
    sub?: IChildItem[];
    active?: boolean;
}

interface IBadge {
    color: string;      // primary/accent/warn/hex color codes(#fff000)
    value: string;      // Display text
}

interface ISidebarState {
    sidenavOpen?: boolean;
    childnavOpen?: boolean;
}

@Injectable({
    providedIn: 'root'
})
export class NavigationService {
    public sidebarState: ISidebarState = {
        sidenavOpen: true,
        childnavOpen: false
    };
    constructor() {
    }

    defaultMenu: IMenuItem[] = [
        {   
            name: 'Dashboard',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
            type: 'link',
            icon: 'i-Bar-Chart',
            state: '/dashboard/default',
        },
        {
            name: 'Lista de famosos',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing.',
            type: 'link',
            state: '/celebrity/list',
            icon: 'i-Library',
        },
        {
            name: 'Famosos sugeridos',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing.',
            type: 'link',
            state: '/celebrity/suggested',
            icon: 'i-File-Clipboard-File--Text',
        },
        {
            name: 'Mi estado de cuenta',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
            type: 'dropDown',
            icon: 'i-File-Horizontal-Text',
            sub: [
                { icon: 'i-Add-File', name: 'Venta mes', state: '/details-accounts/sales', type: 'link' },
                { icon: 'i-Email', name: 'Venta semana', state: '/details-accounts/week', type: 'link' },
                { icon: 'i-Speach-Bubble-3', name: 'Transacciones', state: '/details-accounts/transactions', type: 'link' },
                { icon: 'i-Calendar', name: 'Ranking famosos', state: '/details-accounts/ranking', type: 'link' },
            ]
        },
    ];


    // sets iconMenu as default;
    menuItems = new BehaviorSubject<IMenuItem[]>(this.defaultMenu);
    // navigation component has subscribed to this Observable
    menuItems$ = this.menuItems.asObservable();

    // You can customize this method to supply different menu for
    // different user type.
    // publishNavigationChange(menuType: string) {
    //   switch (userType) {
    //     case 'admin':
    //       this.menuItems.next(this.adminMenu);
    //       break;
    //     case 'user':
    //       this.menuItems.next(this.userMenu);
    //       break;
    //     default:
    //       this.menuItems.next(this.defaultMenu);
    //   }
    // }
}
