import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useAppSelector } from "../redux";
import {
  getAccessToken,
  getUserLoginState
} from "../redux/authSlice/selectors";
import ROUTES_PATHS from "./paths";
import LayoutWrapper from "../components/LayoutWrapper";
import { LOADING } from "../const/Loaders";

const PrivateRoutes = () => {
  const accessToken = useAppSelector(getAccessToken);
  const loginState = useAppSelector(getUserLoginState);
  const location = useLocation();

  // If checking auth (loading), show loading instead of redirecting
  if (loginState === LOADING && !accessToken) {
    return <div>Loading...</div>;
  }

  if (!accessToken)
    return <Navigate to={ROUTES_PATHS.LOGIN} state={{ from: location }} />;

  return (
    <LayoutWrapper>
      <Outlet />
    </LayoutWrapper>
  );
};

export default PrivateRoutes;
