import { lazy } from "react";
import PrivateRoutes from "./PrivateRoutes";
import {
  createBrowserRouter,
  Outlet,
  type RouteObject
} from "react-router-dom";
import IndexRedirect from "./IndexRedirect";
import ROUTES_PATHS from "./paths";

type CustomRouteObject = RouteObject & {
  name?: string;
  isAdmin?: boolean;
  children?: CustomRouteObject[];
};

const Login = lazy(() => import("../pages/Login"));
const DashBoard = lazy(() => import("../pages/DashBoard"));

export const routes: CustomRouteObject[] = [
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
            name: "Dashboard",
            isAdmin: false,
            element: <DashBoard />
          }
        ]
      }
    ]
  }
];

const processNavItems = (
  innerRoute: CustomRouteObject[],
  items: { path: string; name: string; isAdmin?: boolean }[]
) => {
  innerRoute.forEach((route) => {
    if (route.name && route.path) {
      items.push({
        path: route.path,
        name: route.name,
        isAdmin: route.isAdmin
      });
    }
    if (route.children) processNavItems(route.children, items);
  });
};

const getNavLinks = (routes: CustomRouteObject[]) => {
  const navItems: { path: string; name: string; isAdmin?: boolean }[] = [];
  processNavItems(routes, navItems);
  return { navItems };
};

export const { navItems } = getNavLinks(routes);

const appRoutes = createBrowserRouter(routes as RouteObject[]);

export default appRoutes;
