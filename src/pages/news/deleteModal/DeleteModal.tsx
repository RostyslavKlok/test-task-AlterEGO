import { Modal, Typography } from "@material-ui/core";
import React from "react";
import { useTranslation } from "react-i18next";
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

  const { t } = useTranslation();

  return (
    <Modal open={isOpenDeleteModal} onClose={handleCloseDeleteModal}>
      <ModalBox>
        <Typography id="modal-title" variant="h6" component="h2">
          {t("deleteModalText")}{" "}
          <span style={{ color: "red" }}>{currentDeletedName}</span> ?
        </Typography>
        <ModalButtonsWrapper>
          <Button
            color={ButtonColorType.outlined}
            type={ButtonType.button}
            variant={ButtonVariantType.outlined}
            onClick={handleCloseDeleteModal}
          >
            {t("newsDeleteModalCancelButton")}
          </Button>
          <Button
            className="delete-news-post-button"
            color={ButtonColorType.contained}
            type={ButtonType.button}
            variant={ButtonVariantType.contained}
            onClick={deletePostHandler}
          >
            {t("newsDeleteModalDeleteButton")}
          </Button>
        </ModalButtonsWrapper>
      </ModalBox>
    </Modal>
  );
};
