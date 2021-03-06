import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { ChatService } from '@pages/chatroom/chat.service';
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
    this.chatForm = new FormGroup({ message: new FormControl('', [Validators.required]) });
  }

  send(messageValue: string) {
    this._chatService.sendMessage(messageValue);
    this.chatForm.reset();
  }

  onSubmit(chatForm: FormGroup) {
    if (chatForm.valid) {
      const messageValue: string = chatForm.controls['message'].value;
      this.send(messageValue);
    } else {
      // todo - handle popup
      alert('INPUT IS EMPTY MF!');
    }
  }
}
