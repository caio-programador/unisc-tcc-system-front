import { EmptyState, VStack } from "@chakra-ui/react";
import { CiCircleAlert } from "react-icons/ci";

export const NoTCC = () => {
  return (
    <EmptyState.Root>
      <EmptyState.Content>
        <EmptyState.Indicator>
          <CiCircleAlert />
        </EmptyState.Indicator>
        <VStack textAlign="center">
          <EmptyState.Title>
            Seu coordenador ainda não definiu o orientador e sua banca
          </EmptyState.Title>
          <EmptyState.Description>
            Contate seu coordenador para mais informações.
          </EmptyState.Description>
        </VStack>
      </EmptyState.Content>
    </EmptyState.Root>
  );
};
