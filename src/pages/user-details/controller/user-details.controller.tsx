import { useCallback } from "react";
import { useCreateRelationForm } from "../hooks/use-create-relation-form";
import { UserDetails } from "../view/user-details.view";
import type { CreateRelationFormData } from "../hooks/use-create-relation-form/schema";
import { useAppNavigation } from "../../../hooks/use-app-navigation";
import { useGetUser } from "../hooks/use-get-user";
import { useSearchParams } from "react-router-dom";

export default function UserDetailsController() {
  const {
    handleSubmit,
    formState: { errors },
    control,
  } = useCreateRelationForm();
  const { redirect } = useAppNavigation();
  const [searchParams] = useSearchParams();
  const userId = searchParams.get("userId");
  const { data: userData, isLoading: isLoadingUser } = useGetUser(Number(userId));

  const onSubmit = useCallback((data: CreateRelationFormData) => {
    // Lógica para submissão do formulário
    console.log("Formulário submetido", data);
  }, []);

  return (
    <UserDetails
      redirect={redirect}
      handleSubmit={handleSubmit(onSubmit)}
      isLoadingUser={isLoadingUser}
      user={userData}
      errors={errors}
      control={control}
    />
  );
};
