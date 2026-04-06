import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { AppSettings } from '../../../service/app-settings.service';
import { AuthService } from '../../../service/auth/auth.service';

@Component({
  selector: 'page-register',
  templateUrl: './page-register.html',
  standalone: false
})

export class RegisterPage {
  firstName: string = '';
  lastName: string = '';
  email: string = '';
  password: string = '';
  confirmPassword: string = '';
  agreeTerms: boolean = false;
  errorMessage: string = '';
  isLoading: boolean = false;

  constructor(
    private router: Router,
    private appSettings: AppSettings,
    private authService: AuthService
  ) {
    this.appSettings.appSidebarNone = true;
    this.appSettings.appHeaderNone = true;
    this.appSettings.appContentClass = 'p-0';
  }
  
  ngOnDestroy() {
    this.appSettings.appSidebarNone = false;
    this.appSettings.appHeaderNone = false;
    this.appSettings.appContentClass = '';
  }
  
  formSubmit(f: NgForm) {
    if (!f.valid) return;

    if (this.password !== this.confirmPassword) {
      this.errorMessage = 'Passwords do not match.';
      return;
    }

    if (!this.agreeTerms) {
      this.errorMessage = 'You must agree to the Terms and Conditions.';
      return;
    }

    this.isLoading = true;
    this.errorMessage = '';

    this.authService.register({
      email: this.email,
      password: this.password,
      firstName: this.firstName,
      lastName: this.lastName
    }).subscribe({
      next: (response) => {
        this.isLoading = false;
        if (response.succeeded) {
          this.router.navigate(['/']);
        } else {
          this.errorMessage = response.errors?.join(', ') || 'Registration failed.';
        }
      },
      error: (err) => {
        this.isLoading = false;
        this.errorMessage = err.error?.errors?.join(', ') || 'An error occurred. Please try again.';
      }
    });
  }
}
