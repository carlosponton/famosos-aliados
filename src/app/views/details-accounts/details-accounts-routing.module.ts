import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MonthSalesComponent} from './month-sales/month-sales.component';
import {WeekSalesComponent} from './week-sales/week-sales.component';
import {TransactionsComponent} from './transactions/transactions.component';
import {RankComponent} from './rank/rank.component';

const routes: Routes = [
    {
        path: 'sales',
        component: MonthSalesComponent
    },
    {
        path: 'week',
        component: WeekSalesComponent
    },
    {
        path: 'transactions',
        component: TransactionsComponent
    },
    {
        path: 'ranking',
        component: RankComponent
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class DetailsAccountsRoutingModule { }
