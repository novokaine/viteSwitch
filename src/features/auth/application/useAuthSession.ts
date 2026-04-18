import useAuthStore from "../../../store/useAuthStore";

export const useAuthSession = () => {
  const status = useAuthStore((state) => state.status);
  const accessToken = useAuthStore((state) => state.accessToken);
  const userData = useAuthStore((state) => state.userData);
  const isInitialized = useAuthStore((state) => state.isInitialized);

  return {
    status,
    accessToken,
    userData,
    isInitialized,
    isAuthenticated: status === "authenticated",
    isBootstrapping: status === "bootstrapping",
    isAnonymous: status === "anonymous"
  };
};
