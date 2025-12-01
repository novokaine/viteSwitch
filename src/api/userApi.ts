import { FETCH_STATE } from "../const/Loaders";
import { updateUserLoginState } from "../redux/authSlice";
import { api } from "./api";

export const userApi = api.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.query<void, IUserLogin>({
      query: ({ username, password }) => ({
        url: "/login",
        method: "POST",
        body: JSON.stringify({ username, password })
      }),
      onQueryStarted: (_, { queryFulfilled, dispatch }) => {
        dispatch(updateUserLoginState(FETCH_STATE.LOADING));
        try {
          const data = queryFulfilled;
          console.log(data);
        } catch {
          dispatch(updateUserLoginState(FETCH_STATE.ERROR));
          return;
        } finally {
          dispatch(updateUserLoginState(FETCH_STATE.IDLE));
        }
      }
    })
  })
});

export const { useLazyLoginQuery } = userApi;
