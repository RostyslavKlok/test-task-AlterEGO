import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import apiRequest from "../../api";
import { Button, NewsItem } from "../../components";
import {
  ButtonColorType,
  ButtonType,
  ButtonVariantType,
} from "../../const/button";
import { NotificationsMessageType } from "../../const/common";
import { IconType } from "../../const/icons";
import {
  selectIsDisabledLoadButtonData,
  selectNewsPostsData,
} from "../../redux/selectors";
import {
  addPostToStateAction,
  deletePostAction,
  setNotificationAction,
  toggleIsDisabledLoadButtonAction,
} from "../../redux/slices";
import { generateUniqueId, newsPostItemHelper } from "../../tools/commonHelper";
import { NewsDeleteModal } from "./deleteModal";
import {
  ItemsContainer,
  LoadButtonContainer,
  NewsPageWrapper,
  NoPostsWrapper,
} from "./News.style";

export const NewsPage: React.FunctionComponent = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const [currentPeople, setCurrentPeople] = useState<number>(1);
  const [isOpenDeleteModal, setIsOpenDeleteModal] = useState<boolean>(false);
  const [currentDeletedName, setCurrentDeletedName] = useState<
    string | undefined
  >("");

  const posts = useSelector(selectNewsPostsData);
  const isDisabledLoadButton = useSelector(selectIsDisabledLoadButtonData);

  const handleCloseDeleteModal = () => {
    setIsOpenDeleteModal(false);
    setCurrentDeletedName("");
  };

  const openDeletePostModalHandler = (name: string | undefined) => {
    setIsOpenDeleteModal(true);
    setCurrentDeletedName(name);
  };

  const deletePostHandler = () => {
    dispatch(deletePostAction(currentDeletedName));
    setIsOpenDeleteModal(false);
    dispatch(
      setNotificationAction({
        message: `${t("newsPostDeletionStart")} ${currentDeletedName} ${t(
          "newsPostDeletionEnd"
        )}`,
        iconType: IconType.successIcon,
        messageType: NotificationsMessageType.success,
      })
    );
    setCurrentDeletedName("");
  };

  const loadPostsHandler = async () => {
    dispatch(toggleIsDisabledLoadButtonAction(true));
    try {
      const result = await apiRequest("GET", `people/${currentPeople}`, {}, {});
      const newObj = newsPostItemHelper(result.data);

      dispatch(addPostToStateAction({ ...newObj, id: generateUniqueId() }));
      setCurrentPeople(currentPeople + 1);
      dispatch(
        setNotificationAction({
          message: `${t("newsNotificationSuccessFromAPIPostDownloading")}`,
          iconType: IconType.successIcon,
          messageType: NotificationsMessageType.success,
        })
      );
    } catch (error) {
      console.error(error);
      dispatch(
        setNotificationAction({
          message: `${t("newsNotificationErrorFromAPIPostDownloading")}`,
          iconType: IconType.errorIcon,
          messageType: NotificationsMessageType.error,
        })
      );
      dispatch(toggleIsDisabledLoadButtonAction(false));
      throw error;
    }
    dispatch(toggleIsDisabledLoadButtonAction(false));
  };

  return (
    <>
      <NewsDeleteModal
        isOpenDeleteModal={isOpenDeleteModal}
        handleCloseDeleteModal={handleCloseDeleteModal}
        currentDeletedName={currentDeletedName}
        deletePostHandler={deletePostHandler}
      />

      <NewsPageWrapper>
        <ItemsContainer>
          {posts?.length > 0 ? (
            posts?.map((post) => (
              <NewsItem
                post={post}
                key={post.id}
                openDeletePostModalHandler={openDeletePostModalHandler}
              />
            ))
          ) : (
            <NoPostsWrapper>{t("newsPageNoPostsDownloaded")}</NoPostsWrapper>
          )}
        </ItemsContainer>
        <LoadButtonContainer>
          <Button
            color={ButtonColorType.primary}
            type={ButtonType.button}
            variant={ButtonVariantType.contained}
            onClick={loadPostsHandler}
            disabled={isDisabledLoadButton}
          >
            {t("newsLoadPostButton")}
          </Button>
        </LoadButtonContainer>
      </NewsPageWrapper>
    </>
  );
};
