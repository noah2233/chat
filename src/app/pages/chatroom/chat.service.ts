import { Injectable } from '@angular/core';
import { formatDate } from '@angular/common';

import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

import { Observable, of } from 'rxjs';

import { AuthService } from '@services/auth.service';

import { ChatMessage } from '@pages/chatroom/models/chat-messages.model';

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  user: firebase.User;
  chatMessages: AngularFireList<ChatMessage>;
  chatMessage: ChatMessage;
  userName: string;

  constructor(
    private _angularFireDatabase: AngularFireDatabase,
    private _angularFireAuth: AngularFireAuth,
    private _authService: AuthService) {
    this._angularFireAuth.authState
      .subscribe(auth => {
        if (auth !== undefined && auth !== null) {
          this.user = auth;
        }

        this.getUser().subscribe((result) => {
          this.userName = result['displayName'];
          console.log(result);
        });
      });
  }

  getUser() {
    const userId = this.user.uid;
    const path = `/users/${userId}`;

    return this._angularFireDatabase.object(path).valueChanges();
  }

  getUsers() {
    const path = `/users`;

    return this._angularFireDatabase.list(path).valueChanges();
  }

  sendMessage(message: string) {
    const timeStamp = this.getTimeStamp();
    const email = this.user.email;
    this.chatMessages = this.getMessages();
    this.chatMessages.push({
      message: message,
      timeStamp: timeStamp,
      userName: this.userName,
      email: email
    });
  }

  getTimeStamp(): string {
    const now = new Date();

    return now.toString();
  }

  getMessages(): AngularFireList<ChatMessage> {
    // query
    return this._angularFireDatabase.list('messages',
      ref => ref.limitToLast(25).orderByKey());
  }
}
