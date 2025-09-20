import type { Alert, Meeting, User } from "../../types";
import type { RouteUrl } from "../../types/Router";

export interface HomeProps {
  redirect: (path: RouteUrl) => void;
  logout: () => void;
  isLoadingPersonalInfo: boolean;
  user?: User; 
  meetings: Meeting[] | undefined;
  isLoadingMeetings: boolean;
  notifications: Alert[] | undefined;
  isLoadingNotifications: boolean;
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

export interface AppAlertsProps {
  redirect: (path: RouteUrl) => void;
  notifications: Alert[] | undefined;
  isLoadingNotifications: boolean;
}

export interface QuickScheduleProps {
  meetings: Meeting[] | undefined;
  isLoadingMeetings: boolean;
}