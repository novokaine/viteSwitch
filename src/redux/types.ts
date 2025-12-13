import type { configureStore } from "@reduxjs/toolkit";
import type { store } from ".";

export type RootState = ReturnType<typeof store.getState>;
export type AppStore = ReturnType<typeof configureStore>;
export type AppDispatch = AppStore["dispatch"];
