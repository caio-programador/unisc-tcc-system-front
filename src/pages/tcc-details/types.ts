import type { RouteUrl } from "../../types/Router";
import type { UseFormReturn } from "react-hook-form";
import type { ProposalFormData } from "./hooks/use-proposal-form/schema";

export interface TCCDetailsProps {
  redirect: (path: RouteUrl) => void;
  form: UseFormReturn<ProposalFormData>;
  selectedFileName: string;
  isLoading: boolean;
  onSubmit: (data: ProposalFormData) => void;
  onFileChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onRemoveFile: () => void;
}