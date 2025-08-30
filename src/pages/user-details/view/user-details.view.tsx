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
import { RoutesUrl } from "../../../types/Router";
import { UserDetailsSkeleton } from "../components/user-details-skeleton.component";

export const UserDetails = ({
  control,
  errors,
  user,
  isLoadingUser,
  handleSubmit,
  redirect,
}: UserDetailsProps) => {
  return (
    <Container maxW="1000px">
      <Box p={8}>
        <AppBreadcrumbs
          links={[
            { label: "Home", navigate: () => redirect(RoutesUrl.HOME) },
            {
              label: "Listagem de Usuários",
              navigate: () => redirect(RoutesUrl.USER_LIST),
            },
          ]}
          currentLinkLabel="Detalhes do Usuário"
        />

        {isLoadingUser ? (
          <UserDetailsSkeleton />
        ) : (
          <>
            <Heading size="3xl" mb={6} mt={12} textAlign="left">
              Perfil do {user?.name}
            </Heading>

            <Profile user={user} />
          </>
        )}

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
