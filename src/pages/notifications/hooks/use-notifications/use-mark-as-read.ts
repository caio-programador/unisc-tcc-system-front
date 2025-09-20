import { useQueryClient, useMutation } from "@tanstack/react-query";
import { AlertAPI } from "../../../../api/Alert";
import { AppMutationKeys, AppQueryKeys } from "../../../../types/AppQueryKeys";

export const useMarkAsRead = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: [AppMutationKeys.MARK_AS_READ],
    mutationFn: AlertAPI.markAsRead,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [AppQueryKeys.NOTIFICATIONS] });
    },
  });
};