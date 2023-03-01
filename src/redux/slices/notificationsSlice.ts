import {
  SliceCaseReducers,
  createSlice,
  Slice,
  PayloadAction,
  CaseReducer,
} from "@reduxjs/toolkit";
import { NotificationsData } from "../../models/InterfaceNotifications";
import { defaultState } from "../store/initialState";

interface SliceNotificationReducer
  extends SliceCaseReducers<NotificationsData> {
  setNotificationAction: CaseReducer<
    NotificationsData,
    PayloadAction<NotificationsData>
  >;
  clearNotificationAction: CaseReducer;
}

const notificationsSlice: Slice<NotificationsData, SliceNotificationReducer> =
  createSlice({
    initialState: defaultState.notifications,
    name: "notifications",
    reducers: {
      clearNotificationAction: () => defaultState.notifications,
      setNotificationAction: (state, action) => ({
        ...state,
        ...action.payload,
      }),
    },
  });

export const { clearNotificationAction, setNotificationAction } =
  notificationsSlice.actions;

export default notificationsSlice.reducer;
