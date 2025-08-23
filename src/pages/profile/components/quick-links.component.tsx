import { Card, Heading, VStack, Link } from "@chakra-ui/react";
import type { QuickLinksProps } from "../types";
import { RoutesUrl } from "../../../types/Router";

export const QuickLinks = ({ redirect }: QuickLinksProps) => {
  return (
    <Card.Root maxW="md" mx="auto">
      <Card.Header>
        <Heading size="md">Links Rápidos</Heading>
      </Card.Header>
      <Card.Body>
        <VStack align="start" gap={3}>
          <Link onClick={() => redirect(RoutesUrl.TCC_LIST)} color="blue.400">
            Meus TCC
          </Link>
          <Link onClick={() => redirect(RoutesUrl.MEETINGS)} color="blue.400">
            Reuniões
          </Link>
        </VStack>
      </Card.Body>
    </Card.Root>
  );
};
