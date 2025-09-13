import type { Control, FieldErrors } from "react-hook-form";
import type { CreateRelationFormData } from "./hooks/use-create-relation-form/schema";
import type { RouteUrl } from "../../types/Router";
import type { TCCCreate, TCCResponse, User } from "../../types";

export interface UserDetailsProps {
  redirect: (path: RouteUrl) => void;
  handleSubmit: () => void;
  user?: User;
  isLoadingUser: boolean;
  errors: FieldErrors<CreateRelationFormData>;
  control: Control<CreateRelationFormData>;
  tccData?: TCCResponse;
  isLoadingTCC: boolean;
  professors?: User[];
  currentUser?: User;
  isPendingCreatingUpdatingTCC: boolean;
  tccIsCreated: boolean;
}

export interface ProfileProps {
  user?: User;
}

export interface SelectAdvisorProps {
  id: Exclude<keyof CreateRelationFormData, "dataFinalEntregaProposta" | "dataFinalEntregaTCC">;
  errors: FieldErrors<CreateRelationFormData>;
  control: Control<CreateRelationFormData>;
  advisor: string;
  professors?: User[];
  label: string;
}

export interface DateFieldInputProps {
  label: string;
  isError: boolean;
  errorMessage?: string;
  control: Control<CreateRelationFormData>;
  dateFieldValue: string;
  controlName: Exclude<keyof CreateRelationFormData, "orientador" | "professor2" | "professor3">;
}



export interface UpdateOrCreateTCCProps {
  isCreated: boolean;
  body: Partial<TCCCreate> | TCCCreate;
  id?: number;
}