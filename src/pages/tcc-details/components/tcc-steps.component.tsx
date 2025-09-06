import { Steps } from "@chakra-ui/react";
import { steps } from "../utils/steps";

export const TCCSteps = () => {
  return (
    <Steps.Root mt={6} defaultStep={0} count={steps.length} colorPalette="teal">
      <Steps.List>
        {steps.map((_step, index) => (
          <Steps.Item key={index} index={index}>
            <Steps.Indicator />
            <Steps.Separator />
          </Steps.Item>
        ))}
      </Steps.List>

      {steps.map((step, index) => (
        <Steps.Content fontSize="lg" key={index} index={index}>
          {step.description}
        </Steps.Content>
      ))}
    </Steps.Root>
  );
};
