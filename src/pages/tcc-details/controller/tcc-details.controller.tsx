import { useAppNavigation } from "../../../hooks/use-app-navigation";
import { TCCDetails } from "../view/tcc-details.view";
import { useCallback, useEffect, useState } from "react";
import { useEvaluationForm } from "../hooks/use-evaluation-form";
import { usePersonalInfo } from "../../../hooks/use-personal-info";
import { useDeliveries } from "../hooks/use-deliveries";
import { useSearchParams } from "react-router-dom";
import { useSubmitDelivery } from "../hooks/use-submit-delivery";
import { useDeliveryForm } from "../hooks/use-delivery-form";
import type { DeliveryFormData } from "../hooks/use-delivery-form/schema";
import { useTCCRelationship } from "../../../hooks/use-tcc-relationship";
import type { DeliveryType } from "../../../types";
import { useDownloadFile } from "../hooks/use-download-file";

export default function TCCDetailsController() {
  const { redirect } = useAppNavigation();
  const evaluationDeliveryForm = useEvaluationForm();
  const { submitDelivery, isLoading } = useSubmitDelivery();
  const [searchParams] = useSearchParams();
  const tccId = searchParams.get("tccId");
  const { data: loggedUser } = usePersonalInfo();
  const [selectedFileName, setSelectedFileName] = useState<string>();
  const { deliveriesData } = useDeliveries(
    Number(tccId)
  );
  const { data: tccData } = useTCCRelationship(
    loggedUser?.id,
    !tccId && loggedUser?.id !== undefined
  );
  const { handleDownloadFile } = useDownloadFile();

  const deliveryForm = useDeliveryForm({
    file: deliveriesData?.[0]?.bucketFileKey ?  (new File([], deliveriesData?.[0]?.bucketFileKey as string) as File): undefined as unknown as File,
    title: tccData?.tccTitle || "",
  });
  const file = deliveryForm.watch("file");
  const handleSubmitProposal = useCallback(
    async (
      deliveryData: DeliveryFormData,
      deliveryType?: DeliveryType,
      deliveryId?: number
    ) => {
      submitDelivery(deliveryData, tccData!.id, deliveryType, deliveryId);
    },
    [submitDelivery, tccData]
  );

  useEffect(() => {
    if (tccData) deliveryForm.setValue("title", tccData.tccTitle);
    if (file) setSelectedFileName(file.name);
    if(deliveriesData?.[0]?.bucketFileKey) setSelectedFileName(deliveriesData?.[0]?.bucketFileKey);
  }, [deliveriesData, deliveryForm, file, tccData]);

  const handleFileChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const file = e.target.files?.[0];
      if (file) {
        if (
          file.type !== "application/pdf" &&
          file.type !== "application/msword" &&
          file.type !==
            "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
        ) {
          deliveryForm.setError("file", {
            message: "Apenas arquivos PDF, DOC ou DOCX são permitidos.",
          });
          return;
        }
        if (file.size > 10 * 1024 * 1024) {
          deliveryForm.setError("file", {
            message: "O tamanho do arquivo não pode exceder 10MB.",
          });
          return;
        }

        deliveryForm.setValue("file", file);
        deliveryForm.clearErrors("file");
      }
    },
    [deliveryForm]
  );

  const handleRemoveFile = useCallback(() => {
    setSelectedFileName(undefined);
    deliveryForm.setValue("file", undefined as unknown as File);
  }, [deliveryForm]);

  return (
    <TCCDetails
      loggedUser={loggedUser}
      deliveriesData={deliveriesData}
      redirect={redirect}
      deliveryForm={deliveryForm}
      evaluationDeliveryForm={evaluationDeliveryForm}
      selectedFileName={selectedFileName ?? ""}
      isLoading={isLoading}
      onSubmit={handleSubmitProposal}
      onFileChange={handleFileChange}
      onRemoveFile={handleRemoveFile}
      onDownloadFile={handleDownloadFile}
      defaultTitle={tccData?.tccTitle ?? deliveriesData?.[0]?.tcc?.tccTitle}
    />
  );
}
