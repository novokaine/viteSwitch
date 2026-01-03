declare interface IUserLogin {
  username: string;
  password: string;
}

declare interface IUserData {
  username: string;
  isAdmin: boolean;
  email: string;
}

declare interface IUserResponse {
  userData: IUserData;
  accessToken: string;
}
