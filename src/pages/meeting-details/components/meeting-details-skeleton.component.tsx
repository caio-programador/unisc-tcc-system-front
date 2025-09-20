import {
  Box,
  Card,
  Flex,
  Stack,
  Skeleton,
  HStack,
  VStack,
} from "@chakra-ui/react";

export const MeetingDetailsSkeleton = () => {
  return (
    <Box p={6} maxW="1000px" mx="auto">
      <Flex direction="column" gap={4} mb={8}>
        <HStack gap={4}>
          <Skeleton height="24px" width="80px" background="skeleton" />
          <Skeleton height="24px" width="16px" background="skeleton" />
          <Skeleton height="24px" width="100px" background="skeleton" />
          <Skeleton height="24px" width="16px" background="skeleton" />
          <Skeleton height="24px" width="160px" background="skeleton" />
        </HStack>

        <Skeleton height="32px" width="200px" background="skeleton" />
      </Flex>

      <Stack direction="column" gap={8} align="center">
        <Box w="100%" maxW="1000px">
          <Card.Root
            borderRadius="xl"
            shadow="lg"
            p={6}
            background="skeleton"
            border={0}
          >
            <Card.Header pb={6}>
              <HStack justifyContent="space-between" alignItems="center">
                <Skeleton height="28px" width="220px" background="skeleton" />
                <Skeleton
                  height="28px"
                  width="90px"
                  borderRadius="full"
                  background="skeleton"
                />
              </HStack>
            </Card.Header>

            <Card.Body pt={0}>
              <VStack align="start" gap={6}>
                <HStack gap={4}>
                  <Skeleton height="24px" width="24px" background="skeleton" />
                  <VStack align="start" gap={2}>
                    <Skeleton
                      height="16px"
                      width="80px"
                      background="skeleton"
                    />
                    <Skeleton
                      height="20px"
                      width="180px"
                      background="skeleton"
                    />
                  </VStack>
                </HStack>

                <HStack gap={4}>
                  <Skeleton height="24px" width="24px" background="skeleton" />
                  <VStack align="start" gap={2}>
                    <Skeleton
                      height="16px"
                      width="90px"
                      background="skeleton"
                    />
                    <VStack align="start" gap={2}>
                      <Skeleton
                        height="20px"
                        width="200px"
                        background="skeleton"
                      />
                      <Skeleton
                        height="20px"
                        width="150px"
                        background="skeleton"
                      />
                    </VStack>
                  </VStack>
                </HStack>

                <HStack gap={4} align="start">
                  <Skeleton height="24px" width="24px" background="skeleton" />
                  <VStack align="start" gap={2} flex={1}>
                    <Skeleton
                      height="16px"
                      width="80px"
                      background="skeleton"
                    />
                    <Skeleton
                      height="40px"
                      width="220px"
                      borderRadius="md"
                      background="skeleton"
                    />
                    <Skeleton
                      height="14px"
                      width="250px"
                      background="skeleton"
                    />
                  </VStack>
                </HStack>

                <HStack gap={4}>
                  <Skeleton height="24px" width="24px" background="skeleton" />
                  <VStack align="start" gap={2}>
                    <Skeleton
                      height="16px"
                      width="50px"
                      background="skeleton"
                    />
                    <Skeleton
                      height="20px"
                      width="180px"
                      background="skeleton"
                    />
                  </VStack>
                </HStack>
              </VStack>
            </Card.Body>
          </Card.Root>
        </Box>

        <Box w="100%" maxW="1000px">
          <Card.Root
            borderRadius="xl"
            shadow="lg"
            p={6}
            background="skeleton"
            border={0}
          >
            <Card.Header pb={6}>
              <Skeleton height="28px" width="80px" background="skeleton" />
            </Card.Header>

            <Card.Body pt={0}>
              <VStack gap={4} align="stretch">
                <Skeleton
                  height="56px"
                  width="100%"
                  borderRadius="md"
                  background="skeleton"
                />
              </VStack>
            </Card.Body>
          </Card.Root>
        </Box>
      </Stack>
    </Box>
  );
};
