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

// shared
import { AppHeaderComponent } from '@shared/app-header/app-header.component';
// services
import { CommonService } from '@services/common.service';
import { AuthService } from '@services/auth.service';
import { ChatService } from '@services/chat.service';
// pages
import { SignupComponent } from '@pages/signup/signup.component';
import { LoginComponent } from '@pages/login/login.component';
import { ChatroomComponent } from '@pages/chatroom/chatroom.component';

import { environment } from '@environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    AppHeaderComponent,
    SignupComponent,
    LoginComponent,
    ChatroomComponent
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
