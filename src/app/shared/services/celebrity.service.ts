import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { AngularFireStorage } from '@angular/fire/storage';
import { Celebrity } from '../interfaces/celebrity.interface';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class CelebrityService {
    private famousCollection: AngularFirestoreCollection<any>;
    private URL_ENDPOINT = '/famosos-27f08/us-central1/celebritiesApi/celebrities';

    constructor(
        private db: AngularFirestore,
        private storage: AngularFireStorage,
        private http: HttpClient
    ) {
        this.famousCollection = db.collection<any>('celebrity_lead');
    }

    getFamousByAlly(UID) {
        return this.db.collection<any>('celebrity_lead', ref => {
            return ref
                .where('ally_id', '==', UID);
        });
    }

    getCelebrityByAlly(UID) {
        return this.db.collection<any>('celebrity_lead', ref => {
            return ref
                .where('ally_id', '==', UID);
        });
    }

    getFamous() {
        return this.famousCollection;
    }

    addSuggestion(suggested) {
        console.log(suggested);
        return this.http.post(`${this.URL_ENDPOINT}/suggested-celebrity`, suggested);
    }
    uploadPhoto(img): any {
        const filePath = 'famosos/' + new Date().getTime() + '.jpg';
        const ref = this.storage.ref(filePath);
        const newRef = ref.putString(img, 'data_url');
        return { newRef, ref };
    }
}
