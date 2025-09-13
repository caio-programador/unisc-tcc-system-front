import { Select, Portal, createListCollection } from "@chakra-ui/react";
import type { ChangeAdmissibilityProps } from "../types";
import type { Admissibility } from "../../../types";

const admissibilityOptions = createListCollection<{ value: Admissibility, label: string}>({
  items: [
    { label: "Aprovado", value: "APPROVED" },
    { label: "Reprovado", value: "REJECTED" },
    { label: "Pendente", value: "PENDING" },
  ],
});

export const ChangeAdmissibility = ({
  currentAdmissibility,
  isPendingChangeAdmissibility,
  onChangeAdmissibility,
}: ChangeAdmissibilityProps) => {
  return (
    <Select.Root
      collection={admissibilityOptions}
      size="md"
      onValueChange={(details) => onChangeAdmissibility(details.value[0] as Admissibility)}
      value={[currentAdmissibility]}
      disabled={isPendingChangeAdmissibility}
    >
      <Select.Control>
        <Select.Trigger>
          <Select.ValueText
            color={currentAdmissibility ? "#000000" : "#666666"}
            opacity={1}
            placeholder="Selecione o tipo de usuário"
          />
        </Select.Trigger>

        <Select.IndicatorGroup>
          <Select.Indicator />
        </Select.IndicatorGroup>
      </Select.Control>
      <Portal>
        <Select.Positioner>
          <Select.Content>
            {admissibilityOptions.items.map((option) => (
              <Select.Item key={option.value} item={option.value}>
                <Select.ItemText>{option.label}</Select.ItemText>
              </Select.Item>
            ))}
          </Select.Content>
        </Select.Positioner>
      </Portal>
    </Select.Root>
  );
};
