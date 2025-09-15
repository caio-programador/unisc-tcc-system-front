import { z } from "zod";

export const createRelationSchema = z
  .object({
    orientador: z.string().min(1, "Orientador é obrigatório"),
    professor2: z.string().min(1, "Professor 2 da banca é obrigatório"),
    professor3: z.string().min(1, "Professor 3 da banca é obrigatório"),
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
  )
  .refine(
    (data) => {
      return data.orientador !== data.professor2;
    },
    {
      message: "O orientador não pode ser o mesmo que o Professor 2 da banca",
      path: ["professor2"],
    }
  )
  .refine(
    (data) => {
      return data.orientador !== data.professor3;
    },
    {
      message: "O orientador não pode ser o mesmo que o Professor 3 da banca",
      path: ["professor3"],
    }
  )
  .refine(
    (data) => {
      return data.professor2 !== data.professor3;
    },
    {
      message: "O Professor 2 não pode ser o mesmo que o Professor 3 da banca",
      path: ["professor3"],
    }
  );

export type CreateRelationFormData = z.infer<typeof createRelationSchema>;
