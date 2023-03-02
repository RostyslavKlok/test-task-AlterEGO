import {
  CaseReducer,
  createSlice,
  PayloadAction,
  Slice,
  SliceCaseReducers,
} from "@reduxjs/toolkit";
import { NewsData, NewsPostsListData } from "../../models/InterfaceNews";
import { defaultState } from "../store/initialState";

interface SliceNewsReducer extends SliceCaseReducers<NewsData> {
  addPostToStateAction: CaseReducer<NewsData, PayloadAction<NewsPostsListData>>;
  deletePostAction: CaseReducer<NewsData, PayloadAction<string | undefined>>;
  toggleIsDisabledLoadButtonAction: CaseReducer<
    NewsData,
    PayloadAction<boolean>
  >;
  getNewsPostsAction: CaseReducer<NewsData>;
}

const noStateChange = (state: NewsData) => state;

export const newsSlice: Slice<NewsData, SliceNewsReducer> = createSlice({
  name: "news",
  initialState: defaultState.news,
  reducers: {
    addPostToStateAction: (state, action: PayloadAction<NewsPostsListData>) => {
      state.posts = [...state.posts, action.payload];
    },
    deletePostAction: (state, action: PayloadAction<string | undefined>) => {
      const name = action.payload;
      state.posts = state.posts.filter((post) => post.name !== name);
    },
    toggleIsDisabledLoadButtonAction: (
      state,
      action: PayloadAction<boolean>
    ) => {
      state.isDisabledLoadButton = action.payload;
    },
    // For future redux-saga
    getNewsPostsAction: noStateChange,
  },
});

export const {
  getNewsPostsAction,
  deletePostAction,
  addPostToStateAction,
  toggleIsDisabledLoadButtonAction,
} = newsSlice.actions;

export default newsSlice.reducer;
