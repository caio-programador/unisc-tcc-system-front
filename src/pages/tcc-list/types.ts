import type { User } from "../../types";
import type { RouteUrl } from "../../types/Router";

export interface TCCListProps {
  redirect: (path: RouteUrl) => void;
  user?: User;
}

export interface TCCCardProps {
  redirect: (path: RouteUrl) => void;
  user?: User;
}