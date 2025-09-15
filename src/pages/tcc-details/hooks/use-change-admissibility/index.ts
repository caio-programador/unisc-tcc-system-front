import { useMutation, useQueryClient } from "@tanstack/react-query";
import { AppMutationKeys, AppQueryKeys } from "../../../../types/AppQueryKeys";
import { TCCRelationshipsAPI } from "../../../../api/TCCRelationships";
import { useCallback } from "react";
import { toaster } from "../../../../utils/toaster";
import type { Admissibility } from "../../../../types";

export const useChangeAdmissibility = (tccId: number | undefined) => {
  const queryClient = useQueryClient();
  const { mutate, isPending } = useMutation({
    mutationKey: [AppMutationKeys.CHANGE_ADMISSIBILITY],
    mutationFn: TCCRelationshipsAPI.changeAdmissibilityStatus,
    onSuccess: () => {
      queryClient.refetchQueries({ queryKey: [AppQueryKeys.TCC_RELATIONSHIP] });
    },
  });

  const handleSuccess = useCallback(() => {
    toaster.create({
      type: "success",
      title: "Status de admissibilidade alterado com sucesso!",
      closable: true,
    });
  }, []);

  const handleError = useCallback(() => {
    toaster.create({
      type: "error",
      title: "Erro ao alterar o status de admissibilidade.",
      description: "Por favor, tente novamente.",
      closable: true,
    });
  }, []);

  const changeAdmissibility = useCallback(
    (admissibility: Admissibility) => {
      mutate(
        { tccRelationshipId: tccId!, admissibility },
        {
          onSuccess: handleSuccess,
          onError: handleError,
        }
      );
    },
    [handleError, handleSuccess, mutate, tccId]
  );

  return { changeAdmissibility, isPendingChangeAdmissibility: isPending };
};
