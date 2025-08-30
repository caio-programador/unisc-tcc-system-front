import type { Control, FieldErrors } from "react-hook-form";
import type { CreateRelationFormData } from "./hooks/use-create-relation-form/schema";
import type { RouteUrl } from "../../types/Router";
import type { User } from "../../types";

export interface UserDetailsProps {
  redirect: (path: RouteUrl) => void;
  handleSubmit: () => void;
  user?: User;
  isLoadingUser: boolean;
  errors: FieldErrors<CreateRelationFormData>;
  control: Control<CreateRelationFormData>;
}

export interface ProfileProps {
  user?: User;
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