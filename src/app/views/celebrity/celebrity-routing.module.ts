import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ListCelebrityComponent} from './list-celebrity/list-celebrity.component';
import {CelebritySuggestedComponent} from './celebrity-suggested/celebrity-suggested.component';
import {NewSuggestedComponent} from './new-suggested/new-suggested.component';

const routes: Routes = [
    {
        path: 'list',
        component: ListCelebrityComponent
    },
    {
        path: 'suggested',
        component: CelebritySuggestedComponent
    },
    {
        path: 'suggested/new',
        component: NewSuggestedComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CelebrityRoutingModule { }
