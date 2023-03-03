import { IconType } from "../const/icons";

export type MessageType = "error" | "success";

export interface NotificationsData {
  message: any;
  messageType: MessageType;
  iconType?: IconType;
}
