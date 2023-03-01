import { configureStore } from "@reduxjs/toolkit";
import newsSlice from "../slices/newsSlice";
import notificationsSlice from "../slices/notificationsSlice";

const store = configureStore({
  reducer: {
    news: newsSlice,
    notifications: notificationsSlice,
  },
});

export default store;
