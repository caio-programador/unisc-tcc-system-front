import { useQuery } from "@tanstack/react-query";
import type { AxiosError } from "axios";
import { EvaluationAPI } from "../../../../api/Evaluation";
import type { EvaluationResponse } from "../../../../types";
import { AppQueryKeys } from "../../../../types/AppQueryKeys";
import { useHandleError } from "../../../../hooks/use-handle-error";

export const useGetEvaluation = (deliveryId?: number, enabled?: boolean) => {
  const {data, error, isLoading} = useQuery<
    EvaluationResponse[],
    AxiosError
  >({
    queryKey: [AppQueryKeys.EVALUATION, deliveryId],
    queryFn: () => EvaluationAPI.getEvaluationsByDeliveryId(deliveryId!),
    enabled: !!deliveryId && !enabled,
  });

  useHandleError(error);
  
  return { evaluationData: data, isLoading };
}