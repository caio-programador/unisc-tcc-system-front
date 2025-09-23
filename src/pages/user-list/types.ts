import type { Role, User } from "../../types/User";
import type { RouteUrl } from "../../types/Router";

export interface UserListProps {
  filteredUsers?: User[];
  searchTerm?: string;
  selectedRole?: Role;
  isLoading: boolean;
  pageSize: number;
  currentPage: number;
  totalElements?: number;
  currentUser?: User;
  changePage: (page: number) => void;
  changePageSize: (pageSize: number) => void;
  onSearchChange: (value: string) => void;
  onRoleChange: (value: Role) => void;
  onUserClick: (userId: number) => void;
  onDeleteUser: (userId: number) => void;
  redirect: (path: RouteUrl) => void;
}

export interface UserCardProps {
  user: User;
  onUserClick: (userId: number) => void;
  onDeleteUser: (userId: number) => void;
}
