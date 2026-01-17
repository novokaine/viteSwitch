declare interface RoutesTypes {
  path: string;
  element: JSX.Element;
  children: {
    path: string;
    element: JSX.Element;
  }[];
}

declare type CustomRouteObject = RouteObject & {
  name?: string;
  children?: CustomRouteObject[];
  isAdmin?: boolean;
};
