import { useMutation, useQueryClient } from "@tanstack/react-query"
import { AppMutationKeys, AppQueryKeys } from "../../../../types/AppQueryKeys"
import { EvaluationAPI } from "../../../../api/Evaluation"

export const useUpdateEvaluation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: [AppMutationKeys.UPDATE_EVALUATION],
    mutationFn: EvaluationAPI.updateEvaluation,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [AppQueryKeys.EVALUATION] });
      queryClient.refetchQueries({ queryKey: [AppQueryKeys.EVALUATION] });
    }
  })
}