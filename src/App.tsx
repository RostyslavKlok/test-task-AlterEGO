import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { ThemeProvider } from "styled-components";
import { AppWrapper } from "./App.style";
import { Nav, Notification } from "./containers";
import { selectIsAuthData } from "./redux/selectors";
import { setIsAuthAction } from "./redux/slices/profileSlice";
import AppRoutes from "./Router";
import { GlobalStyle } from "./styledComponents/global";
import { myTheme } from "./styledComponents/theme";
import { localStorageHelper } from "./tools/localStorageHelper";

const App: React.FunctionComponent = () => {
  const dispatch = useDispatch();

  const isAuth = useSelector(selectIsAuthData);

  useEffect(() => {
    const isAuthProfile = localStorageHelper.get("isAuth");
    isAuthProfile === "true"
      ? dispatch(setIsAuthAction(true))
      : dispatch(setIsAuthAction(false));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isAuth]);

  return (
    <ThemeProvider theme={myTheme}>
      <GlobalStyle />
      <Notification />
      <AppWrapper>
        <Nav isAuth={isAuth} />
        <AppRoutes />
      </AppWrapper>
    </ThemeProvider>
  );
};

export default App;
