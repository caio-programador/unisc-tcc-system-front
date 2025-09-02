import { Box, VStack, Heading, Button, Text } from "@chakra-ui/react";
import type { ActionCardProps } from "../types";

export const ActionCard = ({ icon, title, description, onClick }: ActionCardProps) => {
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
        <Text textAlign="center" fontSize="smaller">{description}</Text>
        <Button 
          backgroundColor={"textPrimary"} 
          color={"background"} 
          size="sm"
          fontSize={"sm"}
          fontWeight={'normal'}
          paddingX="10px"
          marginTop={"10px"}
          height={"30px"}
          onClick={onClick}
        >
          Acessar
        </Button>
      </VStack>
    </Box>
  );
};