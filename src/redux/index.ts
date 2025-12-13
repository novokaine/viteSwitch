import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./authSlice";
import { api } from "../api/api";
import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "./types";
import { createLogger } from "redux-logger";

export const store = configureStore({
  reducer: {
    authSlice,
    [api.reducerPath]: api.reducer
  },
  middleware: (getDefaultMiddleware) => {
    const middlewares = getDefaultMiddleware().concat(api.middleware);

    if (import.meta.env.MODE === "development") {
      middlewares.push(createLogger({ collapsed: true }));
    }

    return middlewares;
  }
});

export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();
