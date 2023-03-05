import { Grid } from "@material-ui/core";
import styled from "styled-components";
import { device } from "../../const/common";

export const NavWrapperDesktop = styled(Grid)`
  width: 100%;
  height: ${(props) => props.theme.componentSizes.navHeight};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-right: 120px;

  @media ${device.laptopM} {
    padding-right: 30px !important;
  }

  @media ${device.tabletS} {
    display: none;
  }
`;

export const NavItemsWrapper = styled(Grid)`
  width: fit-content;
  height: 100%;
  display: flex;
  align-items: center;
`;

export const NavButtonsLangWrapper = styled(Grid)`
  width: fit-content;
  height: 100%;
  display: flex;
  align-items: center;
  margin-left: 80px;

  @media ${device.laptopM} {
    margin-left: 20px !important;
  }

  button {
    margin-left: 10px;

    @media ${device.laptopM} {
      font-size: ${(props) => props.theme.fontSize.fz12} !important;
    }

    @media ${device.tablet} {
      font-size: ${(props) => props.theme.fontSize.fz8} !important;
    }
  }
`;

export const NavItem = styled(Grid)`
  width: fit-content;
  height: fit-content;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: ${(props) => props.theme.borders.borderRadius12} !important;
  background: ${(props) => props.theme.colors.primary} !important;
  margin-left: 70px !important;

  @media ${device.laptopM} {
    margin-left: 30px !important;
  }

  &:hover {
    transition: all 0.3s;
    background: ${(props) => props.theme.colors.primaryHovered} !important;
  }

  & a {
    color: ${(props) => props.theme.colors.black};
    font-size: ${(props) => props.theme.fontSize.fz20};
    font-weight: ${(props) => props.theme.fontWeight.fw600};
    text-decoration: none;
    padding: 7px 47px;

    @media ${device.laptopM} {
      font-size: ${(props) => props.theme.fontSize.fz16};
    }

    @media ${device.tablet} {
      font-size: ${(props) => props.theme.fontSize.fz12} !important;
      padding: 5px 25px;
    }
  }
`;

export const NavWrapperMobile = styled(Grid)`
  width: 100%;
  height: ${(props) => props.theme.componentSizes.navHeightMobile};
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding-right: 40px;
  display: none;

  & > svg {
    fill: ${(props) => props.theme.colors.white};
  }
  & svg path {
    stroke: ${(props) => props.theme.colors.white};
  }

  @media ${device.tabletS} {
    display: flex;
  }
`;

export const NavItemsWrapperMobile = styled(Grid)`
  position: absolute;
  width: 90%;
  height: fit-content;
  padding: 50px 30px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  z-index: 100;
  background: ${(props) => props.theme.colors.primary} !important;
  border-radius: ${(props) => props.theme.borders.borderRadius12};
  top: 80px;
  left: 0;
  right: 0;
  margin-left: auto;
  margin-right: auto;
`;

export const NavItemMobile = styled(Grid)`
  width: fit-content;
  min-width: 150px;
  height: fit-content;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: ${(props) => props.theme.borders.borderRadius12} !important;
  background: ${(props) => props.theme.colors.black} !important;
  margin-bottom: 30px !important;

  &:hover {
    transition: all 0.3s;
    background: ${(props) => props.theme.colors.primaryHovered} !important;
  }

  & a {
    color: ${(props) => props.theme.colors.primary};
    font-size: ${(props) => props.theme.fontSize.fz16};
    font-weight: ${(props) => props.theme.fontWeight.fw600};
    text-decoration: none;
    padding: 5px 24px;
  }
`;

export const NavButtonsLangWrapperMobile = styled(Grid)`
  width: fit-content;
  height: fit-content;
  display: flex;
  align-items: center;

  button {
    margin-left: 10px;
    font-size: ${(props) => props.theme.fontSize.fz8} !important;
  }
`;
