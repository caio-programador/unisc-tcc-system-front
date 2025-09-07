import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { type DeliveryFormData, deliveryFormSchema } from "./schema";

export const useDeliveryForm = (defaultValues?: DeliveryFormData) => {
  return useForm<DeliveryFormData>({
    resolver: zodResolver(deliveryFormSchema),
    defaultValues,
  });
};
