import { createListCollection } from "@chakra-ui/react";
import { z } from "zod";

export const registerSchema = z
  .object({
    name: z.string().min(2, "Nome deve ter pelo menos 2 caracteres"),
    email: z.email("E-mail inválido"),
    password: z.string().min(6, "Senha deve ter pelo menos 6 caracteres"),
    confirmPassword: z.string().min(1, "Confirmação de senha é obrigatória"),
    role: z.enum(["ALUNO", "PROFESSOR", "COORDENADOR"], {
      error: "Selecione um tipo de usuário",
    }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Senhas não coincidem",
    path: ["confirmPassword"],
  });

export type FormData = z.infer<typeof registerSchema>;

export const roleOptions = createListCollection({
  items: [
    { value: "ALUNO", label: "Aluno" },
    { value: "PROFESSOR", label: "Professor" },
    { value: "COORDENADOR", label: "Coordenador" },
  ],
});
