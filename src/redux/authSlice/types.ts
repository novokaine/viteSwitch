import type { FETCH_STATE } from "../../const/Loaders";

export interface UserInitialState {
  isUserAuthenticathed: boolean;
  userLoginState: FETCH_STATE;
  accessToken: string | null;
  userData: IUserData | null;
}
