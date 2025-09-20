import z from "zod";

export const filterDateFormSchema = z
  .object({
    startDate: z.date("Data de início é obrigatória"),
    endDate: z.date("Data de fim é obrigatória"),
  })
  .refine((data) => data.startDate < data.endDate, {
    message: "Data de início deve ser anterior à data de fim",
  });

export type FilterDateFormData = z.infer<typeof filterDateFormSchema>;
