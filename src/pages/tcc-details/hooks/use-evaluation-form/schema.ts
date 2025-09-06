import z from "zod";

export const evaluationFormSchema = z.object({
  introScore: z.number().min(0).max(2, "A nota deve ser entre 0 e 2"),
  goalsScore: z.number().min(0).max(1, "A nota deve ser entre 0 e 1"),
  references: z.number().min(0).max(2, "A nota deve ser entre 0 e 2"),
  sequenceLogic: z.number().min(0).max(1, "A nota deve ser entre 0 e 1"),
  procedures: z.number().min(0).max(2, "A nota deve ser entre 0 e 2"),
  methodology: z.number().min(0).max(2, "A nota deve ser entre 0 e 2"),
  total: z.number().min(0).max(10, "A nota total deve ser entre 0 e 10"),
  comments: z.string().optional(),
});

export type EvaluationFormData = z.infer<typeof evaluationFormSchema>;