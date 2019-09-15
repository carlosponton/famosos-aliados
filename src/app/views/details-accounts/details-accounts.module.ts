import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MonthSalesComponent } from './month-sales/month-sales.component';
import {DetailsAccountsRoutingModule} from './details-accounts-routing.module';
import { WeekSalesComponent } from './week-sales/week-sales.component';
import { RankComponent } from './rank/rank.component';
import { TransactionsComponent } from './transactions/transactions.component';

@NgModule({
    declarations: [MonthSalesComponent, WeekSalesComponent, RankComponent, TransactionsComponent],
    imports: [
        CommonModule,
        DetailsAccountsRoutingModule
    ],
    exports: [
    ]
})
export class DetailsAccountsModule { }
