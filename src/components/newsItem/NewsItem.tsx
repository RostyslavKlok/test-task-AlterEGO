import React from "react";
import {
  ButtonColorType,
  ButtonType,
  ButtonVariantType,
} from "../../const/button";
import { IconType } from "../../const/icons";
import { NewsPostsListData } from "../../models/InterfaceNews";
import { Button } from "../button";
import { CommonIcon } from "../icon";
import {
  NewsItemDataItem,
  NewsItemDataItemContainer,
  NewsItemHeader,
  NewsItemWrapper,
} from "./NewsItem.style";

interface NewsItemProps {
  post: NewsPostsListData;
  openDeletePostModalHandler: (name: string | undefined) => any | undefined;
}

export const NewsItem: React.FunctionComponent<NewsItemProps> = (props) => {
  const { post, openDeletePostModalHandler } = props;
  return (
    <NewsItemWrapper>
      <NewsItemHeader>
        <NewsItemDataItem>{post?.name}</NewsItemDataItem>
        <Button
          title={"Delete"}
          color={ButtonColorType.text}
          type={ButtonType.button}
          variant={ButtonVariantType.text}
          onClick={() => openDeletePostModalHandler(post?.name)}
          startIcon={<CommonIcon type={IconType.deleteIcon} />}
        />
      </NewsItemHeader>
      <NewsItemDataItemContainer>
        <NewsItemDataItem>Height: {post?.height}cm</NewsItemDataItem>
        <NewsItemDataItem>Mass: {post?.mass}kg</NewsItemDataItem>
        <NewsItemDataItem>Hair color: {post?.hair_color}</NewsItemDataItem>
        <NewsItemDataItem>Skin color: {post?.skin_color}</NewsItemDataItem>
        <NewsItemDataItem>Eye color: {post?.eye_color}</NewsItemDataItem>
        <NewsItemDataItem>Birth year: {post?.birth_year}</NewsItemDataItem>
        <NewsItemDataItem>Gender: {post?.gender}</NewsItemDataItem>
      </NewsItemDataItemContainer>
    </NewsItemWrapper>
  );
};
