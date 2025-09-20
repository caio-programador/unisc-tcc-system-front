import { useMutation, useQueryClient } from "@tanstack/react-query";
import { AppMutationKeys, AppQueryKeys } from "../../../../types/AppQueryKeys";
import { AlertAPI } from "../../../../api/Alert";

export const useDeleteNotification = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: [AppMutationKeys.DELETE_NOTIFICATION],
    mutationFn: AlertAPI.deleteAlert,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [AppQueryKeys.NOTIFICATIONS] });
      queryClient.invalidateQueries({ queryKey: [AppQueryKeys.LIMITED_NOTIFICATIONS] })
    },
  });
};
