import {
  Box,
  VStack,
  HStack,
  Text,
  Badge,
  Button,
} from "@chakra-ui/react";
import type { UserCardProps } from "../types";

export const UserCard = ({ user, onUserClick, onDeleteUser }: UserCardProps) => {

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
    <Box
      border="1px solid"
      borderColor="textPrimary"
      borderRadius="lg"
      cursor="pointer"
      transition="all 0.2s"
      bg="transparent"
      p={6}
      _hover={{
        transform: "translateY(-2px)",
        boxShadow: "lg",
      }}
      onClick={() => onUserClick(user)}
    >
      <VStack align="stretch" gap={4}>

        <HStack justify="space-between" align="start">
          <Text
            fontSize="lg"
            fontWeight="bold"
            color="textPrimary"
          >
            {user.name}
          </Text>
          <Badge
            variant="solid"
            fontSize="sm"
            px={2}
            py={1}
            borderRadius="full"
            bg="textPrimary"
            color="darkBlue.900"
          >
            {getRoleLabel(user.role)}
          </Badge>
        </HStack>

   
        <Text
          fontSize="sm"
          color="textSecondary"
          wordBreak="break-all"
        >
          {user.email}
        </Text>

        {user.role === "ALUNO" && (
          <Box
            p={3}
            borderRadius="md"
            border="1px solid"
            borderColor="textPrimary"
            bg="transparent"
          >
              <Text fontSize="sm" fontWeight="medium" color="textPrimary">
              Orientador: Prof. Pedro Oliveira
            </Text>
          </Box>
        )}

        <Button
          size="sm"
          bg="textPrimary"
          color="darkBlue.900"
          border="1px solid"
          borderColor="textPrimary"
          onClick={(e) => {
            e.stopPropagation();
            onDeleteUser(user.id);
          }}
          _hover={{
              transform: "scale(1.03)",
          }}
        >
          Deletar
        </Button>
      </VStack>
    </Box>
  );
};
