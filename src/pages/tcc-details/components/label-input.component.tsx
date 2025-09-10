import { Input, Field } from "@chakra-ui/react";
import type { LabelInputProps } from "../types";
import { Controller } from "react-hook-form";

export const LabelInput = ({
  labelTitle,
  labelDescription,
  id,
  placeholder,
  errors,
  control,
}: LabelInputProps) => {
  const fieldError = errors[id];
  const isInvalid = Boolean(fieldError);

  return (
    <Field.Root invalid={isInvalid}>
      {labelTitle && (
        <Field.Label fontSize="md" marginY={2} htmlFor={id}>
          {labelTitle}
        </Field.Label>
      )}

      <Field.Label fontWeight="lighter" mb={2} htmlFor={id}>
        {labelDescription}
      </Field.Label>
      <Controller 
        control={control}
        name={id}
        render={({ field }) => (
          <Input
            id={id}
            placeholder={placeholder}
            {...field}
          />
        )}
      
      />

      <Field.ErrorText
        animationName="bounce, fade-in"
        animationDuration="moderate"
      >
        {fieldError?.message ?? ""}
      </Field.ErrorText>
    </Field.Root>
  );
};
