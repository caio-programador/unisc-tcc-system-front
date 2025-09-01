import { VStack, Skeleton } from "@chakra-ui/react";

export const UserDetailsSkeleton = () => {
  return (
    <VStack gap={4} align="stretch" mb={6} mt={12}>
      <Skeleton height="40px" background="skeleton" borderRadius={4} width="60%" />
      <Skeleton height="20px" background="skeleton" borderRadius={4} width="30%" />
      <Skeleton height="20px" background="skeleton" borderRadius={4} width="35%" />
    </VStack>
  )
};
