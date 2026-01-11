import { lazy } from "react";

// Public routes
export const Login = lazy(() => import("../pages/Public/Login"));
export const Register = lazy(() => import("../pages/Public/Register"));
export const ResetPassword = lazy(
  () => import("../pages/Public/ResetPassword")
);

// Logged in user routes
export const DashBoard = lazy(() => import("../pages/User/DashBoard"));
export const UserProfile = lazy(() => import("../pages/User/Profile"));

// Admin routes
export const UploadPhotos = lazy(() => import("../pages/Admin/UploadPhotos"));
export const Users = lazy(() => import("../pages/Admin/Users"));
export const AddUser = lazy(() => import("../pages/Admin/AddUser"));
