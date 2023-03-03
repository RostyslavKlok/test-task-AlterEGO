import { SvgIcon } from "@material-ui/core";
import React from "react";
import {
  ButtonColorType,
  ButtonType,
  ButtonVariantType,
} from "../../const/button";
import { NewsPostsListData } from "../../models/InterfaceNews";
import { Button } from "../button";
import {
  NewsItemDataItem,
  NewsItemDataItemContainer,
  NewsItemHeader,
  NewsItemWrapper,
} from "./NewsItem.style";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import { useTranslation } from "react-i18next";

interface NewsItemProps {
  post: NewsPostsListData;
  openDeletePostModalHandler: (name: string | undefined) => any | undefined;
}

export const NewsItem: React.FunctionComponent<NewsItemProps> = (props) => {
  const { post, openDeletePostModalHandler } = props;
  const { t } = useTranslation();
  return (
    <NewsItemWrapper>
      <NewsItemHeader>
        <NewsItemDataItem>{post?.name}</NewsItemDataItem>
        <Button
          color={ButtonColorType.text}
          type={ButtonType.button}
          variant={ButtonVariantType.text}
          onClick={() => openDeletePostModalHandler(post?.name)}
          startIcon={
            <SvgIcon component={HighlightOffIcon} viewBox="0 0 25 25" />
          }
        >
          {t("newsItemDeleteButton")}
        </Button>
      </NewsItemHeader>
      <NewsItemDataItemContainer>
        <NewsItemDataItem>
          {t("newsItemHeight")}: {post?.height}cm
        </NewsItemDataItem>
        <NewsItemDataItem>
          {t("newsItemMass")}: {post?.mass}kg
        </NewsItemDataItem>
        <NewsItemDataItem>
          {t("newsItemHairColor")}: {post?.hair_color}
        </NewsItemDataItem>
        <NewsItemDataItem>
          {t("newsItemSkinColor")}: {post?.skin_color}
        </NewsItemDataItem>
        <NewsItemDataItem>
          {t("newsItemEyeColor")}: {post?.eye_color}
        </NewsItemDataItem>
        <NewsItemDataItem>
          {t("newsItemBirthYear")}: {post?.birth_year}
        </NewsItemDataItem>
        <NewsItemDataItem>
          {t("newsItemGender")}: {post?.gender}
        </NewsItemDataItem>
      </NewsItemDataItemContainer>
    </NewsItemWrapper>
  );
};
