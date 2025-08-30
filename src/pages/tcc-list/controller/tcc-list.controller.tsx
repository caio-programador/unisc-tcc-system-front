import { useAppNavigation } from "../../../hooks/use-app-navigation";
import { usePersonalInfo } from "../../../hooks/use-personal-info";
import { TCCList } from "../view/tcc-list.view";
import { useUnauthorizedAccess } from "../../../hooks/use-unauthorized-access";

export default function TCCListController() {
  const { data: currentUser } = usePersonalInfo();
  const { redirect } = useAppNavigation();

  useUnauthorizedAccess(currentUser?.role === 'ALUNO');

  return <TCCList user={currentUser} redirect={redirect} />;
}
