import {
  Box,
  Button,
  Card,
  Flex,
  Heading,
  HStack,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import { FaExternalLinkAlt } from "react-icons/fa";
import { IoIosClose } from "react-icons/io";
import { AppBreadcrumbs } from "../../../components/global/app-breadcrumbs";
import type { MeetingsProps } from "../types";
import { RoutesUrl } from "../../../types/Router";
import { NewMeetingModal } from "../components/new-meeting-modal.component";

const meetings = [
  {
    id: 1,
    title: "Reunião de alinhamento do TCC",
    date: "10/09/2025 14:00",
    partner: "Prof. João da Silva",
    link: "https://meet.google.com/abc-defg-hij",
  },
  {
    id: 2,
    title: "Mentoria sobre metodologia",
    date: "12/09/2025 09:00",
    partner: "Maria Oliveira",
    link: null,
  },
  {
    id: 3,
    title: "Discussão de resultados parciais",
    date: "15/09/2025 16:30",
    partner: "Prof. Carlos Souza",
    link: "https://zoom.us/j/123456789",
  },
];

export const Meetings = ({
  redirect,
  openWindow,
  control,
  errors,
  handleSubmit,
  register,
}: MeetingsProps) => {
  return (
    <Box p={6} maxW="900px" mx="auto">
      <Flex alignItems="center">
        <AppBreadcrumbs
          links={[{ label: "Home", navigate: () => redirect(RoutesUrl.HOME) }]}
          currentLinkLabel="Minhas Reuniões"
        />
        <NewMeetingModal 
          control={control}
          errors={errors}
          handleSubmit={handleSubmit}
          register={register}
        />
      </Flex>

      <Heading my={6} size="lg" color="textPrimary">
        Minhas Reuniões
      </Heading>

      <Stack gap={4} mt={4}>
        {meetings.map((meeting) => (
          <Card.Root
            key={meeting.id}
            borderWidth="1px"
            borderRadius="xl"
            shadow="md"
            transition="0.2s"
          >
            <Card.Header borderBottom="1px solid" borderColor="gray.200">
              <Heading size="md">{meeting.title}</Heading>
              <Text fontSize="sm" color="gray.500">
                {meeting.date}
              </Text>
            </Card.Header>

            <Card.Body>
              <VStack align="start" gap={3}>
                <Text>
                  <b>Com:</b> {meeting.partner}
                </Text>

                <HStack gap={3}>
                  {meeting.link && (
                    <Button
                      rel="noopener noreferrer"
                      background="background"
                      size="sm"
                      onClick={() => openWindow(meeting.link)}
                    >
                      Link da reunião <FaExternalLinkAlt />
                    </Button>
                  )}

                  <Button className="cancel-button" size="sm" variant="outline">
                    Cancelar <IoIosClose />
                  </Button>
                </HStack>
              </VStack>
            </Card.Body>
          </Card.Root>
        ))}
      </Stack>
    </Box>
  );
};
