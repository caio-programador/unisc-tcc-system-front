import type { DeliveryTC } from "../../../types";

export const getCurrentStep = (deliveriesData?: DeliveryTC[]) => {
  if (!deliveriesData) return 0;
  if (deliveriesData.length === 0) return 0;
  
  const lastDelivery = deliveriesData[0];

  if (lastDelivery.deliveryType === 'PROPOSTA') {
    if (lastDelivery.deliveryStatus === 'AGUARDANDO_AVALIACAO') return 1;
    if (lastDelivery.deliveryStatus === 'REPROVADO') return 2;
    if (lastDelivery.deliveryStatus === 'APROVADO') return 3;
  } else if (lastDelivery.deliveryType === 'REELABORACAO_PROPOSTA') {
    if (lastDelivery.deliveryStatus === 'AGUARDANDO_AVALIACAO') return 1;
    if (lastDelivery.deliveryStatus === 'REPROVADO') return 2;
    if (lastDelivery.deliveryStatus === 'APROVADO') return 3;
  } else if (lastDelivery.deliveryType === 'TC') {
    if (lastDelivery.deliveryStatus === 'AGUARDANDO_AVALIACAO') return 5;
    if (lastDelivery.deliveryStatus === 'REPROVADO') return 6;
    if (lastDelivery.deliveryStatus === 'APROVADO') return 7;
  } else if (lastDelivery.deliveryType === 'REELABORACAO_TC') {
    if (lastDelivery.deliveryStatus === 'AGUARDANDO_AVALIACAO') return 5;
    if (lastDelivery.deliveryStatus === 'REPROVADO') return 6;
    if (lastDelivery.deliveryStatus === 'APROVADO') return 7;
  }

  return 0;
};
