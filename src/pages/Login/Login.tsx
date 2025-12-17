import { Navigate } from "react-router-dom";

import TextField from "@mui/material/TextField";
import {
  Box,
  Button,
  CircularProgress,
  Container,
  Paper,
  Typography
} from "@mui/material";
import * as Yup from "yup";
import { useFormik } from "formik";
import { useLoginMutation } from "../../api/userApi";
import { useAppSelector } from "../../redux/";
import {
  getAccessToken,
  getUserLoginState
} from "../../redux/authSlice/selectors";
import { LOADING } from "../../const/Loaders";
import ROUTES_PATHS from "../../routes/paths";

const Login = () => {
  const accessToken = useAppSelector(getAccessToken);
  const userState = useAppSelector(getUserLoginState);
  const isUserLoading = userState === LOADING;
  const [onUserLogin] = useLoginMutation();

  const formik = useFormik<IUserLogin>({
    initialValues: {
      username: "sergiu",
      password: "someRandomPassword"
    },
    validationSchema: Yup.object({
      username: Yup.string().required("Username is required"),
      password: Yup.string().required("Password is required")
    }),
    onSubmit: (userData: IUserLogin) => onUserLogin(userData)
  });

  if (accessToken) return <Navigate to={ROUTES_PATHS.DASHBOARD} replace />;

  return (
    <Container
      component="main"
      className="login-wrapper"
      maxWidth="xs"
      sx={{
        display: "flex",
        alignItems: "center",
        height: "100vh",
        justifyContent: "center"
      }}
    >
      {/* <DialogModal
        isOpen={isError}
        dialogTitle="Error"
        dialogText="Authentication error occured"
        handleClose={() => dispatch(updateUserFetchState(IDLE))}
      /> */}
      <Paper elevation={3} sx={{ padding: 3, width: "100%" }}>
        <Typography variant="h5" align="center" gutterBottom>
          Login
        </Typography>
        <form onSubmit={formik.handleSubmit}>
          <TextField
            fullWidth
            id="userName"
            label="Please enter your username*"
            value={formik.values.username}
            onChange={formik.handleChange}
            error={formik.touched.username && Boolean(formik.errors.username)}
            helperText={formik.touched.username && formik.errors.username}
            margin="normal"
            autoComplete="off"
          />
          <TextField
            fullWidth
            type="password"
            id="password"
            label="Please enter your password*"
            value={formik.values.password}
            onChange={formik.handleChange}
            error={formik.touched.password && Boolean(formik.errors.password)}
            helperText={formik.touched.password && formik.errors.password}
            margin="normal"
            autoComplete="off"
          />
          <Box mt={2}>
            <Button
              color="primary"
              fullWidth
              variant="contained"
              type="submit"
              disabled={isUserLoading}
              className="submit"
            >
              <span>Login</span>
              {isUserLoading && (
                <CircularProgress className="spinner" size={20} />
              )}
            </Button>
          </Box>
        </form>
        {/* <Box mt={2} alignContent="end">
          <Stack spacing={5} direction="row" justifyContent="flex-end">
            <Link to={REGISTER}>Register</Link>
            <Link to={FORGOT_PASSWORD}>Forgot password?</Link>
          </Stack>
        </Box> */}
      </Paper>
    </Container>
  );
};

export default Login;
