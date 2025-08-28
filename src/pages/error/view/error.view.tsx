import { ErrorScreen } from "../components/error-screen.component";
import type { ErrorViewProps } from "../types";

export const ErrorView = ({ onTryAgain, onGoHome }: ErrorViewProps) => {
  return (
    <ErrorScreen 
      onTryAgain={onTryAgain}
      onGoHome={onGoHome}
    />
  );
};
