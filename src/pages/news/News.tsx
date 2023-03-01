import React from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { Button, NewsItem } from "../../components";
import { ButtonType, ButtonVariantType } from "../../const/button";
import { selectNewsPostsData } from "../../redux/selectors";
import { deletePost } from "../../redux/slices";
import { ItemsContainer, NewsPageWrapper } from "./News.style";

export const NewsPage: React.FunctionComponent = () => {
  const dispatch = useDispatch();

  const posts = useSelector(selectNewsPostsData);

  const deletePostHandler = (name: string | undefined) => {
    dispatch(deletePost(name));
  };

  return (
    <NewsPageWrapper>
      <ItemsContainer>
        {posts?.map((post) => (
          <NewsItem
            post={post}
            key={post.name}
            deletePostHandler={deletePostHandler}
          />
        ))}
        <Button
          title="Load posts"
          type={ButtonType.button}
          variant={ButtonVariantType.contained}
        />
      </ItemsContainer>
    </NewsPageWrapper>
  );
};
