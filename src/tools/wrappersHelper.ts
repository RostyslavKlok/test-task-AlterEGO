import {
  ButtonOutlinedWrapper,
  ButtonContainedWrapper,
  ButtonWrapper,
  ButtonTextWrapper,
} from "../components/button/Button.style";
import {
  AlertErrorWrapper,
  AlertSuccessWrapper,
  AlertWrapper,
} from "../containers/notifications/Notifications.style";
import { MessageType } from "../models/InterfaceNotifications";

export const handlerButtonWrapper = (color: string | undefined) => {
  if (color === "contained") {
    return ButtonContainedWrapper;
  }

  if (color === "outlined") {
    return ButtonOutlinedWrapper;
  }

  if (color === "text") {
    return ButtonTextWrapper;
  }

  return ButtonWrapper;
};

export const handlerNotificationsAlertWrapper = (messageType: MessageType) => {
  if (messageType === "error") {
    return AlertErrorWrapper;
  }

  if (messageType === "success") {
    return AlertSuccessWrapper;
  }

  return AlertWrapper;
};

export const capitalizeFirstLetter = (str: string) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};
