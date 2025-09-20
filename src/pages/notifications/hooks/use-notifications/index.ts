import { useState, useMemo, useCallback } from "react";
import type { Alert } from "../../../../types/Alert";
import { useQuery } from "@tanstack/react-query";
import type { AxiosError } from "axios";
import { AppQueryKeys } from "../../../../types/AppQueryKeys";
import { AlertAPI } from "../../../../api/Alert";
import { useHandleError } from "../../../../hooks/use-handle-error";
import { useDeleteNotification } from "./use-delete-notification";
import { useMarkAsRead } from "./use-mark-as-read";
import { toaster } from "../../../../utils/toaster";
import { useMarkAllAsRead } from "./use-mark-all-read";

export const useNotifications = (startDate: Date, endDate: Date) => {
  const [selectedType, setSelectedType] = useState<string>("all");
  const [showOnlyUnread, setShowOnlyUnread] = useState(false);

  const {
    data: notifications,
    isLoading,
    error,
  } = useQuery<Alert[], AxiosError>({
    queryKey: [
      AppQueryKeys.NOTIFICATIONS,
      startDate.toISOString(),
      endDate.toISOString(),
    ],
    queryFn: () => AlertAPI.getAlerts(startDate, endDate),
  });

  useHandleError(error);

  const { mutate: markAsReadMutation, isPending: isMarkAsReadPending } =
    useMarkAsRead();
  const {
    mutate: deleteNotificationMutation,
    isPending: isDeleteNotificationPending,
  } = useDeleteNotification();
  const { mutate: markAllAsReadMutation, isPending: isMarkAllAsReadPending } =
    useMarkAllAsRead();

  const filteredNotifications = useMemo(() => {
    let filtered = notifications ?? [];

    if (selectedType !== "all") {
      filtered = filtered.filter(
        (notification) => notification.type === selectedType
      );
    }

    if (showOnlyUnread) {
      filtered = filtered.filter((notification) => !notification.isRead);
    }

    return filtered?.sort(
      (a, b) =>
        new Date(b.generatedAt).getTime() - new Date(a.generatedAt).getTime()
    );
  }, [notifications, selectedType, showOnlyUnread]);

  const unreadCount = useMemo(() => {
    return notifications?.filter((notification) => !notification.isRead).length;
  }, [notifications]);

  const handleMarkAsReadError = useCallback(() => {
    toaster.create({
      closable: true,
      title: "Erro ao marcar notificação como lida",
      description: "Ocorreu um erro ao marcar a notificação como lida.",
      type: "error",
    });
  }, []);

  const handleMarkAsRead = useCallback(
    (notificationId: number) => {
      markAsReadMutation(notificationId, {
        onError: handleMarkAsReadError,
      });
    },
    [handleMarkAsReadError, markAsReadMutation]
  );

  const handleMarkAllAsRead = useCallback(() => {
    markAllAsReadMutation(undefined, {
      onError: handleMarkAsReadError,
    });
  }, [handleMarkAsReadError, markAllAsReadMutation]);

  const handleDeleteNotificationError = useCallback(() => {
    toaster.create({
      closable: true,
      title: "Erro ao excluir notificação",
      description: "Ocorreu um erro ao excluir a notificação.",
      type: "error",
    });
  }, []);

  const handleDeleteNotificationSuccess = useCallback(() => {
    toaster.create({
      closable: true,
      title: "Notificação excluída",
      description: "A notificação foi excluída com sucesso.",
      type: "info",
    });
  }, []);

  const handleDeleteNotification = useCallback(
    (notificationId: number) => {
      deleteNotificationMutation(notificationId, {
        onError: handleDeleteNotificationError,
        onSuccess: handleDeleteNotificationSuccess,
      });
    },
    [
      deleteNotificationMutation,
      handleDeleteNotificationError,
      handleDeleteNotificationSuccess,
    ]
  );

  return {
    notifications: filteredNotifications,
    allNotifications: notifications ?? [],
    isLoading: isLoading || isMarkAsReadPending || isDeleteNotificationPending || isMarkAllAsReadPending,
    unreadCount: unreadCount ?? 0,
    selectedType,
    setSelectedType,
    showOnlyUnread,
    setShowOnlyUnread,
    handleMarkAsRead,
    handleMarkAllAsRead,
    handleDeleteNotification,
  };
};
