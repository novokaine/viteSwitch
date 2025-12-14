import { RouterProvider } from "react-router-dom";
import appRoutes from "./routes";
import "./App.css";

const App = () => <RouterProvider router={appRoutes} />;

export default App;
