import type { Control } from "react-hook-form";
import type { Alert } from "../../types/Alert";
import type { RouteUrl } from "../../types/Router";
import type { FilterDateFormData } from "./hooks/use-filter-date-form/schema";

export interface NotificationsProps {
  redirect: (path: RouteUrl) => void;
  notifications: Alert[];
  isLoading: boolean;
  onMarkAsRead: (notificationId: number) => void;
  onMarkAllAsRead: () => void;
  onDeleteNotification: (notificationId: number) => void;
  control: Control<FilterDateFormData>;
}

export interface NotificationItemProps {
  notification: Alert;
  onMarkAsRead: (notificationId: number) => void;
  onDelete: (notificationId: number) => void;
}

export interface NotificationHeaderProps {
  redirect: (path: RouteUrl) => void;
  totalNotifications: number;
  unreadCount: number;
  onMarkAllAsRead: () => void;
}

export interface NotificationFiltersProps {
  selectedType: string;
  onTypeChange: (type: string) => void;
  showOnlyUnread: boolean;
  onToggleUnread: (show: boolean) => void;
  control: Control<FilterDateFormData>;
}

export interface DateFilterProps {
  control: Control<FilterDateFormData>;
  label: string;
  id: keyof FilterDateFormData;
};
