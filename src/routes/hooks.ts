import { useAuthSession } from "@auth-hooks/useAuthSession";
import { ROUTE_TYPE } from "./const";
import ROUTES_PATHS from "./paths";
const { LOGIN, DASHBOARD } = ROUTES_PATHS;
const { PUBLIC, PRIVATE, ADMIN } = ROUTE_TYPE;

export const useRedirectController = ({ type }: { type: ROUTE_TYPE }) => {
  const { accessToken, userData } = useAuthSession();

  let hasAccess = false;
  let shouldRedirect = false;
  let defaultRedirectPath = LOGIN;

  switch (type) {
    case PUBLIC:
      hasAccess = !accessToken;
      shouldRedirect = !!accessToken;
      defaultRedirectPath = DASHBOARD;
      break;
    case PRIVATE:
      hasAccess = !!accessToken;
      shouldRedirect = !accessToken;
      break;
    case ADMIN:
      hasAccess = !!(accessToken && userData?.isAdmin);
      shouldRedirect = !hasAccess;
      defaultRedirectPath = accessToken ? DASHBOARD : LOGIN;
  }

  return { shouldRedirect, defaultRedirectPath };
};
