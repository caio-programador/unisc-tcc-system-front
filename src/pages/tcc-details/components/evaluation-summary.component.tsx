import {
  Box,
  Card,
  CardBody,
  Text,
  HStack,
  VStack,
  Badge,
  Progress,
} from "@chakra-ui/react";
import type { EvaluationSummaryProps } from "../types";

export const EvaluationSummary = ({
  quantityEvaluations,
  averageScore,
  maxEvaluations = 3,
}: EvaluationSummaryProps) => {
  const progressPercentage = (quantityEvaluations! / maxEvaluations) * 100;
  const isComplete = quantityEvaluations === maxEvaluations;
  const scorePercentage = (averageScore! / 10) * 100;

  const getStatusColor = () => {
    if (isComplete) return "green";
    if (quantityEvaluations! > 0) return "yellow";
    return "gray";
  };

  const getStatusText = () => {
    if (isComplete) return "Concluído";
    if (quantityEvaluations! > 0) return "Em andamento";
    return "Aguardando";
  };

  const StatusIcon = ({ isComplete }: { isComplete: boolean }) => (
    <Box
      w="20px"
      h="20px"
      borderRadius="full"
      bg={isComplete ? "green.500" : "yellow.500"}
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      {isComplete ? (
        <Text color="white" fontSize="xs" fontWeight="bold">
          ✓
        </Text>
      ) : (
        <Text color="white" fontSize="xs" fontWeight="bold">
          ⏱
        </Text>
      )}
    </Box>
  );

  const StarIcon = () => (
    <Text color="yellow.500" fontSize="md">
      ⭐
    </Text>
  );

  return (
    <Card.Root
      bg="white"
      shadow="sm"
      border="1px solid"
      borderColor="gray.200"
      borderRadius="lg"
      overflow="hidden"
      mt={8}
    >
      <CardBody p={6}>
        <VStack gap={4} align="stretch">
          <HStack justify="space-between" align="center">
            <HStack gap={2}>
              <StatusIcon isComplete={isComplete} />
              <Text fontSize="lg" fontWeight="semibold" color="gray.700">
                Status das Avaliações
              </Text>
            </HStack>
            <Badge
              colorScheme={getStatusColor()}
              variant="subtle"
              px={3}
              py={1}
              borderRadius="full"
            >
              {getStatusText()}
            </Badge>
          </HStack>

          <Box>
            <HStack justify="space-between" mb={2}>
              <Text fontSize="sm" color="gray.600" fontWeight="medium">
                Avaliações Recebidas
              </Text>
              <Text fontSize="sm" fontWeight="bold" color="gray.700">
                {quantityEvaluations}/{maxEvaluations}
              </Text>
            </HStack>
            <Progress.Root
              value={progressPercentage}
              colorScheme={getStatusColor()}
              size="md"
              borderRadius="full"
            >
              <Progress.Track bg="gray.100">
                <Progress.Range />
              </Progress.Track>
            </Progress.Root>
          </Box>

          <Box>
            <HStack justify="space-between" mb={2}>
              <HStack gap={1}>
                <StarIcon />
                <Text fontSize="sm" color="gray.600" fontWeight="medium">
                  Média das Avaliações
                </Text>
              </HStack>
              <Text fontSize="lg" fontWeight="bold" color="blue.600">
                {averageScore?.toFixed(1)}/10
              </Text>
            </HStack>
            <Progress.Root
              value={scorePercentage}
              colorScheme="blue"
              size="md"
              borderRadius="full"
            >
              <Progress.Track bg="gray.100">
                <Progress.Range />
              </Progress.Track>
            </Progress.Root>
            <Text fontSize="xs" color="gray.500" mt={1} textAlign="center">
              {scorePercentage.toFixed(0)}% da nota máxima
            </Text>
          </Box>
        </VStack>
      </CardBody>
    </Card.Root>
  );
};
