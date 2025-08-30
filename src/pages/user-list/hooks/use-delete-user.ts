import { useMutation } from "@tanstack/react-query";
import { AppMutationKeys } from "../../../types/AppQueryKeys";
import { UserAPI } from "../../../api/User";

export const useDeleteUser = () => {
  return useMutation({
    mutationKey: [AppMutationKeys.DELETE_USER],
    mutationFn: UserAPI.deleteUser,
  });
};
