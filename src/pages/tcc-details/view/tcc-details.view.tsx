import { Container, Box, VStack } from "@chakra-ui/react";
import { AppBreadcrumbs } from "../../../components/global/app-breadcrumbs";
import type { TCCDetailsProps } from "../types";
import { RoutesUrl } from "../../../types/Router";
import { TCCSteps } from "../components/tcc-steps.component";
import { EvaluationForm } from "../components/evaluation-form.component";

export const TCCDetails = ({
  redirect,
  deliveryForm,
  evaluationDeliveryForm,
  selectedFileName,
  isLoading,
  loggedUser,
  deliveriesData,
  onSubmit,
  onFileChange,
  onRemoveFile,
  onDownloadFile,
}: TCCDetailsProps) => {
  return (
    <Container maxW="1200px">
      <Box p={4}>
        <AppBreadcrumbs
          links={[{ label: "Home", navigate: () => redirect(RoutesUrl.HOME) }]}
          currentLinkLabel="Detalhes do TCC"
        />

        <VStack gap={6} align="stretch" mt={6}>
          <TCCSteps
            onDownloadFile={onDownloadFile}
            deliveriesData={deliveriesData}
            deliveryForm={deliveryForm}
            onSubmit={onSubmit}
            isLoading={isLoading}
            selectedFileName={selectedFileName}
            onFileChange={onFileChange}
            onRemoveFile={onRemoveFile}
            loggedUser={loggedUser}
          />

          {loggedUser?.role === "PROFESSOR" && (
            <EvaluationForm
              onSubmit={evaluationDeliveryForm.handleSubmit(() => {})}
              register={evaluationDeliveryForm.register}
              errors={evaluationDeliveryForm.formState.errors}
            />
          )}
        </VStack>
      </Box>
    </Container>
  );
};
