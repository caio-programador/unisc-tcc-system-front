import { useMutation } from "@tanstack/react-query"
import { AppMutationKeys } from "../../../../types/AppQueryKeys"
import { AuthAPI } from "../../../../api/Auth"

export const useRegister = () => {
  return useMutation({
    mutationKey: [AppMutationKeys.REGISTER],
    mutationFn: AuthAPI.register,
  })
}