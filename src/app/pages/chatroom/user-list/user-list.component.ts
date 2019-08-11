import { Component, OnInit } from '@angular/core';

import { ChatService } from '@pages/chatroom/chat.service';
@Component({
  selector: 'user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  public users: any[];

  constructor(
    private _chatService: ChatService) { }

  ngOnInit() {
    this.initUsersList();
  }

  initUsersList() {
    this._chatService.getUsers()
      .subscribe((results) => {
        this.users = results;
      }, () => { });
  }

}
