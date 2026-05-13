import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createMutationOptions } from "@lib/query";
import useAuthStore from "@store/useAuthStore";
import { AUTH_SESSION_QUERY_KEY } from "./useAuthBootstrap";
import { authApi } from "@api/auth";

export const useLoginMutation = () => {
  const queryClient = useQueryClient();
  const setAuthenticated = useAuthStore((state) => state.setAuthenticated);

  return useMutation({
    ...createMutationOptions({
      mutationFn: authApi.login
    }),
    onSuccess: (session) => {
      setAuthenticated(session);
      queryClient.setQueryData(AUTH_SESSION_QUERY_KEY, session);
    }
  });
};
