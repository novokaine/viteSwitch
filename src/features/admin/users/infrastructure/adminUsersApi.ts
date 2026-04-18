import { http } from "../../../../lib/http";

export interface AdminUser {
  id: string;
  username: string;
  email: string;
  isAdmin: boolean;
}

const normalizeUser = (user: unknown, index: number): AdminUser => {
  if (!user || typeof user !== "object") {
    return {
      id: `row-${index}`,
      username: `User ${index + 1}`,
      email: "",
      isAdmin: false
    };
  }

  const record = user as Record<string, unknown>;

  return {
    id:
      typeof record.id === "string"
        ? record.id
        : typeof record._id === "string"
          ? record._id
          : `row-${index}`,
    username:
      typeof record.username === "string"
        ? record.username
        : `User ${index + 1}`,
    email: typeof record.email === "string" ? record.email : "",
    isAdmin: Boolean(record.isAdmin)
  };
};

const normalizeUsers = (payload: unknown): AdminUser[] => {
  if (Array.isArray(payload)) {
    return payload.map(normalizeUser);
  }

  if (payload && typeof payload === "object") {
    const record = payload as Record<string, unknown>;

    if (Array.isArray(record.users)) {
      return record.users.map(normalizeUser);
    }

    if (Array.isArray(record.data)) {
      return record.data.map(normalizeUser);
    }
  }

  return [];
};

export const adminUsersApi = {
  getUsers: async () => {
    const response = await http<unknown>("/admin/users", {
      method: "GET"
    });

    return normalizeUsers(response);
  }
};
