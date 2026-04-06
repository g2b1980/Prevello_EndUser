import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';
import { AppSettings } from '../../../service/app-settings.service';
import { AuthService } from '../../../service/auth/auth.service';

@Component({
  selector: 'page-login',
  templateUrl: './page-login.html',
  standalone: false
})

export class LoginPage {
  email: string = '';
  password: string = '';
  rememberMe: boolean = false;
  errorMessage: string = '';
  isLoading: boolean = false;
  isEntraLoading: boolean = false;
  private returnUrl: string = '/';

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private appSettings: AppSettings,
    private authService: AuthService
  ) {
    this.appSettings.appSidebarNone = true;
    this.appSettings.appHeaderNone = true;
    this.appSettings.appContentClass = 'p-0';
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }
  
  ngOnDestroy() {
    this.appSettings.appSidebarNone = false;
    this.appSettings.appHeaderNone = false;
    this.appSettings.appContentClass = '';
  }
  
  formSubmit(f: NgForm) {
    if (!f.valid) return;
    
    this.isLoading = true;
    this.errorMessage = '';

    this.authService.login({
      email: this.email,
      password: this.password,
      rememberMe: this.rememberMe
    }).subscribe({
      next: (response) => {
        this.isLoading = false;
        if (response.succeeded) {
          this.router.navigateByUrl(this.returnUrl);
        } else {
          this.errorMessage = response.errors?.join(', ') || 'Login failed.';
        }
      },
      error: (err) => {
        this.isLoading = false;
        this.errorMessage = err.error?.errors?.join(', ') || 'An error occurred. Please try again.';
      }
    });
  }

  loginWithEntra() {
    this.isEntraLoading = true;
    this.errorMessage = '';
    // Redirect flow — the page will navigate to Microsoft login.
    // On return, app.component.ts handles the token exchange.
    this.authService.loginWithEntra();
  }
}
