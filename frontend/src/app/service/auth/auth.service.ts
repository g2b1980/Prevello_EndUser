import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable, tap, catchError, of, lastValueFrom } from 'rxjs';
import { MsalService } from '@azure/msal-angular';
import { AuthenticationResult } from '@azure/msal-browser';
import { environment } from '../../../environments/environment';
import { LoginRequest, RegisterRequest, AuthResponse, UserInfo } from './auth.models';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly API_URL = environment.apiUrl;
  private readonly TOKEN_KEY = 'prevello_token';
  private readonly PHOTO_KEY = 'prevello_profile_photo';

  private currentUserSubject = new BehaviorSubject<UserInfo | null>(null);
  private isAuthenticatedSubject = new BehaviorSubject<boolean>(this.hasToken());
  private profilePhotoSubject = new BehaviorSubject<string | null>(this.getSavedPhoto());

  currentUser$ = this.currentUserSubject.asObservable();
  isAuthenticated$ = this.isAuthenticatedSubject.asObservable();
  profilePhoto$ = this.profilePhotoSubject.asObservable();

  /**
   * Resolves when any in-flight MSAL redirect + token exchange is complete.
   * The AuthGuard awaits this before checking hasToken().
   */
  readonly msalReady: Promise<void>;

  constructor(
    private http: HttpClient,
    private router: Router,
    private msalService: MsalService
  ) {
    // Process any MSAL redirect result, then exchange token if present.
    // This promise resolves once the entire flow is complete (or if there's no redirect).
    this.msalReady = this.processMsalRedirect();

    // If we already have a Prevello token (normal page load, no redirect), load user info
    if (this.hasToken()) {
      this.loadCurrentUser().subscribe();
    }
  }

  private async processMsalRedirect(): Promise<void> {
    try {
      // Initialize MSAL instance first
      await this.msalService.instance.initialize();

      // handleRedirectPromise() processes the URL hash from the redirect.
      // If there was no redirect, it returns null.
      // If there was a redirect, it returns the AuthenticationResult.
      const result: AuthenticationResult | null = await this.msalService.instance.handleRedirectPromise();

      if (result && result.accessToken) {
        console.log('[AuthService] MSAL redirect returned, exchanging token...');
        // Exchange the Entra ID token for a Prevello JWT
        const response = await lastValueFrom(
          this.http.post<AuthResponse>(`${this.API_URL}/auth/entra-login`, {
            accessToken: result.accessToken,
            idToken: result.idToken
          })
        );

        if (response.succeeded && response.token) {
          this.setToken(response.token);
          this.isAuthenticatedSubject.next(true);
          this.loadCurrentUser().subscribe();
          // Fetch Microsoft 365 profile photo using the MSAL access token
          this.fetchGraphProfilePhoto(result.accessToken);
          console.log('[AuthService] Entra login succeeded, navigating to dashboard');
          this.router.navigate(['/dashboard']);
        } else {
          console.error('[AuthService] Entra token exchange failed:', response.errors);
          this.router.navigate(['/login']);
        }
      }
    } catch (err) {
      console.error('[AuthService] MSAL redirect processing error:', err);
      // Don't navigate to login on error — could be a normal page load
    }
  }

  login(request: LoginRequest): Observable<AuthResponse> {
    return this.http.post<AuthResponse>(`${this.API_URL}/auth/login`, request).pipe(
      tap(response => {
        if (response.succeeded && response.token) {
          this.setToken(response.token);
          this.isAuthenticatedSubject.next(true);
          this.loadCurrentUser().subscribe();
        }
      })
    );
  }

  register(request: RegisterRequest): Observable<AuthResponse> {
    return this.http.post<AuthResponse>(`${this.API_URL}/auth/register`, request).pipe(
      tap(response => {
        if (response.succeeded && response.token) {
          this.setToken(response.token);
          this.isAuthenticatedSubject.next(true);
          this.loadCurrentUser().subscribe();
        }
      })
    );
  }

  /**
   * Trigger Entra ID login via MSAL redirect.
   * The page will navigate to login.microsoftonline.com.
   * After auth, Microsoft redirects back and processMsalRedirect() handles the result.
   */
  loginWithEntra(): void {
    this.msalService.loginRedirect({
      scopes: environment.azureAd.scopes
    });
  }

  logout(): void {
    // Clear local Prevello token and cached profile photo
    localStorage.removeItem(this.TOKEN_KEY);
    localStorage.removeItem(this.PHOTO_KEY);
    this.currentUserSubject.next(null);
    this.isAuthenticatedSubject.next(false);
    this.profilePhotoSubject.next(null);

    // If there are MSAL accounts, log out of MSAL too
    const accounts = this.msalService.instance.getAllAccounts();
    if (accounts.length > 0) {
      this.msalService.logoutRedirect({
        account: accounts[0],
        postLogoutRedirectUri: environment.azureAd.redirectUri
      });
    } else {
      this.router.navigate(['/login']);
    }
  }

  /**
   * Fetch the user's profile photo from Microsoft Graph API.
   * Uses the MSAL access token directly (not our Prevello JWT).
   * Converts the blob to a data URL and caches it in localStorage.
   */
  private async fetchGraphProfilePhoto(graphAccessToken: string): Promise<void> {
    try {
      // We need a token with User.Read scope for Graph API.
      // The token from loginRedirect may have been issued for our custom API scope.
      // Silently acquire a token specifically for Graph.
      const accounts = this.msalService.instance.getAllAccounts();
      if (accounts.length === 0) return;

      let tokenForGraph = graphAccessToken;
      try {
        const silentResult = await this.msalService.instance.acquireTokenSilent({
          scopes: environment.azureAd.graphScopes,
          account: accounts[0]
        });
        tokenForGraph = silentResult.accessToken;
      } catch {
        console.warn('[AuthService] Could not silently acquire Graph token, using login token');
      }

      const response = await fetch('https://graph.microsoft.com/v1.0/me/photo/$value', {
        headers: { 'Authorization': `Bearer ${tokenForGraph}` }
      });

      if (!response.ok) {
        if (response.status === 404) {
          console.log('[AuthService] User has no Microsoft 365 profile photo');
        } else {
          console.warn('[AuthService] Graph photo fetch failed:', response.status);
        }
        return;
      }

      const blob = await response.blob();
      const reader = new FileReader();
      reader.onloadend = () => {
        const dataUrl = reader.result as string;
        localStorage.setItem(this.PHOTO_KEY, dataUrl);
        this.profilePhotoSubject.next(dataUrl);
        console.log('[AuthService] Profile photo loaded from Microsoft 365');
      };
      reader.readAsDataURL(blob);
    } catch (err) {
      console.warn('[AuthService] Failed to fetch Graph profile photo:', err);
    }
  }

  private getSavedPhoto(): string | null {
    return localStorage.getItem(this.PHOTO_KEY);
  }

  getToken(): string | null {
    return localStorage.getItem(this.TOKEN_KEY);
  }

  hasToken(): boolean {
    return !!this.getToken();
  }

  private setToken(token: string): void {
    localStorage.setItem(this.TOKEN_KEY, token);
  }

  private loadCurrentUser(): Observable<UserInfo | null> {
    return this.http.get<UserInfo>(`${this.API_URL}/auth/me`).pipe(
      tap(user => this.currentUserSubject.next(user)),
      catchError(() => {
        this.logout();
        return of(null);
      })
    );
  }
}
