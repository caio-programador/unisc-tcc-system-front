import type { User } from ".";

export interface TCCResponse {
  id: number;
  tccTitle: string;
  proposalDeliveryDate: string;
  tccDeliveryDate: string;
  proposalAssessmentDate: string;
  tccAssessmentDate: string;
  professor: User;
  student: User;
}

export interface TCCRequest {
  name?: string;
  page?: number;
  size?: number;
}

export interface TCCCreate {
  proposalDeliveryDate: string;
  tccDeliveryDate: string;
  professorId: number;
  studentId: number;
}

export type DeliveryType =
  | "PROPOSTA"
  | "TC"
  | "REELABORACAO_PROPOSTA"
  | "REELABORACAO_TC";

export type DeliveryStatus =
  | "APROVADO"
  | "ADMISSIBILIDADE_REPROVADA"
  | "AGUARDANDO_ADMISSIBILIDADE"
  | "REPROVADO"
  | "AGUARDANDO_AVALIACAO";

export interface DeliveryTC {
  id: number;
  tcc: TCCResponse;
  deliveryType: DeliveryType;
  deliveryDate: string;
  bucketFileKey: string;
  deliveryStatus: DeliveryStatus;
}

export interface CreateDeliveryTC {
  title: string;
  file: File;
  deliveryType: DeliveryType;
  tccRelationshipId: number;
}

export type OpinionStatus = "FAVORAVEL" | "DESFAVORAVEL" | "REVISAR";

export interface AdmissibilityOpinion {
  id: number;
  status: OpinionStatus;
  advisor: User;
  delivery: DeliveryTC;
}

export interface Assessment {
  id: number;
  delivery: DeliveryTC;
  introScore: number;
  goalsScore: number;
  references: number;
  sequenceLogic: number;
  procedures: number;
  methodology: number;
  total: number;
  comments: string;
  assessmentDate: string;
  appraiser: User;
}

export interface AssessmentBody {
  deliveryId: number;
  introScore: number;
  goalsScore: number;
  references: number;
  sequenceLogic: number;
  procedures: number;
  methodology: number;
  total: number;
  comments?: string;
}
