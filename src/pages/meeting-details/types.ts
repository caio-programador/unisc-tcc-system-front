import type { User } from "../../types";
import type { Meeting } from "../../types/Meetings";
import type { RouteUrl } from "../../types/Router";

export interface MeetingDetailsProps {
  redirect: (path: RouteUrl) => void;
  openWindow: (url: string) => void;
  meeting: Meeting | undefined;
  isLoading: boolean;
  currentUser: User | undefined;
  onDownloadDocument?: (documentName: string) => void;
  onUploadDocument?: (file: File) => void;
  onReplaceDocument?: (file: File) => void;
  isUploadingDocument: boolean;
}

export interface MeetingInfoProps {
  meeting: Meeting;
  currentUser: User | undefined;
  onDownloadDocument?: (documentName: string) => void;
  onUploadDocument?: (file: File) => void;
  onReplaceDocument?: (file: File) => void;
  isUploadingDocument: boolean;
}

export interface MeetingActionsProps {
  meeting: Meeting;
  openWindow: (url: string) => void;
  currentUser: User | undefined;
}

export interface MeetingHeaderProps {
  meeting: Meeting;
  redirect: (path: RouteUrl) => void;
}