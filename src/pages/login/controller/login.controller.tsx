import { useCallback } from "react";
import { useLoginForm } from "../hooks/use-login-form";
import Login from "../view/login.view";
import type { FormData } from "../hooks/use-login-form/schema";
import { useAppNavigation } from "../../../hooks/use-app-navigation";
import { RoutesUrl } from "../../../types/Router";

export default function LoginController() {
  const { 
    register, 
    handleSubmit, 
    formState: { errors },
  } = useLoginForm();

  const { redirect } = useAppNavigation();

  const onSubmit = useCallback((values: FormData) => {
    // TODO: Implement login logic
    console.log(values);
    redirect(RoutesUrl.HOME);
  }, [redirect]);

  const handleRedirectRegister = useCallback(() => {
    redirect(RoutesUrl.REGISTER)
  }, [redirect]);

  return <Login 
    errors={errors} 
    onSubmit={handleSubmit(onSubmit)} 
    register={register} 
    handleRedirectRegister={handleRedirectRegister}
  />;
}
