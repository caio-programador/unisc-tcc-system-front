import { useQuery } from "@tanstack/react-query";
import { EvaluationAPI } from "../../../../api/Evaluation";

export const useEvaluationProfessor = (
  deliveryId: number | undefined,
  professorId: number | undefined,
  isProfessor: boolean
) => {
  return useQuery({
    queryKey: ["evaluation-to-professor", deliveryId, professorId],
    queryFn: () =>
      EvaluationAPI.getEvaluationByDeliveryIdAndProfessorId(
        deliveryId!,
        professorId!
      ),
    enabled: isProfessor,
  });
};
