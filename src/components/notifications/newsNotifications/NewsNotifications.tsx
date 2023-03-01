import React from "react";
// import { Snackbar } from "material-ui";
import { useSelector } from "react-redux";
import { selectIsOpenNotificationsModalNews } from "../../../redux/selectors";

export const NewsNotifications: React.FunctionComponent = () => {
  // create object in state with info about notification or error (message, isOpen, success/error modal)
  const isOpen = useSelector(selectIsOpenNotificationsModalNews);
  console.log(isOpen);
  // return <Snackbar open={isOpen} />;
  return <div></div>;
};
