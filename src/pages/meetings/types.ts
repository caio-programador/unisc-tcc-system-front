import type { Control, FieldErrors, UseFormRegister } from "react-hook-form";
import type { RouteUrl } from "../../types/Router";
import type { MeetingFormData } from "./hooks/use-create-meeting-form/schema";
import type { Meeting, User } from "../../types";

export interface MeetingsProps {
  redirect: (path: RouteUrl) => void;
  openWindow: (path: string) => void;
  control: Control<MeetingFormData>;
  handleSubmit: () => void;
  register: UseFormRegister<MeetingFormData>;
  handleChangeStartDate: (date: Date | undefined) => void;
  errors: FieldErrors<MeetingFormData>;
  currentUser: User | undefined;
  meetingData: Meeting[] | undefined;
  isLoadingData: boolean;
  handleCancelMeeting: (meetingId: number) => void;
  students: User[] | undefined;
  isPendingCreatingMeeting: boolean;
  handleNavigateToMeetingDetails: (meetingId: number) => void;
}

export interface NewMeetingModalProps {
  control: Control<MeetingFormData>;
  handleSubmit: () => void;
  register: UseFormRegister<MeetingFormData>;
  errors: FieldErrors<MeetingFormData>;
  students: User[] | undefined;
  isPendingCreatingMeeting: boolean;
}

export interface ChangeStartDateProps {
  handleChangeStartDate: (date: Date | undefined) => void;
}

export interface MeetingListProps {
  currentUser: User | undefined;
  meeting: Meeting;
  openWindow: (path: string) => void;
  handleCancelMeeting: (meetingId: number) => void;
  handleNavigateToMeetingDetails: (meetingId: number) => void;
}
