import { Grid, Typography } from "@material-ui/core";
import styled from "styled-components";
import loginBackground1 from "../../assets/images/loginBackground1.png";
import loginBackground2 from "../../assets/images/loginBackground2.png";
import { device } from "../../const/common";

interface InputPasswordTitleProps {
  formikerror?: any;
}

interface LoginButtonsWrapperProps {
  isdisabledsigninbutton?: boolean;
}

interface InputUsernameTitleProps {
  formikerror?: any;
}

export const LoginPageWrapper = styled(Grid)`
  width: 100%;
  height: calc(100% - ${(props) => props.theme.componentSizes.navHeight});
  background-image: url(${loginBackground1}), url(${loginBackground2});
  background-position: left, right;
  background-repeat: no-repeat, no-repeat;
  background-size: 350px auto, 350px auto;
  transition: all 1.5s;
  display: flex;
  justify-content: center;
  align-items: center;

  @media ${device.laptop} {
    background-size: 250px auto, 250px auto;
  }

  @media ${device.tabletS} {
    height: calc(
      100% - ${(props) => props.theme.componentSizes.navHeightMobile}
    );
    background-size: 200px auto, 200px auto;
    background-position: top left, top right;
  }
`;

export const LoginFormWrapper = styled(Grid)`
  width: 415px;
  height: fit-content;
  padding: 24px 55px;
  background-color: ${(props) => props.theme.colors.primary};
  border-radius: ${(props) => props.theme.borders.borderRadius12};

  @media ${device.tabletS} {
    width: 80%;
    padding: 20px 40px;
  }

  @media ${device.mobileL} {
    padding: 15px 20px;
  }
`;

export const ErrorWrapper = styled(Typography)`
  color: ${(props) => props.theme.colors.danger};
  padding: 10px 15px;
  font-weight: ${(props) => props.theme.fontWeight.fw600};
  text-align: center;

  @media ${device.tabletS} {
    font-size: ${(props) => props.theme.fontSize.fz14} !important;
  }
`;

export const InputUsernameWrapper = styled(Grid)`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;

  @media ${device.tabletS} {
    font-size: ${(props) => props.theme.fontSize.fz14} !important;
  }
`;

export const InputUsernameTitle = styled(Typography)<InputUsernameTitleProps>`
  color: ${(props) =>
    props.formikerror ? props.theme.colors.danger : props.theme.colors.black};
  font-weight: ${(props) => props.theme.fontWeight.fw600};

  @media ${device.tabletS} {
    font-size: ${(props) => props.theme.fontSize.fz14} !important;
  }
`;

export const InputPasswordWrapper = styled(Grid)`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;

  @media ${device.tabletS} {
    font-size: ${(props) => props.theme.fontSize.fz14} !important;
  }
`;

export const InputPasswordTitle = styled(Typography)<InputPasswordTitleProps>`
  color: ${(props) =>
    props.formikerror ? props.theme.colors.danger : props.theme.colors.black};
  font-weight: ${(props) => props.theme.fontWeight.fw600};

  @media ${device.tabletS} {
    font-size: ${(props) => props.theme.fontSize.fz14} !important;
  }
`;

export const LoginButtonsWrapper = styled(Grid)<LoginButtonsWrapperProps>`
  width: 100%;
  display: flex;
  justify-content: space-between;

  button {
    width: 48%;

    @media ${device.tabletS} {
      font-size: ${(props) => props.theme.fontSize.fz12} !important;
    }
  }

  .sign-in-button {
    background-color: ${(props) =>
      props.isdisabledsigninbutton
        ? props.theme.colors.primary
        : props.theme.colors.secondary} !important;
    color: ${(props) =>
      props.isdisabledsigninbutton
        ? props.theme.colors.black
        : props.theme.colors.white} !important;
  }
`;
