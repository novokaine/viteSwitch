import { Navigate } from "react-router-dom";
import { useAppSelector } from "../redux";
import { getAccessToken } from "../redux/authSlice/selectors";
import ROUTES_PATHS from "./paths";

const IndexRedirect = () => {
  const accessToken = useAppSelector(getAccessToken);
  return accessToken ? (
    <Navigate to={ROUTES_PATHS.DASHBOARD} replace />
  ) : (
    <Navigate to={ROUTES_PATHS.LOGIN} replace />
  );
};

export default IndexRedirect;
