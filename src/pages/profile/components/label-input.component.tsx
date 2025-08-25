import { Box, Editable, Field, Text } from "@chakra-ui/react";
import type { LabelInputProps } from "../types";

export const LabelInput = ({
  label,
  defaultValue,
  errors,
  type,
  setValue
}: LabelInputProps) => {
  const fieldError = errors[type];
  const isInvalid = Boolean(fieldError);

  return (
    <Field.Root invalid={isInvalid}>
      <Box>
        <Text fontWeight="bold">{label}</Text>
        <Editable.Root defaultValue={defaultValue}>
          <Editable.Preview />
          <Editable.Input onChange={(e) => setValue(type, e.target.value)} />
        </Editable.Root>
      </Box>

      <Field.ErrorText>{fieldError?.message ?? ''}</Field.ErrorText>
    </Field.Root>
  );
};
