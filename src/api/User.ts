import axios from "axios";
import type { UserRequestGetAll, User, UserRequest, AuthResponse } from "../types";
import type { PageableResponse } from "../types/Pageable";
import { getAuthorizationHeader } from "../utils/get-authorization-header";

const configURL = import.meta.env.VITE_API_URL;

export class UserAPI {
  static async getAll(params: UserRequestGetAll): Promise<PageableResponse<User>> {
    const headers = await getAuthorizationHeader();
    const response = await axios.get(`${configURL}/users`, { params, headers });
    return response.data;
  }

  static async getOneUser(id: number): Promise<User> {
    const headers = await getAuthorizationHeader();
    const response = await axios.get(`${configURL}/users/${id}`, { headers });
    return response.data;
  }

  static async updateUser({id, data}: {id: number, data: Partial<UserRequest>}): Promise<AuthResponse> {
    const headers = await getAuthorizationHeader();
    const response = await axios.patch(`${configURL}/users/${id}`, data, { headers });
    return response.data;
  }

  static async deleteUser(id: number): Promise<void> {
    const headers = await getAuthorizationHeader();
    await axios.delete(`${configURL}/users/${id}`, { headers });
  }
}