import { useMutation } from "@tanstack/react-query"
import { AppMutationKeys } from "../../../../types/AppQueryKeys"
import { MeetingsAPI } from "../../../../api/Meetings"

export const useDownloadFile = () => {
  return useMutation({
    mutationKey: [AppMutationKeys.DOWNLOAD_FILE],
    mutationFn: MeetingsAPI.downloadMeetingDocument,
  });
}