import { useMutation, useQueryClient } from "@tanstack/react-query";
import { AppMutationKeys } from "../../../../types/AppQueryKeys";
import { MeetingsAPI } from "../../../../api/Meetings";

export const useUploadDocument = (meetingId: number) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: [AppMutationKeys.UPLOAD_DOCUMENT],
    mutationFn: MeetingsAPI.uploadMeetingDocument,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [AppQueryKeys.MEETING_DETAILS, meetingId] });
    }
  });
};
