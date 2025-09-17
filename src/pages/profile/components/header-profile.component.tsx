import { Flex, Box, Icon, Heading, Text } from "@chakra-ui/react";
import { FaUser } from "react-icons/fa";
import type { HeaderProfileProps } from "../types";

export const HeaderProfile = ({ user }: HeaderProfileProps) => {
  return (
    <Flex gap={12} direction="row" align="center" mb={8} mt={8}>
      <Box
        border="1px solid"
        padding={5}
        borderRadius={"50%"}
        borderColor="gray.500"
      >
        <Icon as={FaUser} boxSize={24} color="gray.500" margin={2} />
      </Box>
      <Box>
        <Heading size="lg">Perfil de {user.name}</Heading>
        <Text fontSize="md" color="gray.500">
          Aluno
        </Text>
      </Box>
    </Flex>
  );
};
