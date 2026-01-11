import { Navigate, Outlet } from "react-router-dom";
import { useAppSelector } from "../redux";
import {
  getCurrentUserData,
  getUserLoginState
} from "../redux/authSlice/selectors";
import ROUTES_PATHS from "./paths";
import { LOADING } from "../const/Loaders";

const AdminRoutes = () => {
  const userData = useAppSelector(getCurrentUserData);
  const loginState = useAppSelector(getUserLoginState);

  if (loginState === LOADING) {
    return <p>Loading....</p>;
  }

  if (userData?.isAdmin) return <Outlet />;

  return <Navigate to={ROUTES_PATHS.DASHBOARD} replace />;
};

export default AdminRoutes;
