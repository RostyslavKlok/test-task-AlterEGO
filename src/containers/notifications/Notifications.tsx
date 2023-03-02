import React, { memo, useEffect, useState } from "react";
import { Divider } from "@material-ui/core";
import { CommonIcon } from "../../components";
import { NOTIFICATION_CLICK_AWAY } from "../../const/common";
import { IconType } from "../../const/icons";
import { handlerNotificationsAlertWrapper } from "../../tools/wrappersHelper";
import { SnackbarWrapper } from "./Notifications.style";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { selectNotificationsData } from "../../redux/selectors";
import { clearNotificationAction } from "../../redux/slices";

export const Notification: React.FunctionComponent = memo(() => {
  const dispatch = useDispatch();

  const [open, setOpen] = useState<boolean>(false);
  const [message, setMessage] = useState<string>("");

  const notificationsData = useSelector(selectNotificationsData);

  useEffect(() => {
    if (notificationsData?.message) {
      setOpen(true);
      setMessage(notificationsData?.message);
    }
  }, [notificationsData]);

  const CurrentAlertWrapper = handlerNotificationsAlertWrapper(
    notificationsData.messageType
  );

  const handleClose = (_: any, reason: string) => {
    if (reason === NOTIFICATION_CLICK_AWAY) {
      return;
    }
    setOpen(false);
    setTimeout(() => dispatch(clearNotificationAction()), 200);
  };

  return (
    <SnackbarWrapper
      open={open}
      autoHideDuration={5000}
      onClose={handleClose}
      anchorOrigin={{ vertical: "top", horizontal: "center" }}
    >
      <CurrentAlertWrapper container>
        <CommonIcon type={notificationsData.iconType as IconType} />
        <Divider />
        {message}
      </CurrentAlertWrapper>
    </SnackbarWrapper>
  );
});
