import { Grid } from "@material-ui/core";
import styled from "styled-components";
import mainPageBackground from "../../assets/images/mainPageBackground.png";

export const HomePageWrapper = styled(Grid)`
  width: 100%;
  height: calc(100% - ${(props) => props.theme.componentSizes.navHeight});
  background-image: url(${mainPageBackground});
  background-position: top left;
  background-repeat: no-repeat, no-repeat;
  background-size: 700px 600px;
  transition: all 1.5s;
  display: flex;
  justify-content: flex-end;
  padding-right: 120px;
`;

export const HomePageInfoWrapper = styled(Grid)`
  width: 497px;
  height: fit-content;
  padding: 40px;
  margin-top: 120px;
  background-color: ${(props) => props.theme.colors.primary};
  border-radius: ${(props) => props.theme.borders.borderRadius12};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  font-weight: ${(props) => props.theme.fontWeight.fw600};
  line-height: ${(props) => props.theme.lineHeights.lh24};
`;
