import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { AuthService } from '@services/auth.service';

import { pages } from '@core/consts';

@Component({
  selector: 'signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  email: string;
  password: string;
  dispalyName: string;
  errorMsg: string;

  constructor(
    private _router: Router,
    private _authService: AuthService) { }

  ngOnInit() {
    this.initSignUpForm();
  }

  initSignUpForm() { }

  signUp() {
    const email = this.email;
    const password = this.password;
    const dispalyName = this.dispalyName;

    this._authService.signUp(email, password, dispalyName).subscribe(() => {
      this._router.navigate([pages.chat]);
    }, error => {
      this.errorMsg = error;
    });
  }

}
