import { useQuery } from "@tanstack/react-query";
import type { Meeting } from "../../../../types";
import type { AxiosError } from "axios";
import { MeetingsAPI } from "../../../../api/Meetings";
import { useHandleError } from "../../../../hooks/use-handle-error";
import { AppQueryKeys } from "../../../../types/AppQueryKeys";

export const useMeetingDetails = (meetingId: number) => {
  const {data, error, isLoading} = useQuery<Meeting, AxiosError>({
    queryKey: [AppQueryKeys.MEETINGS_DETAILS, meetingId],
    queryFn: () => MeetingsAPI.getOneMeeting(meetingId),
  });

  useHandleError(error);

  return {
    meetingData: data,
    isLoadingMeetingData: isLoading,
  }
};