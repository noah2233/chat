import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

import { Observable } from 'rxjs';

import { User } from '@pages/chatroom/models/user.model';

import { from } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private user: Observable<firebase.User>;
  private authState: any;

  constructor(
    private _angularFireDatabase: AngularFireDatabase,
    private _angularFireAuth: AngularFireAuth,
    private _router: Router) {
    this.user = _angularFireAuth.authState;
  }

  get currentUserID() {
    return this.authState ? this.authState.user.uid : '';
  }

  login(email: string, password: string) {
    const subscription = from(
      this._angularFireAuth.auth.signInWithEmailAndPassword(email, password)
        .then((resolve) => {
          const status = 'online';
          this.setUserStatus(status);
        }).catch(error => console.log(error)));

    return subscription;
  }

  logout() {
    const subscription = from(
      this._angularFireAuth.auth.signOut()
        .then((resolve) => { })
        .catch(error => console.log(error)));

    return subscription;
  }

  signUp(email: string, password: string, displayName: string) {
    const subscription = from(
      this._angularFireAuth.auth.createUserWithEmailAndPassword(email, password)
        .then(user => {
          this.authState = user;
          const status = 'online';
          this.setUserData(email, displayName, status);
        }).catch(error => console.log(error)));

    return subscription;
  }

  setUserData(email: string, displayName: string, status: string) {
    const path = `users/${this.currentUserID}`;
    const data = {
      email: email,
      displayName: displayName,
      status: status
    };

    this._angularFireDatabase.object(path).update(data)
      .catch(error => console.log(error));
  }

  setUserStatus(status: string) {
    const path = `users/${this.currentUserID}`;
    const data = {
      status: status
    };

    this._angularFireDatabase.object(path).update(data)
      .catch(error => console.log(error));
  }

  authUser() {
    return this.user;
  }
}
