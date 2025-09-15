import axios from "axios";
import { getAuthorizationHeader } from "../utils/get-authorization-header";
import type {
  Admissibility,
  TCCCreate,
  TCCRequest,
  TCCResponse,
} from "../types";
import type { PageableResponse } from "../types/Pageable";

const configURL = import.meta.env.VITE_API_URL;

export class TCCRelationshipsAPI {
  static async getAllTCCRelationships(
    params: TCCRequest
  ): Promise<PageableResponse<TCCResponse>> {
    const headers = await getAuthorizationHeader();
    const response = await axios.get(`${configURL}/relationships`, {
      headers,
      params,
    });
    return response.data;
  }

  static async createTCCRelationship(data: TCCCreate): Promise<void> {
    const headers = await getAuthorizationHeader();
    const response = await axios.post(`${configURL}/relationships`, data, {
      headers,
    });
    return response.data;
  }

  static async getOneTCCRelationship(
    tccRelationshipId: number
  ): Promise<TCCResponse> {
    const headers = await getAuthorizationHeader();
    const response = await axios.get(
      `${configURL}/relationships/${tccRelationshipId}`,
      {
        headers,
      }
    );
    return response.data;
  }
  static async getOneTCCRelationshipByStudentId(
    studentId: number
  ): Promise<TCCResponse> {
    const headers = await getAuthorizationHeader();
    const response = await axios.get(
      `${configURL}/relationships/student/${studentId}`,
      {
        headers,
      }
    );
    return response.data;
  }

  static async getTCCsByProfessor(
    params: TCCRequest
  ): Promise<PageableResponse<TCCResponse>> {
    const headers = await getAuthorizationHeader();
    const response = await axios.get(
      `${configURL}/relationships/professor/my-tccs`,
      {
        headers,
        params,
      }
    );
    return response.data;
  }

  static async deleteTCCRelationship(tccRelationshipId: number): Promise<void> {
    const headers = await getAuthorizationHeader();
    await axios.delete(`${configURL}/relationships/${tccRelationshipId}`, {
      headers,
    });
  }

  static async updateTCCRelationship(
    tccRelationshipId: number,
    data: Partial<TCCCreate>
  ): Promise<void> {
    const headers = await getAuthorizationHeader();
    await axios.patch(`${configURL}/relationships/${tccRelationshipId}`, data, {
      headers,
    });
  }

  static async changeAdmissibilityStatus({
    tccRelationshipId,
    admissibility,
  }: {
    tccRelationshipId: number;
    admissibility: Admissibility;
  }): Promise<void> {
    const headers = await getAuthorizationHeader();
    await axios.patch(
      `${configURL}/relationships/admissibility/${tccRelationshipId}`,
      { admissibility },
      {
        headers,
      }
    );
  }
}
