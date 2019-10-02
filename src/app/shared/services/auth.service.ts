import { Injectable } from '@angular/core';
import { LocalStoreService } from './local-store.service';
import { Router } from '@angular/router';
import {AngularFireAuth} from '@angular/fire/auth';
import {AngularFirestore, AngularFirestoreCollection} from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  // Only for demo purpose
  authenticated = false;
  private famousCollection: AngularFirestoreCollection<any>;

  constructor(
    private store: LocalStoreService,
    private router: Router,
    private angularFireAuth: AngularFireAuth,
    private db: AngularFirestore,
  ) {
    this.famousCollection = db.collection<any>('ally');
    this.checkAuth();
  }

  checkAuth() {
    this.authenticated = this.store.getItem('famosos_login_status');
  }

  getuser() {
      const {uid} = this.angularFireAuth.auth.currentUser;
      return this.getAllyByAuthId(uid);
  }

  signin(credentials) {
    const { email, password } = credentials;
    return this.angularFireAuth
      .auth
      .signInWithEmailAndPassword(email, password)
      .then(res => {
        this.authenticated = true;
        this.store.setItem('famosos_login_status', true);
        return res;
      })
      .catch(err => {
        console.log('Something is wrong:', err.message);
      });
  }

  currentUser() {
    return this.angularFireAuth.auth.currentUser;
  }

  signout() {
    this.angularFireAuth
      .auth
      .signOut().then(res => {
        this.authenticated = false;
        this.store.setItem('famosos_login_status', false);
        this.router.navigateByUrl('/sessions/signin');
      });
  }

    getAllyByAuthId(authId) {
        return this.famousCollection.ref.where('auth_uid', '==', authId).get();
    }
}
