import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from './auth.service';
import {AngularFireAuth} from '@angular/fire/auth';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    private router: Router,
    private auth: AuthService,
    private afAuth: AngularFireAuth
  ) { }

  canActivate() {
      return this.afAuth.authState.pipe(map((res) => {
          if (res && res.uid) {
              return true;
          }

          this.router.navigateByUrl('/sessions/signin');
      }));
  }
}
