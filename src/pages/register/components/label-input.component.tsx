import { Input, Field } from "@chakra-ui/react";
import { PasswordInput } from "../../../components/ui/password-input";
import type { LabelInputProps } from "../types";

export const LabelInput = ({
  label,
  id,
  placeholder,
  register,
  errors,
  type = "text",
}: LabelInputProps) => {
  const fieldError = errors[id];
  const isInvalid = Boolean(fieldError);

  return (
    <Field.Root invalid={isInvalid}>
      <Field.Label htmlFor={id}>{label}</Field.Label>

      {type === "password" ? (
        <PasswordInput id={id} placeholder={placeholder} {...register(id)} />
      ) : (
        <Input 
          id={id} 
          placeholder={placeholder} 
          {...register(id)} 
        />
      )}

      <Field.ErrorText 
          animationName="bounce, fade-in" animationDuration="moderate">
        {fieldError?.message ?? ""}
      </Field.ErrorText>
    </Field.Root>
  );
};