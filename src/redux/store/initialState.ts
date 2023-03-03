import { NotificationsMessageType } from "../../const/common";
import { IconType } from "../../const/icons";
import { Store } from "../../models/InterfaceStore";

export const defaultState: Store = {
  news: {
    posts: [],
    isDisabledLoadButton: false,
  },
  notifications: {
    message: "",
    messageType: NotificationsMessageType.error,
    iconType: IconType.errorIcon,
  },
  profile: {
    isAuth: false,
    loginErrorMessage: "",
    mockUserCredentials: {
      username: "admin",
      password: "12345",
    },
  },
};
