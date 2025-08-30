export type Role = 'ALUNO' | 'PROFESSOR' | 'COORDENADOR';

export interface User {
  id: number;
  name: string;
  email: string;
  role: Role;
}

export interface AuthRequest {
  email: string;
  password: string;
}

export interface AuthResponse {
  token: string;
};

export interface UserRequest {
  email: string;
  name: string;
  password: string;
  role: Role;
}

export interface UserRequestGetAll {
  role?: Role;
  size?: number;
  page?: number;
  name?: string;
}
