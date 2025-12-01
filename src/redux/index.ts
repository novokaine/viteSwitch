import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./authSlice";
import { api } from "../api/api";
import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "./types";

export const store = configureStore({
  reducer: {
    authSlice,
    [api.reducerPath]: api.reducer
  }
});

export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();
