export type AlertType =
  | 'ATRASO_ENTREGA'
  | 'ATRASO_AVALIACAO'
  | 'NOVO_PARECER'
  | 'NOVA_REUNIAO'
  | 'AVALIACAO_DISPONIVEL'
  | 'REUNIAO_CANCELADA'
  | 'NOVA_ENTREGA';


export interface Alert {
  id: number;
  message: string;
  generatedAt: string;
  isRead: boolean;
  type: AlertType;
  alertDate: string;
  userId: number;
}