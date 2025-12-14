import { Navigate, Outlet } from "react-router-dom";
import { useAppSelector } from "../redux";
import { getAccessToken } from "../redux/authSlice/selectors";
import ROUTES_PATHS from "./paths";

const PrivateRoutes = () => {
  const accessToken = useAppSelector(getAccessToken);
  if (!accessToken) return <Navigate to={ROUTES_PATHS.LOGIN} replace />;

  return <Outlet />;
};

export default PrivateRoutes;
