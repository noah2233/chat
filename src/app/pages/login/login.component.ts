import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { AuthService } from '@services/auth.service';

import { pages } from '@core/consts';
@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  errorMsg: string;

  constructor(
    private _router: Router,
    private _authService: AuthService) { }

  ngOnInit() {
    this.initLoginForm();
  }

  initLoginForm() {
    this.loginForm = new FormGroup(
      {
        email: new FormControl('', [Validators.required]),
        password: new FormControl('', [Validators.required])
      },
    );
  }

  login(signUpForm: FormGroup) {
    if (this.loginForm.valid) {
      const email: string = signUpForm.controls['email'].value;
      const password: string = signUpForm.controls['password'].value;

      this._authService.login(email, password).subscribe(() => {
        this._router.navigate([pages.chat]);
      }, () => { });
    } else {
      alert('form is missing something...');
    }
  }

}
