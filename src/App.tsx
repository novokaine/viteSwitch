import { RouterProvider } from "react-router-dom";
import appRoutes from "./routes";
import { useGetUserProfileQuery } from "./api/userApi";
import { Box, CircularProgress } from "@mui/material";

const App = () => {
  const { isLoading, isFetching } = useGetUserProfileQuery();

  if (isLoading || isFetching) {
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
