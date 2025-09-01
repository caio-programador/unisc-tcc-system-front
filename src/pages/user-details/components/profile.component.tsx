import { VStack, HStack, Text } from "@chakra-ui/react";
import type { ProfileProps } from "../types";

export const Profile = ({ user }: ProfileProps) => {
  return (
    <VStack gap={4} align="stretch" mb={8}>
      <HStack>
        <Text fontWeight="bold">Nome:</Text>
        <Text>{user?.name}</Text>
      </HStack>

      <HStack>
        <Text fontWeight="bold">Email:</Text>
        <Text>{user?.email}</Text>
      </HStack>
    </VStack>
  );
};
