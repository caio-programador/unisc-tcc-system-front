import { useAppNavigation } from "../../../hooks/use-app-navigation";
import { usePersonalInfo } from "../../../hooks/use-personal-info";
import { TCCList } from "../view/tcc-list.view";
import { useUnauthorizedAccess } from "../../../hooks/use-unauthorized-access";
import { useTCCs } from "../hooks/use-tccs";
import { useCallback, useState } from "react";
import { useDeleteTCC } from "../hooks/use-delete-tcc";
import { toaster } from "../../../utils/toaster";
import { useSearchParams } from "react-router-dom";

export default function TCCListController() {
  const { data: currentUser } = usePersonalInfo();
  const { redirect } = useAppNavigation();
  const [searchParams] = useSearchParams();
  const isProfessor = searchParams.get("isProfessor") as unknown as boolean;
  const [searchTerm, setSearchTerm] = useState<string>();
  const [pageSize, setPageSize] = useState<number>(10);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const { data: tccData, isLoading: isLoadingTCCData } = useTCCs({
    name: searchTerm,
    page: currentPage - 1,
    size: pageSize,
  }, isProfessor);
  const { mutate: deleteTCC } = useDeleteTCC();

  const handleSearchChange = useCallback((value: string) => {
    setSearchTerm(value);
  }, []);

  const handleErrorDeleteTCC = useCallback(() => {
    toaster.create({
      closable: true,
      title: "Erro ao deletar usuário",
      description: "Tente novamente mais tarde",
      type: "error",
    });
  }, []);
  const handleSuccessDeleteTCC = useCallback(() => {
    toaster.create({
      closable: true,
      title: "Sucesso",
      description: "TCC deletado com sucesso",
      type: "success",
    });
  }, []);

  const handleDeleteTCC = useCallback((tccId: number) => {
    deleteTCC(tccId, {
      onError: handleErrorDeleteTCC,
      onSuccess: handleSuccessDeleteTCC,
    });
  }, [deleteTCC, handleErrorDeleteTCC, handleSuccessDeleteTCC]);

  useUnauthorizedAccess(currentUser?.role === "ALUNO");

  return (
    <TCCList
      user={currentUser}
      tccData={tccData}
      isLoadingTCCData={isLoadingTCCData}
      pageSize={pageSize}
      currentPage={currentPage}
      isProfessor={isProfessor}
      handleChangeSearchTerm={handleSearchChange}
      redirect={redirect}
      handleDeleteTCC={handleDeleteTCC}
      changePage={setCurrentPage}
      changePageSize={setPageSize}
    />
  );
}
