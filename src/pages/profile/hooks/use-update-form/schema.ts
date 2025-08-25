import z from "zod";

export const updateSchema = z.object({
  name: z.string().min(2, "Nome deve ter pelo menos 2 caracteres"),
  email: z.email("E-mail inválido"),
});

export type FormData = z.infer<typeof updateSchema>;