import { useCallback } from "react";
import { useCreateEvaluation } from "./use-create-evaluation";
import { toaster } from "../../../../utils/toaster";
import type { EvaluationFormData } from "../use-evaluation-form/schema";
import { useUpdateEvaluation } from "./use-update-evaluation";
import type { EvaluationBody } from "../../../../types";

export const useSubmitEvaluation = () => {
  const { mutate: createEvaluation, isPending: isCreating } =
    useCreateEvaluation();
  const { mutate: updateEvaluation, isPending: isUpdating } =
    useUpdateEvaluation();

  const handleError = useCallback(() => {
    toaster.create({
      closable: true,
      type: "error",
      title: "Erro ao enviar avaliação.",
      description: "Tente novamente agora ou mais tarde.",
    });
  }, []);

  const handleSuccess = useCallback(() => {
    toaster.create({
      closable: true,
      type: "success",
      title: "Avaliação enviada com sucesso!",
      description: "O aluno já pode visualizar sua avaliação.",
    });
  }, []);

  const submitEvaluation = useCallback(
    (
      data: EvaluationFormData,
      deliveryId?: number,
      thereIsEvaluationData?: boolean,
      evaluationId?: number
    ) => {
      const evaluationBody: EvaluationBody = {
        deliveryId: deliveryId!,
        introduction: Number(data.introduction.replace(',', '.')),
        bibliographyRevision: Number(data.bibliographyRevision.replace(',', '.')),
        goals: Number(data.goals.replace(',', '.')),
        methodology: Number(data.methodology.replace(',', '.')),
        comments: data.comments,
      };

      if (thereIsEvaluationData) {
        updateEvaluation(
          { body: evaluationBody, evaluationId: evaluationId! },
          {
            onError: handleError,
            onSuccess: handleSuccess,
          }
        );
      } else {
        createEvaluation(
          evaluationBody,
          {
            onError: handleError,
            onSuccess: handleSuccess,
          }
        );
      }
    },
    [createEvaluation, updateEvaluation, handleError, handleSuccess]
  );

  return { submitEvaluation, isCreating: isCreating || isUpdating };
};
