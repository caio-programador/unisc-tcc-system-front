import { useMutation, useQueryClient } from "@tanstack/react-query"
import { AppMutationKeys, AppQueryKeys } from "../../../../types/AppQueryKeys"
import { MeetingsAPI } from "../../../../api/Meetings"

export const useCreateMeeting = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: [AppMutationKeys.CREATE_MEETING],
    mutationFn: MeetingsAPI.createMeeting,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [
          AppQueryKeys.MEETINGS,
          AppQueryKeys.LIMITED_MEETINGS,
          AppQueryKeys.LIMITED_NOTIFICATIONS,
          AppQueryKeys.NOTIFICATIONS,
        ],
      });
      window.location.reload();
    }
  });
}