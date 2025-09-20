import { VStack, HStack, Skeleton, Box } from "@chakra-ui/react";

export const MeetingsSkeleton = () => {
  return (
    <VStack gap={4} mt={8}>
      {Array.from({ length: 3 }, (_, index) => (
        <HStack key={index} gap={3} w="full">
          <Skeleton height="12px" width="12px" borderRadius="full" background="skeleton" />
          <Box flex={1}>
            <Skeleton height="16px" width="70%" mb={1} background="skeleton" />
            <Skeleton height="14px" width="90%" background="skeleton" />
          </Box>
        </HStack>
      ))}
    </VStack>
  );
};