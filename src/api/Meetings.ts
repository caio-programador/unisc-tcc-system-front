import axios from "axios";
import { getAuthorizationHeader } from "../utils/get-authorization-header";
import type { Meeting, MeetingBody } from "../types";

const configURL = import.meta.env.VITE_API_URL;

export class MeetingsAPI {
  static async getMyMeetings(startDate?: Date): Promise<Meeting[]> {
    const headers = await getAuthorizationHeader();
    const response = await axios.get(`${configURL}/meetings`, {
      headers,
      params: {
        startDate: startDate?.toISOString(),
      },
    });
    return response.data;
  }

  static async getOneMeeting(id: number): Promise<Meeting> {
    const headers = await getAuthorizationHeader();
    const response = await axios.get(`${configURL}/meetings/${id}`, {
      headers,
    });
    return response.data;
  }

  static async createMeeting(body: MeetingBody): Promise<void> {
    const headers = await getAuthorizationHeader();
    const response = await axios.post(`${configURL}/meetings`, body, {
      headers,
    });
    return response.data;
  }

  static async deleteMeeting(id: number): Promise<void> {
    const headers = await getAuthorizationHeader();
    const response = await axios.delete(`${configURL}/meetings/${id}`, {
      headers,
    });
    return response.data;
  }

  static async uploadMeetingDocument({
    id,
    file,
  }: {
    id: number;
    file: File;
  }): Promise<Meeting> {
    const headers = await getAuthorizationHeader();
    const formData = new FormData();
    formData.append("file", file);
    const response = await axios.patch(
      `${configURL}/meetings/${id}/document`,
      formData,
      {
        headers: {
          ...headers,
          "Content-Type": "multipart/form-data",
        },
      }
    );
    return response.data;
  }

  static downloadMeetingDocument = async (documentName: string): Promise<Blob> => {
    const headers = await getAuthorizationHeader();
    const response = await axios.get(
      `${configURL}/meetings/download/${documentName}`,
      {
        headers,
        responseType: "blob",
      }
    );
    return response.data;
  }
}
