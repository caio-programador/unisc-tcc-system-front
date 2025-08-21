import type { User } from "../../types";

export interface State {
  user?: User;
  jwt?: string;
}

export type Action = {
  type: 'SET_USER';
  payload: User;
} | {
  type: 'SET_JWT';
  payload: string;
}