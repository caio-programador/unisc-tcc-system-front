import { useMutation } from "@tanstack/react-query";
import { TCCRelationshipsAPI } from "../../../../api/TCCRelationships";
import type { TCCCreate } from "../../../../types";
import type { UpdateOrCreateTCCProps } from "../../types";
import { AppMutationKeys } from "../../../../types/AppQueryKeys";

const updateOrCreate = async ({
  isCreated,
  body,
  id,
}: UpdateOrCreateTCCProps) => {
  if (isCreated) {
    return TCCRelationshipsAPI.updateTCCRelationship(id!, body);
  }

  return TCCRelationshipsAPI.createTCCRelationship(body as TCCCreate);
};

export const useCreateUpdateTCC = () => {
  return useMutation({
    mutationKey: [AppMutationKeys.UPDATE_CREATE_TCC],
    mutationFn: updateOrCreate,
  });
};
