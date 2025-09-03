import { Card, Heading, VStack, Link } from "@chakra-ui/react";
import type { QuickLinksProps } from "../types";
import { RoutesUrl, type RouteUrl } from "../../../types/Router";

export const QuickLinks = ({ redirect, user }: QuickLinksProps) => {
  return (
    <Card.Root maxW="md" mx="auto">
      <Card.Header>
        <Heading size="md">Links Rápidos</Heading>
      </Card.Header>
      <Card.Body>
        <VStack align="start" gap={3}>
          {user.role === "PROFESSOR" && (
            <Link
              onClick={() =>
                redirect(`${RoutesUrl.TCC_LIST}?isProfessor=true` as RouteUrl)
              }
              color="blue.400"
            >
              Meus TCCs
            </Link>
          )}
          {user.role === "ALUNO" && (
            <Link
              onClick={() => redirect(RoutesUrl.TCC_DETAILS)}
              color="blue.400"
            >
              Meu TCC
            </Link>
          )}
          <Link onClick={() => redirect(RoutesUrl.MEETINGS)} color="blue.400">
            Reuniões
          </Link>
        </VStack>
      </Card.Body>
    </Card.Root>
  );
};
