import { Injectable } from '@angular/core';


import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

import { Observable } from 'rxjs';

import { AuthService } from '@services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  constructor(private _authService: AuthService) { }

  sendMessage(message: string) { }
}
