import { Button } from "@material-ui/core";
import styled from "styled-components";

export const ButtonWrapper = styled(Button)`
  width: fit-content;
  height: fit-content;
  background-color: ${(props) => props.theme.colors.primary} !important;
  &:hover {
    background-color: ${(props) =>
      props.theme.colors.primaryHovered} !important;
  }

  span {
    font-weight: ${(props) => props.theme.fontWeight.fw600};
  }
`;

export const ButtonContainedWrapper = styled(ButtonWrapper)`
  background-color: ${(props) => props.theme.colors.secondary} !important;
  color: ${(props) => props.theme.colors.white} !important;
  &:hover {
    background-color: ${(props) =>
      props.theme.colors.secondaryHovered} !important;
  }
`;

export const ButtonOutlinedWrapper = styled(ButtonWrapper)`
  &:hover {
    background-color: ${(props) => props.theme.colors.secondary} !important;
    color: ${(props) => props.theme.colors.white} !important;
  }
`;

export const ButtonTextWrapper = styled(ButtonWrapper)`
  &:hover {
    background-color: none !important;
  }
`;
