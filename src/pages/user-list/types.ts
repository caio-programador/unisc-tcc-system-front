import type { User } from "../../types/User";
import type { RouteUrl } from "../../types/Router";

export interface UserListProps {
  filteredUsers: User[];
  searchTerm: string;
  selectedRole: string;
  onSearchChange: (value: string) => void;
  onRoleChange: (value: string) => void;
  onUserClick: (user: User) => void;
  onDeleteUser: (userId: number) => void;
  redirect: (path: RouteUrl) => void;
}

export interface UserCardProps {
  user: User;
  onUserClick: (user: User) => void;
  onDeleteUser: (userId: number) => void;
}
