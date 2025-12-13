import { FETCH_STATE } from "../../const/Loaders";
import type { UserInitialState } from "./types";

export const initialState: UserInitialState = {
  isUserAuthenticathed: false,
  userLoginState: FETCH_STATE.IDLE,
  accessToken: null,
  userData: null
};
