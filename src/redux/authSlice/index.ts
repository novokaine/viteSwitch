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
    }
  }
});

export const { updateUserLoginState } = authSlice.actions;
export default authSlice.reducer;
