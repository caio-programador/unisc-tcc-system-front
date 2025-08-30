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

export const TCCList = ({ redirect, user }: TCCListProps) => {
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
                Pesquisar por nome:
              </Text>
              <Input
                placeholder="Digite para pesquisar..."
                onChange={() => {}}
              />
            </Box>
          </HStack>
          <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} gap={6}>
            <TCCCard user={user} redirect={redirect} />
            <TCCCard user={user} redirect={redirect} />
            <TCCCard user={user} redirect={redirect} />
            <TCCCard user={user} redirect={redirect} />
            <TCCCard user={user} redirect={redirect} />
          </SimpleGrid>
        </VStack>
      </Box>
    </Container>
  );
};
