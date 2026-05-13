import { create } from "zustand";
import { devtools } from "zustand/middleware";
import type {
  AuthSession,
  AuthStatus,
  AuthUser
} from "@app-types/auth";

interface AuthStoreState {
  status: AuthStatus;
  accessToken: string | null;
  userData: AuthUser | null;
  isInitialized: boolean;
  setBootstrapping: () => void;
  setAuthenticated: (session: AuthSession) => void;
  updateAccessToken: (accessToken: string) => void;
  clearSession: () => void;
  hydrateFromSession: (session: AuthSession | null) => void;
}

const useAuthStore = create<AuthStoreState>()(
  devtools(
    (set) => ({
      status: "bootstrapping",
      accessToken: null,
      userData: null,
      isInitialized: false,
      setBootstrapping: () =>
        set({
          status: "bootstrapping"
        }),
      setAuthenticated: ({ accessToken, userData }) =>
        set({
          status: "authenticated",
          accessToken,
          userData,
          isInitialized: true
        }),
      updateAccessToken: (accessToken) =>
        set((state) => ({
          status: "authenticated",
          accessToken,
          userData: state.userData,
          isInitialized: true
        })),
      clearSession: () =>
        set({
          status: "anonymous",
          accessToken: null,
          userData: null,
          isInitialized: true
        }),
      hydrateFromSession: (session) => {
        if (!session) {
          set({
            status: "anonymous",
            accessToken: null,
            userData: null,
            isInitialized: true
          });
          return;
        }

        set({
          status: "authenticated",
          accessToken: session.accessToken,
          userData: session.userData,
          isInitialized: true
        });
      }
    }),
    {
      name: "auth-session-store"
    }
  )
);

export default useAuthStore;
