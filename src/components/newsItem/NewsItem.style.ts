import { Grid, Typography } from "@material-ui/core";
import styled from "styled-components";
import { device } from "../../const/common";

export const NewsItemWrapper = styled(Grid)`
  width: 100%;
  height: fit-content;
  border-radius: ${(props) => props.theme.borders.borderRadius12};
  background-color: ${(props) => props.theme.colors.primary};
  padding: 15px 10px 10px 45px;
  margin-bottom: 32px;
`;

export const NewsItemHeader = styled(Grid)`
  width: 100%;
  height: fit-content;
  position: relative;

  @media ${device.tabletS} {
    margin-bottom: 10px;
  }

  p {
    font-weight: ${(props) => props.theme.fontWeight.fw800} !important;
    line-height: ${(props) => props.theme.lineHeights.lh17} !important;
    font-size: ${(props) => props.theme.fontSize.fz16} !important;
    width: fit-content;
    position: absolute;
    left: 0;
    right: 0;
    margin-left: auto;
    margin-right: auto;

    @media ${device.tabletS} {
      margin: 0;
      left: 0;
      font-size: ${(props) => props.theme.fontSize.fz12} !important;
    }
  }

  button {
    position: absolute;
    top: 0;
    right: 0;

    @media ${device.tabletS} {
      font-size: ${(props) => props.theme.fontSize.fz10};
    }
  }
`;

export const NewsItemDataItemContainer = styled(Grid)`
  margin-top: 30px;
`;

export const NewsItemDataItem = styled(Typography)`
  font-weight: ${(props) => props.theme.fontWeight.fw600} !important;
  line-height: ${(props) => props.theme.lineHeights.lh28} !important;
  font-size: ${(props) => props.theme.fontSize.fz12} !important;

  @media ${device.tabletS} {
    font-size: ${(props) => props.theme.fontSize.fz10} !important;
  }
`;
