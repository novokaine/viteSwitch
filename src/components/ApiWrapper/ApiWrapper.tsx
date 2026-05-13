import type { UseQueryResult } from "@tanstack/react-query";
import ErrorWrapper from "../ErrorWrapper";
import Loader from "../Loader";
import { Typography } from "@mui/material";

interface IApiWrapper<T = unknown> {
  query: UseQueryResult<T, unknown>;
  children: (data: T, query: UseQueryResult<T, unknown>) => React.ReactNode;
  emptyMessage?: string;
}

const ApiWrapper = <T,>({
  query,
  children,
  emptyMessage = "No data to display"
}: IApiWrapper<T>) => {
  const { isPending, isError, error, data } = query;

  if (isPending) return <Loader />;
  if (isError) return <ErrorWrapper error={error} />;
  if (!data) return <Typography variant="h4">{emptyMessage}</Typography>;

  return <>{children(data, query)}</>;
};

export default ApiWrapper;
