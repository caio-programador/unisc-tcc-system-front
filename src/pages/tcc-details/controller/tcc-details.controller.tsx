import { useAppNavigation } from "../../../hooks/use-app-navigation";
import { TCCDetails } from "../view/tcc-details.view";
import { useProposalForm } from "../hooks/use-proposal-form";
import { useSubmitProposal } from "../hooks/use-submit-proposal";
import { useCallback, useState } from "react";

export default function TCCDetailsController() {
  const { redirect } = useAppNavigation();
  const form = useProposalForm();
  const { submitProposal, isLoading } = useSubmitProposal();
  const [selectedFileName, setSelectedFileName] = useState<string>("");

  const handleSubmitProposal = useCallback((data: any) => {
    submitProposal(data);
  }, [submitProposal]);

  const handleFileChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      form.setValue("file", file);
      setSelectedFileName(file.name);
      form.clearErrors("file"); // Limpa o erro quando arquivo é selecionado
    }
  }, [form]);

  const handleRemoveFile = useCallback(() => {
    form.setValue("file", undefined as any);
    setSelectedFileName("");
    form.setError("file", { message: "Arquivo é obrigatório" }); // Volta o erro quando arquivo é removido
  }, [form]);

  return (
    <TCCDetails 
      redirect={redirect}
      form={form}
      selectedFileName={selectedFileName}
      isLoading={isLoading}
      onSubmit={handleSubmitProposal}
      onFileChange={handleFileChange}
      onRemoveFile={handleRemoveFile}
    />
  );
}
