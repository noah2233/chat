import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SignupComponent } from '@pages/signup/signup.component';
import { LoginComponent } from '@pages/login/login.component';
import { ChatroomComponent } from '@pages/chatroom/chatroom.component';

import { pages } from '@core/consts';

const routes: Routes = [
  { path: '', redirectTo: pages.login, pathMatch: 'full' },
  { path: pages.login, component: LoginComponent },
  { path: pages.signup, component: SignupComponent },
  { path: pages.chat, component: ChatroomComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
