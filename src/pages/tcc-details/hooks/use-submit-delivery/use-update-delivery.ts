import { useMutation } from "@tanstack/react-query"
import { AppMutationKeys } from "../../../../types/AppQueryKeys"
import { DeliverablesAPI } from "../../../../api/Deliverables"

export const useUpdateDelivery = () => {
  return useMutation({
    mutationKey: [AppMutationKeys.UPDATE_DELIVERY],
    mutationFn: DeliverablesAPI.updateDelivery, 
  })
}