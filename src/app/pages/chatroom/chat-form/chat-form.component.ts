import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

import { ChatService } from '@pages/chatroom/chat.service';

import { filter } from 'rxjs/operators';
@Component({
  selector: 'chat-form',
  templateUrl: './chat-form.component.html',
  styleUrls: ['./chat-form.component.css']
})
export class ChatFormComponent implements OnInit {
  chatForm: FormGroup;

  constructor(private _chatService: ChatService) { }

  ngOnInit() {
    this.initChatForm();
  }

  initChatForm() {
    this.chatForm = new FormGroup({ message: new FormControl() });
  }

  send(messageValue: string) {
    this._chatService.sendMessage(messageValue);
  }

  onSubmit(chatForm: FormGroup) {
    const messageValue: string = chatForm.controls['message'] ? chatForm.controls['message'].value : '';
    this.send(messageValue);
  }
}
