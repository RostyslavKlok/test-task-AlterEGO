import { NewsData } from "./InterfaceNews";
import { NotificationsData } from "./InterfaceNotifications";

export interface Store {
  news: NewsData;
  notifications: NotificationsData;
}
