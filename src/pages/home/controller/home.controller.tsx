import { useAppNavigation } from "../../../hooks/use-app-navigation";
import { Home } from "../view/home.view";

export default function HomeController() {
  const { redirect } = useAppNavigation();

  return <Home redirect={redirect} />
};