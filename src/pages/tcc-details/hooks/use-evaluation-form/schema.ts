import z from "zod";

const createNumberFieldSchema = (min: number, max: number, errorMessage: string) => {
  return z
    .string()
    .refine((val) => val.trim() !== "", "Este campo é obrigatório")
    .refine((val) => {
      const normalizedVal = val.replace(",", ".");
      const num = parseFloat(normalizedVal);
      return !isNaN(num);
    }, "Deve ser um número válido")
    .refine((val) => {
      const normalizedVal = val.replace(",", ".");
      const num = parseFloat(normalizedVal);
      return num >= min && num <= max;
    }, errorMessage);
};

export const evaluationFormSchema = z.object({
  introduction: createNumberFieldSchema(0, 2, "A nota deve ser entre 0 e 2"),
  goals: createNumberFieldSchema(0, 1, "A nota deve ser entre 0 e 1"),
  bibliographyRevision: createNumberFieldSchema(0, 3, "A nota deve ser entre 0 e 3"),
  methodology: createNumberFieldSchema(0, 4, "A nota deve ser entre 0 e 4"),
  total: createNumberFieldSchema(0, 10, "A nota total deve ser entre 0 e 10"),
  comments: z.string().optional(),
});

export type EvaluationFormData = z.infer<typeof evaluationFormSchema>;