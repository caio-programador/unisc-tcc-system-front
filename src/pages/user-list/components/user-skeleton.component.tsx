import { SimpleGrid, Skeleton } from "@chakra-ui/react";

export const UserSkeleton = () => {
  return (
    <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} gap={6}>
      <Skeleton height="180px" background="skeleton" borderRadius={10} />
      <Skeleton height="180px" background="skeleton" borderRadius={10} />
      <Skeleton height="180px" background="skeleton" borderRadius={10} />
      <Skeleton height="180px" background="skeleton" borderRadius={10} />
      <Skeleton height="180px" background="skeleton" borderRadius={10} />
      <Skeleton height="180px" background="skeleton" borderRadius={10} />
      <Skeleton height="180px" background="skeleton" borderRadius={10} />
      <Skeleton height="180px" background="skeleton" borderRadius={10} />
      <Skeleton height="180px" background="skeleton" borderRadius={10} />
    </SimpleGrid>
  );
};