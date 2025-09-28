import { Box, VStack, HStack, Text, Badge, Button } from "@chakra-ui/react";
import type { UserCardProps } from "../types";
import { truncate } from "../../../utils/truncate";

export const UserCard = ({
  user,
  currentUser,
  onUserClick,
  onDeleteUser,
}: UserCardProps) => {
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
      onClick={() => onUserClick(user.id)}
    >
      <VStack align="stretch" gap={4}>
        <HStack justify="space-between" align="start">
          <Text fontSize="lg" fontWeight="bold" color="textPrimary">
            {truncate(user.name)}
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

        <Text fontSize="sm" color="textSecondary" wordBreak="break-all">
          {user.email}
        </Text>

        {currentUser?.role === "COORDENADOR" && (
          <Button
            size="sm"
            mt={8}
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
        )}
      </VStack>
    </Box>
  );
};
