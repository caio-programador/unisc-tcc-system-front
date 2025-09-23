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
import { TCCRelationshipSkeleton } from "../components/tcc-relationship-skeleton.component";

export const UserDetails = ({
  control,
  errors,
  user,
  isLoadingUser,
  isLoadingTCC,
  tccData,
  professors,
  currentUser,
  isPendingCreatingUpdatingTCC,
  tccIsCreated,
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
              Perfil de {user?.name}
            </Heading>

            <Profile user={user} />
          </>
        )}

        <Separator mb={10} />

        {user?.role === "ALUNO" &&
          !isLoadingTCC &&
          professors &&
          professors?.length > 0 &&
          currentUser?.role === "COORDENADOR" && (
            <VStack as="form" gap={6} align="stretch" onSubmit={handleSubmit}>
              <Heading size="2xl" textAlign="left">
                Relação Aluno-Orientador
              </Heading>
              <SelectAdvisor
                id="orientador"
                label="Orientador"
                errors={errors}
                control={control}
                advisor={tccData?.professor?.name ?? ""}
                professors={professors}
              />

              <SelectAdvisor
                id="professor2"
                label="Professor 2 da banca"
                errors={errors}
                control={control}
                advisor={tccData?.defensePanel?.professor2Name ?? ""}
                professors={professors}
              />

              <SelectAdvisor
                id="professor3"
                label="Professor 3 da banca"
                errors={errors}
                control={control}
                advisor={tccData?.defensePanel?.professor3Name ?? ""}
                professors={professors}
              />

              <DateFieldInput
                label="Data final da proposta"
                control={control}
                controlName="dataFinalEntregaProposta"
                isError={!!errors.dataFinalEntregaProposta}
                errorMessage={errors?.dataFinalEntregaProposta?.message}
                dateFieldValue={tccData?.proposalDeliveryDate ?? ""}
              />

              <DateFieldInput
                label="Data final do TCC"
                control={control}
                controlName="dataFinalEntregaTCC"
                isError={!!errors.dataFinalEntregaTCC}
                errorMessage={errors?.dataFinalEntregaTCC?.message}
                dateFieldValue={tccData?.tccDeliveryDate ?? ""}
              />

              <Button
                type="submit"
                mt={6}
                alignSelf="flex-start"
                backgroundColor="textPrimary"
                color="background"
                loading={isPendingCreatingUpdatingTCC}
              >
                {tccIsCreated ? "Atualizar TCC" : "Criar TCC"}
              </Button>
            </VStack>
          )}

        {isLoadingTCC && <TCCRelationshipSkeleton />}
      </Box>
    </Container>
  );
};
