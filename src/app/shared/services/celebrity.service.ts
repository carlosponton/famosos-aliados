import { Injectable } from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection} from '@angular/fire/firestore';
import {AngularFireStorage} from '@angular/fire/storage';

@Injectable({
    providedIn: 'root'
})
export class CelebrityService {
    private famousCollection: AngularFirestoreCollection<any>;

    constructor(
        private db: AngularFirestore,
        private storage: AngularFireStorage
    ) {
        this.famousCollection = db.collection<any>('celebrity_lead');
    }

    getFamous() {
        return this.famousCollection;
    }
    addSuggestion(suggested) {
        const id = this.db.createId();
        return this.famousCollection.doc(id).set({id, ...suggested});
    }
    uploadPhoto(img): any {
        const filePath = 'famosos/' + new Date().getTime() + '.jpg';
        const ref = this.storage.ref(filePath);
        const newRef = ref.putString(img, 'data_url');
        return {newRef, ref};
    }
}