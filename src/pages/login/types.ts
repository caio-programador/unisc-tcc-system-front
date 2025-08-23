import type { FieldErrors, UseFormRegister} from "react-hook-form";
import type { FormData } from "./hooks/use-login-form/schema";
import type { FormEventHandler } from "react";

export interface LoginProps {
  errors: FieldErrors<FormData>;
  onSubmit: FormEventHandler<HTMLFormElement>;
  register: UseFormRegister<FormData>;
  handleRedirectRegister: () => void;
}

export interface LabelInputProps {
  label: string;
  id:  keyof FormData;
  placeholder: string;
  errors: FieldErrors<FormData>;
  register: UseFormRegister<FormData>;
}
