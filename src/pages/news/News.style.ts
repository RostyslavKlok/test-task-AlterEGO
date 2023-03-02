import { Grid } from "@material-ui/core";
import styled from "styled-components";
import newsPageBackground from "../../assets/images/newsPageBackground.png";

export const NewsPageWrapper = styled(Grid)`
  width: 100%;
  height: calc(100% - ${(props) => props.theme.componentSizes.navHeight});
  background-image: url(${newsPageBackground});
  background-repeat: no-repeat;
  background-position: center center;
  background-size: 100% auto;
  padding-left: 120px;
  display: flex;
  flex-direction: column;
`;

export const ItemsContainer = styled(Grid)`
  width: 473px;
  height: fit-content;
  max-height: 80%;
  min-height: 150px;
  overflow: scroll;
  display: flex;
  flex-direction: column;
`;

export const LoadButtonContainer = styled(Grid)`
  width: 473px;
  height: 10%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const NoPostsWrapper = styled(Grid)`
  width: 100%;
  height: fit-content;
  padding: 30px;
  margin-top: 20px;
  background-color: ${(props) => props.theme.colors.primary};
  border-radius: ${(props) => props.theme.borders.borderRadius12};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  font-weight: ${(props) => props.theme.fontWeight.fw600};
  line-height: ${(props) => props.theme.lineHeights.lh24};
`;
