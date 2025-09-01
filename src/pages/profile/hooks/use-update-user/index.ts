import { useMutation } from "@tanstack/react-query";
import { AppMutationKeys } from "../../../../types/AppQueryKeys";
import { UserAPI } from "../../../../api/User";

export const useUpdateUser = () => {
  return useMutation({
    mutationKey: [AppMutationKeys.UPDATE_PROFILE],
    mutationFn: UserAPI.updateUser,
  });
};
