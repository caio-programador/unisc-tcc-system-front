import { useMutation, useQueryClient } from "@tanstack/react-query";
import { AppMutationKeys, AppQueryKeys } from "../../../../types/AppQueryKeys";
import { MeetingsAPI } from "../../../../api/Meetings";

export const useCancelMeeting = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: [AppMutationKeys.CANCEL_MEETING],
    mutationFn: MeetingsAPI.deleteMeeting,
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
    },
  });
};
