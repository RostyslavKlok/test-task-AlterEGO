import React from "react";
import { ThemeProvider } from "styled-components";
import { AppWrapper } from "./App.style";
import { Nav } from "./containers";
import AppRoutes from "./Router";
import { GlobalStyle } from "./styledComponents/global";
import { myTheme } from "./styledComponents/theme";

const App: React.FunctionComponent = () => {
  return (
    <ThemeProvider theme={myTheme}>
      <GlobalStyle />
      <AppWrapper>
        <Nav />
        <AppRoutes />
      </AppWrapper>
    </ThemeProvider>
  );
};

export default App;
