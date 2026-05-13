import useAuthStore from "../store/useAuthStore";
import type {
  AuthSession,
  RefreshTokenResponse
} from "@app-types/auth";

const API_BASE_URL = import.meta.env.VITE_API_URL ?? "http://localhost:8000/api";
const JSON_HEADERS = {
  Accept: "application/json"
};

export class ApiError extends Error {
  status: number;
  payload: unknown;

  constructor(message: string, status: number, payload?: unknown) {
    super(message);
    this.name = "ApiError";
    this.status = status;
    this.payload = payload;
  }
}

interface HttpOptions extends Omit<RequestInit, "body"> {
  body?: BodyInit | object | null;
  requiresAuth?: boolean;
  retryOnAuthError?: boolean;
}

let refreshPromise: Promise<string | null> | null = null;

const isPlainObjectBody = (
  body: HttpOptions["body"]
): body is object => {
  return (
    !!body &&
    typeof body === "object" &&
    !(body instanceof FormData) &&
    !(body instanceof URLSearchParams) &&
    !(body instanceof Blob) &&
    !(body instanceof ArrayBuffer)
  );
};

const parseResponseBody = async <T>(response: Response): Promise<T> => {
  const rawBody = await response.text();

  if (!rawBody) {
    return undefined as T;
  }

  try {
    return JSON.parse(rawBody) as T;
  } catch {
    return rawBody as T;
  }
};

const createApiError = async (response: Response) => {
  const payload = await parseResponseBody<unknown>(response);
  const message =
    typeof payload === "string"
      ? payload
      : response.statusText || "Request failed";

  return new ApiError(message, response.status, payload);
};

const buildRequest = (options: HttpOptions = {}) => {
  const { accessToken } = useAuthStore.getState();
  const { body, headers, requiresAuth = true, ...rest } = options;
  const requestHeaders = new Headers(headers ?? {});

  Object.entries(JSON_HEADERS).forEach(([key, value]) => {
    if (!requestHeaders.has(key)) {
      requestHeaders.set(key, value);
    }
  });

  let requestBody = body as BodyInit | null | undefined;

  if (isPlainObjectBody(body)) {
    requestBody = JSON.stringify(body);

    if (!requestHeaders.has("Content-Type")) {
      requestHeaders.set("Content-Type", "application/json");
    }
  }

  if (requiresAuth && accessToken) {
    requestHeaders.set("Authorization", `Bearer ${accessToken}`);
  }

  return {
    ...rest,
    body: requestBody,
    credentials: "include" as const,
    headers: requestHeaders
  };
};

export const hydrateSession = async (): Promise<AuthSession | null> => {
  try {
    const response = await fetch(`${API_BASE_URL}/check-auth`, {
      method: "GET",
      credentials: "include",
      headers: JSON_HEADERS
    });

    if (!response.ok) {
      throw await createApiError(response);
    }

    const session = await parseResponseBody<AuthSession>(response);
    useAuthStore.getState().setAuthenticated(session);
    return session;
  } catch (error) {
    if (error instanceof ApiError && error.status === 401) {
      useAuthStore.getState().clearSession();
      return null;
    }

    throw error;
  }
};

export const refreshAccessToken = async (): Promise<string | null> => {
  if (!refreshPromise) {
    refreshPromise = fetch(`${API_BASE_URL}/refresh-token`, {
      method: "POST",
      credentials: "include",
      headers: JSON_HEADERS
    })
      .then(async (response) => {
        if (!response.ok) {
          throw await createApiError(response);
        }

        return parseResponseBody<RefreshTokenResponse>(response);
      })
      .then((response) => {
        const nextAccessToken = response.accessToken;

        if (!nextAccessToken) {
          useAuthStore.getState().clearSession();
          return null;
        }

        const { updateAccessToken, userData, setAuthenticated } =
          useAuthStore.getState();

        if (response.userData) {
          setAuthenticated({
            accessToken: nextAccessToken,
            userData: response.userData
          });
        } else if (userData) {
          updateAccessToken(nextAccessToken);
        } else {
          useAuthStore.getState().clearSession();
          return null;
        }

        return nextAccessToken;
      })
      .catch((error) => {
        if (error instanceof ApiError && error.status === 401) {
          useAuthStore.getState().clearSession();
          return null;
        }

        throw error;
      })
      .finally(() => {
        refreshPromise = null;
      });
  }

  return refreshPromise;
};

export const http = async <T = void>(
  endpoint: string,
  options: HttpOptions = {}
): Promise<T> => {
  const { requiresAuth = true, retryOnAuthError = true } = options;
  const response = await fetch(
    `${API_BASE_URL}${endpoint}`,
    buildRequest({ ...options, requiresAuth })
  );

  if (response.status === 401 && requiresAuth && retryOnAuthError) {
    const refreshedToken = await refreshAccessToken();

    if (refreshedToken) {
      return http<T>(endpoint, {
        ...options,
        retryOnAuthError: false
      });
    }
  }

  if (!response.ok) {
    throw await createApiError(response);
  }

  return parseResponseBody<T>(response);
};
