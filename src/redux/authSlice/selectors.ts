import type { RootState } from "../types";

export const getUserLoginState = (state: RootState) =>
  state.authSlice.userLoginState;
