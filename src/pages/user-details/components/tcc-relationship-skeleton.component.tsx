import { Skeleton, SkeletonText, VStack } from "@chakra-ui/react";

export const TCCRelationshipSkeleton = () => {
  return (
    <VStack gap={6} align="stretch">
      <SkeletonText noOfLines={1} background="skeleton" />
      <Skeleton height="40px" background="skeleton" />
      <Skeleton height="40px" background="skeleton" />
      <Skeleton height="40px" background="skeleton" />
    </VStack>
  )
};