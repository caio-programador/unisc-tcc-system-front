import { useAppNavigation } from "../../../hooks/use-app-navigation";
import { useFilterDateForm } from "../hooks/use-filter-date-form";
import { useNotifications } from "../hooks/use-notifications";
import { Notifications } from "../view/notifications.view";

export default function NotificationsController() {
  const { redirect } = useAppNavigation();
  const {
    control,
    watch,
  } = useFilterDateForm();

  const [startDate, endDate] = watch(["startDate", "endDate"]);

  const {
    notifications,
    allNotifications,
    isLoading,
    unreadCount,
    selectedType,
    setSelectedType,
    showOnlyUnread,
    setShowOnlyUnread,
    handleMarkAsRead,
    handleMarkAllAsRead,
    handleDeleteNotification,
  } = useNotifications(startDate, endDate);

  return (
    <Notifications
      redirect={redirect}
      notifications={notifications}
      isLoading={isLoading}
      onMarkAsRead={handleMarkAsRead}
      onMarkAllAsRead={handleMarkAllAsRead}
      onDeleteNotification={handleDeleteNotification}
      totalNotifications={allNotifications.length}
      unreadCount={unreadCount}
      selectedType={selectedType}
      onTypeChange={setSelectedType}
      showOnlyUnread={showOnlyUnread}
      onToggleUnread={setShowOnlyUnread}
      control={control}
    />
  );
}
