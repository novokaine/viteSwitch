import { useQuery } from "@tanstack/react-query";
import { createQueryOptions } from "../../../lib/query";
import { profileApi } from "../../../api/profileApi";

export const USER_PROFILE_QUERY_KEY = ["profile", "current-user"] as const;

export const useUserProfileQuery = () =>
  useQuery(
    createQueryOptions({
      queryKey: USER_PROFILE_QUERY_KEY,
      queryFn: profileApi.getProfile,
      staleTime: 60_000
    })
  );
