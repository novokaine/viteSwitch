const externalRoutes = {
  ROOT: "/",
  LOGIN: "/login",
  REGISTER: "/register",
  RESET_PASSWORD: "/reset-password",
  FORGOT_PASSWORD: "/forgot-password"
};

const internalRoutes = {
  DASHBOARD: "/dashboard",
  USER_PROFILE: "/user-profile",
  UPLOAD_PHOTOS: "/upload-photos"
};

const ROUTES_PATHS = {
  ...externalRoutes,
  ...internalRoutes
};

export default ROUTES_PATHS;
