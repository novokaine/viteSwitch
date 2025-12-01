declare interface RoutesTypes {
  path: string;
  element: JSX.Element;
  children: {
    path: string;
    element: JSX.Element;
  }[];
}
