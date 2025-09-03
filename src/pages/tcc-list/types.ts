import type { TCCResponse, User } from "../../types";
import type { PageableResponse } from "../../types/Pageable";
import type { RouteUrl } from "../../types/Router";

export interface TCCListProps {
  tccData?: PageableResponse<TCCResponse>
  user?: User;
  isLoadingTCCData: boolean;
  pageSize: number;
  currentPage: number;
  isProfessor: boolean;
  changePage: (page: number) => void;
  changePageSize: (pageSize: number) => void;
  redirect: (path: RouteUrl) => void;
  handleChangeSearchTerm: (value: string) => void; 
  handleDeleteTCC: (tccId: number) => void;
}

export interface TCCCardProps {
  tcc?: TCCResponse;
  user?: User;
  redirect: (path: RouteUrl) => void;
  handleDeleteTCC: (tccId: number) => void;
}