export interface IAuthResponse {
  accessToken: string,
  refreshToken: string,
  user: IUser
}

export interface IUser {
  email: string,
  id: string,
  name: string
}

export interface ISignUp {
  name: string;
  email: string;
  password: string;
}

export interface ILogIn {
  email: string;
  password: string;
}

export interface INewName {
  newName: string;
}