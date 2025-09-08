import { useForm } from "react-hook-form";
import { meetingFormSchema, type MeetingFormData } from "./schema";
import { zodResolver } from "@hookform/resolvers/zod";

export const useCreateMeetingForm = (defaultValues?: MeetingFormData) => {
  return useForm<MeetingFormData>({
    resolver: zodResolver(meetingFormSchema),
    defaultValues,
  });
};