import { NotificationsData } from "../../models/InterfaceNotifications";
import { Store } from "../../models/InterfaceStore";

export const selectNotificationsData = ({
  notifications,
}: Store): NotificationsData => notifications;
