import { Box, Grid, GridItem, Skeleton } from "@chakra-ui/react";
import { useScreenSize } from "../hooks/use-screen-size";

export const MosaicSkeleton = () => {
  const { isMobile } = useScreenSize();
  return (
    <Box flex="4">
      <Grid
        templateColumns={`repeat(${isMobile ? "" : "5"}, 1fr)`}
        templateRows={`repeat(${isMobile ? "" : "3"}, 200px)`}
        gap={6}
        h="100%"
      >
        <GridItem colSpan={isMobile ? 5 : 2} marginTop={1}>
          <Skeleton height="200px" background="skeleton" borderRadius="md" />
        </GridItem>

        <GridItem colSpan={isMobile ? 5 : 3}>
          <Skeleton height="200px" background="skeleton" borderRadius="md" />
        </GridItem>

        <GridItem colSpan={isMobile ? 5 : 3}>
          <Skeleton height="200px" background="skeleton" borderRadius="md" />
        </GridItem>

        <GridItem colSpan={isMobile ? 5 : 2}>
          <Skeleton height="200px" background="skeleton" borderRadius="md" />
        </GridItem>

        <GridItem colSpan={5}>
          <Skeleton height="200px" background="skeleton" borderRadius="md" />
        </GridItem>

        <GridItem colSpan={5}>
          <Skeleton height="200px" background="skeleton" borderRadius="md" />
        </GridItem>
      </Grid>
    </Box>
  );
};
