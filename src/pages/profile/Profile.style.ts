import { Grid } from "@material-ui/core";
import styled from "styled-components";
import profilePageBackground from "../../assets/images/profilePageBackground.png";

export const ProfilePageWrapper = styled(Grid)`
  width: 100%;
  height: calc(100% - ${(props) => props.theme.componentSizes.navHeight});
  background-image: url(${profilePageBackground});
  background-position: left;
  background-repeat: no-repeat, no-repeat;
  background-size: 700px auto;
  transition: all 1.5s;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  padding-right: 120px;
`;

export const ProfilePageTextWrapper = styled(Grid)`
  width: 350px;
  height: fit-content;
  margin-top: 140px;
  padding: 40px;
  background-color: ${(props) => props.theme.colors.primary};
  border-radius: ${(props) => props.theme.borders.borderRadius12};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  font-weight: ${(props) => props.theme.fontWeight.fw600};
  line-height: ${(props) => props.theme.lineHeights.lh24};
`;

export const SignOutButtonWrapper = styled(Grid)`
  width: 350px;
  margin-top: 140px;
  height: fit-content;
  display: flex;
  justify-content: center;
`;
