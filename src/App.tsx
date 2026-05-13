import { RouterProvider } from "react-router-dom";
import appRoutes from "./routes";
import { Box, CircularProgress } from "@mui/material";
import { useAuthBootstrap } from "@auth-hooks/useAuthBootstrap";

const App = () => {
  const { isBootstrapping } = useAuthBootstrap();

  if (isBootstrapping) {
    return (
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        minHeight="100vh"
      >
        <CircularProgress />
      </Box>
    );
  }

  return <RouterProvider router={appRoutes} />;
};

export default App;
