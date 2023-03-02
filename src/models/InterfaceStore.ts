import { NewsData } from "./InterfaceNews";
import { NotificationsData } from "./InterfaceNotifications";
import { ProfileData } from "./InterfaceProfile";

export interface Store {
  news: NewsData;
  notifications: NotificationsData;
  profile: ProfileData;
}
