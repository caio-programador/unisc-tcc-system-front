import type { DeliveryTC } from "../../../types";

export const getCurrentStep = (deliveriesData: DeliveryTC[]) => {
  if (deliveriesData.length === 0) return 1;
  
  const lastDelivery = deliveriesData[0];

  if (lastDelivery.deliveryType === 'PROPOSTA') {
    if (lastDelivery.deliveryStatus === 'AGUARDANDO_AVALIACAO') return 2;
    if (lastDelivery.deliveryStatus === 'REPROVADO') return 3;
    if (lastDelivery.deliveryStatus === 'APROVADO') return 4;
  } else if (lastDelivery.deliveryType === 'REELABORACAO_PROPOSTA') {
    if (lastDelivery.deliveryStatus === 'AGUARDANDO_AVALIACAO') return 2;
    if (lastDelivery.deliveryStatus === 'REPROVADO') return 3;
    if (lastDelivery.deliveryStatus === 'APROVADO') return 4;
  } else if (lastDelivery.deliveryType === 'TC') {
    if (lastDelivery.deliveryStatus === 'AGUARDANDO_ADMISSIBILIDADE') return 5;
    if (lastDelivery.deliveryStatus === 'ADMISSIBILIDADE_REPROVADA') return 6;
    if (lastDelivery.deliveryStatus === 'AGUARDANDO_AVALIACAO') return 7;
    if (lastDelivery.deliveryStatus === 'REPROVADO') return 8;
    if (lastDelivery.deliveryStatus === 'APROVADO') return 9;
  } else if (lastDelivery.deliveryType === 'REELABORACAO_TC') {
    if (lastDelivery.deliveryStatus === 'AGUARDANDO_AVALIACAO') return 7;
    if (lastDelivery.deliveryStatus === 'REPROVADO') return 8;
    if (lastDelivery.deliveryStatus === 'APROVADO') return 9;
  }

  return 0;
};
