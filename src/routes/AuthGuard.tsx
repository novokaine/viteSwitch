import type { ComponentType, FC, ReactNode } from "react";
import { useAppSelector } from "../redux";
import {
  getAccessToken,
  getUserLoginState
} from "../redux/authSlice/selectors";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { Box, CircularProgress, ThemeProvider } from "@mui/material";
import { LOADING } from "../const/Loaders";
import ROUTES_PATHS from "./paths";
import type { ROOTE_TYPE } from "./const";
import { useGetTheme } from "../theme/themeOptions";
import { useRedirectController } from "./hooks";

const { LOGIN, DASHBOARD, ROOT } = ROUTES_PATHS;

type AuthGuardProps = {
  type: ROOTE_TYPE;
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
  const loginState = useAppSelector(getUserLoginState);
  const location = useLocation();
  const { theme } = useGetTheme();

  const { shouldRedirect, defaultRedirectPath } = useRedirectController({
    type
  });

  if (loginState === LOADING) {
    return <>{loadingComponent || <Loader />}</>;
  }

  if (location.pathname === ROOT) {
    return <Navigate to={accessToken ? DASHBOARD : LOGIN} />;
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
      <ThemeProvider theme={theme}>
        <Wrapper>
          <Outlet />
        </Wrapper>
      </ThemeProvider>
    );

  return (
    <ThemeProvider theme={theme}>
      <Outlet />
    </ThemeProvider>
  );
};

export default AuthGuard;
