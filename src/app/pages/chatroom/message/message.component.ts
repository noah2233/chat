import { Component, OnInit, Input } from '@angular/core';

import { ChatMessage } from '@pages/chatroom/models/chat-messages.model';
@Component({
  selector: 'message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {
  @Input() chatMessage: ChatMessage;

  constructor() { }

  ngOnInit() { }

  getBackgroundColor(chatMessage: ChatMessage): string {
    return chatMessage ? '#' + chatMessage.color : '';
  }

}
