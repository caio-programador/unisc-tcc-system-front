import { Container, Box, VStack, Text } from "@chakra-ui/react";
import { AppBreadcrumbs } from "../../../components/global/app-breadcrumbs";
import type { TCCDetailsProps } from "../types";
import { RoutesUrl } from "../../../types/Router";
import { TCCSteps } from "../components/tcc-steps.component";
import { TCCDetailsSkeleton } from "../components/tcc-details-skeleton.component";
import { NoTCC } from "../components/no-tcc.component";
import { TotallyReproved } from "../components/totally-reproved.component";

export const TCCDetails = ({
  redirect,
  deliveryForm,
  evaluationDeliveryForm,
  selectedFileName,
  isLoading,
  loggedUser,
  deliveriesData,
  defaultTitle,
  onSubmit,
  onFileChange,
  onRemoveFile,
  onDownloadFile,
  evaluationData,
  isSubmittingEvaluation,
  isLoadingAllData,
  onSubmitEvaluation,
  evaluationProfessorData,
  currentStep,
  thereIsNotTCC,
  isTotallyReproved,
  currentAdmissibility,
  isPendingChangeAdmissibility,
  tccData,
  onChangeAdmissibility,
}: TCCDetailsProps) => {
  if (isLoadingAllData) {
    return <TCCDetailsSkeleton />;
  }

  return (
    <Container maxW="1200px">
      <Box p={4}>
        <AppBreadcrumbs
          links={[
            { label: "Home", navigate: () => redirect(RoutesUrl.HOME) },
            ...(loggedUser?.role !== 'ALUNO' ? [{
              label: "Todos os TCCs",
              navigate: () => redirect(RoutesUrl.TCC_LIST),
            }] : []),
          ]}
          currentLinkLabel="Detalhes do TCC"
        />
        <Text fontSize="2xl" fontWeight="bold" mt={8}>
          TCC do {tccData?.student.name}
        </Text>
        {thereIsNotTCC ? (
          <NoTCC />
        ) : isTotallyReproved ? (
          <TotallyReproved
            deliveryType={
              deliveriesData?.[0].deliveryType ?? "REELABORACAO_PROPOSTA"
            }
          />
        ) : (
          <VStack gap={6} align="center" mt={6}>
            <TCCSteps
              currentStep={currentStep}
              evaluationDeliveryForm={evaluationDeliveryForm}
              defaultTitle={defaultTitle}
              onDownloadFile={onDownloadFile}
              deliveriesData={deliveriesData}
              deliveryForm={deliveryForm}
              onSubmit={onSubmit}
              isLoading={isLoading}
              selectedFileName={selectedFileName}
              onFileChange={onFileChange}
              onRemoveFile={onRemoveFile}
              loggedUser={loggedUser}
              evaluationData={evaluationData}
              isSubmittingEvaluation={isSubmittingEvaluation}
              onSubmitEvaluation={onSubmitEvaluation}
              evaluationProfessorData={evaluationProfessorData}
              currentAdmissibility={currentAdmissibility}
              onChangeAdmissibility={onChangeAdmissibility}
              isPendingChangeAdmissibility={isPendingChangeAdmissibility}
              tccData={tccData}
            />
          </VStack>
        )}
      </Box>
    </Container>
  );
};
