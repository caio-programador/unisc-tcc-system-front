import { useMutation } from "@tanstack/react-query"
import { AppMutationKeys } from "../../../../types/AppQueryKeys"
import { DeliverablesAPI } from "../../../../api/Deliverables"

export const useMutationDownloadFile = () => {
  return useMutation({
    mutationKey: [AppMutationKeys.DOWNLOAD_FILE],
    mutationFn: DeliverablesAPI.downloadDeliveryFile,
  })
}