import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
// shared
import { AppHeaderComponent } from '@shared/app-header/app-header.component';
// services
import { CommonService } from '@services/common.service';
import { AuthService } from '@services/auth.service';
import { ChatService } from '@services/chat.service';

@NgModule({
  declarations: [
    AppComponent,
    AppHeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [CommonService, AuthService, ChatService],
  bootstrap: [AppComponent]
})
export class AppModule { }
