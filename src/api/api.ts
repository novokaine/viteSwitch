import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { RootState } from "../redux/types";

export const api = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:8000/api",
    headers: {
      "Content-Type": "application/json"
    },
    prepareHeaders: (headers, { getState }) => {
      const token = (getState() as RootState).authSlice?.accessToken;
      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
      }
      return headers;
    }
  }),
  endpoints: () => ({})
});
