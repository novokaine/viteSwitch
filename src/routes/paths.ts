const externalRoutes = {
  ROOT: "/",
  LOGIN: "/login",
  REGISTER: "/register",
  RESET_PASSWORD: "/reset-password"
};

const internalRoutes = {
  DASHBOARD: "/dashboard",
  USER_PROFILE: "/user-profile"
};

const adminRoutes = {
  UPLOAD_PHOTOS: "/admin/upload-photos",
  USERS: "/admin/users",
  ADD_USER: "/admin/add-user"
};

const ROUTES_PATHS = {
  ...externalRoutes,
  ...internalRoutes
};

export const ADMIN_ROUTES = { ...adminRoutes };

export default ROUTES_PATHS;
