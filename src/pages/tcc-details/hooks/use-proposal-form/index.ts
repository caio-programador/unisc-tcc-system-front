import { zodResolver } from "@hookform/resolvers/zod";
import { proposalFormSchema, type ProposalFormData } from "./schema";
import { useForm } from "react-hook-form";

export const useProposalForm = () => {
  return useForm<ProposalFormData>({
    resolver: zodResolver(proposalFormSchema),
  });
};
