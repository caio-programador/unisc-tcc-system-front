import { useMutation } from "@tanstack/react-query";
import { AppMutationKeys } from "../../../../types/AppQueryKeys";
import { AuthAPI } from "../../../../api/Auth";

export const useLogin = () => {
  return useMutation({
    mutationKey: [AppMutationKeys.LOGIN],
    mutationFn: AuthAPI.login,
  });
};
