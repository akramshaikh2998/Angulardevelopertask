import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  errorMessage: string = '';
  loading: boolean = false;
  // rememberMe: boolean = true;

  constructor(private fb: FormBuilder, private http: HttpClient, private router: Router) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  ngOnInit() {
    const savedEmail = localStorage.getItem('rememberedEmail');
    const savedPassword = localStorage.getItem('rememberedPassword');
    if (savedEmail && savedPassword) {
      this.loginForm.patchValue({ email: savedEmail, password: savedPassword });
      // this.rememberMe = true;
    }
  }

  onSubmit() {
    if (this.loginForm.invalid) {
      this.errorMessage = 'Please enter valid email and password.';
      return;
    }

    this.loading = true;

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'auth': 'dAwMpo/TAWLhFrwwr3Wzcmc8XTdmAgp6zmGLsFmJ9HAnEbTQAg937i/hqKFjtFVQ4TnQ2y6xlVSeTKy3VWcxvalwvmPq6qF7+UcLd3wBXYoVQ2Puj49mTweKh/v2Rvj9zyVjfbexFkjMNZ5XyGucmdOI6XMmI98Zvu38Jh1fOo8157YxlgCozKkonixczjGIn3RKLuv7v3gXDRl4irzRcS6lYKGJB8vfA847GUppsVjdZV9bAjADfqUP2Iyl6Nz8MOWrSHNy8tWqhM6mI165rCwH3xMv7HEexmsMO7Mi36c=s'
    });

    const body = {
      email: "eddy@yopmail.com",
      phone: "",
      phoneCode: "965",
      password: "123123",
      deviceToken: "",
      deviceType: "",
      deviceModel: "",
      appVersion: "",
      osVersion: ""
    };

    this.http.post('https://dev-api.wanasti.com/api/v1/user/login?lang=en&currencyCode=KW', body, { headers })
      .subscribe({
        next: (res: any) => {
          this.loading = false;
          console.log('Login API response:', res);
          
          if (res && res.status === 1 ) {
            localStorage.setItem('userData', JSON.stringify(res.data));

            // if (this.rememberMe) {
            //   localStorage.setItem('rememberedEmail', this.loginForm.value.email);
            //   localStorage.setItem('rememberedPassword', this.loginForm.value.password);
            // } else {
            //   localStorage.removeItem('rememberedEmail');
            //   localStorage.removeItem('rememberedPassword');
            // }


            this.router.navigate(['/dashboard']);
          } else {
            this.errorMessage = res?.message || 'Login failed. Please check your credentials.';
          }

        },
        error: (err) => {
          this.loading = false;
          this.errorMessage = err.error?.message || 'Something went wrong. Try again!';
        }
      });
  }
}
