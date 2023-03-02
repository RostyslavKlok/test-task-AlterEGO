import axios from "axios";
import { NotificationsMessageType } from "../const/common";
import { IconType } from "../const/icons";
import {
  setNotificationAction,
  toggleIsDisabledLoadButtonAction,
} from "../redux/slices";

const baseUrl = process.env.REACT_APP_BASIC_API_URL;

const apiRequest = async (
  method: string,
  path: string,
  data: any,
  headers = {},
  dispatch: any
) => {
  try {
    const response = await axios({
      method,
      url: `${baseUrl}${path}`,
      data,
      headers: {
        "Content-type": "application/json",
        Accept: "application/json",
        ...headers,
      },
    });

    return response;
  } catch (error) {
    console.error(`Error with ${method} request to ${path}`, error);
    dispatch(
      setNotificationAction({
        message: `Error with ${method} request to ${path}.`,
        iconType: IconType.errorIcon,
        messageType: NotificationsMessageType.error,
      })
    );
    dispatch(toggleIsDisabledLoadButtonAction(false));
    throw error;
  }
};

export default apiRequest;
