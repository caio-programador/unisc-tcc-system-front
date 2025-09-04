import { useAppNavigation } from "../../../hooks/use-app-navigation";
import { TCCDetails } from "../view/tcc-details.view";
import { useProposalForm } from "../hooks/use-proposal-form";
import { useSubmitProposal } from "../hooks/use-submit-proposal";
import { useCallback, useState } from "react";
import type { ProposalFormData } from "../hooks/use-proposal-form/schema";
import { useEvaluationForm } from "../hooks/use-evaluation-form";
import { usePersonalInfo } from "../../../hooks/use-personal-info";

export default function TCCDetailsController() {
  const { redirect } = useAppNavigation();
  const proposalForm = useProposalForm();
  const evaluationProposalForm = useEvaluationForm();
  const { submitProposal, isLoading } = useSubmitProposal();
  const [selectedFileName, setSelectedFileName] = useState<string>("");
  const {data: loggedUser} = usePersonalInfo();

  const handleSubmitProposal = useCallback((data: ProposalFormData) => {
    submitProposal(data);
  }, [submitProposal]);

  const handleFileChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      proposalForm.setValue("file", file);
      setSelectedFileName(file.name);
      proposalForm.clearErrors("file"); // Limpa o erro quando arquivo é selecionado
    }
  }, [proposalForm]);

  const handleRemoveFile = useCallback(() => {
    proposalForm.setValue("file", undefined as unknown as File);
    setSelectedFileName("");
    proposalForm.setError("file", { message: "Arquivo é obrigatório" }); // Volta o erro quando arquivo é removido
  }, [proposalForm]);

  return (
    <TCCDetails 
      loggedUser={loggedUser}
      redirect={redirect}
      proposalForm={proposalForm}
      evaluationProposalForm={evaluationProposalForm}
      selectedFileName={selectedFileName}
      isLoading={isLoading}
      onSubmit={handleSubmitProposal}
      onFileChange={handleFileChange}
      onRemoveFile={handleRemoveFile}
    />
  );
}
