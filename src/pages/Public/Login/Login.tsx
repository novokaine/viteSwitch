import {
  Box,
  Button,
  CircularProgress,
  Container,
  Paper,
  Typography
} from "@mui/material";
import FormTextField from "@components/FormTextField";
import { FormProvider } from "react-hook-form";
import DialogModal from "@components/DialogModal";
import { useLoginForm } from "./hooks";

const Login = () => {
  const { methods, isError, isPending, resetError, handleSubmit } =
    useLoginForm();

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
      <DialogModal
        isOpen={isError}
        dialogTitle="Error"
        dialogText="Authentication error occurred"
        handleClose={resetError}
      />
      <Paper elevation={3} sx={{ padding: 3, width: "100%" }}>
        <Typography variant="h5" align="center" gutterBottom>
          Login
        </Typography>
        <FormProvider {...methods}>
          <form onSubmit={handleSubmit} noValidate>
            <FormTextField
              fullWidth
              name="username"
              label="Please enter your username"
              margin="normal"
              autoComplete="off"
              required
            />
            <FormTextField
              fullWidth
              type="password"
              name="password"
              label="Please enter your password"
              margin="normal"
              autoComplete="off"
              required
            />
            <Box mt={2}>
              <Button
                color="primary"
                fullWidth
                variant="contained"
                type="submit"
                disabled={isPending}
                className="submit"
              >
                <span>Login</span>
                {isPending && (
                  <CircularProgress className="spinner" size={20} />
                )}
              </Button>
            </Box>
          </form>
        </FormProvider>
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
