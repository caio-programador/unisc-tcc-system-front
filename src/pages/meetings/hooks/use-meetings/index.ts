import { useQuery } from "@tanstack/react-query";
import type { Meeting } from "../../../../types";
import type { AxiosError } from "axios";
import { AppQueryKeys } from "../../../../types/AppQueryKeys";
import { MeetingsAPI } from "../../../../api/Meetings";
import { useHandleError } from "../../../../hooks/use-handle-error";

export const useMeetings = (startDate: Date | undefined) => {
  const { data, error, isLoading } = useQuery<Meeting[], AxiosError>({
    queryKey: [AppQueryKeys.MEETINGS, startDate?.toISOString() || "no-date"],
    queryFn: () => MeetingsAPI.getMyMeetings(startDate),
  });

  useHandleError(error);


  return {
    meetingsData: data,
    isLoadingMeetings: isLoading,
  }
};
