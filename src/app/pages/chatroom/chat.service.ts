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
  user: any;
  chatMessages: AngularFireList<ChatMessage>;
  chatMessage: ChatMessage;
  userName: Observable<string>;

  constructor(
    private _angularFireDatabase: AngularFireDatabase,
    private _angularFireAuth: AngularFireAuth,
    private _authService: AuthService) {
    // this._angularFireAuth.authState
    //   .subscribe(auth => {
    //     if (auth !== undefined && auth !== null) {
    //       this.user = auth;
    //     }
    //   });
  }

  sendMessage(message: string) {
    const timeStamp = this.getTimeStamp();
    // const email = this.user.email;
    const email = 'user@email';
    this.chatMessages = this.getMessages();
    this.chatMessages.push({
      message: message,
      timeSent: timeStamp,
      // userName: this.userName,
      userName: 'userName',
      email: email
    });
  }

  getTimeStamp(): string {
    const now = new Date();

    return formatDate(now, 'd/M/yy h:mm:ss', 'en');
  }

  getMessages(): AngularFireList<ChatMessage> {
    // query
    return this._angularFireDatabase.list('messages',
      ref => ref.limitToLast(25).orderByKey());
  }
}
