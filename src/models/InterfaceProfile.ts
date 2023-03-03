export interface ProfileData {
  isAuth: boolean;
  loginErrorMessage: string;
  mockUserCredentials: MockUserCredentialsData;
}

export interface MockUserCredentialsData {
  username: string;
  password: string;
}
