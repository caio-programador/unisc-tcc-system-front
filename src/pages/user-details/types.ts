import type { Control, FieldErrors, UseFormRegister } from "react-hook-form";
import type { CreateRelationFormData } from "./hooks/use-create-relation-form/schema";

export interface UserDetailsProps {
  register: UseFormRegister<CreateRelationFormData>;
  handleSubmit: () => void;
  errors: FieldErrors<CreateRelationFormData>;
  control: Control<CreateRelationFormData>;
}