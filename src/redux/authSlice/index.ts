import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { initialState } from "./const";

import type { FETCH_STATE } from "../../const/Loaders";

const authSlice = createSlice({
  initialState,
  name: "authSlice",
  reducers: {
    updateUserLoginState: (
      nextState,
      { payload }: PayloadAction<FETCH_STATE>
    ) => {
      nextState.userLoginState = payload;
    },

    updateAccessToken: (
      nextState,
      { payload }: PayloadAction<string | null>
    ) => {
      nextState.accessToken = payload;
    },

    updateUserData: (
      nextState,
      { payload }: PayloadAction<IUserData | null>
    ) => {
      nextState.userData = payload;
    },
    resetUserData: () => initialState
  }
});

export const {
  updateUserLoginState,
  updateAccessToken,
  updateUserData,
  resetUserData
} = authSlice.actions;
export default authSlice.reducer;
