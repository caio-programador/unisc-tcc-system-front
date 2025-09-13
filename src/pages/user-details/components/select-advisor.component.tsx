import { Field, Select, Portal, createListCollection } from "@chakra-ui/react";
import { Controller } from "react-hook-form";
import type { SelectAdvisorProps } from "../types";
import { useMemo } from "react";

export const SelectAdvisor = ({
  control,
  errors,
  advisor,
  professors,
  label,
  id,
}: SelectAdvisorProps) => {
  const professoresCollection = useMemo(() => {
    return createListCollection({
      items: professors!.map((professor) => ({
        value: String(professor.id),
        label: professor.name,
      })),
    });
  }, [professors]);

  const fieldError = errors[id];
  const placeholderText = id === "orientador" 
    ? "Selecione o orientador" 
    : `Selecione o ${label.toLowerCase()}`;

  return (
    <Field.Root invalid={!!fieldError}>
      <Field.Label>{label}:</Field.Label>

      <Controller
        control={control}
        name={id}
        render={({ field: { onChange, onBlur, value } }) => (
          <Select.Root
            collection={professoresCollection}
            size="md"
            onValueChange={(details) => onChange(details.value[0])}
            onBlur={onBlur}
            value={value ? [value] : advisor ? [advisor] : []}
          >
            <Select.Control>
              <Select.Trigger>
                <Select.ValueText
                  opacity={1}
                  placeholder={advisor ? advisor : placeholderText}
                />
              </Select.Trigger>

              <Select.IndicatorGroup>
                <Select.Indicator />
              </Select.IndicatorGroup>
            </Select.Control>
            <Portal>
              <Select.Positioner>
                <Select.Content>
                  {professoresCollection.items.map((option) => (
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
      {fieldError && (
        <Field.ErrorText>{fieldError.message}</Field.ErrorText>
      )}
    </Field.Root>
  );
};
