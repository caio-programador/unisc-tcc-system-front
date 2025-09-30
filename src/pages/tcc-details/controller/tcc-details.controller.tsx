import { useAppNavigation } from "../../../hooks/use-app-navigation";
import { TCCDetails } from "../view/tcc-details.view";
import { useCallback, useEffect, useMemo, useState } from "react";
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
import { useGetEvaluation } from "../hooks/use-get-evaluation";
import { useSubmitEvaluation } from "../hooks/use-submit-evaluation";
import { useEvaluationProfessor } from "../hooks/use-evaluation-professor";
import { getCurrentStep } from "../utils/get-current-step";
import { useChangeAdmissibility } from "../hooks/use-change-admissibility";

export default function TCCDetailsController() {
  const { redirect } = useAppNavigation();
  const { submitDelivery, isLoading } = useSubmitDelivery();
  const [searchParams] = useSearchParams();
  const tccId = searchParams.get("tccId");
  const userId = searchParams.get("userId");
  const { data: loggedUser, isLoading: isLoadingLoggedUser } =
    usePersonalInfo();
  const [selectedFileName, setSelectedFileName] = useState<string>();
  const [isRemoved, setIsRemoved] = useState(false);
  const { deliveriesData, isLoading: isLoadingDeliveries } = useDeliveries(
    Number(tccId)
  );
  const { data: tccData, isLoading: isLoadingTCCData } = useTCCRelationship(
    userId ? Number(userId) : loggedUser?.id,
    Boolean(loggedUser) || Boolean(userId)
  );
  const { handleDownloadFile } = useDownloadFile();

  const { currentStep, isTotallyReproved, thereIsNotTCC } = useMemo(() => {
    return getCurrentStep({
      deliveriesData: deliveriesData,
      tccData: tccData,
    });
  }, [deliveriesData, tccData]);

  const deliveryForm = useDeliveryForm();

  const { changeAdmissibility, isPendingChangeAdmissibility } =
    useChangeAdmissibility(tccData?.id);

  const { evaluationData, isLoading: isLoadingEvaluationData } =
    useGetEvaluation(deliveriesData?.[0]?.id, currentStep === 4);

  const { data: evaluationProfessorData } = useEvaluationProfessor(
    deliveriesData?.[0]?.id,
    loggedUser?.id,
    (loggedUser?.id === tccData?.professor.id ||
      loggedUser?.id === tccData?.defensePanel.professor2Id ||
      loggedUser?.id === tccData?.defensePanel.professor3Id) &&
      Boolean(loggedUser) &&
      deliveriesData!.length > 0
  );

  const evaluationDeliveryForm = useEvaluationForm({
    bibliographyRevision:
      evaluationProfessorData?.bibliographyRevision.toString() || "",
    goals: evaluationProfessorData?.goals.toString() || "",
    introduction: evaluationProfessorData?.introduction.toString() || "",
    methodology: evaluationProfessorData?.methodology.toString() || "",
    comments: evaluationProfessorData?.comments || "",
  });
  const { submitEvaluation, isCreating } = useSubmitEvaluation();

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
    if (
      currentStep !== 4 &&
      !selectedFileName &&
      deliveriesData?.[0]?.bucketFileKey &&
      !isRemoved
    )
      setSelectedFileName(deliveriesData?.[0]?.bucketFileKey);
  }, [currentStep, deliveriesData, isRemoved, selectedFileName]);

  useEffect(() => {
    if (currentStep === 4) {
      deliveryForm.reset();
      setSelectedFileName(undefined);
    }
    if (tccData && tccData.tccTitle)
      deliveryForm.setValue("title", tccData.tccTitle);
  }, [currentStep, deliveryForm, tccData]);

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
        setSelectedFileName(file.name);
        deliveryForm.clearErrors("file");
      }
    },
    [deliveryForm]
  );

  const handleRemoveFile = useCallback(() => {
    setSelectedFileName(undefined);
    deliveryForm.setValue("file", undefined as unknown as File);
    setIsRemoved(true);
  }, [deliveryForm]);

  return (
    <TCCDetails
      tccData={tccData}
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
      defaultTitle={tccData?.tccTitle}
      evaluationData={evaluationData}
      isSubmittingEvaluation={isCreating}
      onSubmitEvaluation={submitEvaluation}
      isLoadingAllData={
        isLoadingLoggedUser ||
        isLoadingDeliveries ||
        isLoadingTCCData ||
        isLoadingEvaluationData
      }
      evaluationProfessorData={evaluationProfessorData}
      currentStep={currentStep}
      isTotallyReproved={isTotallyReproved}
      thereIsNotTCC={thereIsNotTCC}
      currentAdmissibility={tccData?.admissibility ?? "PENDING"}
      onChangeAdmissibility={changeAdmissibility}
      isPendingChangeAdmissibility={isPendingChangeAdmissibility}
    />
  );
}
