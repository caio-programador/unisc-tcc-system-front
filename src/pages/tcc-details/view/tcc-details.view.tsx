import { Container, Box, VStack } from "@chakra-ui/react";
import { AppBreadcrumbs } from "../../../components/global/app-breadcrumbs";
import type { TCCDetailsProps } from "../types";
import { RoutesUrl } from "../../../types/Router";
import { TCCSteps } from "../components/tcc-steps.component";
import { ProposalForm } from "../components/proposal-form.component";
import { FormProvider } from "react-hook-form";
import { EvaluationForm } from "../components/evaluation-form.component";

export const TCCDetails = ({ 
  redirect, 
  proposalForm,
  evaluationProposalForm, 
  selectedFileName, 
  isLoading,
  loggedUser, 
  onSubmit, 
  onFileChange, 
  onRemoveFile 
}: TCCDetailsProps) => {
  return (
    <Container maxW="1200px">
      <Box p={4}>
        <AppBreadcrumbs
          links={[{ label: "Home", navigate: () => redirect(RoutesUrl.HOME) }]}
          currentLinkLabel="Detalhes do TCC"
        />
        
        <VStack gap={6} align="stretch" mt={6}>
          <TCCSteps />
          
          <FormProvider {...proposalForm}>
            <ProposalForm 
              onSubmit={onSubmit}
              isLoading={isLoading}
              selectedFileName={selectedFileName}
              onFileChange={onFileChange}
              onRemoveFile={onRemoveFile}
            />
          </FormProvider>
          
          <EvaluationForm 
            onSubmit={evaluationProposalForm.handleSubmit(() => {})}
            register={evaluationProposalForm.register}
            errors={evaluationProposalForm.formState.errors}
            loggedUser={loggedUser}
          />
        </VStack>


      </Box>
    </Container>
  );
};
