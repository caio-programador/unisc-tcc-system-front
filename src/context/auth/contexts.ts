import { createContext } from "react";
import type { Action, State } from "./type";


export const initialState: State = {
  user: undefined,
  jwt: undefined,
};

export const AuthContext = createContext<State | undefined>(initialState);
export const AuthDispatchContext = createContext<React.Dispatch<Action> | undefined>(undefined);
