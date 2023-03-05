import { Grid, Snackbar } from "@material-ui/core";
import styled from "styled-components";
import { device } from "../../const/common";

export const SnackbarWrapper = styled(Snackbar)`
  top: 0;

  @media ${device.laptop} {
    width: 100%;
  }

  @media ${device.tablet} {
    width: 97vw !important;
  }
`;

export const AlertWrapper = styled(Grid)`
  display: flex;
  align-items: center;
  width: 100vw;
  height: 72px;
  padding: 16px 40px;
  border-radius: ${(props) => props.theme.borders.borderRadius12};

  @media ${device.tablet} {
    font-size: ${(props) => props.theme.fontSize.fz14};
    padding: 15px 15px;
  }

  @media ${device.mobileL} {
    font-size: ${(props) => props.theme.fontSize.fz12};
  }

  & .MuiDivider-root {
    width: 1px;
    height: 40px;
    margin: 0px 24px;

    @media ${device.tablet} {
      margin: 0px 10px;
    }
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
