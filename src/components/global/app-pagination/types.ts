export interface AppPaginationProps {
  page: number;
  pageSize: number;
  totalElements: number;
  changePage: (page: number) => void;
  changePageSize: (pageSize: number) => void;
}