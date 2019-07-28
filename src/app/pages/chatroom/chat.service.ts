import { Injectable } from '@angular/core';

import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

import { Observable } from 'rxjs';

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
    private _authService: AuthService) { }

  sendMessage(message: string) {
    const timeStamp = this.getTimeStamp();
    const email = this.user.email;
    this.chatMessages = this.getMessages();
    this.chatMessages.push({
      message: message,
      timeSent: timeStamp,
      userName: this.userName,
      email: email
    });
  }

  getTimeStamp(): Date {
    return new Date();
  }

  getMessages() {
    return null;
  }
}
