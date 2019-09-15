import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CelebrityRoutingModule} from "./celebrity-routing.module";
import {ListCelebrityComponent} from "./list-celebrity/list-celebrity.component";
import { CelebritySuggestedComponent } from './celebrity-suggested/celebrity-suggested.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {NgxPaginationModule} from "ngx-pagination";
import {NgxDatatableModule} from "@swimlane/ngx-datatable";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {AngularFirestoreModule} from "@angular/fire/firestore";
import {SharedComponentsModule} from "../../shared/components/shared-components.module";
import { NewSuggestedComponent } from './new-suggested/new-suggested.component';

@NgModule({
    declarations: [ListCelebrityComponent, CelebritySuggestedComponent, NewSuggestedComponent],
    imports: [
        CommonModule,
        CelebrityRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        NgxPaginationModule,
        NgxDatatableModule,
        NgbModule,
        AngularFirestoreModule,
        SharedComponentsModule,
    ],
    exports: [
        ListCelebrityComponent
    ]
})
export class CelebrityModule { }
