import type { User } from ".";

export type AlertType =
  | 'ATRASO_ENTREGA'
  | 'ATRASO_AVALIACAO'
  | 'NOVO_PARECER'
  | 'NOVA'
  | 'NOVA_REUNIAO'
  | 'AVALIACAO_DISPONIVEL';

export type EventType = 
  | 'ENTREGA_PORPOSTA' 
  | 'AVALIACAO_PROPOSTA'
  | 'ENTREGA_TC'
  | 'AVALIACAO_TC'
  | 'REELABORACAO_PROPOSTA'
  | 'REELABORACAO_TC';

export interface EventSchedule {
  id: number;
  eventType: EventType;
  deliveryLimitDate: string;
  assessmentLimitDate: string;
  coordinator: User;
}

export interface Alert {
  id: number;
  message: string;
  user: User;
  createdAt: string;
  isRead: boolean;
  alertType: AlertType;
  eventSchedule: EventSchedule;
}