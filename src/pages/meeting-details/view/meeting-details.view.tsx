import {
  Box,
  Stack,
  Alert,
} from "@chakra-ui/react";
import { MeetingHeader } from "../components/meeting-header.component";
import { MeetingInfo } from "../components/meeting-info.component";
import { MeetingActions } from "../components/meeting-actions.component";
import { MeetingDetailsSkeleton } from "../components/meeting-details-skeleton.component";
import type { MeetingDetailsProps } from "../types";

export const MeetingDetails = ({
  redirect,
  openWindow,
  meeting,
  isLoading,
  currentUser,
  onDownloadDocument,
  onUploadDocument,
  onReplaceDocument,
  isUploadingDocument,
}: MeetingDetailsProps) => {
  if (isLoading) {
    return <MeetingDetailsSkeleton />;
  }

  if (!meeting) {
    return (
      <Box p={6} maxW="1200px" mx="auto">
        <Alert.Root status="error" borderRadius="xl">
          <Alert.Indicator />
          <Alert.Title>Reunião não encontrada</Alert.Title>
          <Alert.Description>
            A reunião solicitada não foi encontrada ou não existe.
          </Alert.Description>
        </Alert.Root>
      </Box>
    );
  }

  return (
    <Box p={6} maxW="1000px" mx="auto">
      <MeetingHeader meeting={meeting} redirect={redirect} />

      <Stack 
        direction="column"
        gap={8} 
        align="center" 
        mt={8}
      >
        <Box w="100%" maxW="1000px">
          <MeetingInfo 
            meeting={meeting} 
            currentUser={currentUser}
            onDownloadDocument={onDownloadDocument}
            onUploadDocument={onUploadDocument}
            onReplaceDocument={onReplaceDocument}
            isUploadingDocument={isUploadingDocument}
          />
        </Box>

        <Box w="100%" maxW="1000px">
          <MeetingActions
            meeting={meeting}
            openWindow={openWindow}
            currentUser={currentUser}
          />
        </Box>
      </Stack>
    </Box>
  );
};