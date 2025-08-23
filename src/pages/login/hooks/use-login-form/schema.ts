import z from "zod";

export const formSchema = z.object({
    email: z.email("E-mail inválido").min(1, "E-mail é obrigatório"),
    password: z.string().min(6, "Senha deve ter pelo menos 6 caracteres"),
});

export type FormData = z.infer<typeof formSchema>;