import { Component, OnInit, OnChanges } from '@angular/core';

import { ChatService } from '@pages/chatroom/chat.service';

import { AngularFireList } from 'angularfire2/database';

import { Observable } from 'rxjs';

import { ChatMessage } from '@pages/chatroom/models/chat-messages.model';
@Component({
  selector: 'feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit, OnChanges {
  feed: AngularFireList<ChatMessage>;

  constructor(
    private _chatService: ChatService) { }

  ngOnInit() {
    this.feed = this._chatService.getMessages();
  }

  ngOnChanges() {
    this.feed = this._chatService.getMessages();
  }

}
