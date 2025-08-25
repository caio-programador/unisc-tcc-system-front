import type { FieldErrors } from "react-hook-form";
import type { RouteUrl } from "../../types/Router";
import type { FormData } from "./hooks/use-update-form/schema";

export interface ProfileProps {
  errors: FieldErrors<FormData>; 
  hasValues: boolean;
  user: FormData;
  redirect: (path: RouteUrl) => void;
  onSubmit: () => void;
  setValue: (name: keyof FormData, value: string) => void;
}

export interface PersonalInfoProps {
  errors: FieldErrors<FormData>;
  hasValues: boolean;
  user: FormData;
  setValue: (name: keyof FormData, value: string) => void;
  onSubmit: () => void;
}

export interface UpdateInfoFormProps {
  errors: FieldErrors<FormData>;
  hasValues: boolean;
  user: FormData;
  setValue: (name: keyof FormData, value: string) => void;
  onSubmit: () => void;
}

export interface LabelInputProps {
  label: string;
  defaultValue: string;
  errors: FieldErrors<FormData>;
  type: keyof FormData;
  setValue: (name: keyof FormData, value: string) => void;
}

export interface QuickLinksProps {
  redirect: (path: RouteUrl) => void;
}

