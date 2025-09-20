import { Box, Card, Flex, Heading, Stack, Text } from "@chakra-ui/react";
import { AppBreadcrumbs } from "../../../components/global/app-breadcrumbs";
import type { MeetingsProps } from "../types";
import { RoutesUrl } from "../../../types/Router";
import { NewMeetingModal } from "../components/new-meeting-modal.component";
import { formatDateTime } from "../../../utils/format-date";
import { ChangeStartDate } from "../components/change-start-date.component";
import { MeetingList } from "../components/meeting-list.component";
import { MeetingsSkeleton } from "../components/meetings-skeleton.component";

export const Meetings = ({
  redirect,
  openWindow,
  control,
  errors,
  handleSubmit,
  register,
  currentUser,
  handleChangeStartDate,
  meetingData,
  isLoadingData,
  handleCancelMeeting,
  students,
  isPendingCreatingMeeting,
  handleNavigateToMeetingDetails,
}: MeetingsProps) => {
  if (isLoadingData) {
    return <MeetingsSkeleton />;
  }

  return (
    <Box p={6} maxW="900px" mx="auto">
      <Flex alignItems="center">
        <AppBreadcrumbs
          links={[{ label: "Home", navigate: () => redirect(RoutesUrl.HOME) }]}
          currentLinkLabel="Minhas Reuniões"
        />
        {currentUser?.role !== "ALUNO" && (
          <NewMeetingModal
            control={control}
            errors={errors}
            handleSubmit={handleSubmit}
            register={register}
            students={students}
            isPendingCreatingMeeting={isPendingCreatingMeeting}
          />
        )}
      </Flex>

      <Flex alignItems="center" justifyContent="space-between">
        <Heading my={6} size="lg" color="textPrimary">
          Minhas Reuniões
        </Heading>
        <ChangeStartDate handleChangeStartDate={handleChangeStartDate} />
      </Flex>

      {meetingData && meetingData.length > 0 && (
        <Stack gap={4} mt={4}>
          {meetingData.map((meeting) => (
            <Card.Root
              key={meeting.id}
              borderWidth="1px"
              borderRadius="xl"
              shadow="md"
              transition="0.2s"
            >
              <Card.Header borderBottom="1px solid" borderColor="gray.200">
                <Heading size="md">{meeting.subject}</Heading>
                <Text fontSize="sm" color="gray.500">
                  {formatDateTime(meeting.meetingDate)}
                </Text>
              </Card.Header>

              <Card.Body>
                <MeetingList
                  currentUser={currentUser}
                  meeting={meeting}
                  openWindow={openWindow}
                  handleCancelMeeting={handleCancelMeeting}
                  handleNavigateToMeetingDetails={
                    handleNavigateToMeetingDetails
                  }
                />
              </Card.Body>
            </Card.Root>
          ))}
        </Stack>
      )}
      {(!meetingData || meetingData?.length === 0) && !isLoadingData && (
        <Card.Root
          borderWidth="1px"
          borderRadius="xl"
          shadow="md"
          p={8}
          textAlign="center"
          mt={8}
        >
          <Card.Body>
            <Heading size="md" color="gray.600" mb={2}>
              Nenhuma reunião encontrada
            </Heading>
            <Text color="gray.500">
              Você ainda não possui reuniões cadastradas.
            </Text>
          </Card.Body>
        </Card.Root>
      )}
    </Box>
  );
};
