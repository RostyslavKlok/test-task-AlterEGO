export interface NewsData {
  posts: NewsPostsListData[] | [];
  isDisabledLoadButton: boolean;
}

export interface NewsPostsListData {
  name?: string;
  height?: string;
  mass?: string;
  hair_color?: string;
  skin_color?: string;
  eye_color?: string;
  birth_year?: string;
  gender?: string;
  id?: string;
}
