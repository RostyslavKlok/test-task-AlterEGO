import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { Button } from "../../components";
import {
  ButtonColorType,
  ButtonType,
  ButtonVariantType,
} from "../../const/button";
import {
  NavButtonsLangWrapper,
  NavItem,
  NavItemsWrapper,
  NavWrapper,
} from "./Nav.style";

interface NavProps {
  isAuth: boolean;
}

export const Nav: React.FunctionComponent<NavProps> = (props) => {
  const { isAuth } = props;
  const { t, i18n } = useTranslation();
  const onChangeLangHandler = (lang: string) => {
    i18n.changeLanguage(lang);
  };
  return (
    <NavWrapper>
      <NavButtonsLangWrapper>
        <Button
          type={ButtonType.button}
          color={ButtonColorType.primary}
          variant={ButtonVariantType.contained}
          onClick={() => onChangeLangHandler("en")}
        >
          ENG
        </Button>
        <Button
          type={ButtonType.button}
          color={ButtonColorType.primary}
          variant={ButtonVariantType.contained}
          onClick={() => onChangeLangHandler("ua")}
        >
          УКР
        </Button>
      </NavButtonsLangWrapper>
      <NavItemsWrapper>
        <NavItem>
          <Link to={"/"}>{t("navHomeButton")}</Link>
        </NavItem>
        <NavItem>
          <Link to={"/news"}>{t("navNewsButton")}</Link>
        </NavItem>
        {isAuth ? (
          <NavItem>
            <Link to={"/profile"}>{t("navProfileButton")}</Link>
          </NavItem>
        ) : (
          <NavItem>
            <Link to={"/sign-in"}>{t("navSignInButton")}</Link>
          </NavItem>
        )}
      </NavItemsWrapper>
    </NavWrapper>
  );
};
