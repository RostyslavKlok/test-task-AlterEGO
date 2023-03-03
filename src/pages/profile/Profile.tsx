import React from "react";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Button } from "../../components";
import {
  ButtonColorType,
  ButtonType,
  ButtonVariantType,
} from "../../const/button";
import { NotificationsMessageType } from "../../const/common";
import { IconType } from "../../const/icons";
import { setIsAuthAction, setNotificationAction } from "../../redux/slices";
import { localStorageHelper } from "../../tools/localStorageHelper";
import {
  ProfilePageTextWrapper,
  ProfilePageWrapper,
  SignOutButtonWrapper,
} from "./Profile.style";

export const ProfilePage: React.FunctionComponent = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { t } = useTranslation();

  const signOutHandler = () => {
    localStorageHelper.set("isAuth", false);
    dispatch(setIsAuthAction(false));
    navigate("/");
    dispatch(
      setNotificationAction({
        message: `${t("profileLoggedOutSuccess")}`,
        iconType: IconType.successIcon,
        messageType: NotificationsMessageType.success,
      })
    );
  };

  return (
    <ProfilePageWrapper>
      <ProfilePageTextWrapper>{t("profileMainText")}</ProfilePageTextWrapper>
      <SignOutButtonWrapper>
        <Button
          color={ButtonColorType.primary}
          type={ButtonType.button}
          variant={ButtonVariantType.contained}
          onClick={signOutHandler}
        >
          {t("profileSignOutButton")}
        </Button>
      </SignOutButtonWrapper>
    </ProfilePageWrapper>
  );
};
