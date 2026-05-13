import { http } from "@lib/http";
import type { AuthUser } from "@app-types/auth";

export interface UserProfile extends AuthUser {
  id?: string;
}

const normalizeProfile = (payload: unknown): UserProfile => {
  const source =
    payload && typeof payload === "object" && "userData" in payload
      ? (payload as { userData: unknown }).userData
      : payload;

  if (!source || typeof source !== "object") {
    return {
      username: "Unknown user",
      email: "",
      isAdmin: false
    };
  }

  const record = source as Record<string, unknown>;

  return {
    id: typeof record.id === "string" ? record.id : undefined,
    username:
      typeof record.username === "string" ? record.username : "Unknown user",
    email: typeof record.email === "string" ? record.email : "",
    isAdmin: Boolean(record.isAdmin)
  };
};

export const profileApi = {
  getProfile: async () => {
    const response = await http<unknown>("/private/user-profile", {
      method: "GET"
    });

    return normalizeProfile(response);
  }
};
