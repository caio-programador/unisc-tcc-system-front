import { useCallback } from "react";
import { useAppNavigation } from "../../../hooks/use-app-navigation";
import { usePersonalInfo } from "../../../hooks/use-personal-info";
import { Home } from "../view/home.view";
import { RoutesUrl } from "../../../types/Router";
import { toaster } from "../../../utils/toaster";
import { deleteCookie } from "../../../utils/delete-cookie";
import { useQueryClient } from "@tanstack/react-query";
import { useLimitedNotifications } from "../hooks/use-limited-notifications";
import { useLimitedMeetings } from "../hooks/use-limited-meetings";

const COOKIE_KEY = import.meta.env.VITE_COOKIE_KEY;

export default function HomeController() {
  const { redirect } = useAppNavigation();
  const queryClient = useQueryClient();
  const { data, isLoading: isLoadingPersonalInfo } = usePersonalInfo();
  const { notifications, isLoadingNotifications } = useLimitedNotifications();
  const { meetings, isLoadingMeetings } = useLimitedMeetings();

  const handleLogout = useCallback(() => {
    deleteCookie(COOKIE_KEY);
    redirect(RoutesUrl.LOGIN);
    queryClient.clear();
    toaster.create({
      type: "info",
      title: "Você deslogou",
      description: "Realize o login novamente para acessar o sistema",
      closable: true,
    });
  }, [queryClient, redirect]);

  return (
    <Home
      logout={handleLogout}
      redirect={redirect}
      user={data}
      isLoadingPersonalInfo={isLoadingPersonalInfo}
      isLoadingMeetings={isLoadingMeetings}
      meetings={meetings}
      isLoadingNotifications={isLoadingNotifications}
      notifications={notifications}
    />
  );
}
