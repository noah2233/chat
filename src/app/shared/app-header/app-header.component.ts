import { Component, OnInit } from '@angular/core';

import { AuthService } from '@services/auth.service';

import { observable, Observable } from 'rxjs';

import * as firebase from 'firebase/app';
@Component({
  selector: 'app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.css']
})
export class AppHeaderComponent implements OnInit {
  isNavbarCollapsed: boolean;
  user: Observable<firebase.User>;
  userEmail: string;

  constructor(
    private _authService: AuthService) { }

  ngOnInit() {
    this.user = this._authService.authUser();
    this.user.subscribe(user => {
      if (user) {
        this.userEmail = user.email;
      }
    });
  }
}
