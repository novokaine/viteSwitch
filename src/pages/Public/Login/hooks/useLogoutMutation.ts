import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createMutationOptions } from "@lib/query";
import useAuthStore from "@store/useAuthStore";
import { authApi } from "@api/auth";

export const useLogoutMutation = () => {
  const queryClient = useQueryClient();
  const clearSession = useAuthStore((state) => state.clearSession);

  return useMutation({
    ...createMutationOptions({
      mutationFn: authApi.logout
    }),
    onSettled: () => {
      clearSession();
      queryClient.clear();
    }
  });
};
