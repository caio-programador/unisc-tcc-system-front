import type { User } from ".";


export interface DefensePanel {
  professor1Id: number;
  professor1Name: string;
  professor2Id: number;
  professor2Name: string;
  professor3Id: number;
  professor3Name: string;
}

export type Admissibility = "APPROVED" | "REJECTED" | "PENDING";

export interface TCCResponse {
  id: number;
  tccTitle: string;
  proposalDeliveryDate: string;
  tccDeliveryDate: string;
  proposalAssessmentDate: string;
  tccAssessmentDate: string;
  professor: User;
  student: User;
  defensePanel: DefensePanel;
  admissibility: Admissibility;
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
  professor2Id: number;
  professor3Id: number;
}

export type DeliveryType =
  | "PROPOSTA"
  | "TC"
  | "REELABORACAO_PROPOSTA"
  | "REELABORACAO_TC";

export type DeliveryStatus =
  | "APROVADO"
  | "REPROVADO"
  | "AGUARDANDO_AVALIACAO"
  | "REELABORACAO_REPROVADA";

export interface DeliveryTC {
  id: number;
  tccId: number;
  deliveryType: DeliveryType;
  deliveryDate: string;
  bucketFileKey: string;
  deliveryStatus: DeliveryStatus;
  quantityEvaluations: number;
  averageScore: number;
  updatedAt: string;
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

export interface Delivery {
  id: number;
  introduction: number;
  goals: number;
  bibliographyRevision: number;
  methodology: number;
  total: number;
  comments: string;
}

export interface EvaluationBody {
  deliveryId: number;
  introduction: number;
  goals: number;
  bibliographyRevision: number;
  methodology: number;
  comments?: string;
}

export interface EvaluationResponse {
  id: number;
  introduction: number;
  goals: number;
  bibliographyRevision: number;
  methodology: number;
  total: number;
  comments: string;
  evaluationDate: string;
  professor: User;
  delivery: DeliveryTC;
}
