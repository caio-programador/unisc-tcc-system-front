import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { updateSchema, type FormData } from "./schema";

export const useUpdateForm = (defaultValues: FormData) => {
  return useForm<FormData>({
    resolver: zodResolver(updateSchema),
    defaultValues,
  });
};