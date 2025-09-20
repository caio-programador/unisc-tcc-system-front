import { useQuery } from "@tanstack/react-query";
import type { AxiosError } from "axios";
import type { Meeting } from "../../../types";
import { AppQueryKeys } from "../../../types/AppQueryKeys";
import { useHandleError } from "../../../hooks/use-handle-error";
import { MeetingsAPI } from "../../../api/Meetings";

export const useLimitedMeetings = () => {
  const { data, isLoading, error } = useQuery<Meeting[], AxiosError>(
    {
      queryKey: [AppQueryKeys.LIMITED_MEETINGS],
      queryFn: MeetingsAPI.getLimitedMeetings,
    }
  );
  useHandleError(error);

  return {
    meetings: data,
    isLoadingMeetings: isLoading,
  }
};