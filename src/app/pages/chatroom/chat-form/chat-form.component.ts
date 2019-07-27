import { Component, OnInit } from '@angular/core';

import { Message } from '@pages/chatroom/chatroom';

import { ChatService } from '@pages/chatroom/chat.service';

@Component({
  selector: 'chat-form',
  templateUrl: './chat-form.component.html',
  styleUrls: ['./chat-form.component.css']
})
export class ChatFormComponent implements OnInit {
  message: Message;

  constructor(private _chatService: ChatService) { }

  ngOnInit() {
  }

  send() {
    this._chatService.sendMessage(this.message);
  }

  handelSubmit(event) {
    if (event.keyCode === 13) {
      this.send();
    }
  }

}
