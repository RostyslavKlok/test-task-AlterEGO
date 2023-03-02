import {
  CaseReducer,
  createSlice,
  PayloadAction,
  Slice,
  SliceCaseReducers,
} from "@reduxjs/toolkit";
import { ProfileData } from "../../models/InterfaceProfile";
import { defaultState } from "../store/initialState";

interface SliceProfileReducer extends SliceCaseReducers<ProfileData> {
  setIsAuthAction: CaseReducer<ProfileData, PayloadAction<boolean>>;
}

const profileSlice: Slice<ProfileData, SliceProfileReducer> = createSlice({
  initialState: defaultState.profile,
  name: "profile",
  reducers: {
    setIsAuthAction: (state, action: PayloadAction<boolean>) => {
      state.isAuth = action.payload;
    },
  },
});

export const { setIsAuthAction } = profileSlice.actions;

export default profileSlice.reducer;
