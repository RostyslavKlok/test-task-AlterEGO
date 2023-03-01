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
`;

export const ItemsContainer = styled(Grid)`
  width: 473px;
  height: 90%;
  overflow: scroll;
  display: flex;
  flex-direction: column;

  button {
    margin: 0 auto;
  }
`;
