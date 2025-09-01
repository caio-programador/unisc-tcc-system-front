import type { FieldErrors, UseFormRegister, Control } from "react-hook-form";
import type { FormEventHandler } from "react";
import type { FormData } from "./hooks/use-register-form/schema";
import type { RouteUrl } from "../../types/Router";

export interface RegisterProps {
  onSubmit: FormEventHandler<HTMLFormElement>;
  register: UseFormRegister<FormData>;
  redirect: (path: RouteUrl) => void;
  control: Control<FormData>;
  errors: FieldErrors<FormData>;
  isPending: boolean;
}

export interface LabelInputProps {
  label: string;
  id: keyof FormData & string;
  placeholder: string;
  register: UseFormRegister<FormData>;
  errors: FieldErrors<FormData>;
  type?: "text" | "email" | "password";
}

export interface SelectRoleProps {
  label: string;
  control: Control<FormData>;
  errors: FieldErrors<FormData>;
}