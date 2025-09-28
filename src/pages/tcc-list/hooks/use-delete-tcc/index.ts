import { useMutation, useQueryClient } from "@tanstack/react-query";
import { AppMutationKeys, AppQueryKeys } from "../../../../types/AppQueryKeys";
import { TCCRelationshipsAPI } from "../../../../api/TCCRelationships";

export const useDeleteTCC = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: [AppMutationKeys.DELETE_TCC],
    mutationFn: TCCRelationshipsAPI.deleteTCCRelationship,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [AppQueryKeys.TCCS] });
      
      queryClient.refetchQueries({ queryKey: [AppQueryKeys.TCCS] });
    }
  });
};
