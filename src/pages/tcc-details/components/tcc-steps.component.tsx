import { Heading, Steps } from "@chakra-ui/react";
import { steps } from "../utils/steps";
import type { TCCStepsProps } from "../types";
import { getCurrentStep } from "../utils/get-current-step";
import { DeliveryForm } from "./delivery-form.component";
import { useScreenSize } from "../../../hooks/use-screen-size";

export const TCCSteps = ({
  deliveriesData,
  deliveryForm,
  onSubmit,
  isLoading,
  selectedFileName,
  loggedUser,
  onFileChange,
  onRemoveFile,
  onDownloadFile,
}: TCCStepsProps) => {
  const currentStep = getCurrentStep(deliveriesData || []);

  const lastDelivery = deliveriesData?.[0];

  const { isMobile } = useScreenSize();

  return (
    <Steps.Root
      mt={6}
      defaultStep={currentStep}
      count={steps.length}
      colorPalette="teal"
      orientation={isMobile ? "vertical" : "horizontal"}
    >
      <Steps.List marginRight={isMobile ? 8 : 0}>
        {steps.map((step) => (
          <Steps.Item key={step.id} index={step.id}>
            <Steps.Indicator />
            <Steps.Separator />
          </Steps.Item>
        ))}
      </Steps.List>

      {steps.map((step) => (
        <Steps.Content key={step.id} index={step.id}>
          <Heading size="lg" marginY={6}>
            {loggedUser?.role !== 'ALUNO' ? step.professorTitle : step.title}
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
            disabledSomeAssets={loggedUser?.role !== 'ALUNO'}
            deliveryType={step.deliveryType}
            deliveryData={lastDelivery}
          />
        </Steps.Content>
      ))}
    </Steps.Root>
  );
};
