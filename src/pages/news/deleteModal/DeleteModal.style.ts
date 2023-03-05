import { Box, Grid } from "@material-ui/core";
import styled from "styled-components";
import { device } from "../../../const/common";

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

  @media ${device.tablet} {
    width: 80%;
  }

  #modal-title {
    text-align: center;

    @media ${device.tablet} {
      font-size: ${(props) => props.theme.fontSize.fz16};
    }
  }
`;

export const ModalButtonsWrapper = styled(Grid)`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-top: 30px;

  button {
    width: 48%;

    @media ${device.tabletS} {
      font-size: ${(props) => props.theme.fontSize.fz12};
    }

    @media ${device.mobileL} {
      font-size: ${(props) => props.theme.fontSize.fz10};
    }
  }

  .delete-news-post-button:hover {
    background-color: ${(props) => props.theme.colors.danger} !important;
  }
`;
