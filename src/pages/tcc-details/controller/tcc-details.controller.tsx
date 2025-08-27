import { useAppNavigation } from "../../../hooks/use-app-navigation";
import { TCCDetails } from "../view/tcc-details.view";

export default function TCCDetailsController() {
  const { redirect } = useAppNavigation();

  return <TCCDetails redirect={redirect} />;
}
