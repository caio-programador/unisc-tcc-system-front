import {
  Box,
  VStack,
  HStack,
  Text,
  Badge,
  Button,
} from "@chakra-ui/react";
import { Card } from "@chakra-ui/react";
import type { UserCardProps } from "../types";

export const UserCard = ({ user, onUserClick, onDeleteUser }: UserCardProps) => {
  const bgColor = "textPrimary";
  const borderColor = "black";

  const getRoleColor = (role: string) => {
    switch (role) {
      case "ALUNO":
        return "blue";
      case "PROFESSOR":
        return "green";
      case "COORDENADOR":
        return "purple";
      default:
        return "gray";
    }
  };

  const getRoleLabel = (role: string) => {
    switch (role) {
      case "ALUNO":
        return "Aluno";
      case "PROFESSOR":
        return "Professor";
      case "COORDENADOR":
        return "Coordenador";
      default:
        return role;
    }
  };

  return (
    <Card.Root
      bg={bgColor}
      border="1px"
      borderColor={borderColor}
      borderRadius="lg"
      cursor="pointer"
      transition="all 0.2s"
      _hover={{
        transform: "translateY(-2px)",
        boxShadow: "lg",
      }}
      onClick={() => onUserClick(user)}
    >
      <Card.Body p={6}>
        <VStack align="stretch" gap={4}>
          {/* Header com nome e badge de role */}
          <HStack justify="space-between" align="start">
            <Text
              fontSize="lg"
              fontWeight="bold"
              color="black"
            >
              {user.name}
            </Text>
            <Badge
              colorScheme={getRoleColor(user.role)}
              variant="solid"
              fontSize="sm"
              px={2}
              py={1}
              borderRadius="full"
            >
              {getRoleLabel(user.role)}
            </Badge>
          </HStack>

          {/* Email */}
          <Text
            fontSize="sm"
            color="gray.600"
            wordBreak="break-all"
          >
            {user.email}
          </Text>

          {/* Informações adicionais para alunos */}
          {user.role === "ALUNO" && (
            <Box
              p={3}
              bg="gray.50"
              borderRadius="md"
              border="1px"
              borderColor="blue.200"
            >
                <Text fontSize="sm" fontWeight="medium" color="gray.700">
                Orientador: Prof. Pedro Oliveira
              </Text>
            </Box>
          )}

          {/* Botão de deletar */}
          <Button
            size="sm"
            variant="outline"
            backgroundColor="black"
            color="white"
            onClick={(e) => {
              e.stopPropagation();
              onDeleteUser(user.id);
            }}
            _hover={{
                transform: "scale(1.03)",
                backgroundColor: "textPrimaryHover",
            }}
          >
            Deletar
          </Button>
        </VStack>
      </Card.Body>
    </Card.Root>
  );
};
