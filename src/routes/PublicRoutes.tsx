import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useAppSelector } from "../redux";
import {
  getAccessToken,
  getUserLoginState
} from "../redux/authSlice/selectors";
import ROUTES_PATHS from "./paths";
import { LOADING } from "../const/Loaders";
import { Container } from "@mui/material";

const PublicRoutes = () => {
  const accessToken = useAppSelector(getAccessToken);
  const location = useLocation();
  const loginState = useAppSelector(getUserLoginState);

  if (loginState === LOADING) {
    return <p>Login Loading....</p>;
  }

  return accessToken ? (
    <Navigate to={ROUTES_PATHS.DASHBOARD} replace state={{ from: location }} />
  ) : (
    <Container
      sx={{
        margin: "0 auto",
        textAlign: "center"
      }}
    >
      <Outlet />
    </Container>
  );
};

export default PublicRoutes;
