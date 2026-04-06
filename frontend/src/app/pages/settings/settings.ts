import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from '../../service/auth/auth.service';
import { UserInfo } from '../../service/auth/auth.models';

interface TenantSettings {
  // Security
  passwordMinLength: number;
  passwordRequireUppercase: boolean;
  passwordRequireLowercase: boolean;
  passwordRequireDigit: boolean;
  passwordRequireSpecial: boolean;
  mfaEnabled: boolean;
  lockoutMaxAttempts: number;
  lockoutDurationMinutes: number;

  // Sessions
  sessionTimeoutMinutes: number;
  rememberMeDays: number;
  allowConcurrentSessions: boolean;

  // Notifications
  emailNotifications: boolean;
  systemUpdateNotifications: boolean;
  activityDigest: string;

  // User Management
  allowSelfRegistration: boolean;
  requireEmailVerification: boolean;
  allowEntraLogin: boolean;
  defaultUserRole: string;
  maxUsers: number;

  // Appearance
  defaultTheme: string;
  dateFormat: string;
  timezone: string;
}

function getDefaultSettings(): TenantSettings {
  return {
    passwordMinLength: 8,
    passwordRequireUppercase: true,
    passwordRequireLowercase: true,
    passwordRequireDigit: true,
    passwordRequireSpecial: true,
    mfaEnabled: false,
    lockoutMaxAttempts: 5,
    lockoutDurationMinutes: 15,
    sessionTimeoutMinutes: 60,
    rememberMeDays: 14,
    allowConcurrentSessions: true,
    emailNotifications: true,
    systemUpdateNotifications: true,
    activityDigest: 'weekly',
    allowSelfRegistration: true,
    requireEmailVerification: true,
    allowEntraLogin: true,
    defaultUserRole: 'User',
    maxUsers: 0,
    defaultTheme: '',
    dateFormat: 'MM/DD/YYYY',
    timezone: 'America/New_York',
  };
}

@Component({
  selector: 'settings',
  templateUrl: './settings.html',
  standalone: false
})
export class SettingsPage implements OnInit, OnDestroy {
  currentUser: UserInfo | null = null;

  settings: TenantSettings = getDefaultSettings();

  isDirty = false;
  isSaving = false;

  passwordForm = {
    currentPassword: '',
    newPassword: '',
    confirmPassword: ''
  };

  nameForm = {
    firstName: '',
    lastName: ''
  };

  emailForm = {
    newEmail: ''
  };

  /** Snapshot of settings taken at load / last save, used for discard. */
  private savedSettings: TenantSettings = getDefaultSettings();

  private subscriptions: Subscription[] = [];

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.subscriptions.push(
      this.authService.currentUser$.subscribe(user => {
        this.currentUser = user;
        if (user) {
          this.nameForm.firstName = user.firstName || '';
          this.nameForm.lastName = user.lastName || '';
          this.emailForm.newEmail = user.email || '';
        }
      })
    );

    // Take a snapshot so discard can restore
    this.savedSettings = { ...this.settings };
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(s => s.unsubscribe());
  }

  // ---- Dirty state ----

  markDirty(): void {
    this.isDirty = true;
  }

  discardChanges(): void {
    this.settings = { ...this.savedSettings };
    this.isDirty = false;
  }

  saveSettings(): void {
    this.isSaving = true;

    // TODO: POST to /api/settings when backend endpoint exists
    console.log('[Settings] Saving settings:', this.settings);

    // Simulate async save
    setTimeout(() => {
      this.savedSettings = { ...this.settings };
      this.isDirty = false;
      this.isSaving = false;
      console.log('[Settings] Settings saved successfully');
    }, 600);
  }

  // ---- Toggle helpers ----

  toggleMfa(): void {
    this.settings.mfaEnabled = !this.settings.mfaEnabled;
    this.markDirty();
  }

  toggleConcurrentSessions(): void {
    this.settings.allowConcurrentSessions = !this.settings.allowConcurrentSessions;
    this.markDirty();
  }

  // ---- Modal form actions ----

  changePassword(): void {
    if (this.passwordForm.newPassword !== this.passwordForm.confirmPassword) {
      console.warn('[Settings] Passwords do not match');
      return;
    }
    if (this.passwordForm.newPassword.length < this.settings.passwordMinLength) {
      console.warn('[Settings] Password does not meet minimum length requirement');
      return;
    }

    // TODO: POST to /api/auth/change-password when backend endpoint exists
    console.log('[Settings] Changing password...');

    // Reset form
    this.passwordForm = { currentPassword: '', newPassword: '', confirmPassword: '' };
  }

  saveName(): void {
    // TODO: PUT to /api/auth/profile when backend endpoint exists
    console.log('[Settings] Saving name:', this.nameForm);
  }

  saveEmail(): void {
    // TODO: POST to /api/auth/change-email when backend endpoint exists
    console.log('[Settings] Saving email:', this.emailForm);
  }
}
