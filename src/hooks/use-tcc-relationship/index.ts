import { useQuery } from "@tanstack/react-query";
import { AppQueryKeys } from "../../types/AppQueryKeys";
import { TCCRelationshipsAPI } from "../../api/TCCRelationships";
import { useHandleError } from "../use-handle-error";
import type { TCCResponse } from "../../types";
import type { AxiosError } from "axios";

export const useTCCRelationship = (studentId: number, enabled: boolean) => {
  const { data, isLoading, error, refetch } = useQuery<TCCResponse, AxiosError>({
    queryKey: [AppQueryKeys.ONE_USER],
    queryFn: () =>
      TCCRelationshipsAPI.getOneTCCRelationshipByStudentId(studentId),
    enabled,
  });

  // useHandleError(error);

  return { data, isLoading, refetch };
};
