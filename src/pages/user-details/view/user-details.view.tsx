import {
  Box,
  Heading,
  VStack,
  Button,
  Separator,
  Container,
} from "@chakra-ui/react";
import { AppBreadcrumbs } from "../../../components/global/app-breadcrumbs";
import type { UserDetailsProps } from "../types";
import { Profile } from "../components/profile.component";
import { SelectAdvisor } from "../components/select-advisor.component";
import { DateFieldInput } from "../components/date-field-input.component";

export const UserDetails = ({
  control,
  errors,
  handleSubmit,
}: UserDetailsProps) => {
  return (
    <Container maxW="1000px">
      <Box p={8}>
        <AppBreadcrumbs
          links={[{ label: "Home", navigate: () => {} }]}
          currentLinkLabel="Detalhes do Usuário"
        />

        <Heading size="3xl" mb={6} mt={12} textAlign="left">
          Perfil do Aluno
        </Heading>

        <Profile />

        <Separator mb={6} />

        <VStack as="form" gap={6} align="stretch" onSubmit={handleSubmit}>
          <SelectAdvisor errors={errors} control={control} />

          <DateFieldInput
            label="Data final da proposta"
            control={control}
            controlName="dataFinalEntregaProposta"
            isError={!!errors.dataFinalEntregaProposta}
            errorMessage={errors?.dataFinalEntregaProposta?.message}
          />

          <DateFieldInput
            label="Data final do TCC"
            control={control}
            controlName="dataFinalEntregaTCC"
            isError={!!errors.dataFinalEntregaTCC}
            errorMessage={errors?.dataFinalEntregaTCC?.message}
          />

          <Button
            type="submit"
            mt={6}
            alignSelf="flex-start"
            backgroundColor="textPrimary"
            color="background"
          >
            Salvar Alterações
          </Button>
        </VStack>
      </Box>
    </Container>
  );
};
