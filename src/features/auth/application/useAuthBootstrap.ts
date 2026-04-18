import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import { createQueryOptions } from "../../../lib/query";
import useAuthStore from "../../../store/useAuthStore";
import { authApi } from "../infrastructure/authApi";

export const AUTH_SESSION_QUERY_KEY = ["auth", "session"] as const;

export const useAuthBootstrap = () => {
  const isInitialized = useAuthStore((state) => state.isInitialized);
  const hydrateFromSession = useAuthStore((state) => state.hydrateFromSession);
  const setBootstrapping = useAuthStore((state) => state.setBootstrapping);

  useEffect(() => {
    if (!isInitialized) {
      setBootstrapping();
    }
  }, [isInitialized, setBootstrapping]);

  const query = useQuery({
    ...createQueryOptions({
      queryKey: AUTH_SESSION_QUERY_KEY,
      queryFn: authApi.bootstrapSession,
      staleTime: 0
    }),
    enabled: !isInitialized,
    gcTime: 0,
    retry: false,
    refetchOnMount: false
  });

  useEffect(() => {
    if (query.isSuccess) {
      hydrateFromSession(query.data ?? null);
      return;
    }

    if (query.isError) {
      hydrateFromSession(null);
    }
  }, [hydrateFromSession, query.data, query.isError, query.isSuccess]);

  return {
    ...query,
    isBootstrapping: !isInitialized || query.isPending
  };
};
