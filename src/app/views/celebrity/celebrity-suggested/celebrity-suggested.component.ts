import {Component, OnInit} from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';


@Component({
  selector: 'app-celebrity-suggested',
  templateUrl: './celebrity-suggested.component.html',
  styleUrls: ['./celebrity-suggested.component.scss']
})
export class CelebritySuggestedComponent implements OnInit {
    searchControl: FormControl = new FormControl();
    products;
    filteredProducts;
  constructor(
  ) { }

    ngOnInit() {
        const products = [
            {
                name: 'Manager James',
                email: 'managerjames@test.com',
                instagram: 'managerjames',
                facebook: 'managerjames',
                twitter: 'managerjames',
                youtube: 'managerjames'
            },
            {
                name: 'Manager Falcao',
                email: 'managerfalcao@test.com',
                instagram: 'managerfalcao',
                facebook: 'managerfalcao',
                twitter: 'managerfalcao',
                youtube: 'managerfalcao'
            },
            {
                name: 'Manager Maluma',
                email: 'managermaluma@test.com',
                instagram: 'managermaluma',
                facebook: 'managermaluma',
                twitter: 'managermaluma',
                youtube: 'managermaluma'
            }
        ];
        this.products = products;
        this.filteredProducts = products;

        this.searchControl.valueChanges
            .pipe(debounceTime(200))
            .subscribe(value => {
                this.filerData(value);
            });
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

        const rows = this.products.filter(function(d) {
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
