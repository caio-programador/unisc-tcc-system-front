import { useQuery } from "@tanstack/react-query";
import { AuthAPI } from "../../api/Auth";
import { AppQueryKeys } from "../../types/AppQueryKeys";
import type { User } from "../../types";
import type { AxiosError } from "axios";
import { useHandleError } from "../use-handle-error";

export const usePersonalInfo = () => {
  const { data, isLoading, isError, error, refetch } = useQuery<
    User,
    AxiosError
  >({
    queryKey: [AppQueryKeys.PERSONAL_INFO],
    queryFn: AuthAPI.getPersonalInfo,
  });

  useHandleError(error);

  return { data, isLoading, isError, refetch };
};
