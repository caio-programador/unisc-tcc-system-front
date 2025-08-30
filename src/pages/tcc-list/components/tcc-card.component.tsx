import { Box, VStack, HStack, Badge, Button, Text } from "@chakra-ui/react";
import type { TCCCardProps } from "../types";
import { RoutesUrl } from "../../../types/Router";

export const TCCCard = ({ user, redirect }: TCCCardProps) => {
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
      onClick={() => redirect(RoutesUrl.TCC_DETAILS)}
    >
      <VStack align="stretch" gap={4}>
        <HStack justify="space-between" align="start">
          <Text fontSize="lg" fontWeight="bold" color="textPrimary">
            TCC
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
            teste
          </Badge>
        </HStack>

        <Text fontSize="sm" color="textSecondary" wordBreak="break-all">
          teste
        </Text>

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

        {user?.role === "COORDENADOR" && (
          <Button
            size="sm"
            bg="textPrimary"
            color="darkBlue.900"
            border="1px solid"
            borderColor="textPrimary"
            onClick={(e) => {
              e.stopPropagation();
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
