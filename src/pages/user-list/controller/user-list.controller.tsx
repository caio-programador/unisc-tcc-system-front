import { useCallback, useState, useMemo } from "react";
import { UserListView } from "../view/user-list.view";
import type { User } from "../../../types/User";
import { useAppNavigation } from "../../../hooks/use-app-navigation";
import { RoutesUrl } from "../../../types/Router";

export default function UserListController() {
  const { redirect } = useAppNavigation();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedRole, setSelectedRole] = useState("");

  const users: User[] = [
    {
      id: 1,
      name: "João Silva",
      email: "joao.silva@email.com",
      role: "ALUNO"
    },
    {
      id: 2,
      name: "Maria Santos",
      email: "maria.santos@email.com",
      role: "ALUNO"
    },
    {
      id: 3,
      name: "Pedro Oliveira",
      email: "pedro.oliveira@email.com",
      role: "PROFESSOR"
    },
    {
      id: 4,
      name: "Ana Costa",
      email: "ana.costa@email.com",
      role: "PROFESSOR"
    },
    {
      id: 5,
      name: "Carlos Ferreira",
      email: "carlos.ferreira@email.com",
      role: "COORDENADOR"
    }
  ];

  const filteredUsers = useMemo(() => {
    return users.filter(user => {
      const matchesSearch = user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           user.email.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesRole = selectedRole === "" || user.role === selectedRole;
      return matchesSearch && matchesRole;
    });
  }, [users, searchTerm, selectedRole]);

  const handleSearchChange = useCallback((value: string) => {
    setSearchTerm(value);
  }, []);

  const handleRoleChange = useCallback((value: string) => {
    setSelectedRole(value);
  }, []);

  const handleUserClick = useCallback((user: User) => {
    redirect(RoutesUrl.USER_DETAILS);
  }, [redirect]);

  const handleDeleteUser = useCallback((userId: number) => {
    // Lógica para deletar usuário
    console.log("Deletar usuário:", userId);
  }, []);

  return (
    <UserListView
      filteredUsers={filteredUsers}
      searchTerm={searchTerm}
      selectedRole={selectedRole}
      onSearchChange={handleSearchChange}
      onRoleChange={handleRoleChange}
      onUserClick={handleUserClick}
      onDeleteUser={handleDeleteUser}
      redirect={redirect}
    />
  );
}
