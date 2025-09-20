import { useCallback, useState } from "react";
import { UserListView } from "../view/user-list.view";
import type { Role } from "../../../types/User";
import { useAppNavigation } from "../../../hooks/use-app-navigation";
import { RoutesUrl, type RouteUrl } from "../../../types/Router";
import { useUsers } from "../../../hooks/use-users";
import { useDeleteUser } from "../hooks/use-delete-user";
import { toaster } from "../../../utils/toaster";

export default function UserListController() {
  const { redirect } = useAppNavigation();
  const [searchTerm, setSearchTerm] = useState<string>();
  const [selectedRole, setSelectedRole] = useState<Role>();
  const [pageSize, setPageSize] = useState<number>(10);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const { data: users, isLoading } = useUsers({
    name: searchTerm,
    role: selectedRole,
    page: currentPage - 1,
    size: pageSize,
  }, pageSize !== 0);
  const { mutate: deleteUser } = useDeleteUser();

  const handleSearchChange = useCallback((value: string) => {
    setSearchTerm(value);
  }, []);

  const handleRoleChange = useCallback((value: Role) => {
    setSelectedRole(value);
  }, []);

  const handleUserClick = useCallback(
    (userId: number) => {
      redirect(`${RoutesUrl.USER_DETAILS}?userId=${userId}` as RouteUrl);
    },
    [redirect]
  );

  const handleErrorDeleteUser = useCallback(() => {
    toaster.create({
      closable: true,
      title: "Erro ao deletar usuário",
      description: "Tente novamente mais tarde",
      type: "error",
    });
    setSearchTerm(undefined);
    setSelectedRole(undefined);
  }, []);

  const handleSuccessDeleteUser = useCallback(() => {
    toaster.create({
      closable: true,
      title: "Usuário deletado com sucesso",
      description: "O usuário foi removido da lista",
      type: "success",
    });
    setSearchTerm(undefined);
    setSelectedRole(undefined);
  }, []);

  const handleDeleteUser = useCallback(
    (userId: number) => {
      deleteUser(userId, {
        onError: handleErrorDeleteUser,
        onSuccess: handleSuccessDeleteUser,
      });
    },
    [deleteUser, handleErrorDeleteUser, handleSuccessDeleteUser]
  );

  return (
    <UserListView
      filteredUsers={users?.content}
      searchTerm={searchTerm}
      selectedRole={selectedRole}
      isLoading={isLoading}
      pageSize={pageSize}
      currentPage={currentPage}
      onSearchChange={handleSearchChange}
      onRoleChange={handleRoleChange}
      onUserClick={handleUserClick}
      onDeleteUser={handleDeleteUser}
      redirect={redirect}
      changePage={setCurrentPage}
      changePageSize={setPageSize}
      totalElements={users?.totalElements}
    />
  );
}
