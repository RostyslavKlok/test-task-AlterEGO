import { Modal, Typography } from "@material-ui/core";
import React from "react";
import { Button } from "../../../components";
import {
  ButtonColorType,
  ButtonType,
  ButtonVariantType,
} from "../../../const/button";
import { ModalBox, ModalButtonsWrapper } from "./DeleteModal.style";

interface NewsDeleteModalProps {
  isOpenDeleteModal: boolean;
  handleCloseDeleteModal: () => void | undefined;
  currentDeletedName: string | undefined;
  deletePostHandler: () => void;
}

export const NewsDeleteModal: React.FunctionComponent<NewsDeleteModalProps> = (
  props
) => {
  const {
    isOpenDeleteModal,
    handleCloseDeleteModal,
    currentDeletedName,
    deletePostHandler,
  } = props;

  return (
    <Modal open={isOpenDeleteModal} onClose={handleCloseDeleteModal}>
      <ModalBox>
        <Typography id="modal-title" variant="h6" component="h2">
          Are you sure you want to delete post with{" "}
          <span style={{ color: "red" }}>{currentDeletedName}</span> ?
        </Typography>
        <ModalButtonsWrapper>
          <Button
            title={"Cancel"}
            color={ButtonColorType.outlined}
            type={ButtonType.button}
            variant={ButtonVariantType.outlined}
            onClick={handleCloseDeleteModal}
          />
          <Button
            className="delete-news-post-button"
            title={"Delete"}
            color={ButtonColorType.contained}
            type={ButtonType.button}
            variant={ButtonVariantType.contained}
            onClick={deletePostHandler}
          />
        </ModalButtonsWrapper>
      </ModalBox>
    </Modal>
  );
};
