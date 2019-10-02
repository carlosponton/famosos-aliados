import { Injectable } from '@angular/core';
import { AngularFirestoreCollection, AngularFirestore } from '@angular/fire/firestore';
import { Ally } from '../interfaces/ally.interface';
import { AngularFireStorage } from '@angular/fire/storage';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class AllyService {

  private allyCollection: AngularFirestoreCollection<Ally>;

  constructor(private db: AngularFirestore,
    private storage: AngularFireStorage,
    private angularFireAuth: AngularFireAuth) {
    this.allyCollection = db.collection<Ally>('ally');
  }

  /**
   * Get Ally By ID
   * @param UID
   */
  getCelebrityLeadById(UID) {
    return this.allyCollection.ref.where('auth_uid', '==', UID).get();
  }
}
