import type { ComponentType, FC, ReactNode } from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import ROUTES_PATHS from "./paths";
import type { ROUTE_TYPE } from "./const";
import { useRedirectController } from "./hooks";
import Loader from "../components/Loader";
import { useAuthSession } from "../features/auth";

const { LOGIN, DASHBOARD, ROOT } = ROUTES_PATHS;

type AuthGuardProps = {
  type: ROUTE_TYPE;
  Wrapper?: ComponentType<{ children: ReactNode }>;
};

const AuthGuard: FC<AuthGuardProps> = ({ type, Wrapper }) => {
  const { accessToken, isBootstrapping } = useAuthSession();
  const location = useLocation();

  const { shouldRedirect, defaultRedirectPath } = useRedirectController({
    type
  });

  if (isBootstrapping) return <Loader />;

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
