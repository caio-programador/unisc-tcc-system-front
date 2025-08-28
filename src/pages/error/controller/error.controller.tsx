import { useAppNavigation } from "../../../hooks/use-app-navigation";
import { ErrorView } from "../view/error.view";
import { RoutesUrl } from "../../../types/Router";
import { useCallback } from "react";

export default function ErrorController() {
  const { redirect } = useAppNavigation();

  const handleTryAgain = useCallback(() => {
    alert("Botão 'Tentar Novamente' está funcionando!");
  }, [redirect]);

  const handleGoHome = useCallback(() => {
    redirect(RoutesUrl.HOME);
  }, [redirect]);

  return (
    <ErrorView 
      onTryAgain={handleTryAgain}
      onGoHome={handleGoHome}
    />
  );
};
