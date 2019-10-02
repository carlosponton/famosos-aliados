import {ChangeDetectionStrategy, Component, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {ToastrService} from 'ngx-toastr';
import {CelebrityService} from '../../../shared/services/celebrity.service';
import {Router} from '@angular/router';
import {Subject} from 'rxjs';
import {debounceTime} from 'rxjs/operators';
import {AuthService} from '../../../shared/services/auth.service';


@Component({
    selector: 'app-new-suggested',
    templateUrl: './new-suggested.component.html',
    styleUrls: ['./new-suggested.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class NewSuggestedComponent implements OnInit {
    formBasic: FormGroup;
    loading: boolean;
    searchControl: FormControl = new FormControl();
    photo: string;
    public croppieImage = new Subject<string>();
    products;
    filteredProducts;
  constructor(
      private fb: FormBuilder,
      private toastr: ToastrService,
      private famousService: CelebrityService,
      private router: Router,
      private authService: AuthService
  ) { }

    ngOnInit() {
        this.buildFormBasic();
        this.filteredProducts = this.famousService.getFamous().valueChanges();
        this.filteredProducts = this.famousService.getFamous().valueChanges();
        this.searchControl.valueChanges
            .pipe(debounceTime(200))
            .subscribe(value => {
                this.filerData(value);
            });
    }

    buildFormBasic() {
        this.formBasic = this.fb.group({
            nombre: '',
            email: '',
            telefono: '',
            instagram: '',
            twitter: '',
            facebook: '',
            youtube: '',
            ig_followers: '',
            facebook_followers: '',
            twitter_followers: '',
            youtube_followers: '',
            precio: '',
            cantidad_inicial: ''
        });
    }

    imageUploadEvent(evt) {
        if (!evt.target) {
            return;
        }
        if (!evt.target.files) {
            return;
        }

        if (evt.target.files.length !== 1) {
            return;
        }

        const file = evt.target.files[0];
        if (
            file.type !== 'image/jpeg' &&
            file.type !== 'image/png' &&
            file.type !== 'image/gif' &&
            file.type !== 'image/jpg'
        ) {
            return;
        }

        const fr = new FileReader();
        fr.onloadend = loadEvent => {
            this.croppieImage.next(fr.result.toString());
        };

        fr.readAsDataURL(file);
    }

    getImage(event) {
        this.photo = event;
    }

    submit() {
        this.loading = true;
        const responsePhoto = this.famousService.uploadPhoto(this.photo);
        responsePhoto.newRef.then(() => {
            responsePhoto.ref.getDownloadURL().subscribe(avatar => {
                this.authService.getuser().then(value => {
                    let allyId = '';
                    value.forEach(document => {
                        allyId = document.id;
                    });
                    const response = this.famousService.addSuggestion(
                        {...this.formBasic.value, avatar, ally_id: allyId}
                    );
                    response.then(res => {
                        this.loading = false;
                        this.router.navigate(['/celebrity/suggested']);
                        this.toastr.success('Famoso sugerido.', 'Success!', {progressBar: true});
                    });
                });
            });
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

        this.filteredProducts = this.products.filter(function(d) {
            for (let i = 0; i <= columns.length; i++) {
                const column = columns[i];
                // console.log(d[column]);
                if (d[column] && d[column].toString().toLowerCase().indexOf(val) > -1) {
                    return true;
                }
            }
        });
    }
}
