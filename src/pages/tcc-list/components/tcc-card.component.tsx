import { Box, VStack, HStack, Button, Text, Em } from "@chakra-ui/react";
import type { TCCCardProps } from "../types";
import { RoutesUrl } from "../../../types/Router";

export const TCCCard = ({
  user,
  tcc,
  redirect,
  handleDeleteTCC,
}: TCCCardProps) => {
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
            {tcc?.tccTitle ?? "Sem título defindo ainda"}
          </Text>
        </HStack>

        <Text
          fontSize="md"
          fontWeight="medium"
          color="textSecondary"
          wordBreak="break-all"
        >
          Feito por: {tcc?.student.name}
        </Text>

        <Box paddingY={2} borderRadius="md" bg="transparent">
          <Text
            textAlign="left"
            fontSize="sm"
            fontWeight="medium"
            color="textPrimary"
          >
            Orientador: <Em>{tcc?.professor.name}</Em>
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
              handleDeleteTCC(tcc!.id);
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
