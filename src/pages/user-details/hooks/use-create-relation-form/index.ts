import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { type CreateRelationFormData, createRelationSchema } from "./schema";

export const useCreateRelationForm = (
  defaultValues: Partial<CreateRelationFormData>
) => {
  return useForm<CreateRelationFormData>({
    resolver: zodResolver(createRelationSchema),
    defaultValues,
    values: defaultValues as CreateRelationFormData,
  });
};
