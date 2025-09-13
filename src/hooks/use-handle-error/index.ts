import type { AxiosError } from "axios";
import { RoutesUrl } from "../../types/Router";
import { useEffect } from "react";
import { toaster } from "../../utils/toaster";
import { useAppNavigation } from "../use-app-navigation";
import { deleteCookie } from "../../utils/delete-cookie";

const TOKEN_COOKIE_NAME = import.meta.env.VITE_COOKIE_KEY;

export const useHandleError = (
  error: AxiosError<unknown, unknown> | null,
) => {
  const {redirect} = useAppNavigation();
  
  useEffect(() => {
    if (!error) return;
    if (error.status === 403) {
      redirect(RoutesUrl.LOGIN);
      deleteCookie(TOKEN_COOKIE_NAME)
      toaster.create({
        closable: true,
        description:
          "Sua sessão expirou, realize o login para acessar normalmente o sistema",
        type: "error",
        title: "Erro ao acessar a home",
      });
    } else if (error.status !== 404) {
      redirect(RoutesUrl.ERROR);
    }
  }, [error, redirect]);
};
