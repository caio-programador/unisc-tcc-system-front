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
import type { Role } from "../../../types";
import { UserSkeleton } from "../components/user-skeleton.component";
import AppPagination from "../../../components/global/app-pagination";

export const UserListView = ({
  filteredUsers,
  searchTerm,
  selectedRole,
  isLoading,
  currentPage,
  pageSize,
  totalElements,
  currentUser,
  onSearchChange,
  onRoleChange,
  onUserClick,
  onDeleteUser,
  redirect,
  changePage,
  changePageSize,
}: UserListProps) => {
  const borderColor = useColorModeValue("gray.200", "gray.700");

  const roleOptions = createListCollection({
    items: [
      { value: "", label: "Todos" },
      { value: "ALUNO", label: "Alunos" },
      { value: "PROFESSOR", label: "Professores" },
      { value: "COORDENADOR", label: "Coordenadores" },
    ],
  });

  return (
    <Container maxW="1200px">
      <Box p={8}>
        <AppBreadcrumbs
          links={[{ label: "Home", navigate: () => redirect(RoutesUrl.HOME) }]}
          currentLinkLabel="Listagem de Usuários"
        />

        <Heading size="3xl" mb={8} mt={12} textAlign="left">
          Listagem de Usuários
        </Heading>

        <VStack gap={6} align="stretch">
          <HStack gap={4} wrap="wrap">
            <Box flex={2} alignItems="start">
              <Text mb={2} fontWeight="medium">
                Pesquisar por nome:
              </Text>
              <Input
                placeholder="Digite para pesquisar..."
                value={searchTerm}
                onChange={(e) => onSearchChange(e.target.value)}
              />
            </Box>
            <Box flex={5}>
              <Text mb={2} fontWeight="medium">
                Quantidade de usuários por página:
              </Text>
              <Input
                type="number"
                placeholder="Quantidade de usuários por página"
                value={pageSize}
                onChange={(e) => changePageSize(Number(e.target.value))}
              />
            </Box>

            {currentUser?.role === "COORDENADOR" && (
              <Box flex={3}>
                <Text mb={2} fontWeight="medium">
                  Filtrar por tipo:
                </Text>
                <Select.Root
                  collection={roleOptions}
                  value={selectedRole ? [selectedRole] : []}
                  onValueChange={(details) =>
                    onRoleChange((details.value[0] as Role) || "")
                  }
                >
                  <Select.Control>
                    <Select.Trigger
                      borderColor={borderColor}
                      _hover={{ borderColor: "textPrimary" }}
                    >
                      <Select.ValueText placeholder="Selecione um tipo" />
                    </Select.Trigger>
                  </Select.Control>
                  <Select.Positioner>
                    <Select.Content>
                      <Select.Item item="">
                        <Select.ItemText>Todos</Select.ItemText>
                      </Select.Item>
                      <Select.Item item="ALUNO">
                        <Select.ItemText color="textPrimary">
                          Alunos
                        </Select.ItemText>
                      </Select.Item>
                      <Select.Item item="PROFESSOR">
                        <Select.ItemText color="textPrimary">
                          Professores
                        </Select.ItemText>
                      </Select.Item>
                      <Select.Item item="COORDENADOR">
                        <Select.ItemText color="textPrimary">
                          Coordenadores
                        </Select.ItemText>
                      </Select.Item>
                    </Select.Content>
                  </Select.Positioner>
                </Select.Root>
              </Box>
            )}
          </HStack>

          {(!filteredUsers || filteredUsers?.length === 0) && !isLoading ? (
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
            <>
              <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} gap={6}>
                {filteredUsers?.map((user) => (
                  <UserCard
                    key={user.id}
                    user={user}
                    onUserClick={onUserClick}
                    onDeleteUser={onDeleteUser}
                  />
                ))}
              </SimpleGrid>
              {totalElements && (
                <AppPagination
                  page={currentPage}
                  pageSize={pageSize}
                  totalElements={totalElements}
                  changePage={changePage}
                  changePageSize={changePageSize}
                />
              )}
            </>
          )}

          {isLoading && <UserSkeleton />}
        </VStack>
      </Box>
    </Container>
  );
};
