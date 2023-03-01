import {
  CaseReducer,
  createSlice,
  PayloadAction,
  Slice,
  SliceCaseReducers,
} from "@reduxjs/toolkit";
import { NewsData } from "../../models/InterfaceNews";
import { defaultState } from "../store/initialState";

interface SliceNewsReducer extends SliceCaseReducers<NewsData> {
  deletePost: CaseReducer<NewsData, PayloadAction<string | undefined>>;
  getNewsPosts: CaseReducer<NewsData>;
}

const noStateChange = (state: NewsData) => state;

export const newsSlice: Slice<NewsData, SliceNewsReducer> = createSlice({
  name: "news",
  initialState: defaultState.news,
  reducers: {
    // increment: (state) => {
    //   state.value += 1;
    // },
    deletePost: (state, action: PayloadAction<string | undefined>) => {
      const name = action.payload;
      state.posts = state.posts.filter((post) => post.name !== name);
    },
    getNewsPosts: noStateChange,
  },
});

export const { getNewsPosts, deletePost } = newsSlice.actions;

export default newsSlice.reducer;
