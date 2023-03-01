import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { Button, NewsItem } from "../../components";
import {
  ButtonColorType,
  ButtonType,
  ButtonVariantType,
} from "../../const/button";
import { NotificationsMessageType } from "../../const/common";
import { IconType } from "../../const/icons";
import { selectNewsPostsData } from "../../redux/selectors";
import { deletePost } from "../../redux/slices";
import { setNotificationAction } from "../../redux/slices/notificationsSlice";
import { NewsDeleteModal } from "./deleteModal";
import { ItemsContainer, NewsPageWrapper } from "./News.style";

export const NewsPage: React.FunctionComponent = () => {
  const dispatch = useDispatch();

  const [isOpenDeleteModal, setIsOpenDeleteModal] = useState<boolean>(false);
  const [currentDeletedName, setCurrentDeletedName] = useState<
    string | undefined
  >("");

  const posts = useSelector(selectNewsPostsData);

  const handleCloseDeleteModal = () => {
    setIsOpenDeleteModal(false);
    setCurrentDeletedName("");
  };

  const openDeletePostModalHandler = (name: string | undefined) => {
    setIsOpenDeleteModal(true);
    setCurrentDeletedName(name);
  };

  const deletePostHandler = () => {
    dispatch(deletePost(currentDeletedName));
    setIsOpenDeleteModal(false);
    dispatch(
      setNotificationAction({
        message: `Post with ${currentDeletedName} was successfully deleted.`,
        iconType: IconType.deleteIcon,
        messageType: NotificationsMessageType.success,
      })
    );
    setCurrentDeletedName("");
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
          {posts?.map((post) => (
            <NewsItem
              post={post}
              key={post.name}
              openDeletePostModalHandler={openDeletePostModalHandler}
            />
          ))}
          <Button
            title="Load posts"
            color={ButtonColorType.primary}
            type={ButtonType.button}
            variant={ButtonVariantType.contained}
          />
        </ItemsContainer>
      </NewsPageWrapper>
    </>
  );
};
