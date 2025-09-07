import { useCallback } from "react";
import { useLoginForm } from "../hooks/use-login-form";
import Login from "../view/login.view";
import type { FormData } from "../hooks/use-login-form/schema";
import { useAppNavigation } from "../../../hooks/use-app-navigation";
import { RoutesUrl } from "../../../types/Router";
import { useLogin } from "../hooks/use-login";
import { toaster } from "../../../utils/toaster";
import type { AuthResponse } from "../../../types";
import { setCookie } from "../../../utils/set-cookie";
const TOKEN_COOKIE_NAME = import.meta.env.VITE_COOKIE_KEY;

export default function LoginController() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useLoginForm();
  const { mutate: doLogin, isPending } = useLogin();

  const { redirect } = useAppNavigation();

  const handleSuccessLogin = useCallback(
    async (data: AuthResponse) => {
      await setCookie(TOKEN_COOKIE_NAME, data.token);
      redirect(RoutesUrl.HOME);
    },
    [redirect]
  );

  const handleErrorLogin = useCallback(() => {
    toaster.create({
      closable: true,
      description:
        "Ocorreu um erro ao realizar o login, verifique suas credenciais e tente novamente",
      type: "error",
      title: "Erro ao realizar login",
    });
  }, []);

  const onSubmit = useCallback(
    (values: FormData) => {
      doLogin(values, {
        onSuccess: handleSuccessLogin,
        onError: handleErrorLogin,
      });
    },
    [doLogin, handleErrorLogin, handleSuccessLogin]
  );

  return (
    <Login
      errors={errors}
      isPending={isPending}
      onSubmit={handleSubmit(onSubmit)}
      register={register}
    />
  );
}
