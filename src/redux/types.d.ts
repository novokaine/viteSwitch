import type { configureStore } from "@reduxjs/toolkit";
import type { store } from ".";

declare type RootState = ReturnType<typeof store.getState>;
declare type AppStore = ReturnType<typeof configureStore>;
declare type AppDispatch = AppStore["dispatch"];
