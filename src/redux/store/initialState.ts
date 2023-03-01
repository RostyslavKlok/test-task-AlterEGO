import { NotificationsMessageType } from "../../const/common";
import { IconType } from "../../const/icons";
import { Store } from "../../models/InterfaceStore";

export const defaultState: Store = {
  news: {
    posts: [
      {
        name: "Luke Skywalker",
        height: "172",
        mass: "77",
        hair_color: "blond",
        skin_color: "fair",
        eye_color: "blue",
        birth_year: "19BBY",
        gender: "male",
      },
      {
        name: "LukeSkywalker",
        height: "172",
        mass: "77",
        hair_color: "blond",
        skin_color: "fair",
        eye_color: "blue",
        birth_year: "19BBY",
        gender: "male",
      },
    ],
  },
  notifications: {
    message: "",
    messageType: NotificationsMessageType.error,
    iconType: IconType.deleteIcon,
  },
};
