import { useQuery } from "@tanstack/react-query";
import type { User } from "../../../../types";
import type { AxiosError } from "axios";
import { AppQueryKeys } from "../../../../types/AppQueryKeys";
import { UserAPI } from "../../../../api/User";
import { useHandleError } from "../../../../hooks/use-handle-error";

export const useGetUser = (userId: number) => {
  const { data, isLoading, error } = useQuery<User, AxiosError>({
    queryKey: [AppQueryKeys.ONE_USER, userId],
    queryFn: () => UserAPI.getOneUser(userId),
  });

  //useHandleError(error);

  return { data, isLoading };
};
