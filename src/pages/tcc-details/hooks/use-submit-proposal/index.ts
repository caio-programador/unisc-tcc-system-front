import { useState } from "react";
import type { ProposalFormData } from "../use-proposal-form/schema";

export const useSubmitProposal = () => {
  const [isLoading, setIsLoading] = useState(false);

  const submitProposal = async (data: ProposalFormData) => {
    setIsLoading(true);
    try {
      // TODO: Implementar chamada para API
      console.log("Dados da proposta:", data);
      
      // Simular delay da API
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Aqui você pode adicionar a lógica para enviar para a API
      // const formData = new FormData();
      // formData.append('title', data.title);
      // formData.append('file', data.file);
      // await api.post('/proposals', formData);
      
      alert("Proposta publicada com sucesso!");
    } catch (error) {
      console.error("Erro ao publicar proposta:", error);
      alert("Erro ao publicar proposta. Tente novamente.");
    } finally {
      setIsLoading(false);
    }
  };

  return {
    submitProposal,
    isLoading,
  };
};
