import { useAppSelector } from "../redux";
import {
  getAccessToken,
  getCurrentUserData,
} from "../redux/authSlice/selectors";
import type { ROOTE_TYPE } from "./const";
import ROUTES_PATHS from "./paths";
const { LOGIN, DASHBOARD } = ROUTES_PATHS;

export const useRedirectController = ({ type }: { type: ROOTE_TYPE }) => {
  const accessToken = useAppSelector(getAccessToken);
  const userData = useAppSelector(getCurrentUserData);

  let hasAccess = false;
  let shouldRedirect = false;
  let defaultRedirectPath = LOGIN;

  switch (type) {
    case "public":
      hasAccess = !accessToken;
      shouldRedirect = !!accessToken;
      defaultRedirectPath = DASHBOARD;
      break;
    case "private":
      hasAccess = !!accessToken;
      shouldRedirect = !accessToken;
      break;
    case "admin":
      hasAccess = !!(accessToken && userData?.isAdmin);
      shouldRedirect = !hasAccess;
      defaultRedirectPath = accessToken ? DASHBOARD : LOGIN;
  }

  return { shouldRedirect, defaultRedirectPath };
};
