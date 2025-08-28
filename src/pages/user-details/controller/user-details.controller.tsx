import { useCallback } from "react";
import { useCreateRelationForm } from "../hooks/use-create-relation-form";
import { UserDetails } from "../view/user-details.view";
import type { CreateRelationFormData } from "../hooks/use-create-relation-form/schema";

export const UserDetailsController = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useCreateRelationForm();

  const onSubmit = useCallback((data: CreateRelationFormData) => {
    // Lógica para submissão do formulário
    console.log("Formulário submetido", data);
  }, []);

  return (
    <UserDetails
      register={register}
      handleSubmit={handleSubmit(onSubmit)}
      errors={errors}
      control={control}
    />
  );
};
