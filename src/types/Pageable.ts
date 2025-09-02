export interface Pageable {
  pageNumber: number;
  pageSize: number;
}

export interface PageableResponse<T> {
  content: T[];
  pageable: Pageable;
  totalElements: number;
  totalElements: number;
  size: number;
}