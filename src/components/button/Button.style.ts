import { Button } from "@material-ui/core";
import styled from "styled-components";

export const ButtonWrapper = styled(Button)`
  width: fit-content;
  height: fit-content;

  span {
    font-weight: ${(props) => props.theme.fontWeight.fw600};
  }
`;
