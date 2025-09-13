import axios from "axios";
import type { EvaluationBody, EvaluationResponse } from "../types";
import { getAuthorizationHeader } from "../utils/get-authorization-header";

const configURL = import.meta.env.VITE_API_URL;

export class EvaluationAPI {
  static getEvaluationsByDeliveryId = async (
    deliveryId: number
  ): Promise<EvaluationResponse[]> => {
    const headers = await getAuthorizationHeader();
    const response = await axios.get(`${configURL}/evaluations/${deliveryId}`, {
      headers,
    });
    return response.data;
  }

  static getEvaluationByDeliveryIdAndProfessorId = async (
    deliveryId: number,
    professorId: number
  ): Promise<EvaluationResponse> => {
    const headers = await getAuthorizationHeader();
    const response = await axios.get(
      `${configURL}/evaluations/${deliveryId}/${professorId}`,
      { headers }
    );
    return response.data;
  }

  static createEvaluation = async (body: EvaluationBody) => {
    const headers = await getAuthorizationHeader();
    const response = await axios.post(
      `${configURL}/evaluations`,
      body,
      { headers }
    );
    return response.data;
  }

  static updateEvaluation = async ({evaluationId, body}: {evaluationId: number; body: Partial<EvaluationBody>}) => {
    const headers = await getAuthorizationHeader();
    const response = await axios.patch(
      `${configURL}/evaluations/${evaluationId}`,
      body,
      { headers }
    );
    return response.data;
  }
}
