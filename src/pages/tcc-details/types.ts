import type { RouteUrl } from "../../types/Router";
import type { FieldErrors, UseFormRegister, UseFormReturn } from "react-hook-form";
import type { ProposalFormData } from "./hooks/use-proposal-form/schema";
import type { EvaluationFormData } from "./hooks/use-evaluation-form/schema";
import type { User } from "../../types";

export interface TCCDetailsProps {
  redirect: (path: RouteUrl) => void;
  proposalForm: UseFormReturn<ProposalFormData>;
  evaluationProposalForm: UseFormReturn<EvaluationFormData>;
  selectedFileName: string;
  isLoading: boolean;
  loggedUser: User | undefined;
  onSubmit: (data: ProposalFormData) => void;
  onFileChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onRemoveFile: () => void;
}

export interface ProposalFormProps {
  onSubmit: (data: ProposalFormData) => void;
  isLoading?: boolean;
  selectedFileName: string;
  onFileChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onRemoveFile: () => void;
}

export interface LabelInputProps {
  labelTitle?: string;
  labelDescription: string;
  id: keyof EvaluationFormData & string;
  register: UseFormRegister<EvaluationFormData>;
  errors: FieldErrors<EvaluationFormData>;
  placeholder: string;
  type: "number" | "text";
}

export interface EvaluationProposalFormProps {
  onSubmit: () => void;
  register: UseFormRegister<EvaluationFormData>;
  errors: FieldErrors<EvaluationFormData>;
  loggedUser: User | undefined;
}