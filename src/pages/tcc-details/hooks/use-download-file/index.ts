import { useCallback } from "react";
import { useMutationDownloadFile } from "./use-mutation-download-file";
import { toaster } from "../../../../utils/toaster";

export const useDownloadFile = () => {
  const { mutate: downloadFile } = useMutationDownloadFile();

  const handleSuccess = useCallback((response: Blob, key: string) => {
    const url = window.URL.createObjectURL(response);
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", key);
    document.body.appendChild(link);
    link.click();
    link.remove();
  }, []);

  const handlerError = useCallback(() => {
    toaster.create({
      type: "error",
      title: "Algo deu ao baixar o arquivo!",
      description: "Tente novamente agora ou mais tarde.",
      closable: true,
    });
  }, []); 

  const handleDownloadFile = useCallback((key: string) => {
    downloadFile(key, {
      onSuccess: (response) => handleSuccess(response, key),
      onError: handlerError,
    });
  }, [downloadFile, handleSuccess, handlerError]);

  return { handleDownloadFile };
};
