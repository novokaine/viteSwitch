import { Card, CardContent } from "@mui/material";
import type { FC } from "react";

interface IErrorWrapper {
  error: unknown;
}

const getErrorMessage = (error: unknown) => {
  if (error instanceof Error && error.message) return error.message;
  return "Something went wrong while loading data.";
};

const ErrorWrapper: FC<IErrorWrapper> = ({ error }) => {
  <Card>
    <CardContent>{getErrorMessage(error)}</CardContent>
  </Card>;
};

export default ErrorWrapper;
