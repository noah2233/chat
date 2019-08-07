import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '@services/auth.service';
import { ChatService } from '@pages/chatroom/chat.service';

import { Observable } from 'rxjs';

import * as firebase from 'firebase/app';

import { pages } from '@core/consts';
@Component({
  selector: 'app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.css']
})
export class AppHeaderComponent implements OnInit {
  isNavbarCollapsed: boolean;
  user: Observable<firebase.User>;
  displayName: string;

  constructor(
    private _authService: AuthService,
    private _router: Router,
    private _chatService: ChatService) { }

  ngOnInit() {
    this.user = this._authService.authUser();
    this.user.subscribe(user => {
      if (user) {
        this.getUser();
      }
    });
  }

  logout() {
    this._authService.logout().subscribe(() => {
      this._router.navigate([pages.login]);
    });
  }

  getUser() {
    this._chatService.getUser().subscribe((result) => {
      this.displayName = result['displayName'];
    });
  }
}
