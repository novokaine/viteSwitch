import { http } from "@lib/http";
import type {
  AuthSession,
  LoginCredentials,
  RefreshTokenResponse
} from "@app-types/auth";

export const authApi = {
  login: (credentials: LoginCredentials) =>
    http<AuthSession>("/login", {
      method: "POST",
      body: credentials,
      requiresAuth: false,
      retryOnAuthError: false
    }),
  bootstrapSession: () =>
    http<AuthSession>("/check-auth", {
      method: "GET",
      requiresAuth: false,
      retryOnAuthError: false
    }),
  refreshAccessToken: () =>
    http<RefreshTokenResponse>("/refresh-token", {
      method: "POST",
      requiresAuth: false,
      retryOnAuthError: false
    }),
  logout: () =>
    http("/logout", {
      method: "POST",
      retryOnAuthError: false
    })
};
