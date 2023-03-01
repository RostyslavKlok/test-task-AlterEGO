import { IconType } from "../const/icons";

export type MessageType = "error" | "success";

export interface NotificationsData {
  message: string;
  messageType: MessageType;
  iconType?: IconType;
}
