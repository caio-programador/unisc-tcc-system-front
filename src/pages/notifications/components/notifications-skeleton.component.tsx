import {
  Box,
  Card,
  Flex,
  Stack,
  Skeleton,
  HStack,
  VStack,
} from "@chakra-ui/react";

export const NotificationsSkeleton = () => {
  return (
    <Box p={6} maxW="1000px" mx="auto">
      <Flex direction="column" gap={4} mb={6}>
        <HStack gap={4}>
          <Skeleton height="24px" width="80px" background="skeleton" />
          <Skeleton height="24px" width="16px" background="skeleton" />
          <Skeleton height="24px" width="120px" background="skeleton" />
        </HStack>

        <Flex justifyContent="space-between" alignItems="center">
          <HStack gap={3}>
            <Skeleton height="32px" width="180px" background="skeleton" />
            <Skeleton
              height="24px"
              width="40px"
              borderRadius="full"
              background="skeleton"
            />
          </HStack>
          <Skeleton height="32px" width="200px" background="skeleton" />
        </Flex>

        <Skeleton height="20px" width="300px" background="skeleton" />
      </Flex>

      <Box p={4} bg="skeleton" borderRadius="md" mb={6}>
        <HStack justify="space-between">
          <Box flex={1}>
            <Skeleton
              height="16px"
              width="100px"
              mb={2}
              background="skeleton"
            />
            <Skeleton height="32px" width="200px" background="skeleton" />
          </Box>
          <Box>
            <Skeleton
              height="16px"
              width="100px"
              mb={2}
              background="skeleton"
            />
            <HStack gap={2}>
              <Skeleton height="20px" width="40px" background="skeleton" />
              <Skeleton height="16px" width="80px" background="skeleton" />
            </HStack>
          </Box>
        </HStack>
      </Box>

      <Stack gap={4}>
        {Array.from({ length: 5 }, (_, index) => (
          <Card.Root
            key={index}
            borderRadius="xl"
            shadow="sm"
            border={0}
            background="skeleton"
          >
            <Card.Body p={4}>
              <HStack justify="space-between" align="start">
                <HStack gap={3} flex={1}>
                  <Skeleton height="32px" width="32px" borderRadius="md" background="skeleton" />

                  <VStack align="start" gap={2} flex={1}>
                    <HStack gap={2}>
                      <Skeleton
                        height="18px"
                        width="120px"
                        borderRadius="full"
                        background="skeleton"
                      />
                      <Skeleton
                        height="18px"
                        width="60px"
                        borderRadius="full"
                        background="skeleton"
                      />
                    </HStack>

                    <Skeleton height="16px" width="80%" background="skeleton" />
                    <Skeleton height="16px" width="60%" background="skeleton" />

                    <Skeleton
                      height="14px"
                      width="150px"
                      background="skeleton"
                    />
                  </VStack>
                </HStack>

                <VStack gap={1}>
                  <Skeleton height="24px" width="120px" background="skeleton" />
                  <Skeleton height="24px" width="80px" background="skeleton" />
                </VStack>
              </HStack>
            </Card.Body>
          </Card.Root>
        ))}
      </Stack>
    </Box>
  );
};
