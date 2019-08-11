import { Component, OnInit } from '@angular/core';

import { ChatService } from '@pages/chatroom/chat.service';

import { ChatMessage } from '@pages/chatroom/models/chat-messages.model';
@Component({
  selector: 'feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit {
  feed: ChatMessage[];

  constructor(
    private _chatService: ChatService) { }

  ngOnInit() {
    this._chatService.getMessages().valueChanges().subscribe((result) => {
      this.feed = result;
    }, () => { });
  }
}
