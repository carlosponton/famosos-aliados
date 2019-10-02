import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';
import { CelebrityService } from 'src/app/shared/services/celebrity.service';
import { AuthService } from 'src/app/shared/services/auth.service';
import { AllyService } from 'src/app/shared/services/ally.service';


@Component({
    selector: 'app-celebrity-suggested',
    templateUrl: './celebrity-suggested.component.html',
    styleUrls: ['./celebrity-suggested.component.scss']
})
export class CelebritySuggestedComponent implements OnInit {
    searchControl: FormControl = new FormControl();
    ally;
    products;
    filteredProducts;
    constructor(
        private famousService: CelebrityService,
        private allyService: AllyService,
        private auth: AuthService,
    ) { }

    ngOnInit() {

        this.allyService.getCelebrityLeadById(this.auth.currentUser().uid).then(allySnap =>
            allySnap.forEach(document => {
                this.products = this.famousService.getFamousByAlly(document.data().id).valueChanges();
                this.filteredProducts = this.famousService.getFamousByAlly(document.data().id).valueChanges();
                this.filteredProducts = this.famousService.getFamousByAlly(document.data().id).valueChanges();
                this.searchControl.valueChanges
                    .pipe(debounceTime(200))
                    .subscribe(value => {
                        this.filerData(value);
                    });

                this.searchControl.valueChanges
                    .pipe(debounceTime(200))
                    .subscribe(value => {
                        this.filerData(value);
                    });
            }));


    }

    filerData(val) {
        if (val) {
            val = val.toLowerCase();
        } else {
            return this.filteredProducts = [...this.products];
        }

        const columns = Object.keys(this.products[0]);
        if (!columns.length) {
            return;
        }

        const rows = this.products.filter(function (d) {
            for (let i = 0; i <= columns.length; i++) {
                const column = columns[i];
                // console.log(d[column]);
                if (d[column] && d[column].toString().toLowerCase().indexOf(val) > -1) {
                    return true;
                }
            }
        });
        this.filteredProducts = rows;
    }
}
