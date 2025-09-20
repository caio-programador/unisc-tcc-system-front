import { useSearchParams } from "react-router-dom";
import { useAppNavigation } from "../../../hooks/use-app-navigation";
import { useMeetingDetails } from "../hooks/use-meeting-details";
import { MeetingDetails } from "../view/meeting-details.view";
import { usePersonalInfo } from "../../../hooks/use-personal-info";
import { useUploadDocument } from "../hooks/use-upload-document";
import { useCallback } from "react";
import { toaster } from "../../../utils/toaster";
import { useDownloadFile } from "../hooks/use-download-file";

export default function MeetingDetailsController() {
  const { redirect, openWindow } = useAppNavigation();
  const [searchParams] = useSearchParams();
  const meetingId = Number(searchParams.get("id"));
  const { meetingData, isLoadingMeetingData } = useMeetingDetails(meetingId);
  const { data: currentUser, isLoading: isLoadingCurrentUser } =
    usePersonalInfo();
  const { mutate: uploadDocument, isPending: isUploadingDocument } =
    useUploadDocument(meetingId);

  const {mutate: downloadDocument} = useDownloadFile();

  const handleErrorUploadingDocument = useCallback(() => {
    toaster.create({
      closable: true,
      title: "Erro ao fazer upload do documento",
      description: "Ocorreu um erro ao tentar fazer upload do documento.",
      type: "error",
    });
  }, []);

  const handleSuccessUploadingDocument = useCallback(() => {
    toaster.create({
      closable: true,
      title: "Upload do documento realizado com sucesso",
      description: "O documento foi enviado com sucesso.",
      type: "success",
    });
  }, []);

  const handleSuccessDownloadDocument = useCallback((response: Blob, key: string) => {
    const url = window.URL.createObjectURL(response);
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", key);
    document.body.appendChild(link);
    link.click();
    link.remove();
  }, []);

  const handleErrorDownloadDocument = useCallback(() => {
    toaster.create({
      type: "error",
      title: "Algo deu errado ao baixar o arquivo!",
      description: "Tente novamente agora ou mais tarde.",
      closable: true,
    });
  }, []); 

  const handleDownloadDocument = (documentName: string) => {
    downloadDocument(documentName, {
      onSuccess: (response) => handleSuccessDownloadDocument(response, documentName),
      onError: handleErrorDownloadDocument,
    });
  };

  const handleUploadDocument = useCallback(
    (file: File) => {
      uploadDocument(
        {
          file,
          id: meetingId,
        },
        {
          onError: handleErrorUploadingDocument,
          onSuccess: handleSuccessUploadingDocument,
        }
      );
    },
    [
      uploadDocument,
      meetingId,
      handleErrorUploadingDocument,
      handleSuccessUploadingDocument,
    ]
  );

  const handleReplaceDocument = useCallback(
    (file: File) => {
      uploadDocument(
        {
          file,
          id: meetingId,
        },
        {
          onError: handleErrorUploadingDocument,
          onSuccess: () => {
            handleSuccessUploadingDocument();
            // Aqui você poderia atualizar o estado ou recarregar os dados da reunião
          },
        }
      );
    },
    [
      uploadDocument,
      meetingId,
      handleErrorUploadingDocument,
      handleSuccessUploadingDocument,
    ]
  );

  return (
    <MeetingDetails
      redirect={redirect}
      openWindow={openWindow}
      meeting={meetingData}
      isLoading={isLoadingMeetingData || isLoadingCurrentUser}
      currentUser={currentUser}
      onDownloadDocument={handleDownloadDocument}
      onUploadDocument={handleUploadDocument}
      onReplaceDocument={handleReplaceDocument}
      isUploadingDocument={isUploadingDocument}
    />
  );
}
