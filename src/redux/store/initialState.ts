import { Store } from "../../models/InterfaceStore";

export const defaultState: Store = {
  news: {
    isOpenNotificationsModal: false,
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
};
