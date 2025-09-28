import { useMutation } from "@tanstack/react-query"
import { AppMutationKeys } from "../../../../types/AppQueryKeys"
import { EvaluationAPI } from "../../../../api/Evaluation"

export const useCreateEvaluation = () => {
  return useMutation({
    mutationKey: [AppMutationKeys.CREATE_EVALUATION],
    mutationFn: EvaluationAPI.createEvaluation,
    onSuccess: () => {
      window.location.reload();
    },
  })
}