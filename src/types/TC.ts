import type { User } from ".";

export interface TCResponse {
  id: number;
  title: string;
  advisor: User;
  student: User;
}

export type DeliveryType = 'PROPOSTA' | 'TC' | 'REELABORACAO_PROPOSTA' | 'REELABORACAO_TC';

export type DeliveryStatus = 'PENDENTE' | 'APROVADO' | 'REPROVADO' | 'AGUARDANDO_AVALIACAO';

export interface DeliveryTC {
  TC: TCResponse;
  deliveryType: DeliveryType;
  deliveryDate: string;
  filePath: string;
  deliveryStatus: DeliveryStatus;
}

export type OpinionStatus = 'FAVORAVEL' | 'DESFAVORAVEL' | 'REVISAR';

export interface AdmissibilityOpinion {
  id: number;
  status: OpinionStatus;
  advisor: User;
  delivery: DeliveryTC;
}

export interface Assessment {
  id: number;
  delivery: DeliveryTC;
  introductionAssessment: number;
  goalsAssessment: number;
  bibliographicReviewAssessment: number;
  metodologyAssessment: number;
  finalScoreAssessment: number;
  comments: string;
  assessmentDate: string;
  appraiser: User;
}
