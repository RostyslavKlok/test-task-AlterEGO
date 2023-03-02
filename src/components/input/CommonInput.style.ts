import { Input, Typography } from "@material-ui/core";
import styled from "styled-components";

interface InputProps {
  error?: boolean;
}

export const InputWrapper = styled(Input)<InputProps>`
  && {
    width: 100%;
    background-color: ${(props) => props.theme.colors.primary} !important;
    font-size: ${(props) => props.theme.fontSize.fz14};
    padding: 0 5px 0 20px;
    height: 46px;
    outline: none;
    border-radius: ${(props) => props.theme.borders.borderRadius12};
    border: 2px solid
      ${(props) =>
        props.error ? props.theme.colors.danger : props.theme.colors.black};
    &:after,
    &:before {
      content: none;
    }

    & input {
      color: ${(props) =>
        props.error ? props.theme.colors.danger : props.theme.colors.black};
      background-color: ${(props) => props.theme.colors.primary} !important;
      outline: none;

      &:autofill {
        box-shadow: 0 0 0px 1000px ${(props) => props.theme.colors.primary}
          inset;
      }
    }
    & > div > svg {
      fill: ${(props) =>
        props.error ? props.theme.colors.danger : props.theme.colors.black};
    }
    & button svg path {
      stroke: ${(props) =>
        props.error ? props.theme.colors.danger : props.theme.colors.black};
    }
    &.Mui-focused {
      & > div > svg path {
        fill: ${(props) =>
          props.error ? props.theme.colors.danger : props.theme.colors.black};
      }
      & button svg path {
        stroke: ${(props) =>
          props.error ? props.theme.colors.danger : props.theme.colors.black};
      }
    }
  }
`;

export const ErrorWrapper = styled(Typography)`
  && {
    color: ${(props) => props.theme.colors.danger};
    ${(props) => props.theme.fontSize.fz14};
  }
`;
