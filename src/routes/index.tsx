import { createBrowserRouter, Outlet } from "react-router-dom";
import ROUTES_PATHS, { ADMIN_ROUTES } from "./paths";
import {
  AddUser,
  DashBoard,
  Login,
  Register,
  ResetPassword,
  UploadPhotos,
  UserProfile,
  Users
} from "./lazyImports";

import LayoutWrapper from "../components/LayoutWrapper";
import AuthGuard from "./AuthGuard";
import { ROOTE_TYPE } from "./const";
import { PaletteExplorer } from "../pages/PaletteExplorer";

const { PUBLIC, PRIVATE, ADMIN } = ROOTE_TYPE;

export const routes: CustomRouteObject[] = [
  {
    path: ROUTES_PATHS.ROOT,
    element: <Outlet />,
    children: [
      {
        element: <AuthGuard type={PUBLIC} />,
        children: [
          {
            path: ROUTES_PATHS.LOGIN,
            element: <Login />
          },
          {
            path: ROUTES_PATHS.REGISTER,
            element: <Register />
          },
          {
            path: ROUTES_PATHS.RESET_PASSWORD,
            element: <ResetPassword />
          }
        ]
      },
      {
        path: ROUTES_PATHS.ROOT,
        element: <AuthGuard type={PRIVATE} Wrapper={LayoutWrapper} />,
        children: [
          {
            path: ROUTES_PATHS.PALETTE_EXPLORER,
            name: "Palette",
            element: <PaletteExplorer />
          },
          {
            path: ROUTES_PATHS.DASHBOARD,
            name: "Dashboard",
            element: <DashBoard />
          },
          {
            path: ROUTES_PATHS.USER_PROFILE,
            name: "Profile",
            element: <UserProfile />
          },
          {
            path: ADMIN,
            element: <AuthGuard type={ADMIN} />,
            isAdmin: true,
            children: [
              {
                path: ADMIN_ROUTES.ADD_USER,
                name: "Add user",
                isAdmin: true,
                element: <AddUser />
              },
              {
                path: ADMIN_ROUTES.UPLOAD_PHOTOS,
                name: "Upload Photos",
                isAdmin: true,
                element: <UploadPhotos />
              },
              {
                path: ADMIN_ROUTES.USERS,
                name: "Users",
                isAdmin: true,
                element: <Users />
              }
            ]
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
        isAdmin: route?.isAdmin
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

const appRoutes = createBrowserRouter(routes);

export default appRoutes;
