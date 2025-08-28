import { useAppNavigation } from "../../../hooks/use-app-navigation";
import { ErrorView } from "../view/error.view";
import { RoutesUrl } from "../../../types/Router";
import { useCallback } from "react";

export default function ErrorController() {
  const { redirect, back } = useAppNavigation();

  const handleTryAgain = useCallback(() => {
    back();
  }, [back]);

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
