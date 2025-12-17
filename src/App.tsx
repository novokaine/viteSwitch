import { RouterProvider } from "react-router-dom";
import appRoutes from "./routes";
import "./App.css";
import { useGetUserProfileQuery } from "./api/userApi";

const App = () => {
  useGetUserProfileQuery();

  return <RouterProvider router={appRoutes} />;
};

export default App;
