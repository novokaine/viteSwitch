import type { ComponentType, FC, ReactNode } from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useAppSelector } from "../redux";
import {
  getAccessToken,
  getUserLoginState
} from "../redux/authSlice/selectors";
import { LOADING } from "../const/Loaders";
import ROUTES_PATHS from "./paths";
import type { ROUTE_TYPE } from "./const";
import { useRedirectController } from "./hooks";
import Loader from "../components/Loader";

const { LOGIN, DASHBOARD, ROOT } = ROUTES_PATHS;

type AuthGuardProps = {
  type: ROUTE_TYPE;
  Wrapper?: ComponentType<{ children: ReactNode }>;
};

const AuthGuard: FC<AuthGuardProps> = ({ type, Wrapper }) => {
  const accessToken = useAppSelector(getAccessToken);
  const loginState = useAppSelector(getUserLoginState);
  const location = useLocation();

  const { shouldRedirect, defaultRedirectPath } = useRedirectController({
    type
  });

  if (loginState === LOADING) return <Loader />;

  if (location.pathname === ROOT)
    return <Navigate to={accessToken ? DASHBOARD : LOGIN} />;

  if (shouldRedirect) {
    const redirectPath = defaultRedirectPath;
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
