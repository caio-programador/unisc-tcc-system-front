import {
  Box,
  Heading,
  Timeline,
  TimelineConnector,
  TimelineContent,
  TimelineTitle,
  TimelineDescription,
  VStack,
  Card,
  Text,
  Icon,
} from "@chakra-ui/react";
import { MdEventAvailable } from "react-icons/md";
import type { QuickScheduleProps } from "../types";
import { formatDateTime } from "../../../utils/format-date";
import { MeetingsSkeleton } from "./meetings-skeleton.component";
import { truncate } from "../../../utils/truncate";

const EmptyMeetings = () => {
  return (
    <Card.Root
      borderRadius="xl"
      shadow="sm"
      bg="gray.50"
      border="2px dashed"
      borderColor="gray.200"
      mt={4}
    >
      <Card.Body p={6} textAlign="center">
        <VStack gap={3}>
          <Icon size="xl" color="gray.400">
            <MdEventAvailable />
          </Icon>
          <Text fontSize="sm" color="gray.600" fontWeight="medium">
            Nenhuma reunião agendada
          </Text>
          <Text fontSize="xs" color="gray.500">
            Sua agenda está livre!
          </Text>
        </VStack>
      </Card.Body>
    </Card.Root>
  );
};

export const QuickSchedule = ({
  meetings,
  isLoadingMeetings,
  currentUser,
}: QuickScheduleProps) => {
  return (
    <Box>
      <Heading size="md" mb={4}>
        Agenda Rápida de suas próximas reuniões
      </Heading>

      {isLoadingMeetings ? (
        <MeetingsSkeleton />
      ) : meetings?.length === 0 ? (
        <EmptyMeetings />
      ) : (
        <Timeline.Root
          variant="subtle"
          size="md"
          colorPalette="blue"
          maxW="400px"
          marginTop={8}
        >
          {meetings?.map((meeting, idx) => (
            <Timeline.Item key={meeting.id}>
              <Timeline.Connector>
                <Timeline.Separator />
                <Timeline.Indicator />
                {idx < meetings?.length - 1 && <TimelineConnector />}
              </Timeline.Connector>
              <TimelineContent>
                <TimelineTitle>{meeting.subject}</TimelineTitle>
                <TimelineDescription color="textWithGray">
                  {formatDateTime(meeting.meetingDate)} — com{" "}
                  {currentUser?.role === "PROFESSOR"
                    ? truncate(meeting.professorName)
                    : truncate(meeting.studentName)}
                </TimelineDescription>
              </TimelineContent>
            </Timeline.Item>
          ))}
        </Timeline.Root>
      )}
    </Box>
  );
};
