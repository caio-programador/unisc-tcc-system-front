import { useCallback } from "react";
import { useRegisterForm } from "../hooks/use-register-form";
import Register from "../view/register.view";
import type { FormData } from "../hooks/use-register-form/schema";
import { useAppNavigation } from "../../../hooks/use-app-navigation";
import { RoutesUrl } from "../../../types/Router";
import { useRegister } from "../hooks/use-register";
import { toaster } from "../../../utils/toaster";

export default function RegisterController() {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useRegisterForm();

  const { redirect } = useAppNavigation();
  const { mutate: registerUser, isPending } = useRegister();

  const handleErrorRegister = useCallback(() => {
    toaster.create({
      closable: true,
      title: "Erro ao cadastrar",
      description: "Ocorreu um erro ao cadastrar o usuário.",
      type: "error",
    });
  }, []);

  const handleSuccessRegister = useCallback(() => {
    toaster.create({
      closable: true,
      title: "Cadastro realizado com sucesso",
      description: "O usuário foi cadastrado com sucesso.",
      type: "success",
    });

    redirect(RoutesUrl.HOME);
  }, [redirect]);

  const onSubmit = useCallback(
    (values: FormData) => {
      registerUser(
        {
          email: values.email,
          password: values.password,
          name: values.name,
          role: values.role,
        },
        {
          onError: handleErrorRegister,
          onSuccess: handleSuccessRegister,
        }
      );
    },
    [handleErrorRegister, handleSuccessRegister, registerUser]
  );

  return (
    <Register
      errors={errors}
      isPending={isPending}
      onSubmit={handleSubmit(onSubmit)}
      register={register}
      redirect={redirect}
      control={control}
    />
  );
}
