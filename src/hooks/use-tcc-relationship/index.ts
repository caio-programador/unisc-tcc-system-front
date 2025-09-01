import { useQuery } from "@tanstack/react-query";
import { TCCRelationshipsAPI } from "../../api/TCCRelationships";
import { useHandleError } from "../use-handle-error";
import type { TCCResponse } from "../../types";
import type { AxiosError } from "axios";

export const useTCCRelationship = (studentId: number, enabled: boolean) => {
  const { data, isLoading, error, refetch } = useQuery<TCCResponse, AxiosError>({
    queryKey: [studentId],
    queryFn: () =>
      TCCRelationshipsAPI.getOneTCCRelationshipByStudentId(studentId),
    enabled,
  });

  useHandleError(error);

  return { data, isLoading, refetch };
};
