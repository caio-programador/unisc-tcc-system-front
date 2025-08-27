import axios, { type AxiosResponse } from "axios";
import type { AuthRequest, AuthResponse, User, UserRequest } from "../types";
import { TOKEN_COOKIE_NAME } from "../config/const";

const configURL = "http://localhost:8080";

export class AuthAPI {
  private static getAuthorizationHeader = async () => {
    const cookieToken = await window.cookieStore.get(TOKEN_COOKIE_NAME);
    return {
      Authorization: `Bearer ${cookieToken?.value}`,
    };
  };

  static login = async (data: AuthRequest): Promise<AuthResponse> => {
    const response = (await axios.post(
      `${configURL}/auth/login`,
      data
    )) as AxiosResponse<AuthResponse>;
    return response.data;
  };

  static getPersonalInfo = async (): Promise<User> => {
    const headers = await this.getAuthorizationHeader();
    const response = (await axios.get(`${configURL}/auth/me`, {
      headers,
    })) as AxiosResponse<User>;
    return response.data;
  };

  static register = async (userBody: UserRequest): Promise<void> => {
    const headers = await this.getAuthorizationHeader();
    await axios.post(`${configURL}/auth/register`, userBody, {
      headers,
    });
  };
}
