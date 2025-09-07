import { useCallback } from "react";
import type { DeliveryFormData } from "../use-delivery-form/schema";
import type { DeliveryType } from "../../../../types";
import { useCreateDelivery } from "./use-create-delivery";
import { toaster } from "../../../../utils/toaster";
import { useUpdateDelivery } from "./use-update-delivery";

export const useSubmitDelivery = () => {
  const { mutate: createDelivery, isPending: isPendingCreating } =
    useCreateDelivery();

  const { mutate: updateDelivery, isPending: isPendingUpdating } =
    useUpdateDelivery();

  const handlerError = useCallback(() => {
    toaster.create({
      type: "error",
      title: "Algo deu errado por aqui!",
      description: "Erro ao comunicar-se com o servidor. Tente novamente.",
      closable: true,
    });
  }, []);

  const handleSuccess = useCallback(() => {
    toaster.create({
      type: "success",
      title: "Sucesso!",
      description: "Sua entrega foi realizada com sucesso.",
      closable: true,
    });
  }, []);

  const submitDelivery = useCallback(
    (
      data: DeliveryFormData,
      tccId: number,
      deliveryType?: DeliveryType,
      deliveryId?: number
    ) => {
      if (deliveryType) {
        createDelivery(
          {
            title: data.title,
            file: data.file,
            deliveryType: deliveryType!,
            tccRelationshipId: tccId,
          },
          {
            onError: handlerError,
            onSuccess: handleSuccess,
          }
        );
      } else {
        updateDelivery(
          {
            deliveryId: deliveryId!,
            body: {
              title: data.title,
              file: data.file,
            },
          },
          {
            onError: handlerError,
            onSuccess: handleSuccess,
          }
        );
      }
    },
    [createDelivery, handleSuccess, handlerError, updateDelivery]
  );

  return {
    submitDelivery,
    isLoading: isPendingCreating || isPendingUpdating,
  };
};
