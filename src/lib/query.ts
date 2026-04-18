import type { QueryKey } from "@tanstack/react-query";
import { mutationOptions, queryOptions } from "@tanstack/react-query";
import { ApiError } from "./http";

const shouldRetryQuery = (failureCount: number, error: unknown) => {
  if (error instanceof ApiError) {
    return error.status >= 500 && failureCount < 2;
  }

  return failureCount < 1;
};

export const createQueryOptions = <TQueryFnData>(config: {
  queryKey: QueryKey;
  queryFn: () => Promise<TQueryFnData>;
  staleTime?: number;
}) =>
  queryOptions({
    queryKey: config.queryKey,
    queryFn: config.queryFn,
    staleTime: config.staleTime ?? 30_000,
    retry: shouldRetryQuery,
    refetchOnWindowFocus: false
  });

export const createMutationOptions = <TData, TVariables = void>(config: {
  mutationFn: (variables: TVariables) => Promise<TData>;
}) =>
  mutationOptions({
    mutationFn: config.mutationFn,
    retry: false
  });
