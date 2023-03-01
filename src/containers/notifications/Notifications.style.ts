import { Grid, Snackbar } from "@material-ui/core";
import styled from "styled-components";

export const SnackbarWrapper = styled(Snackbar)`
  top: 0;
`;

export const AlertWrapper = styled(Grid)`
  display: flex;
  align-items: center;
  width: 100vw;
  height: 72px;
  padding: 16px 40px;
  border-radius: ${(props) => props.theme.borders.borderRadius12};
  & .MuiDivider-root {
    width: 1px;
    height: 40px;
    margin: 0px 24px;
  }
`;

export const AlertErrorWrapper = styled(AlertWrapper)`
  color: ${(props) => props.theme.colors.black};
  background-color: ${(props) => props.theme.colors.danger};
  & .MuiDivider-root {
    background-color: ${(props) => props.theme.colors.black};
  }
`;

export const AlertSuccessWrapper = styled(AlertWrapper)`
  color: ${(props) => props.theme.colors.black};
  background-color: ${(props) => props.theme.colors.success};
  & .MuiDivider-root {
    background-color: ${(props) => props.theme.colors.black};
  }
`;
