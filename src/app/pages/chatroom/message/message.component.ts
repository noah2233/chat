import { Component, OnInit, Input } from '@angular/core';

import { ChatMessage } from '@pages/chatroom/models/chat-messages.model';
@Component({
  selector: 'message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {
  @Input() chatMessage: ChatMessage;
  userEmail: string;
  userName: string;
  messageContent: string;
  timeStamp: string;

  constructor() { }

  ngOnInit() {
    this.initMessage();
  }

  initMessage() {
    this.messageContent = this.chatMessage.message;
    this.timeStamp = this.chatMessage.timeStamp;
    this.userEmail = this.chatMessage.email;
    this.userName = this.chatMessage.userName;
  }

}
