import React, { useState } from "react";
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
import { newsPostItemHelper } from "../../tools/commonHelper";
import { NewsDeleteModal } from "./deleteModal";
import {
  ItemsContainer,
  LoadButtonContainer,
  NewsPageWrapper,
  NoPostsWrapper,
} from "./News.style";

export const NewsPage: React.FunctionComponent = () => {
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
        message: `Post with ${currentDeletedName} was successfully deleted.`,
        iconType: IconType.successIcon,
        messageType: NotificationsMessageType.success,
      })
    );
    setCurrentDeletedName("");
  };

  const loadPostsHandler = async () => {
    dispatch(toggleIsDisabledLoadButtonAction(true));
    const result = await apiRequest(
      "GET",
      `people/${currentPeople}`,
      {},
      {},
      dispatch
    );

    const newObj = newsPostItemHelper(result.data);

    dispatch(addPostToStateAction(newObj));
    setCurrentPeople(currentPeople + 1);
    dispatch(
      setNotificationAction({
        message: `New post was downloaded successfully.`,
        iconType: IconType.successIcon,
        messageType: NotificationsMessageType.success,
      })
    );
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
                key={post.name}
                openDeletePostModalHandler={openDeletePostModalHandler}
              />
            ))
          ) : (
            <NoPostsWrapper>No posts downloaded..</NoPostsWrapper>
          )}
        </ItemsContainer>
        <LoadButtonContainer>
          <Button
            title="Load post"
            color={ButtonColorType.primary}
            type={ButtonType.button}
            variant={ButtonVariantType.contained}
            onClick={loadPostsHandler}
            disabled={isDisabledLoadButton}
          />
        </LoadButtonContainer>
      </NewsPageWrapper>
    </>
  );
};
