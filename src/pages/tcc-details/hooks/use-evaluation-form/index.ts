import { useForm, type Resolver } from "react-hook-form";
import { evaluationFormSchema, type EvaluationFormData } from "./schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect } from "react";

export const useEvaluationForm = (defaultValues?: Partial<EvaluationFormData>) => {
  const form = useForm<EvaluationFormData>({
    resolver: zodResolver(evaluationFormSchema) as Resolver<EvaluationFormData>,
    defaultValues: {
      introduction: "",
      goals: "",
      bibliographyRevision: "",
      methodology: "",
      comments: "",
      ...defaultValues,
    },
  });

  useEffect(() => {
    if (defaultValues) {
      Object.entries(defaultValues).forEach(([key, value]) => {
        if (value !== undefined && value !== "") {
          form.setValue(key as keyof EvaluationFormData, value);
        }
      });
    }
  }, [defaultValues, form]);

  return form;
};
