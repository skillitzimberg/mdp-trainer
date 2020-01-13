import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Store } from '@ngrx/store';

import * as fromRoot from '../app.reducer';
import { AuthData } from './auth-data.model';
import * as AuthActions from './auth.actions';

@Injectable()
export class AuthService {
  constructor(
    private afAuth: AngularFireAuth,
    private store: Store<fromRoot.State>,
  ) {}

  registerUser(authData: AuthData) {
    this.afAuth.auth
      .createUserWithEmailAndPassword(authData.email, authData.password)
      .then(result => {
        console.log(`AuthService registerUser(): ${result.user.email}`);
        this.store.dispatch(AuthActions.register());
      })
      .catch(error => {
        console.log(error);
      });
  }

  login(authData: AuthData) {
    this.afAuth.auth
      .signInWithEmailAndPassword(authData.email, authData.password)
      .then(result => {
        console.log(`AuthService login(): ${result.user.email}`);
        this.store.dispatch(AuthActions.login(authData));
      })
      .catch(error => {
        console.log(error);
      });
  }

  logout() {
    this.afAuth.auth.signOut();
    console.log('logout');
  }
}
