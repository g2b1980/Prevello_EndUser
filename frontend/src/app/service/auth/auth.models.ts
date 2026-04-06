export interface LoginRequest {
  email: string;
  password: string;
  rememberMe: boolean;
}

export interface RegisterRequest {
  email: string;
  password: string;
  firstName?: string;
  lastName?: string;
}

export interface AuthResponse {
  succeeded: boolean;
  token?: string;
  displayName?: string;
  email?: string;
  errors?: string[];
}

export interface UserInfo {
  id: string;
  email: string;
  displayName?: string;
  firstName?: string;
  lastName?: string;
  tenantId: string;
  isEntraUser: boolean;
}
