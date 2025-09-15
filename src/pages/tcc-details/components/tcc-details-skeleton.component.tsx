import {
  Box,
  Card,
  CardBody,
  CardHeader,
  Skeleton,
  SkeletonText,
  VStack,
  Container,
  HStack,
} from "@chakra-ui/react";

export const TCCDetailsSkeleton = () => {
  return (
    <Container maxW="1200px">
      <Box p={4}>
        {/* Breadcrumbs skeleton */}
        <HStack gap={2} mb={6}>
          <Skeleton height="16px" width="40px" background="skeleton" />
          <Skeleton height="16px" width="8px" background="skeleton" />
          <Skeleton height="16px" width="100px" background="skeleton" />
        </HStack>

        <VStack gap={6} align="stretch" mt={6}>
          {/* Steps Navigation Skeleton */}
          <Box mt={6}>
            <HStack gap={4} justify="center" mb={6}>
              {Array.from({ length: 9 }).map((_, index) => (
                <Box key={index} position="relative">
                  <Skeleton
                    width="32px"
                    height="32px"
                    borderRadius="full"
                    background="skeleton"
                  />
                  {index < 8 && (
                    <Skeleton
                      position="absolute"
                      top="50%"
                      left="100%"
                      transform="translateY(-50%)"
                      width="40px"
                      height="2px"
                      background="skeleton"
                      ml={2}
                    />
                  )}
                </Box>
              ))}
            </HStack>

            {/* Step Content Skeleton */}
            <Box>
              {/* Step Title */}
              <Skeleton
                height="32px"
                width="300px"
                mb={6}
                background="skeleton"
              />

              {/* Delivery Form Card */}
              <Card.Root
                bg="transparent"
                border="2px solid"
                borderColor="gray.300"
                borderRadius="lg"
              >
                <CardHeader>
                  <SkeletonText
                    noOfLines={1}
                    width="70%"
                    background="skeleton"
                  />
                </CardHeader>
                <CardBody>
                  <VStack gap={4} align="stretch">
                    {/* Título do TCC */}
                    <Box>
                      <Skeleton
                        height="16px"
                        width="100px"
                        mb={2}
                        background="skeleton"
                      />
                      <Skeleton
                        height="40px"
                        borderRadius="md"
                        background="skeleton"
                      />
                    </Box>

                    {/* Área de upload de arquivo */}
                    <Box>
                      <Skeleton
                        height="16px"
                        width="60px"
                        mb={2}
                        background="skeleton"
                      />
                      <Box
                        border="2px dashed"
                        borderColor="gray.300"
                        borderRadius="md"
                        p={8}
                        textAlign="center"
                      >
                        <VStack gap={1}>
                          <Skeleton
                            height="16px"
                            width="200px"
                            background="skeleton"
                          />
                          <Skeleton
                            height="12px"
                            width="120px"
                            background="skeleton"
                          />
                        </VStack>
                      </Box>
                    </Box>

                    {/* Botão de baixar */}
                    <Skeleton
                      height="40px"
                      borderRadius="md"
                      background="skeleton"
                    />

                    {/* Botão de enviar/atualizar */}
                    <Skeleton
                      height="40px"
                      borderRadius="md"
                      background="skeleton"
                    />
                  </VStack>
                </CardBody>
              </Card.Root>

              {/* Evaluation Form Skeleton */}
              <Box mt="30px">
                {/* Título da Avaliação */}
                <Skeleton
                  height="28px"
                  width="100px"
                  mb="10px"
                  background="skeleton"
                />

                <VStack gap={6} align="stretch">
                  {/* Campos de avaliação */}
                  {Array.from({ length: 5 }).map((_, index) => (
                    <Box key={index}>
                      <Skeleton
                        height="18px"
                        width="150px"
                        mb={2}
                        background="skeleton"
                      />
                      <SkeletonText
                        noOfLines={2}
                        width="80%"
                        mb={2}
                        background="skeleton"
                      />
                      <Skeleton
                        height="40px"
                        borderRadius="md"
                        background="skeleton"
                      />
                    </Box>
                  ))}

                  {/* Campo de comentários */}
                  <Box>
                    <Skeleton
                      height="16px"
                      width="180px"
                      mb={3}
                      background="skeleton"
                    />
                    <Skeleton
                      height="80px"
                      borderRadius="md"
                      background="skeleton"
                    />
                  </Box>

                  {/* Botão de enviar avaliação */}
                  <Skeleton
                    height="48px"
                    borderRadius="md"
                    mt={4}
                    background="skeleton"
                  />
                </VStack>
              </Box>
            </Box>
          </Box>
        </VStack>
      </Box>
    </Container>
  );
};
