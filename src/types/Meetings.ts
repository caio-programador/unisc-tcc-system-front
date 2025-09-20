export interface Meeting {
  id: number;
  meetingDate: string;
  subject: string;
  documentName: string;
  studentName: string;
  professorName: string;
  link: string;
}

export interface MeetingBody {
  meetingDate: string;
  subject: string;
  studentId: number;
  professorId: number;
  link: string;
}

export interface MeetingUpdateBody {
  file: File;
}

