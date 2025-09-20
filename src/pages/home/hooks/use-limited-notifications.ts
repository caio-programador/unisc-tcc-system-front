import { useQuery } from "@tanstack/react-query";
import type { AxiosError } from "axios";
import type { Alert } from "../../../types";
import { AppQueryKeys } from "../../../types/AppQueryKeys";
import { AlertAPI } from "../../../api/Alert";
import { useHandleError } from "../../../hooks/use-handle-error";

export const useLimitedNotifications = () => {
  const { data, isLoading, error } = useQuery<Alert[], AxiosError>(
    {
      queryKey: [AppQueryKeys.LIMITED_NOTIFICATIONS],
      queryFn: AlertAPI.getLimitAlerts,
    }
  );
  useHandleError(error);

  return {
    notifications: data,
    isLoadingNotifications: isLoading,
  }
};