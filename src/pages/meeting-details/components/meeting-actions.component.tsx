import {
  Card,
  VStack,
  Button,
  Text,
} from "@chakra-ui/react";
import { FaExternalLinkAlt } from "react-icons/fa";
import type { MeetingActionsProps } from "../types";

export const MeetingActions = ({
  meeting,
  openWindow,
}: MeetingActionsProps) => {

  return (
    <Card.Root borderWidth="1px" borderRadius="md" shadow="md" p={6}>
      <Card.Header pb={6}>
        <Text fontSize="xl" fontWeight="bold">
          Ações
        </Text>
      </Card.Header>

      <Card.Body pt={0}>
        <VStack gap={4} align="stretch">
          {meeting.link && (
            <Button
              background="background"
              onClick={() => openWindow(meeting.link)}
              size="md"
              py={6}
            >
              <FaExternalLinkAlt /> Abrir Link da Reunião
            </Button>
          )}
        </VStack>
      </Card.Body>
    </Card.Root>
  );
};