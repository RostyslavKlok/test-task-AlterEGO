import { configureStore } from "@reduxjs/toolkit";
import newsSlice from "../slices/newsSlice";
import notificationsSlice from "../slices/notificationsSlice";
import profileSlice from "../slices/profileSlice";

const store = configureStore({
  reducer: {
    news: newsSlice,
    notifications: notificationsSlice,
    profile: profileSlice,
  },
});

export default store;
