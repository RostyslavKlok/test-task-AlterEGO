import { Grid } from "@material-ui/core";
import styled from "styled-components";
import appBackground from "./assets/images/appBackground.png";

export const AppWrapper = styled(Grid)`
  width: 100vw;
  height: 100vh;
  background-image: url(${appBackground});
`;
