import type { RouteUrl } from "../../types/Router";
import type {
  FieldErrors,
  UseFormRegister,
  UseFormReturn,
} from "react-hook-form";
import type { EvaluationFormData } from "./hooks/use-evaluation-form/schema";
import type { DeliveryTC, DeliveryType, User } from "../../types";
import type { DeliveryFormData } from "./hooks/use-delivery-form/schema";

export interface TCCDetailsProps {
  redirect: (path: RouteUrl) => void;
  deliveryForm: UseFormReturn<DeliveryFormData>;
  evaluationDeliveryForm: UseFormReturn<EvaluationFormData>;
  selectedFileName: string;
  isLoading: boolean;
  loggedUser: User | undefined;
  deliveriesData: DeliveryTC[] | undefined;
  onSubmit: (
    data: DeliveryFormData,
    actionType?: DeliveryType,
    deliveryId?: number
  ) => void;
  onFileChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onRemoveFile: () => void;
  onDownloadFile: (key: string) => void;
}

export interface TCCStepsProps {
  deliveriesData: DeliveryTC[] | undefined;
  deliveryForm: UseFormReturn<DeliveryFormData>;
  onSubmit: (
    data: DeliveryFormData,
    actionType?: DeliveryType,
    deliveryId?: number
  ) => void;
  isLoading?: boolean;
  selectedFileName: string;
  loggedUser?: User;
  onFileChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onRemoveFile: () => void;
  onDownloadFile: (key: string) => void;
}

export interface DeliveryFormProps {
  onSubmit: (
    data: DeliveryFormData,
    actionType?: DeliveryType,
    deliveryId?: number
  ) => void;
  isLoading?: boolean;
  selectedFileName: string;
  deliveryData: DeliveryTC | undefined;
  onFileChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onRemoveFile: () => void;
  onDownloadFile: (key: string) => void;
  buttonText?: string;
  descriptionText: string;
  disabledSomeAssets: boolean;
  deliveryType?: DeliveryType;
  deliveryForm: UseFormReturn<DeliveryFormData>;
}

export interface LabelInputProps {
  labelTitle?: string;
  labelDescription: string;
  id: keyof EvaluationFormData & string;
  register: UseFormRegister<EvaluationFormData>;
  errors: FieldErrors<EvaluationFormData>;
  placeholder: string;
  type: "number" | "text";
}

export interface EvaluationdeliveryFormProps {
  onSubmit: () => void;
  register: UseFormRegister<EvaluationFormData>;
  errors: FieldErrors<EvaluationFormData>;
}

export interface Steps {
  id: number;
  title: string;
  professorTitle: string;
  description: string;
  buttonText?: string;
  deliveryType?: DeliveryType;
}
