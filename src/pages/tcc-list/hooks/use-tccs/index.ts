import { useQuery } from "@tanstack/react-query";
import type { TCCRequest, TCCResponse } from "../../../../types";
import { TCCRelationshipsAPI } from "../../../../api/TCCRelationships";
import { useHandleError } from "../../../../hooks/use-handle-error";
import type { PageableResponse } from "../../../../types/Pageable";
import type { AxiosError } from "axios";

const getTCCs = async (params: TCCRequest, isProfessor: boolean) => {
  if (isProfessor) {
    return TCCRelationshipsAPI.getTCCsByProfessor(params);
  }
  return TCCRelationshipsAPI.getAllTCCRelationships(params);
};

export const useTCCs = (params: TCCRequest, isProfessor: boolean) => {
  const { data, isLoading, error } = useQuery<
    PageableResponse<TCCResponse>,
    AxiosError
  >({
    queryKey: [params, isProfessor],
    queryFn: () => getTCCs(params, isProfessor),
    enabled: params.size !== 0,
  });

  useHandleError(error);

  return { isLoading, data };
};
