import { EmptyState, VStack } from "@chakra-ui/react";
import { MdErrorOutline } from "react-icons/md";
import type { TotallyReprovedProps } from "../types";

export const TotallyReproved = ({ deliveryType }: TotallyReprovedProps) => {
  return (
    <EmptyState.Root>
      <EmptyState.Content>
        <EmptyState.Indicator>
          <MdErrorOutline />
        </EmptyState.Indicator>
        <VStack textAlign="center">
          <EmptyState.Title>
            Infelizmente,{" "}
            {deliveryType === "REELABORACAO_PROPOSTA"
              ? " sua proposta foi reprovada."
              : " seu TCC foi reprovado."}
          </EmptyState.Title>
          <EmptyState.Description>
            Entre em contato com seu orientador para mais informações.
          </EmptyState.Description>
        </VStack>
      </EmptyState.Content>
    </EmptyState.Root>
  );
};
