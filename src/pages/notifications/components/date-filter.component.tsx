import { Field, Input, Text } from "@chakra-ui/react";
import { useCallback } from "react";
import { Controller } from "react-hook-form";
import type { DateFilterProps } from "../types";

export const DateFilter = ({ control, label, id }: DateFilterProps) => {
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

  const formatDateTimeLocal = useCallback((date: Date | undefined) => {
    if (!date || !(date instanceof Date) || isNaN(date.getTime())) {
      return "";
    }
    const localDate = new Date(
      date.getTime() - date.getTimezoneOffset() * 60000
    );
    return localDate.toISOString().slice(0, 16);
  }, []);

  return (
    <Field.Root display="block">
      <Text fontSize="sm" fontWeight="medium" mb={2}>
        {label}
      </Text>
      <Controller
        control={control}
        name={id}
        render={({ field: { onChange, onBlur, value } }) => (
          <Input
            size="sm"
            outline="0"
            type="datetime-local"
            onChange={(e) => getValidDateValue(e.target.value, onChange)}
            onBlur={onBlur}
            value={formatDateTimeLocal(value)}
          />
        )}
      />
    </Field.Root>
  );
};
