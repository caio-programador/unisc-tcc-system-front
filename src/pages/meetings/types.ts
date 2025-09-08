import type { Control, FieldErrors, UseFormRegister } from "react-hook-form";
import type { RouteUrl } from "../../types/Router";
import type { MeetingFormData } from "./hooks/use-create-meeting-form/schema";

export interface MeetingsProps {
  redirect: (path: RouteUrl) => void;
  openWindow: (path: string) => void;
  control: Control<MeetingFormData>;
  handleSubmit: () => void;
  register: UseFormRegister<MeetingFormData>;
  errors: FieldErrors<MeetingFormData>;
}

export interface NewMeetingModalProps {
  control: Control<MeetingFormData>;
  handleSubmit: () => void;
  register: UseFormRegister<MeetingFormData>;
  errors: FieldErrors<MeetingFormData>;
}
