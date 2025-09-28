import { useMutation, useQueryClient } from "@tanstack/react-query";
import { AppMutationKeys, AppQueryKeys } from "../../../../types/AppQueryKeys";
import { DeliverablesAPI } from "../../../../api/Deliverables";

export const useCreateDelivery = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: [AppMutationKeys.CREATE_DELIVERY],
    mutationFn: DeliverablesAPI.createDelivery,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [AppQueryKeys.DELIVERIES] });
      queryClient.invalidateQueries({ queryKey: [AppQueryKeys.TCC_RELATIONSHIP] });
      queryClient.refetchQueries({ queryKey: [AppQueryKeys.DELIVERIES] });
      queryClient.refetchQueries({ queryKey: [AppQueryKeys.TCC_RELATIONSHIP] });
      window.location.reload();
    },
  });
};