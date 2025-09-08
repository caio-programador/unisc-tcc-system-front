import { useCallback } from "react";
import { useAppNavigation } from "../../../hooks/use-app-navigation";
import { useCreateMeetingForm } from "../hooks/use-create-meeting-form";
import { Meetings } from "../view/meetings.view";
import type { MeetingFormData } from "../hooks/use-create-meeting-form/schema";

export default function MeetingsController() {
  const { redirect, openWindow } = useAppNavigation();
  const {
    formState: { errors },
    register,
    handleSubmit,
    control,
  } = useCreateMeetingForm();

  const onSubmit = useCallback((data: MeetingFormData) => {
    console.log("Form data:", data);
  }, [])

  return (
    <Meetings
      redirect={redirect}
      openWindow={openWindow}
      control={control}
      register={register}
      handleSubmit={handleSubmit(onSubmit)}
      errors={errors}
    />
  );
}
