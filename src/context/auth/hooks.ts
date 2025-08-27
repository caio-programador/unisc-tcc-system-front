import { useContext } from "react";
import { AuthDispatchContext, AuthContext } from "./contexts";

const useAuthDispatch = () => useContext(AuthDispatchContext)!;
const useAuthState = () => useContext(AuthContext)!;

export { useAuthDispatch, useAuthState };
