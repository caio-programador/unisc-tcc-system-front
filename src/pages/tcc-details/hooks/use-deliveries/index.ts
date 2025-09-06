import { useQuery } from "@tanstack/react-query";
import { DeliverablesAPI } from "../../../../api/Deliverables";
import type { DeliveryTC } from "../../../../types";
import type { AxiosError } from "axios";
import { useHandleError } from "../../../../hooks/use-handle-error";

const getDeliveries = async (tccId?: number) => {
  if (tccId) {
    return DeliverablesAPI.getDeliveriesByTCCId(tccId);
  }
  return DeliverablesAPI.getMyDeliveries();
};

export const useDeliveries = (tccId?: number) => {
  const { data, isLoading, error, refetch } = useQuery<
    DeliveryTC[], 
    AxiosError
  >({
    queryKey: ["deliveries", tccId],
    queryFn: () => getDeliveries(tccId),
  });

  useHandleError(error);

  return { deliveriesData: data, isLoading, refetch };
};
