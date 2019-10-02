import { Injectable } from '@angular/core';
import { LocalStoreService } from './local-store.service';
import { Router } from '@angular/router';
import { of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  // Only for demo purpose
  authenticated = false;

  constructor(private store: LocalStoreService, private router: Router, private angularFireAuth: AngularFireAuth) {
    this.checkAuth();
  }

  checkAuth() {
    this.authenticated = this.store.getItem('famosos_login_status');
  }

  getuser() {
    return of({});
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
}
