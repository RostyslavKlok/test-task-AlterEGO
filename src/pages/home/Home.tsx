import React from "react";
import { useTranslation } from "react-i18next";
import { HomePageInfoWrapper, HomePageWrapper } from "./Home.style";

export const HomePage: React.FunctionComponent = () => {
  const { t } = useTranslation();

  return (
    <HomePageWrapper>
      <HomePageInfoWrapper>{t("homePageInfo")}</HomePageInfoWrapper>
    </HomePageWrapper>
  );
};
