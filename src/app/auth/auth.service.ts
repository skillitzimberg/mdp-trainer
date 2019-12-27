import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Store } from '@ngrx/store';

import * as fromRoot from '../app.reducer'
import { AuthData } from './auth-data.model';
import * as Auth from './auth.actions';


@Injectable()
export class AuthService {
  constructor(
    private afAuth: AngularFireAuth,
    private store: Store<fromRoot.State>,
  ) {}

  registerUser(authData: AuthData) {
    this.afAuth.auth.createUserWithEmailAndPassword(
      authData.email,
      authData.password
    )
    .then(result => {
      console.log(`registerUser: ${result}`);
      this.store.dispatch(Auth.register())
    })
    .catch(error =>{
      console.log(error)
    })
  }

}

