import type { Control, FieldErrors } from "react-hook-form";
import type { CreateRelationFormData } from "./hooks/use-create-relation-form/schema";

export interface UserDetailsProps {
  handleSubmit: () => void;
  errors: FieldErrors<CreateRelationFormData>;
  control: Control<CreateRelationFormData>;
}

export interface SelectAdvisorProps {
  errors: FieldErrors<CreateRelationFormData>;
  control: Control<CreateRelationFormData>;
}

export interface DateFieldInputProps {
  label: string;
  isError: boolean;
  errorMessage?: string;
  control: Control<CreateRelationFormData>;
  controlName: Exclude<keyof CreateRelationFormData, "orientador">;
}