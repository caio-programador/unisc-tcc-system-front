import { useMutation, useQueryClient } from "@tanstack/react-query"
import { AppMutationKeys, AppQueryKeys } from "../../../../types/AppQueryKeys"
import { DeliverablesAPI } from "../../../../api/Deliverables"

export const useUpdateDelivery = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: [AppMutationKeys.UPDATE_DELIVERY],
    mutationFn: DeliverablesAPI.updateDelivery,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [AppQueryKeys.DELIVERIES] });
      queryClient.invalidateQueries({ queryKey: [AppQueryKeys.TCC_RELATIONSHIP] });

      queryClient.refetchQueries({ queryKey: [AppQueryKeys.DELIVERIES] });
      queryClient.refetchQueries({ queryKey: [AppQueryKeys.TCC_RELATIONSHIP] });
      window.location.reload();
    },
  })
}