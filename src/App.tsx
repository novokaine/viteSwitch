import { useRoutes } from "react-router-dom";
import appRoutes from "./routes";
import "./App.css";

const App = () => {
  return useRoutes(appRoutes);
  // return <p>here soon</p>;
};

export default App;
