export interface Pageable {
  pageNumber: number;
  pageSize: number;
}

export interface PageableResponse<T> {
  content: T[];
  pageable: Pageable;
  totalElements: number;
  size: number;
}