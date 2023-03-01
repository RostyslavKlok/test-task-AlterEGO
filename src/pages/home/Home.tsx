import React from "react";
import { HomePageInfo } from "../../const/homePage";
import { HomePageInfoWrapper, HomePageWrapper } from "./Home.style";

export const HomePage: React.FunctionComponent = () => {
  return (
    <HomePageWrapper>
      <HomePageInfoWrapper>{HomePageInfo.text}</HomePageInfoWrapper>
    </HomePageWrapper>
  );
};
