import { useQuery } from "@tanstack/react-query";
import { AuthAPI } from "../../api/Auth";
import { AppQueryKeys } from "../../types/AppQueryKeys";
import type { User } from "../../types";
import type { AxiosError } from "axios";
import { useEffect } from "react";
import { useAppNavigation } from "../use-app-navigation";
import { RoutesUrl } from "../../types/Router";
import { toaster } from "../../utils/toaster";

export const usePersonalInfo = () => {
  const { data, isLoading, isError, error } = useQuery<User, AxiosError>({
    queryKey: [AppQueryKeys.PERSONAL_INFO],
    queryFn: AuthAPI.getPersonalInfo,
  });
  const { redirect } = useAppNavigation();

  useEffect(() => {
    if (!error) return;
    if (error.status === 403) {
      redirect(RoutesUrl.LOGIN);
      toaster.create({
        closable: true,
        description:
          "Sua sessão expirou, realize o login para acessar normalmente o sistema",
        type: "error",
        title: "Erro ao acessar a home",
      });
    }
  }, [error, redirect]);

  return { data, isLoading, isError };
};
