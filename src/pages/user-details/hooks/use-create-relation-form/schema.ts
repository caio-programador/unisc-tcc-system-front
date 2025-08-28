import { z } from "zod";
import type { User } from "../../../../types";

export const createRelationSchema = z
  .object({
    orientador: z.object(
      {
        id: z.number(),
        name: z.string().min(1, "Nome do orientador é obrigatório"),
        email: z.email("Email inválido"),
        role: z.enum(["PROFESSOR", "COORDENADOR"]),
      },
      {
        error: "Orientador é obrigatório",
      }
    ),

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

export const mockOrientadores: User[] = [
  {
    id: 1,
    name: "Prof. João Silva",
    email: "joao.silva@unisc.br",
    role: "PROFESSOR",
  },
  {
    id: 2,
    name: "Prof. Maria Santos",
    email: "maria.santos@unisc.br",
    role: "PROFESSOR",
  },
  {
    id: 3,
    name: "Prof. Carlos Oliveira",
    email: "carlos.oliveira@unisc.br",
    role: "COORDENADOR",
  },
];
