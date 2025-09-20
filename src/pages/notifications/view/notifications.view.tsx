import {
  Box,
  Stack,
  Text,
  Card,
} from "@chakra-ui/react";
import { NotificationHeader } from "../components/notification-header.component";
import { NotificationFilters } from "../components/notification-filters.component";
import { NotificationItem } from "../components/notification-item.component";
import { NotificationsSkeleton } from "../components/notifications-skeleton.component";
import type { NotificationsProps } from "../types";

export const Notifications = ({
  redirect,
  notifications,
  isLoading,
  onMarkAsRead,
  onMarkAllAsRead,
  onDeleteNotification,
  totalNotifications,
  unreadCount,
  selectedType,
  onTypeChange,
  showOnlyUnread,
  onToggleUnread,
  control,
}: NotificationsProps & {
  totalNotifications: number;
  unreadCount: number;
  selectedType: string;
  onTypeChange: (type: string) => void;
  showOnlyUnread: boolean;
  onToggleUnread: (show: boolean) => void;
}) => {
  if (isLoading) {
    return <NotificationsSkeleton />;
  }

  return (
    <Box p={6} maxW="1000px" mx="auto">
      <NotificationHeader
        redirect={redirect}
        totalNotifications={totalNotifications}
        unreadCount={unreadCount}
        onMarkAllAsRead={onMarkAllAsRead}
      />

      <Box mt={6}>
        <NotificationFilters
          selectedType={selectedType}
          onTypeChange={onTypeChange}
          showOnlyUnread={showOnlyUnread}
          onToggleUnread={onToggleUnread}
          control={control}
        />
      </Box>

      <Box mt={6}>
        {notifications.length > 0 ? (
          <Stack gap={4}>
            {notifications.map((notification) => (
              <NotificationItem
                key={notification.id}
                notification={notification}
                onMarkAsRead={onMarkAsRead}
                onDelete={onDeleteNotification}
              />
            ))}
          </Stack>
        ) : (
          <Card.Root borderRadius="xl" shadow="sm" p={8} textAlign="center">
            <Card.Body>
              <Text fontSize="lg" fontWeight="medium" color="gray.600" mb={2}>
                Nenhuma notificação encontrada
              </Text>
              <Text color="gray.500">
                {showOnlyUnread
                  ? "Você não possui notificações não lidas."
                  : selectedType !== "all"
                  ? "Não há notificações deste tipo."
                  : "Você não possui notificações no momento."}
              </Text>
            </Card.Body>
          </Card.Root>
        )}
      </Box>
    </Box>
  );
};