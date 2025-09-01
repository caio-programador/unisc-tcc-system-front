import {
  Box,
  Container,
  Heading,
  HStack,
  Input,
  VStack,
  Text,
  SimpleGrid,
} from "@chakra-ui/react";
import { AppBreadcrumbs } from "../../../components/global/app-breadcrumbs";
import { RoutesUrl } from "../../../types/Router";
import type { TCCListProps } from "../types";
import { TCCCard } from "../components/tcc-card.component";
import { TCCSkeleton } from "../components/tcc-skeleton.component";

export const TCCList = ({
  user,
  isLoadingTCCData,
  tccData,
  redirect,
  handleChangeSearchTerm,
  handleDeleteTCC,
}: TCCListProps) => {
  return (
    <Container maxW="1200px">
      <Box p={8}>
        <AppBreadcrumbs
          links={[{ label: "Home", navigate: () => redirect(RoutesUrl.HOME) }]}
          currentLinkLabel="Todos os TCCs"
        />

        <Heading size="3xl" mb={8} mt={12} textAlign="left">
          Listagem de Usuários
        </Heading>

        <VStack gap={6} align="stretch">
          <HStack gap={4} wrap="wrap">
            <Box flex="1" minW="300px">
              <Text mb={2} fontWeight="medium">
                Pesquisar por nome do Aluno:
              </Text>
              <Input
                placeholder="Digite para pesquisar..."
                onChange={(e) => handleChangeSearchTerm(e.target.value)}
              />
            </Box>
          </HStack>
          {!isLoadingTCCData && (!tccData || tccData.content.length === 0) ? (
            <Box
              p={8}
              textAlign="center"
              bg="transparent"
              border="1px solid"
              borderColor="textPrimary"
              borderRadius="lg"
            >
              <Text fontSize="lg" color="textPrimary">
                Nenhum TCC encontrado.
              </Text>
            </Box>
          ) : (
            <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} gap={6}>
              {tccData?.content.map((tcc) => (
                <TCCCard
                  key={tcc.id}
                  user={user}
                  redirect={redirect}
                  tcc={tcc}
                  handleDeleteTCC={handleDeleteTCC}
                />
              ))}
            </SimpleGrid>
          )}
          {isLoadingTCCData && <TCCSkeleton />}
        </VStack>
      </Box>
    </Container>
  );
};
