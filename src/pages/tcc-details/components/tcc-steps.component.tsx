import { Heading, Steps } from "@chakra-ui/react";
import { steps } from "../utils/steps";
import type { TCCStepsProps } from "../types";
import { DeliveryForm } from "./delivery-form.component";
import { useScreenSize } from "../../../hooks/use-screen-size";
import { useMemo } from "react";
import { EvaluationForm } from "./evaluation-form.component";
import { EvaluationDetails } from "./evaluation-details.component";
import { formatDate } from "../../../utils/format-date";
import { EvaluationSummary } from "./evaluation-summary.component";

export const TCCSteps = ({
  deliveriesData,
  deliveryForm,
  onSubmit,
  isLoading,
  selectedFileName,
  loggedUser,
  defaultTitle,
  evaluationDeliveryForm,
  onFileChange,
  onRemoveFile,
  onDownloadFile,
  onSubmitEvaluation,
  isSubmittingEvaluation,
  evaluationData,
  evaluationProfessorData,
  currentStep,
  currentAdmissibility,
  onChangeAdmissibility,
  isPendingChangeAdmissibility,
  tccData,
}: TCCStepsProps) => {
  const lastDelivery = useMemo(() => {
    return deliveriesData?.[0];
  }, [deliveriesData]);

  const { isMobile } = useScreenSize();

  const defensePanel = [
    tccData?.defensePanel.professor1Id,
    tccData?.defensePanel.professor2Id,
    tccData?.defensePanel.professor3Id,
  ];
  const isAtDefensePanel = defensePanel.includes(loggedUser?.id);
  const isAdvisor = loggedUser?.id === tccData?.professor.id;

  return (
    <Steps.Root
      mt={6}
      step={currentStep}
      count={steps.length}
      colorPalette="teal"
      orientation={isMobile ? "vertical" : "horizontal"}
      justifyContent="center "
    >
      <Steps.List marginRight={isMobile ? 8 : 0} flex={1}>
        {steps.map((step) => (
          <Steps.Item key={step.id} index={step.id}>
            <Steps.Indicator
              className={currentStep === step.id ? "tcc-details-step" : ""}
            />
            <Steps.Separator />
          </Steps.Item>
        ))}
      </Steps.List>

      {steps.map((step) => (
        <Steps.Content key={step.id} index={step.id} flex={6}>
          <Heading size="lg" marginY={6}>
            {loggedUser?.role !== "ALUNO" ? step.professorTitle : step.title}
          </Heading>
          <DeliveryForm
            shouldShowChangeAdmissibility={step.shouldShowChangeAdmissibility}
            deliveryForm={deliveryForm}
            onDownloadFile={onDownloadFile}
            onSubmit={onSubmit}
            isLoading={isLoading}
            selectedFileName={selectedFileName}
            onFileChange={onFileChange}
            onRemoveFile={onRemoveFile}
            descriptionText={step.description}
            buttonText={step.buttonText}
            disabledSomeAssets={loggedUser?.role !== "ALUNO"}
            deliveryType={step.deliveryType}
            deliveryData={lastDelivery}
            defaultTitle={defaultTitle}
            currentAdmissibility={currentAdmissibility}
            onChangeAdmissibility={onChangeAdmissibility}
            isPendingChangeAdmissibility={isPendingChangeAdmissibility}
            isAdvisor={isAdvisor}
            shouldShowDeliveryForm={step.shouldShowDeliveryForm}
            shouldShowDonwnloadFileButton={step.shouldShowDonwnloadFileButton}
          />

          {isAtDefensePanel && step.shouldShowEvaluationForm ? (
            <EvaluationForm
              control={evaluationDeliveryForm.control}
              onSubmitEvaluation={onSubmitEvaluation}
              handleSubmit={evaluationDeliveryForm.handleSubmit}
              register={evaluationDeliveryForm.register}
              errors={evaluationDeliveryForm.formState.errors}
              isSubmittingEvaluation={isSubmittingEvaluation}
              thereIsEvaluationData={Boolean(evaluationProfessorData)}
              evaluationId={evaluationProfessorData?.id}
              deliveryId={lastDelivery?.id}
            />
          ) : evaluationData &&
            step.shouldShowEvaluationDetails &&
            evaluationData?.length > 0 ? (
            <>
              <EvaluationSummary
                quantityEvaluations={lastDelivery?.quantityEvaluations}
                averageScore={lastDelivery?.averageScore}
              />
              {evaluationData.map((evaluation) => (
                <EvaluationDetails
                  key={evaluation.id}
                  evaluation={evaluation}
                  studentName={tccData?.student.name}
                  evaluatorName={evaluation.professor.name}
                  evaluationDate={formatDate(evaluation.evaluationDate)}
                />
              ))}
            </>
          ) : null}
        </Steps.Content>
      ))}
    </Steps.Root>
  );
};
