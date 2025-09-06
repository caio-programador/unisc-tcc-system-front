import { useMutation } from "@tanstack/react-query";
import { AppMutationKeys } from "../../../../types/AppQueryKeys";
import { DeliverablesAPI } from "../../../../api/Deliverables";

export const useCreateDelivery = () => {
  return useMutation({
    mutationKey: [AppMutationKeys.CREATE_DELIVERY],
    mutationFn: DeliverablesAPI.createDelivery,
  });
};