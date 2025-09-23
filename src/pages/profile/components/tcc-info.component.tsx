import { 
  Card, 
  Heading, 
  Text, 
  VStack, 
  HStack, 
  Box, 
  Badge, 
  Separator,
  Grid,
  GridItem
} from "@chakra-ui/react";
import type { Admissibility } from "../../../types/TC";
import { formatDate } from "../../../utils/format-date";
import { useCallback } from "react";
import type { TCCInfoProps } from "../types";


export const TCCInfo = ({ tccData }: TCCInfoProps) => {
  
  const getAdmissibilityBadge = useCallback((admissibility: Admissibility) => {
    const configs = {
      APPROVED: { colorScheme: "green", label: "Aprovado" },
      REJECTED: { colorScheme: "red", label: "Reprovado" },
      PENDING: { colorScheme: "yellow", label: "Pendente" },
    };
    
    const config = configs[admissibility];
    return (
      <Badge colorScheme={config.colorScheme} variant="subtle" px={3} py={1} borderRadius="full">
        Admissibilidade: {config.label}
      </Badge>
    );
  }, []);
  
  if (!tccData) {
    return (
      <Card.Root maxW="4xl" mx="auto" mb={8}>
        <Card.Header>
          <Heading size="md">Informações do TCC</Heading>
        </Card.Header>
        <Card.Body>
          <Box textAlign="center" py={8}>
            <Text fontSize="md" color="gray.500">
              Você ainda não possui um TCC cadastrado no sistema.
            </Text>
            <Text fontSize="sm" color="gray.400" mt={2}>
              Entre em contato com a coordenação para criar sua relação com um orientador.
            </Text>
          </Box>
        </Card.Body>
      </Card.Root>
    );
  }

  return (
    <Card.Root  maxW="md" mx="auto" mb={8}>
      <Card.Header>
        <HStack justify="space-between" align="center">
          <Heading size="md">Informações do seu TCC</Heading>
          {getAdmissibilityBadge(tccData.admissibility)}
        </HStack>
      </Card.Header>
      
      <Card.Body>
        <VStack gap={6} align="stretch">
          <Box>
            <Heading size="sm" mb={3} color="gray.700">
              📋 Informações Gerais
            </Heading>
            <VStack gap={2} align="stretch">
              {tccData.tccTitle && (
                <HStack justify="space-between">
                  <Text fontWeight="medium" color="gray.600">Título:</Text>
                  <Text textAlign="right" maxW="60%">{tccData.tccTitle}</Text>
                </HStack>
              )}
            </VStack>
          </Box>

          <Separator />

          <Box>
            <Heading size="sm" mb={3} color="gray.700">
              📅 Cronograma e Prazos
            </Heading>
            <Grid templateColumns="1fr 1fr" gap={4}>
              <GridItem>
                <VStack gap={2} align="stretch">
                  <Text fontSize="sm" fontWeight="semibold" color="blue.600">
                    Proposta
                  </Text>
                  <Box>
                    <Text fontSize="xs" color="gray.500">Prazo de Entrega:</Text>
                    <Text fontWeight="medium">
                      {formatDate(tccData.proposalDeliveryDate)}
                    </Text>
                  </Box>
                  {tccData.proposalAssessmentDate && (
                    <Box>
                      <Text fontSize="xs" color="gray.500">Data de Avaliação:</Text>
                      <Text fontWeight="medium">
                        {formatDate(tccData.proposalAssessmentDate)}
                      </Text>
                    </Box>
                  )}
                </VStack>
              </GridItem>
              
              <GridItem>
                <VStack gap={2} align="stretch">
                  <Text fontSize="sm" fontWeight="semibold" color="green.600">
                    TCC Final
                  </Text>
                  <Box>
                    <Text fontSize="xs" color="gray.500">Prazo de Entrega:</Text>
                    <Text fontWeight="medium">
                      {formatDate(tccData.tccDeliveryDate)}
                    </Text>
                  </Box>
                  {tccData.tccAssessmentDate && (
                    <Box>
                      <Text fontSize="xs" color="gray.500">Data de Avaliação:</Text>
                      <Text fontWeight="medium">
                        {formatDate(tccData.tccAssessmentDate)}
                      </Text>
                    </Box>
                  )}
                </VStack>
              </GridItem>
            </Grid>
          </Box>

          <Separator />

          <Box>
            <Heading size="sm" mb={3} color="gray.700">
              👨‍🏫 Orientador
            </Heading>
            <HStack gap={3}>
              <Box 
                w="40px" 
                h="40px" 
                borderRadius="full" 
                bg="blue.500" 
                display="flex" 
                alignItems="center" 
                justifyContent="center"
              >
                <Text color="white" fontWeight="bold" fontSize="sm">
                  {tccData.defensePanel.professor1Name.charAt(0).toUpperCase()}
                </Text>
              </Box>
              <VStack align="start" gap={0}>
                <Text fontWeight="semibold">{tccData.defensePanel.professor1Name}</Text>
              </VStack>
            </HStack>
          </Box>

          <Separator />

          <Box>
            <Heading size="sm" mb={3} color="gray.700">
              👥 Banca Examinadora
            </Heading>
            <VStack gap={3} align="stretch">
              <HStack justify="space-between" align="center">
                <HStack gap={3}>
                  <Box 
                    w="32px" 
                    h="32px" 
                    borderRadius="full" 
                    bg="blue.500" 
                    display="flex" 
                    alignItems="center" 
                    justifyContent="center"
                  >
                    <Text color="white" fontWeight="bold" fontSize="xs">
                      {tccData.defensePanel.professor1Name.charAt(0).toUpperCase()}
                    </Text>
                  </Box>
                  <VStack align="start" gap={0}>
                    <Text fontWeight="medium" fontSize="sm">
                      {tccData.defensePanel.professor1Name}
                    </Text>
                    <Text fontSize="xs" color="gray.500">Professor 1 (Orientador)</Text>
                  </VStack>
                </HStack>
                <Badge colorScheme="blue" variant="subtle" size="sm">
                  Orientador
                </Badge>
              </HStack>

              <HStack justify="space-between" align="center">
                <HStack gap={3}>
                  <Box 
                    w="32px" 
                    h="32px" 
                    borderRadius="full" 
                    bg="green.500" 
                    display="flex" 
                    alignItems="center" 
                    justifyContent="center"
                  >
                    <Text color="white" fontWeight="bold" fontSize="xs">
                      {tccData.defensePanel.professor2Name.charAt(0).toUpperCase()}
                    </Text>
                  </Box>
                  <VStack align="start" gap={0}>
                    <Text fontWeight="medium" fontSize="sm">
                      {tccData.defensePanel.professor2Name}
                    </Text>
                    <Text fontSize="xs" color="gray.500">Professor 2</Text>
                  </VStack>
                </HStack>
                <Badge colorScheme="green" variant="subtle" size="sm">
                  Avaliador
                </Badge>
              </HStack>

              <HStack justify="space-between" align="center">
                <HStack gap={3}>
                  <Box 
                    w="32px" 
                    h="32px" 
                    borderRadius="full" 
                    bg="purple.500" 
                    display="flex" 
                    alignItems="center" 
                    justifyContent="center"
                  >
                    <Text color="white" fontWeight="bold" fontSize="xs">
                      {tccData.defensePanel.professor3Name.charAt(0).toUpperCase()}
                    </Text>
                  </Box>
                  <VStack align="start" gap={0}>
                    <Text fontWeight="medium" fontSize="sm">
                      {tccData.defensePanel.professor3Name}
                    </Text>
                    <Text fontSize="xs" color="gray.500">Professor 3</Text>
                  </VStack>
                </HStack>
                <Badge colorScheme="purple" variant="subtle" size="sm">
                  Avaliador
                </Badge>
              </HStack>
            </VStack>
          </Box>
        </VStack>
      </Card.Body>
    </Card.Root>
  );
};
