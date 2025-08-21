import type { User } from ".";

export interface Meeting {
  id: number;
  meetDate: string;
  topicDiscussed: string;
  filePath: string;
  student: User;
  teacher: User;
}