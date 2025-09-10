import { Container, Box, VStack } from "@chakra-ui/react";
import { AppBreadcrumbs } from "../../../components/global/app-breadcrumbs";
import type { TCCDetailsProps } from "../types";
import { RoutesUrl } from "../../../types/Router";
import { TCCSteps } from "../components/tcc-steps.component";
import { TCCDetailsSkeleton } from "../components/tcc-details-skeleton.component";

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
}: TCCDetailsProps) => {

  if(isLoadingAllData) {
    return <TCCDetailsSkeleton />;
  }


  return (
    <Container maxW="1200px">
      <Box p={4}>
        <AppBreadcrumbs
          links={[{ label: "Home", navigate: () => redirect(RoutesUrl.HOME) }]}
          currentLinkLabel="Detalhes do TCC"
        />

        <VStack gap={6} align="stretch" mt={6}>
          <TCCSteps
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
          />
        </VStack>
      </Box>
    </Container>
  );
};
