import { Input, Field } from "@chakra-ui/react";
import type { LabelInputProps } from "../types";

export const LabelInput = ({
  labelTitle,
  labelDescription,
  id,
  placeholder,
  register,
  errors,
  type,
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
      <Input id={id} {...register(id)} type={type} placeholder={placeholder} />

      <Field.ErrorText
        animationName="bounce, fade-in"
        animationDuration="moderate"
      >
        {fieldError?.message ?? ""}
      </Field.ErrorText>
    </Field.Root>
  );
};
