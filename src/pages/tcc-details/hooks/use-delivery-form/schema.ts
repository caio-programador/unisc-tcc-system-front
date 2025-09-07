import z from "zod";

export const deliveryFormSchema = z.object({
  title: z.string().min(1, "Título é obrigatório").min(3, "Título deve ter pelo menos 3 caracteres"),
  file: z.instanceof(File, { message: "Arquivo é obrigatório" }),
});

export type DeliveryFormData = z.infer<typeof deliveryFormSchema>;
