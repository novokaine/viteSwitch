import { useQuery } from "@tanstack/react-query";
import { createQueryOptions } from "../../../lib/query";
import { adminUsersApi } from "@api/adminUsersApi";

export const ADMIN_USERS_QUERY_KEY = ["admin", "users"] as const;

export const useAdminUsersQuery = () =>
  useQuery(
    createQueryOptions({
      queryKey: ADMIN_USERS_QUERY_KEY,
      queryFn: adminUsersApi.getUsers,
      staleTime: 60_000
    })
  );
