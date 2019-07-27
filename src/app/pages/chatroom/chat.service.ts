import { Injectable } from '@angular/core';

import { Message } from '@pages/chatroom/chatroom';

import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  constructor() { }

  sendMessage(message: Message) { }
}
