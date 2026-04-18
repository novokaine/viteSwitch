export interface AuthUser {
  username: string;
  email: string;
  isAdmin: boolean;
}

export interface AuthSession {
  userData: AuthUser;
  accessToken: string;
}

export interface LoginCredentials {
  username: string;
  password: string;
}

export interface RefreshTokenResponse {
  accessToken: string;
  userData?: AuthUser;
}

export type AuthStatus = "bootstrapping" | "authenticated" | "anonymous";
