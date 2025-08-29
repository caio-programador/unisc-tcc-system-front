import { Field, Portal, Select } from "@chakra-ui/react";
import { Controller } from "react-hook-form";
import { roleOptions } from "../hooks/use-register-form/schema";
import type { SelectRoleProps } from "../types";

export const SelectRole = ({ label, control, errors }: SelectRoleProps) => {
  const fieldError = errors.role;
  const isInvalid = Boolean(fieldError);

  return (
    <Field.Root invalid={isInvalid}>
      <Field.Label>{label}</Field.Label>

      <Controller
        name="role"
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (
          <Select.Root
            collection={roleOptions}
            size="md"
            onValueChange={(details) => onChange(details.value[0])}
            onBlur={onBlur}
            value={value ? [value] : []}
          >
            <Select.Control>
              <Select.Trigger>
                <Select.ValueText 
                  color={value ? "#000000" : "#666666"}
                  opacity={value ? 1 : 1}
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
                  {roleOptions.items.map((option) => (
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

      <Field.ErrorText 
          animationName="bounce, fade-in" animationDuration="moderate">
        {fieldError?.message ?? ""}
      </Field.ErrorText>
    </Field.Root>
  );
};