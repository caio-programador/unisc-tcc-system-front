import { useQuery } from "@tanstack/react-query";
import { AppQueryKeys } from "../../types/AppQueryKeys";
import { UserAPI } from "../../api/User";
import type { User, UserRequestGetAll } from "../../types";
import type { PageableResponse } from "../../types/Pageable";
import type { AxiosError } from "axios";
import { useHandleError } from "../use-handle-error";

export const useUsers = (params: UserRequestGetAll) => {
  const { data, isLoading, error, refetch } = useQuery<
    PageableResponse<User>,
    AxiosError
  >({ queryKey: [AppQueryKeys.USERS, params], queryFn: () => UserAPI.getAll(params) });

  useHandleError(error);

  return { data, isLoading, error, refetch };
};
