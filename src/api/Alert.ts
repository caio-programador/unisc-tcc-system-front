import axios from "axios";
import type { Alert } from "../types";
import { getAuthorizationHeader } from "../utils/get-authorization-header";

const configURL = import.meta.env.VITE_API_URL;

export class AlertAPI {
  static getAlerts = async (start: Date, end: Date): Promise<Alert[]> => {
    const headers = await getAuthorizationHeader();
    const response = await axios.get(`${configURL}/alerts`, {
      params: { start: start.toISOString(), end: end.toISOString() },
      headers,
    });
    return response.data;
  };

  static markAsRead = async (alertId: number): Promise<void> => {
    const headers = await getAuthorizationHeader();
    await axios.patch(`${configURL}/alerts/${alertId}/read`, null, { headers });
  };

  static deleteAlert = async (alertId: number): Promise<void> => {
    const headers = await getAuthorizationHeader();
    await axios.delete(`${configURL}/alerts/${alertId}`, { headers });
  };
} 
