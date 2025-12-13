declare interface IUserLogin {
  username: string;
  password: string;
}

declare interface IUserData {
  userName: string;
  isAdmin: boolean;
  email: string;
}

declare interface IUserResponse {
  userData: IUserData;
  accessToken: string;
}
