import { useQuery } from "@tanstack/react-query";
import type { Meeting } from "../../../../types";
import type { AxiosError } from "axios";
import { MeetingsAPI } from "../../../../api/Meetings";
import { useHandleError } from "../../../../hooks/use-handle-error";

export const useMeetingDetails = (meetingId: number) => {
  const {data, error, isLoading} = useQuery<Meeting, AxiosError>({
    queryKey: [meetingId],
    queryFn: () => MeetingsAPI.getOneMeeting(meetingId),
  });

  useHandleError(error);

  return {
    meetingData: data,
    isLoadingMeetingData: isLoading,
  }
};