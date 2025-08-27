import { useAppNavigation } from "../../../hooks/use-app-navigation";
import { usePersonalInfo } from "../../../hooks/use-personal-info";
import { Home } from "../view/home.view";

export default function HomeController() {
  const { redirect } = useAppNavigation();
  const { data } = usePersonalInfo();

  return <Home redirect={redirect} user={data} />
};