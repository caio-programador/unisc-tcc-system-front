import {
  Box,
  Container,
  Heading,
  VStack,
  HStack,
  Input,
  Select,
  Text,
  SimpleGrid,
  createListCollection,
} from "@chakra-ui/react";

import { useColorModeValue } from "../../../components/ui/color-mode";
import { AppBreadcrumbs } from "../../../components/global/app-breadcrumbs";
import { UserCard } from "../components/user-card.component";
import type { UserListProps } from "../types";
import { RoutesUrl } from "../../../types/Router";

export const UserListView = ({
  filteredUsers,
  searchTerm,
  selectedRole,
  onSearchChange,
  onRoleChange,
  onUserClick,
  onDeleteUser,
  redirect,
}: UserListProps) => {
  const borderColor = useColorModeValue("gray.200", "gray.700");

  const roleOptions = createListCollection({
    items: [
      { value: "", label: "Todos" },
      { value: "ALUNO", label: "Alunos" },
      { value: "PROFESSOR", label: "Professores" },
      { value: "COORDENADOR", label: "Coordenadores" }
    ]
  });

  return (
    <Container maxW="1200px">
      <Box p={8}>
        <AppBreadcrumbs
          links={[
            { label: "Home", navigate: () => redirect(RoutesUrl.HOME) }
          ]}
          currentLinkLabel="Listagem de Usuários"
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
                value={searchTerm}
                onChange={(e) => onSearchChange(e.target.value)}
              />
            </Box>
            
            <Box minW="200px">
              <Text mb={2} fontWeight="medium">
                Filtrar por tipo:
              </Text>
              <Select.Root
                collection={roleOptions}
                value={selectedRole ? [selectedRole] : []}
                onValueChange={(details) => onRoleChange(details.value[0] || "")}
              >
                <Select.Control>
                  <Select.Trigger
                    borderColor={borderColor}
                    _hover={{ borderColor: "textPrimary" }}
                  >
                    <Select.ValueText 
                      placeholder="Selecione um tipo"
                    />
                  </Select.Trigger>
                </Select.Control>
                <Select.Positioner>
                  <Select.Content>
                    <Select.Item item="">
                      <Select.ItemText>Todos</Select.ItemText>
                    </Select.Item>
                    <Select.Item item="ALUNO">
                      <Select.ItemText color="textPrimary">Alunos</Select.ItemText>
                    </Select.Item>
                    <Select.Item item="PROFESSOR">
                      <Select.ItemText color="textPrimary">Professores</Select.ItemText>
                    </Select.Item>
                    <Select.Item item="COORDENADOR">
                      <Select.ItemText color="textPrimary">Coordenadores</Select.ItemText>
                    </Select.Item>
                  </Select.Content>
                </Select.Positioner>
              </Select.Root>
            </Box>
          </HStack>

          {/* Lista de usuários */}
          {filteredUsers.length === 0 ? (
            <Box
              p={8}
              textAlign="center"
              bg="transparent"
              border="1px solid"
              borderColor="textPrimary"
              borderRadius="lg"
            >
              <Text fontSize="lg" color="textPrimary">
                Nenhum usuário encontrado.
              </Text>
            </Box>
          ) : (
            <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} gap={6}>
              {filteredUsers.map((user) => (
                <UserCard
                  key={user.id}
                  user={user}
                  onUserClick={onUserClick}
                  onDeleteUser={onDeleteUser}
                />
              ))}
            </SimpleGrid>
          )}
        </VStack>
      </Box>
    </Container>
  );
};
