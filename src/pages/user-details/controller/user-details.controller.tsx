import { useCallback } from "react";
import { useCreateRelationForm } from "../hooks/use-create-relation-form";
import { UserDetails } from "../view/user-details.view";
import type { CreateRelationFormData } from "../hooks/use-create-relation-form/schema";
import { useAppNavigation } from "../../../hooks/use-app-navigation";

export default function UserDetailsController() {
  const {
    handleSubmit,
    formState: { errors },
    control,
  } = useCreateRelationForm();
  const { redirect } = useAppNavigation();

  const onSubmit = useCallback((data: CreateRelationFormData) => {
    // Lógica para submissão do formulário
    console.log("Formulário submetido", data);
  }, []);

  return (
    <UserDetails
      redirect={redirect}
      handleSubmit={handleSubmit(onSubmit)}
      errors={errors}
      control={control}
    />
  );
};
