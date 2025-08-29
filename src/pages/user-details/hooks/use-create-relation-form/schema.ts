import { z } from "zod";

export const createRelationSchema = z
  .object({
    orientador: z.string().min(3, "Orientador é obrigatório"),
    dataFinalEntregaProposta: z.date({
      error: "Data final da proposta é obrigatória",
    }),

    dataFinalEntregaTCC: z.date({
      error: "Data final do TCC é obrigatória",
    }),
  })
  .refine(
    (data) => {
      return data.dataFinalEntregaProposta < data.dataFinalEntregaTCC;
    },
    {
      message: "Data final da proposta deve ser anterior à data final do TCC",
      path: ["dataFinalEntregaProposta"],
    }
  )
  .refine(
    (data) => {
      const hoje = new Date();
      hoje.setHours(0, 0, 0, 0);
      return (
        data.dataFinalEntregaProposta >= hoje &&
        data.dataFinalEntregaTCC >= hoje
      );
    },
    {
      message: "Datas devem ser iguais ou posteriores à data atual",
      path: ["dataFinalEntregaProposta"],
    }
  );

export type CreateRelationFormData = z.infer<typeof createRelationSchema>;

export const mockOrientadores = [
  "Prof. João Silva",
  "Prof. Maria Santos", 
  "Prof. Carlos Oliveira"
];