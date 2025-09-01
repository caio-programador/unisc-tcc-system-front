import axios, { type AxiosResponse } from "axios";
import type { AuthRequest, AuthResponse, User, UserRequest } from "../types";
import { getAuthorizationHeader } from "../utils/get-authorization-header";

const configURL = import.meta.env.VITE_API_URL;

export class AuthAPI {
  static login = async (data: AuthRequest): Promise<AuthResponse> => {
    const response = (await axios.post(
      `${configURL}/auth/login`,
      data
    )) as AxiosResponse<AuthResponse>;
    return response.data;
  };

  static getPersonalInfo = async (): Promise<User> => {
    const headers = await getAuthorizationHeader();
    const response = (await axios.get(`${configURL}/auth/me`, {
      headers,
    })) as AxiosResponse<User>;
    return response.data;
  };

  static register = async (userBody: UserRequest): Promise<void> => {
    const headers = await getAuthorizationHeader();
    await axios.post(`${configURL}/auth/register`, userBody, {
      headers,
    });
  };
}
