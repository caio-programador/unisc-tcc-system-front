import type { GetCurrentStepProps, GetCurrentStepReturn } from "../types";

export const getCurrentStep = ({
  deliveriesData,
  tccData,
}: GetCurrentStepProps): GetCurrentStepReturn => {
  if (!tccData)
    return {
      currentStep: 0,
      isTotallyReproved: false,
      thereIsNotTCC: true,
    };

  if (!deliveriesData)
    return {
      currentStep: 0,
      isTotallyReproved: false,
      thereIsNotTCC: false,
    };
  if (deliveriesData.length === 0)
    return {
      currentStep: 0,
      isTotallyReproved: false,
      thereIsNotTCC: false,
    };

  const lastDelivery = deliveriesData[0];

  if (lastDelivery.deliveryType === "PROPOSTA") {
    if (lastDelivery.deliveryStatus === "AGUARDANDO_AVALIACAO")
      return {
        currentStep: 1,
        isTotallyReproved: false,
        thereIsNotTCC: false,
      };
    if (lastDelivery.deliveryStatus === "REPROVADO")
      return {
        currentStep: 2,
        isTotallyReproved: false,
        thereIsNotTCC: false,
      };
    if (
      lastDelivery.deliveryStatus === "APROVADO" &&
      tccData.admissibility === "PENDING" &&
      tccData.countMeetings < 6
    )
      return {
        currentStep: 3,
        isTotallyReproved: false,
        thereIsNotTCC: false,
      };
    if (
      lastDelivery.deliveryStatus === "APROVADO" &&
      tccData.admissibility !== "PENDING" &&
      tccData.countMeetings < 6
    )
      return {
        currentStep: 3,
        isTotallyReproved: false,
        thereIsNotTCC: false,
      };
    if (
      lastDelivery.deliveryStatus === "APROVADO" &&
      tccData.admissibility !== "PENDING" &&
      tccData.countMeetings >= 6
    )
      return {
        currentStep: 4,
        isTotallyReproved: false,
        thereIsNotTCC: false,
        shouldUseNewForm: true,
      };
  } else if (lastDelivery.deliveryType === "REELABORACAO_PROPOSTA") {
    if (lastDelivery.deliveryStatus === "AGUARDANDO_AVALIACAO")
      return {
        currentStep: 1,
        isTotallyReproved: false,
        thereIsNotTCC: false,
      };
    if (lastDelivery.deliveryStatus === "REPROVADO")
      return {
        currentStep: 2,
        isTotallyReproved: false,
        thereIsNotTCC: false,
      };
      
    if (lastDelivery.deliveryStatus === "REELABORACAO_REPROVADA") {
      return {
        currentStep: 6,
        isTotallyReproved: true,
        thereIsNotTCC: false,
      };
    }
    if (
      lastDelivery.deliveryStatus === "APROVADO" &&
      tccData.admissibility === "PENDING"
    )
      return {
        currentStep: 3,
        isTotallyReproved: false,
        thereIsNotTCC: false,
      };
    if (
      lastDelivery.deliveryStatus === "APROVADO" &&
      tccData.admissibility !== "PENDING"
    )
      return {
        currentStep: 4,
        isTotallyReproved: false,
        thereIsNotTCC: false,
        shouldUseNewForm: true,
      };
  } else if (lastDelivery.deliveryType === "TC") {
    if (lastDelivery.deliveryStatus === "AGUARDANDO_AVALIACAO")
      return {
        currentStep: 5,
        isTotallyReproved: false,
        thereIsNotTCC: false,
      };
    if (lastDelivery.deliveryStatus === "REPROVADO")
      return {
        currentStep: 6,
        isTotallyReproved: false,
        thereIsNotTCC: false,
      };
    if (lastDelivery.deliveryStatus === "APROVADO")
      return {
        currentStep: 7,
        isTotallyReproved: false,
        thereIsNotTCC: false,
      };
    if (lastDelivery.deliveryStatus === "REELABORACAO_REPROVADA") {
      return {
        currentStep: 6,
        isTotallyReproved: true,
        thereIsNotTCC: false,
      };
    }
  } else if (lastDelivery.deliveryType === "REELABORACAO_TC") {
    if (lastDelivery.deliveryStatus === "AGUARDANDO_AVALIACAO")
      return {
        currentStep: 5,
        isTotallyReproved: false,
        thereIsNotTCC: false,
      };
    if (lastDelivery.deliveryStatus === "REELABORACAO_REPROVADA")
      return {
        currentStep: 6,
        isTotallyReproved: true,
        thereIsNotTCC: false,
      };
    if (lastDelivery.deliveryStatus === "APROVADO")
      return {
        currentStep: 7,
        isTotallyReproved: false,
        thereIsNotTCC: false,
      };
  }
  return {
    currentStep: 0,
    isTotallyReproved: false,
    thereIsNotTCC: false,
  };
};
