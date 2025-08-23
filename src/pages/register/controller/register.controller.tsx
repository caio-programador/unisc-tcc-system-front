import { useCallback } from "react";
import { useRegisterForm } from "../hooks/use-register-form";
import Register from "../view/register.view";
import type { FormData } from "../hooks/use-register-form/schema";
import { useAppNavigation } from "../../../hooks/use-app-navigation";
import { RoutesUrl } from "../../../types/Router";

export default function RegisterController() {
  const { 
    register, 
    handleSubmit, 
    control,
    formState: { errors },
  } = useRegisterForm();

  const { redirect } = useAppNavigation();

  const onSubmit = useCallback((values: FormData) => {
    // TODO: Implement register logic
    console.log('Register values:', values);
    redirect(RoutesUrl.HOME);
  }, [redirect]);

  const handleRedirectLogin = useCallback(() => {
    redirect(RoutesUrl.LOGIN);
  }, [redirect]);

  return (
    <Register 
      errors={errors} 
      onSubmit={handleSubmit(onSubmit)} 
      register={register} 
      control={control}
      handleRedirectLogin={handleRedirectLogin}
    />
  );
}