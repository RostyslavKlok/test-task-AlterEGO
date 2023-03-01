import { Box, Grid } from "@material-ui/core";
import styled from "styled-components";

export const ModalBox = styled(Box)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: ${(props) => props.theme.componentSizes.modalWidthDesktop};
  background-color: ${(props) => props.theme.colors.primary};
  border: 3px solid ${(props) => props.theme.colors.black};
  border-radius: ${(props) => props.theme.borders.borderRadius12};
  box-shadow: 15px 15px 15px 15px rgba(0, 0, 0, 0.5);
  padding: 20px 15px 10px 15px;

  #modal-title {
    text-align: center;
  }
`;

export const ModalButtonsWrapper = styled(Grid)`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-top: 30px;

  button {
    width: 48%;
  }

  .delete-news-post-button:hover {
    background-color: ${(props) => props.theme.colors.danger} !important;
  }
`;
