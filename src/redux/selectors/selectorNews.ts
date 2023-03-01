import { NewsPostsListData } from "../../models/InterfaceNews";
import { Store } from "../../models/InterfaceStore";

export const selectNewsPostsData = ({
  news,
}: Store): NewsPostsListData[] | [] => news.posts;
