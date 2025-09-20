import { useCallback, useState } from "react";
import { useAppNavigation } from "../../../hooks/use-app-navigation";
import { useCreateMeetingForm } from "../hooks/use-create-meeting-form";
import { Meetings } from "../view/meetings.view";
import type { MeetingFormData } from "../hooks/use-create-meeting-form/schema";
import { usePersonalInfo } from "../../../hooks/use-personal-info";
import { useMeetings } from "../hooks/use-meetings";
import { toaster } from "../../../utils/toaster";
import { useCreateMeeting } from "../hooks/use-create-meeting";
import { useUsers } from "../../../hooks/use-users";
import { useCancelMeeting } from "../hooks/use-cancel-meeting";
import { RoutesUrl, type RouteUrl } from "../../../types/Router";

export default function MeetingsController() {
  const { redirect, openWindow } = useAppNavigation();
  const {
    formState: { errors },
    register,
    handleSubmit,
    control,
    reset,
  } = useCreateMeetingForm();
  const { data: currentUser, isLoading: isLoadingUser } = usePersonalInfo();
  const [startDate, setStartDate] = useState<Date | undefined>(new Date());
  const { meetingsData, isLoadingMeetings } = useMeetings(startDate);

  const { data: students, isLoading: isLoadingStudents } = useUsers(
    {
      role: "ALUNO",
      size: 1000,
    },
    currentUser?.role === "PROFESSOR"
  );

  const { mutate: createMeeting, isPending: isPendingCreatingMeeting } =
    useCreateMeeting();
  const { mutate: cancelMeeting, isPending: isPendingCancelingMeeting } =
    useCancelMeeting();

  const handleSuccessCreateMeeting = useCallback(() => {
    toaster.create({
      closable: true,
      type: "success",
      title: "Reunião criada com sucesso!",
    });
    reset();
    document.getElementById("close-button")?.click();
  }, [reset]);

  const handleErrorCreateMeeting = useCallback(() => {
    toaster.create({
      closable: true,
      type: "error",
      title: "Erro ao criar reunião!",
      description:
        "Ocorreu um erro ao tentar criar a reunião. Por favor, tente novamente agora ou mais tarde.",
    });
    reset();
  }, [reset]);

  const onSubmit = useCallback(
    (data: MeetingFormData) => {
      createMeeting(
        {
          link: data.link,
          meetingDate: data.meetingDate.toISOString(),
          studentId: Number(data.student),
          professorId: currentUser!.id!,
          subject: data.subject,
        },
        {
          onSuccess: handleSuccessCreateMeeting,
          onError: handleErrorCreateMeeting,
        }
      );
    },
    [
      createMeeting,
      currentUser,
      handleErrorCreateMeeting,
      handleSuccessCreateMeeting,
    ]
  );

  const handleChangeStartDate = useCallback((date: Date | undefined) => {
    setStartDate(date);
  }, []);

  const handleErrorCancelMeeting = useCallback(() => {
    toaster.create({
      closable: true,
      type: "error",
      title: "Erro ao cancelar reunião!",
      description:
        "Ocorreu um erro ao tentar cancelar a reunião. Por favor, tente novamente agora ou mais tarde.",
    });
  }, []);

  const handleSuccessCancelMeeting = useCallback(() => {
    toaster.create({
      closable: true,
      type: "success",
      title: "Reunião cancelada com sucesso!",
    });
  }, []);

  const handleCancelMeeting = useCallback(
    (meetingId: number) => {
      cancelMeeting(meetingId, {
        onError: handleErrorCancelMeeting,
        onSuccess: handleSuccessCancelMeeting,
      });
    },
    [cancelMeeting, handleErrorCancelMeeting, handleSuccessCancelMeeting]
  );

  const handleNavigateToMeetingDetails = useCallback(
    (meetingId: number) => {
      redirect(`${RoutesUrl.MEETING_DETAILS}?id=${meetingId}` as RouteUrl);
    },
    [redirect]
  );

  return (
    <Meetings
      redirect={redirect}
      openWindow={openWindow}
      control={control}
      register={register}
      handleSubmit={handleSubmit(onSubmit)}
      errors={errors}
      currentUser={currentUser}
      isLoadingData={isLoadingUser || isLoadingMeetings || isLoadingStudents || isPendingCancelingMeeting}
      meetingData={meetingsData}
      handleChangeStartDate={handleChangeStartDate}
      handleCancelMeeting={handleCancelMeeting}
      students={students?.content}
      isPendingCreatingMeeting={isPendingCreatingMeeting}
      handleNavigateToMeetingDetails={handleNavigateToMeetingDetails}
    />
  );
}
