export type Role = 'ALUNO' | 'teacher' | 'COORDENADOR';

export interface User {
  id: number;
  name: string;
  email: string;
  role: Role;
}

