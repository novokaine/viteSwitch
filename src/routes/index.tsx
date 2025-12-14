import { lazy } from "react";
import PrivateRoutes from "./PrivateRoutes";
import { createBrowserRouter, Outlet } from "react-router-dom";
import IndexRedirect from "./IndexRedirect";
import ROUTES_PATHS from "./paths";

const Login = lazy(() => import("../pages/Login"));
const DashBoard = lazy(() => import("../pages/DashBoard"));

const routes = [
  {
    path: ROUTES_PATHS.ROOT,
    element: <Outlet />,
    children: [
      { index: true, element: <IndexRedirect /> },
      {
        path: ROUTES_PATHS.LOGIN,
        element: <Login />
      },
      {
        element: <PrivateRoutes />,
        children: [
          {
            path: ROUTES_PATHS.DASHBOARD,
            element: <DashBoard />
          }
        ]
      }
    ]
  }
];

const appRoutes = createBrowserRouter(routes);

export default appRoutes;
