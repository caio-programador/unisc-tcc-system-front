import { Heading, Steps } from "@chakra-ui/react";
import { steps } from "../utils/steps";
import type { TCCStepsProps } from "../types";
import { getCurrentStep } from "../utils/get-current-step";
import { DeliveryForm } from "./delivery-form.component";
import { useScreenSize } from "../../../hooks/use-screen-size";
import { useMemo } from "react";
import { EvaluationForm } from "./evaluation-form.component";
import { EvaluationDetails } from "./evaluation-details.component";
import { formatDate } from "../../../utils/format-date";

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
}: TCCStepsProps) => {
  const currentStep = useMemo(() => {
    return getCurrentStep(deliveriesData || []);
  }, [deliveriesData]);

  const lastDelivery = useMemo(() => {
    return deliveriesData?.[0];
  }, [deliveriesData]);

  const { isMobile } = useScreenSize();

  return (
    <Steps.Root
      mt={6}
      step={currentStep}
      count={steps.length}
      colorPalette="teal"
      orientation={isMobile ? "vertical" : "horizontal"}
    >
      <Steps.List marginRight={isMobile ? 8 : 0}>
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
        <Steps.Content key={step.id} index={step.id}>
          <Heading size="lg" marginY={6}>
            {loggedUser?.role !== "ALUNO" ? step.professorTitle : step.title}
          </Heading>
          <DeliveryForm
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
          />

          {loggedUser?.id === deliveriesData?.[0]?.tcc.professor.id ? (
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
          ) : (
            evaluationData &&
            step.shouldShowEvaluationDetails &&
            evaluationData?.length > 0 ? (
            evaluationData.map((evaluation) => (
              <EvaluationDetails
                evaluation={evaluation}
                studentName={evaluation.delivery.tcc.student.name}
                evaluatorName={evaluation.delivery.tcc.professor.name}
                evaluationDate={formatDate(evaluation.evaluationDate)}
              />
            ))) : null
          )}
        </Steps.Content>
      ))}
    </Steps.Root>
  );
};
