import { VStack, HStack, Text } from "@chakra-ui/react";

export const Profile = () => {
  return (
    <VStack gap={4} align="stretch" mb={8}>
      <HStack>
        <Text fontWeight="bold">Nome:</Text>
        <Text>Fulano da Silva</Text>
      </HStack>

      <HStack>
        <Text fontWeight="bold">Email:</Text>
        <Text>fulano@email.com</Text>
      </HStack>
    </VStack>
  );
};
