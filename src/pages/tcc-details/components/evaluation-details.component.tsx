import {
  Box,
  Card,
  Heading,
  Text,
  Badge,
  VStack,
  HStack,
  Separator,
  Alert,
  Grid,
  GridItem,
} from "@chakra-ui/react";
import type { EvaluationDetailsProps } from "../types";

export const EvaluationDetails = ({
  evaluation,
  studentName,
  evaluatorName,
  evaluationDate,
}: EvaluationDetailsProps) => {
  const isApproved = evaluation.total >= 6;
  const approvalStatus = isApproved ? "APROVADO" : "REPROVADO";
  const statusColor = isApproved ? "green" : "red";

  const evaluationItems = [
    {
      title: "Introdução",
      description:
        "Justificativa da escolha, relevância do tema e definição clara do problema.",
      score: evaluation.introScore,
      maxScore: 2,
    },
    {
      title: "Definição dos Objetivos",
      description: "Adequação dos objetivos frente ao problema proposto.",
      score: evaluation.goalsScore,
      maxScore: 1,
    },
    {
      title: "Revisão Bibliográfica",
      description:
        "Fundamentação do tema com fontes, citações e atendimentos às normas da UNISC.",
      score: evaluation.references,
      maxScore: 2,
    },
    {
      title: "Sequência Lógica",
      description: "Abordagem sequencial lógica, equilibrada e ordenada.",
      score: evaluation.sequenceLogic,
      maxScore: 1,
    },
    {
      title: "Orientação Metodológica - Procedimentos",
      description: "Procedimentos adequados e bem definidos.",
      score: evaluation.procedures,
      maxScore: 2,
    },
    {
      title: "Orientação Metodológica - Coerência",
      description:
        "Coerência dos objetivos, metodologia e tipo de instrumentos.",
      score: evaluation.methodology,
      maxScore: 2,
    },
  ];

  return (
    <Box maxW="4xl" mx="auto" p={6} mt={6}>
      <VStack gap={6} align="stretch">
        <Card.Root background="background" border={0}>
          <Card.Body>
            <VStack gap={4} align="stretch">
              <Heading size="xl" color="textPrimary" textAlign="center">
                Detalhes da Avaliação
              </Heading>

              <Alert.Root
                status={isApproved ? "success" : "error"}
                colorPalette={statusColor}
              >
                <Alert.Title>Resultado: {approvalStatus}</Alert.Title>
                <Alert.Description>
                  {isApproved
                    ? "O aluno foi aprovado com a nota obtida."
                    : "O aluno foi reprovado. Nota mínima necessária: 6.0"}
                </Alert.Description>
              </Alert.Root>

              <Grid
                templateColumns="repeat(auto-fit, minmax(200px, 1fr))"
                gap={4}
              >
                {studentName && (
                  <GridItem>
                    <Text fontSize="sm" color="textPrimary">
                      Aluno:
                    </Text>
                    <Text fontWeight="medium" color="textPrimary">
                      {studentName}
                    </Text>
                  </GridItem>
                )}
                {evaluatorName && (
                  <GridItem>
                    <Text fontSize="sm" color="textPrimary">
                      Avaliador:
                    </Text>
                    <Text fontWeight="medium" color="textPrimary">
                      {evaluatorName}
                    </Text>
                  </GridItem>
                )}
                {evaluationDate && (
                  <GridItem>
                    <Text fontSize="sm" color="textPrimary">
                      Data da Avaliação:
                    </Text>
                    <Text fontWeight="medium" color="textPrimary">
                      {evaluationDate}
                    </Text>
                  </GridItem>
                )}
              </Grid>
            </VStack>
          </Card.Body>
        </Card.Root>

        <Card.Root background="background" border={0}>
          <Card.Body>
            <HStack justify="space-between" align="center">
              <VStack align="start" gap={1}>
                <Heading size="lg" color="textPrimary">
                  Nota Total
                </Heading>
                <Text color="gray.600">Pontuação final da avaliação</Text>
              </VStack>
              <HStack gap={2} align="center">
                <Badge
                  size="lg"
                  colorPalette={statusColor}
                  px={4}
                  py={2}
                  fontSize="xl"
                  fontWeight="bold"
                >
                  {evaluation.total.toFixed(1)} / 10.0
                </Badge>
              </HStack>
            </HStack>
          </Card.Body>
        </Card.Root>

        <Card.Root background="background" border={0}>
          <Card.Header>
            <Heading size="lg" color="textPrimary">
              Detalhamento das Notas
            </Heading>
          </Card.Header>
          <Card.Body>
            <VStack gap={4} align="stretch">
              {evaluationItems.map((item, index) => (
                <Box key={index}>
                  <HStack justify="space-between" align="start" mb={2}>
                    <VStack align="start" gap={1} flex={1}>
                      <Text color="textPrimary" fontWeight="semibold" fontSize="md">
                        {item.title}
                      </Text>
                      <Text fontSize="sm" color="gray.300">
                        {item.description}
                      </Text>
                    </VStack>
                    <Badge
                      colorPalette={
                        item.score === item.maxScore
                          ? "green"
                          : item.score >= item.maxScore * 0.6
                          ? "yellow"
                          : "red"
                      }
                      size="md"
                      px={3}
                      py={1}
                    >
                      {item.score.toFixed(1)} / {item.maxScore.toFixed(1)}
                    </Badge>
                  </HStack>
                  {index < evaluationItems.length - 1 && <Separator />}
                </Box>
              ))}
            </VStack>
          </Card.Body>
        </Card.Root>

        {evaluation.comments && (
          <Card.Root  background="background" border={0} paddingBottom={10}>
            <Card.Header>
              <Heading size="lg" color="textPrimary">
                Comentários do Avaliador
              </Heading>
            </Card.Header>
            <Card.Body>
              <Text whiteSpace="pre-wrap" color="textPrimary" lineHeight="tall">
                {evaluation.comments}
              </Text>
            </Card.Body>
          </Card.Root>
        )}
      </VStack>
    </Box>
  );
};
