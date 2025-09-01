import { useMutation } from "@tanstack/react-query";
import { AppMutationKeys } from "../../../../types/AppQueryKeys";
import { TCCRelationshipsAPI } from "../../../../api/TCCRelationships";

export const useDeleteTCC = () => {
  return useMutation({
    mutationKey: [AppMutationKeys.DELETE_TCC],
    mutationFn: TCCRelationshipsAPI.deleteTCCRelationship,
  });
};
