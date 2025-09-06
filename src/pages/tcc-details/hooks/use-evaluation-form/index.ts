import { useForm } from "react-hook-form";
import { evaluationFormSchema, type EvaluationFormData } from "./schema";
import { zodResolver } from "@hookform/resolvers/zod";

export const useEvaluationForm = () => {
  return useForm<EvaluationFormData>({
    resolver: zodResolver(evaluationFormSchema),
  });
};
