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
  signUpForm: FormGroup;
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

  initSignUpForm() {
    this.signUpForm = new FormGroup(
      {
        email: new FormControl('', [Validators.required]),
        password: new FormControl('', [Validators.required]),
        dispalyName: new FormControl('', [Validators.required])
      },
    );
  }

  signUp(signUpForm: FormGroup) {
    if (this.signUpForm.valid) {
      const email: string = signUpForm.controls['email'].value;
      const password: string = signUpForm.controls['password'].value;
      const dispalyName: string = signUpForm.controls['dispalyName'].value;

      this._authService.signUp(email, password, dispalyName).subscribe(() => {
        this._router.navigate([pages.chat]);
      }, error => this.errorMsg = error);
    } else {
      alert('form is missing something...');
    }
  }
}
