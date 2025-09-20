import { useQueryClient, useMutation } from "@tanstack/react-query";
import { AlertAPI } from "../../../../api/Alert";
import { AppMutationKeys, AppQueryKeys } from "../../../../types/AppQueryKeys";

export const useMarkAllAsRead = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: [AppMutationKeys.MARK_ALL_AS_READ],
    mutationFn: AlertAPI.markAllAsRead,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [AppQueryKeys.NOTIFICATIONS, AppQueryKeys.LIMITED_NOTIFICATIONS] });
    },
  });
};