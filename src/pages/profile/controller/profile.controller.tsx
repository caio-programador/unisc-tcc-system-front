import { useCallback, useMemo } from "react";
import { useAppNavigation } from "../../../hooks/use-app-navigation";
import { useUpdateForm } from "../hooks/use-update-form";
import type { FormData } from "../hooks/use-update-form/schema";
import { Profile } from "../view/profile.view";
import { usePersonalInfo } from "../../../hooks/use-personal-info";
import { useUpdateUser } from "../hooks/use-update-user";
import { toaster } from "../../../utils/toaster";
import type { AuthResponse } from "../../../types";

const TOKEN_COOKIE_NAME = import.meta.env.VITE_COOKIE_KEY;

export default function ProfileController() {
  const { redirect } = useAppNavigation();
  const { data: personalInfo, refetch } = usePersonalInfo();
  const { mutate: updateUser, isPending } = useUpdateUser();

  const {
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
    reset,
  } = useUpdateForm({ ...personalInfo! });

  const values = watch();

  const hasValues = useMemo(() => {
    const nameChanged = values.name !== personalInfo?.name;
    const emailChanged = values.email !== personalInfo?.email;
    const result = nameChanged || emailChanged;
    return result;
  }, [values.name, values.email, personalInfo?.name, personalInfo?.email]);

  const handleError = useCallback(() => {
    reset();
    toaster.create({
      type: "error",
      closable: true,
      title: "Erro ao atualizar perfil",
      description: "Tente novamente mais tarde",
    });
  }, [reset]);

  const handleSuccess = useCallback((data: AuthResponse) => {
    toaster.create({
      type: "success",
      closable: true,
      title: "Perfil atualizado",
      description: "Seu perfil foi atualizado com sucesso",
    });
    window.cookieStore.set(TOKEN_COOKIE_NAME, data.token);    
    refetch();
  }, [refetch]);

  const handleUpdate = useCallback(
    (data: FormData) => {
      updateUser(
        {
          id: personalInfo!.id,
          data,
        },
        {
          onSuccess: handleSuccess,
          onError: handleError,
        }
      );
    },
    [handleError, handleSuccess, personalInfo, updateUser]
  );

  return (
    <Profile
      isPending={isPending}
      user={personalInfo!}
      errors={errors}
      onSubmit={handleSubmit(handleUpdate)}
      redirect={redirect}
      setValue={setValue}
      hasValues={hasValues}
    />
  );
}
