import type { User } from "../../types";
import type { RouteUrl } from "../../types/Router";

export interface HomeProps {
  redirect: (path: RouteUrl) => void;
  user?: User; 
}

export interface MosaicProps {
  redirect: (path: RouteUrl) => void;
  user?: User; 
}

export interface ActionCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  onClick: () => void;
}