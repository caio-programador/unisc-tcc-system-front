import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { type CreateRelationFormData, createRelationSchema } from "./schema"

export const useCreateRelationForm = () => {
  return useForm<CreateRelationFormData>({
    resolver: zodResolver(createRelationSchema),
  })
}