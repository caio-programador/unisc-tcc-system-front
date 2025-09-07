import axios from "axios";
import type { CreateDeliveryTC, DeliveryTC } from "../types";
import { getAuthorizationHeader } from "../utils/get-authorization-header";

const configURL = import.meta.env.VITE_API_URL;

export class DeliverablesAPI {
  static getMyDeliveries = async (): Promise<DeliveryTC[]> => {
    const headers = await getAuthorizationHeader();
    const response = await axios.get(`${configURL}/deliverables`, { headers });
    return response.data;
  };

  static getDeliveriesByTCCId = async (
    tccId: number
  ): Promise<DeliveryTC[]> => {
    const headers = await getAuthorizationHeader();
    const response = await axios.get(`${configURL}/deliverables/${tccId}`, {
      headers,
    });
    return response.data;
  };

  static createDelivery = async (body: CreateDeliveryTC): Promise<void> => {
    const headers = await getAuthorizationHeader();
    const formData = new FormData();
    formData.append("tccTitle", body.title);
    formData.append("file", body.file);
    formData.append("deliveryType", body.deliveryType);
    formData.append("tccId", body.tccRelationshipId.toString());

    await axios.post(`${configURL}/deliverables`, formData, {
      headers,
    });
  };

  static downloadDeliveryFile = async (bucketFileKey: string): Promise<Blob> => {
    const headers = await getAuthorizationHeader();
    const response = await axios.get(
      `${configURL}/deliverables/download/${bucketFileKey}`,
      {
        headers,
        responseType: "blob",
      }
    );
    return response.data;
  }

  static deleteDelivery = async (deliveryId: number): Promise<void> => {
    const headers = await getAuthorizationHeader();
    await axios.delete(`${configURL}/deliverables/${deliveryId}`, {
      headers,
    });
  }

  static updateDelivery = async ({deliveryId, body}: {deliveryId: number, body: Partial<CreateDeliveryTC>}): Promise<void> => {
    const headers = await getAuthorizationHeader();
    const formData = new FormData();
    if (body.title) formData.append("tccTitle", body.title);
    if (body.file) formData.append("file", body.file);
    if (body.deliveryType) formData.append("deliveryType", body.deliveryType);
    if (body.tccRelationshipId) formData.append("tccId", body.tccRelationshipId.toString());

    await axios.patch(`${configURL}/deliverables/${deliveryId}`, formData, {
      headers: { ...headers, "Content-Type": "multipart/form-data" },
    });
  }

  
}
