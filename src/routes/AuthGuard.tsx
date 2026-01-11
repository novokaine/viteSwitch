import type { ComponentType, FC, ReactNode } from "react";
import { useAppSelector } from "../redux";
import {
  getAccessToken,
  getCurrentUserData,
  getUserLoginState
} from "../redux/authSlice/selectors";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { Box, CircularProgress } from "@mui/material";
import { LOADING } from "../const/Loaders";
import ROUTES_PATHS from "./paths";

const { LOGIN, DASHBOARD } = ROUTES_PATHS;

export type AuthGuardProps = {
  type: "private" | "public" | "admin";
  Wrapper?: ComponentType<{ children: ReactNode }>;
  loadingComponent?: ReactNode;
  redirectTo?: string;
};

const Loader = () => (
  <Box display="flex" justifyContent="center" alignItems="center">
    <CircularProgress />
  </Box>
);

const AuthGuard: FC<AuthGuardProps> = ({
  type,
  Wrapper,
  loadingComponent,
  redirectTo
}) => {
  const accessToken = useAppSelector(getAccessToken);
  const userData = useAppSelector(getCurrentUserData);
  const loginState = useAppSelector(getUserLoginState);
  const location = useLocation();

  if (loginState === LOADING) {
    return <>{loadingComponent || <Loader />}</>;
  }

  let hasAccess = false;
  let shouldRedirect = false;
  let defaultRedirectPath = LOGIN;

  switch (type) {
    case "public":
      hasAccess = !accessToken;
      shouldRedirect = !!accessToken;
      defaultRedirectPath = DASHBOARD;
      break;
    case "private":
      hasAccess = !!accessToken;
      shouldRedirect = !accessToken;
      break;
    case "admin":
      hasAccess = !!(accessToken && userData?.isAdmin);
      shouldRedirect = !hasAccess;
      defaultRedirectPath = accessToken ? DASHBOARD : LOGIN;
  }

  if (shouldRedirect) {
    const redirectPath = redirectTo || defaultRedirectPath;
    return (
      <Navigate
        to={redirectPath}
        replace
        state={{
          from: location
        }}
      />
    );
  }

  if (Wrapper)
    return (
      <Wrapper>
        <Outlet />
      </Wrapper>
    );

  return <Outlet />;
};

export default AuthGuard;
