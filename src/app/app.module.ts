import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

import { environment } from '@environments/environment';

// shared
import { AppHeaderComponent } from '@shared/app-header/app-header.component';
// services
import { CommonService } from '@services/common.service';
import { AuthService } from '@services/auth.service';
// pages
import { SignupComponent } from '@pages/signup/signup.component';
import { LoginComponent } from '@pages/login/login.component';
// chatroom
import { ChatService } from '@pages/chatroom/chat.service';
import { ChatroomComponent } from '@pages/chatroom/chatroom.component';
import { ChatFormComponent } from './pages/chatroom/chat-form/chat-form.component';
import { UserListComponent } from './pages/chatroom/user-list/user-list.component';
import { FeedComponent } from './pages/chatroom/feed/feed.component';
import { MessageComponent } from './pages/chatroom/message/message.component';

@NgModule({
  declarations: [
    AppComponent,
    AppHeaderComponent,
    SignupComponent,
    LoginComponent,
    ChatroomComponent,
    ChatFormComponent,
    UserListComponent,
    FeedComponent,
    MessageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    NgbModule
  ],
  providers: [CommonService, AuthService, ChatService],
  bootstrap: [AppComponent]
})
export class AppModule { }
