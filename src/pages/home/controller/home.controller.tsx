import { useCallback } from "react";
import { useAppNavigation } from "../../../hooks/use-app-navigation";
import { usePersonalInfo } from "../../../hooks/use-personal-info";
import { Home } from "../view/home.view";
import { RoutesUrl } from "../../../types/Router";
import { toaster } from "../../../utils/toaster";

const COOKIE_KEY = import.meta.env.VITE_COOKIE_KEY;

export default function HomeController() {
  const { redirect } = useAppNavigation();
  const { data, isLoading: isLoadingPersonalInfo } = usePersonalInfo();

  const handleLogout = useCallback(() => {
    window.cookieStore.delete(COOKIE_KEY);
    redirect(RoutesUrl.LOGIN);
    toaster.create({
      type: 'info',
      title: 'Você deslogou',
      description: 'Realize o login novamente para acessar o sistema',
      closable: true,
    })
  }, [redirect]);

  return (
    <Home
      logout={handleLogout}
      redirect={redirect}
      user={data}
      isLoadingPersonalInfo={isLoadingPersonalInfo}
    />
  );
}
