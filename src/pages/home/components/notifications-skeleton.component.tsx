import { VStack, Alert, Skeleton } from "@chakra-ui/react";

export const NotificationsSkeleton = () => {
  return (
    <VStack gap={3}>
      {Array.from({ length: 3 }, (_, index) => (
        <Alert.Root
          key={index}
          borderRadius="md"
          bg="skeleton"
        >
          <Alert.Indicator>
            <Skeleton height="16px" width="16px" borderRadius="full" />
          </Alert.Indicator>
          <Alert.Content>
            <Skeleton height="16px" width="80%" />
          </Alert.Content>
        </Alert.Root>
      ))}
    </VStack>
  );
};
