import { Box, VStack, Heading, Button, Text } from "@chakra-ui/react";

export const ActionCard = ({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) => {
  return (
    <Box
      borderWidth="1px"
      borderRadius="lg"
      p={6}
      shadow="md"
      _hover={{ shadow: "xl", transform: "scale(1.03)" }}
      transition="all 0.2s"
    >
      <VStack columnGap="3" rowGap="3">
        <Box fontSize="3xl">{icon}</Box>
        <Heading size="md">{title}</Heading>
        <Text textAlign="center">{description}</Text>
        <Button colorScheme="blue" size="sm">Acessar</Button>
      </VStack>
    </Box>
  );
};