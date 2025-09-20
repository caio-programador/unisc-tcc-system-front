import {
  Box,
  Card,
  Flex,
  Stack,
  Skeleton,
  HStack,
  VStack,
} from "@chakra-ui/react";

export const MeetingsSkeleton = () => {
  return (
    <Box p={6} maxW="900px" mx="auto">
      <Flex alignItems="center" justifyContent="space-between" mb={6}>
        <HStack gap={4}>
          <Skeleton height="24px" width="120px" background="skeleton" />
          <Skeleton height="24px" width="16px" background="skeleton" />
          <Skeleton height="24px" width="140px" background="skeleton" />
        </HStack>

        <HStack gap={3}>
          <Skeleton
            height="40px"
            width="140px"
            borderRadius="md"
            background="skeleton"
          />

          <Skeleton
            height="40px"
            width="120px"
            borderRadius="md"
            background="skeleton"
          />
        </HStack>
      </Flex>

      <Skeleton height="32px" width="200px" mb={6} background="skeleton" />

      <Stack gap={4} mt={4}>
        {Array.from({ length: 3 }, (_, index) => (
          <Card.Root
            key={index}
            border={0}
            borderRadius="xl"
            shadow="md"
            background="skeleton"
          >
            <Card.Header
              borderBottom="1px solid"
              borderColor="gray.200"
              p={4}
              background="skeleton"
            >
              <Skeleton
                height="24px"
                width="250px"
                mb={2}
                background="skeleton"
              />
              <Skeleton height="16px" width="150px" background="skeleton" />
            </Card.Header>

            <Card.Body p={4} background="skeleton">
              <VStack align="start" gap={3}>
                <HStack>
                  <Skeleton height="16px" width="35px" background="skeleton" />
                  <Skeleton height="16px" width="180px" background="skeleton" />
                </HStack>

                <HStack gap={3}>
                  <Skeleton
                    height="32px"
                    width="140px"
                    borderRadius="md"
                    background="skeleton"
                  />
                  <Skeleton
                    height="32px"
                    width="100px"
                    borderRadius="md"
                    background="skeleton"
                  />
                </HStack>
              </VStack>
            </Card.Body>
          </Card.Root>
        ))}
      </Stack>
    </Box>
  );
};
