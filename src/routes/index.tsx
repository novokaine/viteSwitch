import { lazy } from "react";
import PrivateRoutes from "./PrivateRoutes";

const ROUTES_PATHS = {
  ROOT: "/",
  REGISTER: "/register",
  RESET_PASSWORD: "/reset-password",
  FORGOT_PASSWORD: "/forgot-password",
  DASHBOARD: "/dashboard",
  USER_PROFILE: "/user-profile",
  UPLOAD_PHOTOS: "/upload-photos"
};
const Login = lazy(() => import("../pages/Login"));

// const publicRoutes: RoutesTypes[] = [
//   {
//     path: ROUTES_PATHS.ROOT,
//     Component: Login,
//     name: "Profile"
//   }
// ];

// const appRoutes: RoutesTypes[] = [...publicRoutes];

// export default appRoutes;

const appRoutes: RoutesTypes[] = [
  {
    path: ROUTES_PATHS.ROOT,
    element: <PrivateRoutes />,
    children: [
      {
        path: ROUTES_PATHS.ROOT,
        element: <Login />
      }
    ]
  }
];

export default appRoutes;
