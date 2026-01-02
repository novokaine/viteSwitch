import { IDLE, LOADING, ERROR, UNAUTHENTICATED } from "../const/Loaders";
import {
  updateAccessToken,
  updateUserData,
  updateUserLoginState
} from "../redux/authSlice";
import { api } from "./api";

export const userApi = api.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation<IUserResponse, IUserLogin>({
      query: ({ username, password }) => ({
        url: "/login",
        method: "POST",
        body: JSON.stringify({ username, password })
      }),
      onQueryStarted: async (_, { queryFulfilled, dispatch }) => {
        dispatch(updateUserLoginState(LOADING));
        try {
          const { data } = await queryFulfilled;
          dispatch(updateAccessToken(data.accessToken));
          dispatch(updateUserData(data.userData));
        } catch {
          dispatch(updateUserLoginState(ERROR));
        }
      }
    }),
    getUserProfile: builder.query<IUserResponse, void>({
      query: () => ({
        url: "/check-auth",
        method: "GET"
      }),
      onQueryStarted: async (_, { queryFulfilled, dispatch }) => {
        dispatch(updateUserLoginState(LOADING));

        try {
          const { data } = await queryFulfilled;
          dispatch(updateAccessToken(data.accessToken));
          dispatch(updateUserData(data.userData));
          dispatch(updateUserLoginState(IDLE));
        } catch {
          dispatch(updateUserLoginState(UNAUTHENTICATED));
          dispatch(updateAccessToken(null));
        }
      }
    })
  })
});

export const { useLoginMutation, useGetUserProfileQuery } = userApi;
