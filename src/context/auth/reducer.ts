import type { State, Action } from "./type";

export const authReducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'SET_USER':
      return { ...state, user: action.payload };
    case 'SET_JWT':
      return { ...state, jwt: action.payload };
    default:
      return state;
  }
};
