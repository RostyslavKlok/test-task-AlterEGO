import { Grid } from "@material-ui/core";
import styled from "styled-components";

export const NavWrapper = styled(Grid)`
  width: 100%;
  height: ${(props) => props.theme.componentSizes.navHeight};
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding-right: 120px;
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
  }
`;
