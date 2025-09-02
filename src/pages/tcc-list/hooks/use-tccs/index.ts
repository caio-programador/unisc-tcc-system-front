import { useQuery } from "@tanstack/react-query";
import type { TCCRequest, TCCResponse } from "../../../../types";
import { AppQueryKeys } from "../../../../types/AppQueryKeys";
import { TCCRelationshipsAPI } from "../../../../api/TCCRelationships";
import { useHandleError } from "../../../../hooks/use-handle-error";
import type { PageableResponse } from "../../../../types/Pageable";
import type { AxiosError } from "axios";

export const useTCCs = (params: TCCRequest) => {
  const { data, isLoading, error } = useQuery<
    PageableResponse<TCCResponse>,
    AxiosError
  >({
    queryKey: [AppQueryKeys, params],
    queryFn: () => TCCRelationshipsAPI.getAllTCCRelationships(params),
    enabled: params.size !== 0,
  });

  useHandleError(error);

  return { isLoading, data };
};
