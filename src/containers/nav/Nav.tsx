import React, { useEffect, useState } from "react";
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
  NavButtonsLangWrapperMobile,
  NavItem,
  NavItemMobile,
  NavItemsWrapper,
  NavItemsWrapperMobile,
  NavWrapperDesktop,
  NavWrapperMobile,
} from "./Nav.style";
import MenuSharpIcon from "@mui/icons-material/MenuSharp";
import { SvgIcon } from "@material-ui/core";

interface NavProps {
  isAuth: boolean;
}

export const Nav: React.FunctionComponent<NavProps> = (props) => {
  const { isAuth } = props;

  const [isOpenMobileMenu, setIsOpenMobileMenu] = useState<boolean>(false);

  useEffect(() => {}, [isOpenMobileMenu]);

  const { t, i18n } = useTranslation();
  const onChangeLangHandler = (lang: string) => {
    i18n.changeLanguage(lang);
  };
  const onClickMobileMenuHandler = () => {
    setIsOpenMobileMenu(!isOpenMobileMenu);
  };

  return (
    <>
      <NavWrapperDesktop>
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
      </NavWrapperDesktop>
      <NavWrapperMobile>
        <SvgIcon
          component={MenuSharpIcon}
          viewBox="0 0 19 19"
          onClick={onClickMobileMenuHandler}
        />

        {isOpenMobileMenu ? (
          <NavItemsWrapperMobile>
            <NavItemMobile>
              <Link to={"/"} onClick={onClickMobileMenuHandler}>
                {t("navHomeButton")}
              </Link>
            </NavItemMobile>
            <NavItemMobile>
              <Link to={"/news"} onClick={onClickMobileMenuHandler}>
                {t("navNewsButton")}
              </Link>
            </NavItemMobile>
            {isAuth ? (
              <NavItemMobile>
                <Link to={"/profile"} onClick={onClickMobileMenuHandler}>
                  {t("navProfileButton")}
                </Link>
              </NavItemMobile>
            ) : (
              <NavItemMobile>
                <Link to={"/sign-in"} onClick={onClickMobileMenuHandler}>
                  {t("navSignInButton")}
                </Link>
              </NavItemMobile>
            )}
            <NavButtonsLangWrapperMobile>
              <Button
                type={ButtonType.button}
                color={ButtonColorType.contained}
                variant={ButtonVariantType.contained}
                onClick={() => onChangeLangHandler("en")}
              >
                ENG
              </Button>
              <Button
                type={ButtonType.button}
                color={ButtonColorType.contained}
                variant={ButtonVariantType.contained}
                onClick={() => onChangeLangHandler("ua")}
              >
                УКР
              </Button>
            </NavButtonsLangWrapperMobile>
          </NavItemsWrapperMobile>
        ) : null}
      </NavWrapperMobile>
    </>
  );
};
