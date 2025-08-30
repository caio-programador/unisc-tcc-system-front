import { useEffect } from "react";
import { useAppNavigation } from "../use-app-navigation";

export const useUnauthorizedAccess = (isUnauthorized: boolean) => {
  const { back } = useAppNavigation();

  useEffect(() => {
    if (isUnauthorized) {
      back();
    }
  }, [back, isUnauthorized]);
};
