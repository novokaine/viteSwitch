import PrivateRoutes from "./PrivateRoutes";
import {
  createBrowserRouter,
  Outlet,
  type RouteObject
} from "react-router-dom";
import ROUTES_PATHS, { ADMIN_ROUTES } from "./paths";
import AdminRoutes from "./AdminRoutes";
import PublicRoutes from "./PublicRoutes";
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

type CustomRouteObject = RouteObject & {
  name?: string;
  children?: CustomRouteObject[];
};

export const routes: CustomRouteObject[] = [
  {
    path: ROUTES_PATHS.ROOT,
    element: <Outlet />,
    children: [
      // { index: true, element: <IndexRedirect /> },
      {
        element: <PublicRoutes />,
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
        element: <PrivateRoutes />,
        children: [
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
            path: "admin",
            element: <AdminRoutes />,
            children: [
              {
                path: ADMIN_ROUTES.ADD_USER,
                element: <AddUser />
              },
              {
                path: ADMIN_ROUTES.UPLOAD_PHOTOS,
                element: <UploadPhotos />
              },
              {
                path: ADMIN_ROUTES.USERS,
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
        name: route.name
        // isAdmin: route.isAdmin
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
