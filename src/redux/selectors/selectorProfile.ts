import { Store } from "../../models/InterfaceStore";

export const selectIsAuthData = ({ profile }: Store): boolean => profile.isAuth;
export const selectLoginErrorMesage = ({ profile }: Store): string =>
  profile.loginErrorMessage;
