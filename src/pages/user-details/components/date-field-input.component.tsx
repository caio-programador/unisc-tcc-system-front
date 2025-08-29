import { Field, Input } from "@chakra-ui/react";
import { Controller } from "react-hook-form";
import type { DateFieldInputProps } from "../types";
import { useCallback } from "react";

export const DateFieldInput = ({
  control,
  label,
  controlName,
  isError,
  errorMessage,
}: DateFieldInputProps) => {
  const getValidDateValue = useCallback(
    (value: string, onChange: (...event: unknown[]) => void) => {
      if (value) {
        const date = new Date(value);
        if (!isNaN(date.getTime())) {
          onChange(date);
        }
      } else {
        onChange(undefined);
      }
    },
    []
  );

  return (
    <Field.Root invalid={isError}>
      <Field.Label>{label}</Field.Label>
      <Controller
        control={control}
        name={controlName}
        render={({ field: { onChange, onBlur, value } }) => (
          <Input
            type="date"
            onChange={(e) => getValidDateValue(e.target.value, onChange)}
            onBlur={onBlur}
            value={
              value && value instanceof Date && !isNaN(value.getTime())
                ? value.toISOString().split("T")[0]
                : ""
            }
          />
        )}
      />
      {isError && <Field.ErrorText>{errorMessage}</Field.ErrorText>}
    </Field.Root>
  );
};
