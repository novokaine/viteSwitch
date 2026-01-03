import type { RootState } from "../types";

export const getUserLoginState = (state: RootState) =>
  state.authSlice.userLoginState;

export const getAccessToken = (state: RootState) => state.authSlice.accessToken;

export const getCurrentUserData = (state: RootState) =>
  state.authSlice.userData;
