import { VStack, HStack, Button, Text } from "@chakra-ui/react";
import { FaExternalLinkAlt } from "react-icons/fa";
import { IoIosClose } from "react-icons/io";
import type { MeetingListProps } from "../types";
import { truncate } from "../../../utils/truncate";

export const MeetingList = ({
  currentUser,
  meeting,
  openWindow,
  handleCancelMeeting,
  handleNavigateToMeetingDetails,
}: MeetingListProps) => {
  return (
    <VStack align="start" gap={3}>
      <Text>
        <b>Com:</b>{" "}
        {currentUser?.role === "ALUNO"
          ? truncate(meeting.professorName)
          : truncate(meeting.studentName)}
      </Text>

      <HStack gap={3} wrap="wrap">
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
        <Button
          background="background"
          size="sm"
          onClick={() => handleNavigateToMeetingDetails(meeting.id)}
        >
          Detalhes da reunião
        </Button>
        {currentUser?.role !== "ALUNO" && new Date(meeting.meetingDate) >= new Date() && (
          <Button
            className="cancel-button"
            size="sm"
            variant="outline"
            onClick={() => handleCancelMeeting(meeting.id)}
          >
            Cancelar <IoIosClose />
          </Button>
        )}
      </HStack>
    </VStack>
  );
};
