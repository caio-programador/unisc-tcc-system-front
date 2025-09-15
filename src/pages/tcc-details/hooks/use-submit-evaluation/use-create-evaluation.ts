import { useMutation, useQueryClient } from "@tanstack/react-query"
import { AppMutationKeys, AppQueryKeys } from "../../../../types/AppQueryKeys"
import { EvaluationAPI } from "../../../../api/Evaluation"

export const useCreateEvaluation = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: [AppMutationKeys.CREATE_EVALUATION],
    mutationFn: EvaluationAPI.createEvaluation,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [AppQueryKeys.EVALUATION] });
      queryClient.refetchQueries({ queryKey: [AppQueryKeys.EVALUATION] });
    },
  })
}