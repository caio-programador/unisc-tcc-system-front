import z from "zod";

export const meetingFormSchema = z
  .object({
    student: z.string().min(1, "O aluno é obrigatório"),
    subject: z.string().min(1, "O assunto é obrigatório"),
    meetingDate: z.date({
      message: "A data da reunião é obrigatória"
    }),
    link: z.url("O link deve ser uma URL válida").or(z.literal("")),
  })
  .refine(
    (data) => {
      const now = new Date();
      const nowMinutes = new Date(now.getFullYear(), now.getMonth(), now.getDate(), now.getHours(), now.getMinutes());
      const meetingMinutes = new Date(data.meetingDate.getFullYear(), data.meetingDate.getMonth(), data.meetingDate.getDate(), data.meetingDate.getHours(), data.meetingDate.getMinutes());
      
      return meetingMinutes >= nowMinutes;
    },
    {
      message: "A data da reunião deve ser hoje ou futura",
      path: ["meetingDate"],
    }
  );

export type MeetingFormData = z.infer<typeof meetingFormSchema>;
