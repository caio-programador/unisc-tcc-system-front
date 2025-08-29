import { Field, Select, Portal, createListCollection } from "@chakra-ui/react";
import { Controller } from "react-hook-form";
import { mockOrientadores } from "../hooks/use-create-relation-form/schema";
import type { SelectAdvisorProps } from "../types";

const orientadoresCollection = createListCollection({
  items: mockOrientadores.map((orientador) => ({
    value: orientador,
    label: orientador,
  })),
});
export const SelectAdvisor = ({control, errors}: SelectAdvisorProps) => {
  return (
    <Field.Root invalid={!!errors.orientador}>
          <Field.Label>Orientador:</Field.Label>

          <Controller
            control={control}
            name="orientador"
            render={({ field: { onChange, onBlur, value } }) => (
              <Select.Root
                collection={orientadoresCollection}
                size="md"
                onValueChange={(details) => onChange(details.value[0])}
                onBlur={onBlur}
                value={value ? [value] : []}
              >
                <Select.Control>
                  <Select.Trigger>
                    <Select.ValueText
                      color={"textPrimary"}
                      opacity={value ? 1 : 1}
                      placeholder="Selecione o orientador"
                    />
                  </Select.Trigger>

                  <Select.IndicatorGroup>
                    <Select.Indicator />
                  </Select.IndicatorGroup>
                </Select.Control>
                <Portal>
                  <Select.Positioner>
                    <Select.Content>
                      {orientadoresCollection.items.map((option) => (
                        <Select.Item key={option.value} item={option.value}>
                          <Select.ItemText style={{ color: 'black' }}>{option.label}</Select.ItemText>
                        </Select.Item>
                      ))}
                    </Select.Content>
                  </Select.Positioner>
                </Portal>
              </Select.Root>
            )}
          />
          {errors.orientador && (
            <Field.ErrorText>{errors.orientador.message}</Field.ErrorText>
          )}
        </Field.Root>
  )
};