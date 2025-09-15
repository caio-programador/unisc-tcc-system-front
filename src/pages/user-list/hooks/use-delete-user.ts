import { useMutation, useQueryClient } from "@tanstack/react-query";
import { AppMutationKeys, AppQueryKeys } from "../../../types/AppQueryKeys";
import { UserAPI } from "../../../api/User";

export const useDeleteUser = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: [AppMutationKeys.DELETE_USER],
    mutationFn: UserAPI.deleteUser,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [AppQueryKeys.USERS] });
    },
  });
};
