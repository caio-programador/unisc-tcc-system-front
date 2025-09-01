import { useCallback, useMemo } from "react";
import { useCreateRelationForm } from "../hooks/use-create-relation-form";
import { UserDetails } from "../view/user-details.view";
import type { CreateRelationFormData } from "../hooks/use-create-relation-form/schema";
import { useAppNavigation } from "../../../hooks/use-app-navigation";
import { useGetUser } from "../hooks/use-get-user";
import { useSearchParams } from "react-router-dom";
import { useTCCRelationship } from "../../../hooks/use-tcc-relationship";
import { useUsers } from "../../../hooks/use-users";
import { usePersonalInfo } from "../../../hooks/use-personal-info";
import { useCreateUpdateTCC } from "../hooks/use-create-update-tcc";
import { toaster } from "../../../utils/toaster";

export default function UserDetailsController() {
  const { redirect } = useAppNavigation();
  const [searchParams] = useSearchParams();
  const userId = searchParams.get("userId");
  const { data: currentUser } = usePersonalInfo();
  const { data: userData, isLoading: isLoadingUser } = useGetUser(
    Number(userId)
  );
  const {
    data: tccData,
    isLoading: isLoadingTCC,
    refetch: refetchTCCRelationship,
  } = useTCCRelationship(Number(userId), userData?.role === "ALUNO");
  const { data: professors, isLoading: isLoadingProfessor } = useUsers({
    role: "PROFESSOR",
  });
  const { mutate: createUpdateTCC, isPending: isPendingCreatingUpdatingTCC } =
    useCreateUpdateTCC();
  const tccIsCreated = useMemo(() => Boolean(tccData), [tccData]);

  const {
    handleSubmit,
    formState: { errors },
    control,
  } = useCreateRelationForm({
    dataFinalEntregaProposta: tccData?.proposalDeliveryDate
      ? new Date(tccData.proposalDeliveryDate)
      : undefined,
    dataFinalEntregaTCC: tccData?.tccDeliveryDate
      ? new Date(tccData.tccDeliveryDate)
      : undefined,
    orientador: String(tccData?.professor?.id),
  });

  const handleErrorTCC = useCallback(() => {
    const description = tccIsCreated
      ? "Erro ao atualizar TCC"
      : "Erro ao criar TCC";
    toaster.create({
      closable: true,
      title: "Erro ao criar/atualizar TCC",
      description,
      type: "error",
    });
  }, [tccIsCreated]);

  const handleSuccessTCC = useCallback(() => {
    const description = tccIsCreated
      ? "Sucesso ao atualizar TCC"
      : "Sucesso ao criar TCC";
    toaster.create({
      closable: true,
      title: "Sucesso",
      description,
      type: "success",
    });
    refetchTCCRelationship();
  }, [refetchTCCRelationship, tccIsCreated]);

  const onSubmit = useCallback(
    (data: CreateRelationFormData) => {
      createUpdateTCC(
        {
          body: {
            professorId: Number(data.orientador),
            studentId: userData!.id,
            proposalDeliveryDate: data.dataFinalEntregaProposta.toISOString(),
            tccDeliveryDate: data.dataFinalEntregaTCC.toISOString(),
          },
          id: tccData?.id,
          isCreated: tccIsCreated,
        },
        {
          onError: handleErrorTCC,
          onSuccess: handleSuccessTCC,
        }
      );
    },
    [
      createUpdateTCC,
      handleErrorTCC,
      handleSuccessTCC,
      tccData?.id,
      tccIsCreated,
      userData,
    ]
  );

  return (
    <UserDetails
      redirect={redirect}
      handleSubmit={handleSubmit(onSubmit)}
      isLoadingUser={isLoadingUser}
      user={userData}
      errors={errors}
      control={control}
      tccData={tccData}
      isLoadingTCC={isLoadingTCC || isLoadingProfessor}
      professors={professors?.content}
      currentUser={currentUser}
      isPendingCreatingUpdatingTCC={isPendingCreatingUpdatingTCC}
      tccIsCreated={tccIsCreated}
    />
  );
}
