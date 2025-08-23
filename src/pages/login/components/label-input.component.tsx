import { Field, Input } from "@chakra-ui/react";
import { PasswordInput } from "../../../components/ui/password-input";
import type { LabelInputProps } from "../types";


export const LabelInput = ({ 
  label,
  id, 
  placeholder, 
  errors,
  register,
}: LabelInputProps) => {
  const fieldError = errors[id];
  const isInvalid = Boolean(fieldError);

  return (
    <Field.Root invalid={isInvalid} paddingTop={4}>
      <Field.Label htmlFor={id}>{label}</Field.Label>
      {id === 'password' ? (
        <PasswordInput 
          id={id} 
          placeholder={placeholder}
          {...register(id)}
        />
      ) : (
        <Input 
          id={id} 
          placeholder={placeholder}
          {...register(id)}
        />
      )}
      {isInvalid && (
        <Field.ErrorText 
          animationName="bounce, fade-in" animationDuration="moderate"
        >
          {fieldError?.message}
        </Field.ErrorText>
      )}
    </Field.Root>
  )
};
