import { Field, Select, Portal, createListCollection } from "@chakra-ui/react";
import { Controller } from "react-hook-form";
import type { SelectAdvisorProps } from "../types";
import { useMemo } from "react";

export const SelectAdvisor = ({ control, errors, advisor, professors }: SelectAdvisorProps) => {
  const orientadoresCollection = useMemo(() => {    
    return createListCollection({
      items: professors!.map((professor) => ({
        value: String(professor.id),
        label: professor.name,
      })),
    });
  }, [professors]);
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
            value={value ? [value] : advisor ? [advisor] : []}
          >
            <Select.Control>
              <Select.Trigger>
                <Select.ValueText
                  opacity={1}
                  placeholder={advisor ? advisor : "Selecione o orientador"}
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
                      <Select.ItemText>{option.label}</Select.ItemText>
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
  );
};
