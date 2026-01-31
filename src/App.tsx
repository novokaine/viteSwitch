import { RouterProvider } from "react-router-dom";
import appRoutes from "./routes";
import { useGetUserProfileQuery } from "./api/userApi";
import { Box, CircularProgress } from "@mui/material";
import ThemeProviderWrapper from "./theme";
// import "./styles/main.scss";

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

  return (
    <ThemeProviderWrapper>
      {/* <div className="light" data-mui-override="true"> */}
      <RouterProvider router={appRoutes} />
      {/* </div> */}
    </ThemeProviderWrapper>
  );
};

export default App;
