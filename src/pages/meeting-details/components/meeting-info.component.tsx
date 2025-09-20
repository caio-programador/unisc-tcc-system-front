import {
  Card,
  VStack,
  HStack,
  Text,
  Badge,
  Icon,
  Button,
  FileUpload,
  Box,
} from "@chakra-ui/react";
import {
  FaCalendarAlt,
  FaUser,
  FaFileAlt,
  FaClock,
  FaDownload,
  FaUpload,
  FaEdit,
  FaTimes,
} from "react-icons/fa";
import { useState } from "react";
import { formatDateTime } from "../../../utils/format-date";
import type { MeetingInfoProps } from "../types";

export const MeetingInfo = ({
  meeting,
  currentUser,
  isUploadingDocument,
  onDownloadDocument,
  onUploadDocument,
  onReplaceDocument,
}: MeetingInfoProps) => {
  const [isEditingDocument, setIsEditingDocument] = useState(false);
  const getMeetingStatus = () => {
    const now = new Date();
    const meetingDate = new Date(meeting.meetingDate);

    if (meetingDate > now) {
      return { label: "Agendada", colorScheme: "blue" };
    } else {
      return { label: "Realizada", colorScheme: "green" };
    }
  };

  const status = getMeetingStatus();

  return (
    <Card.Root borderRadius="md" shadow="md" p={6}>
      <Card.Header pb={6}>
        <HStack justifyContent="space-between" alignItems="center">
          <Text fontSize="xl" fontWeight="bold">
            Informações da Reunião
          </Text>
          <Badge
            colorScheme={status.colorScheme}
            variant="subtle"
            fontSize="md"
            px={3}
            py={1}
          >
            {status.label}
          </Badge>
        </HStack>
      </Card.Header>

      <Card.Body pt={0}>
        <VStack align="start" gap={6}>
          <HStack gap={4}>
            <Icon color="gray.500" boxSize={6}>
              <FaCalendarAlt />
            </Icon>
            <VStack align="start" gap={2}>
              <Text fontSize="md" color="gray.500" fontWeight="medium">
                Data e Hora
              </Text>
              <Text fontWeight="semibold" fontSize="md">
                {formatDateTime(meeting.meetingDate)}
              </Text>
            </VStack>
          </HStack>

          <HStack gap={4}>
            <Icon color="gray.500" boxSize={6}>
              <FaUser />
            </Icon>
            <VStack align="start" gap={2}>
              <Text fontSize="md" color="gray.500" fontWeight="medium">
                Participantes
              </Text>
              <VStack align="start" gap={2}>
                <Text fontWeight="semibold" fontSize="md">
                  <b>Professor:</b> {meeting.professorName}
                </Text>
                <Text fontWeight="semibold" fontSize="md">
                  <b>Aluno:</b> {meeting.studentName}
                </Text>
              </VStack>
            </VStack>
          </HStack>
          {currentUser?.role !== "ALUNO" && (
            <HStack gap={4} align="start">
              <Icon color="gray.500" boxSize={6}>
                <FaFileAlt />
              </Icon>
              <VStack align="start" gap={2} flex={1}>
                <Text fontSize="md" color="gray.500" fontWeight="medium">
                  Documento
                </Text>
                {meeting.documentName ? (
                  <>
                    {!isEditingDocument ? (
                      <HStack gap={3} align="center" w="100%">
                        <Text fontWeight="semibold" fontSize="md" flex={1}>
                          {meeting.documentName}
                        </Text>
                        <Button
                          size="sm"
                          colorScheme="blue"
                          variant="outline"
                          onClick={() =>
                            onDownloadDocument?.(meeting.documentName)
                          }
                        >
                          <FaDownload /> Download
                        </Button>
                        <Button
                          size="sm"
                          colorScheme="gray"
                          variant="outline"
                          onClick={() => setIsEditingDocument(true)}
                        >
                          <FaEdit /> Editar
                        </Button>
                      </HStack>
                    ) : (
                      <VStack align="start" gap={3} w="100%">
                        <HStack gap={3} align="center" w="100%">
                          <Text
                            fontWeight="semibold"
                            fontSize="md"
                            flex={1}
                            color="gray.600"
                          >
                            {meeting.documentName} (atual)
                          </Text>
                          <Button
                            size="sm"
                            colorScheme="red"
                            variant="ghost"
                            onClick={() => setIsEditingDocument(false)}
                          >
                            <FaTimes /> Cancelar
                          </Button>
                        </HStack>

                        <Box>
                          <FileUpload.Root
                            accept=".pdf,.doc,.docx,.ppt,.pptx"
                            onFileChange={(details) => {
                              if (details.acceptedFiles.length > 0) {
                                onReplaceDocument?.(details.acceptedFiles[0]);
                                setIsEditingDocument(false);
                              }
                            }}
                          >
                            <FileUpload.Trigger asChild>
                              <Button
                                variant="outline"
                                colorScheme="blue"
                                loading={isUploadingDocument}
                                size="sm"
                              >
                                <FaUpload /> Substituir Documento
                              </Button>
                            </FileUpload.Trigger>
                            <FileUpload.HiddenInput />
                          </FileUpload.Root>
                          <Text fontSize="xs" color="gray.400" mt={1}>
                            Aceita arquivos PDF, DOC, DOCX, PPT, PPTX
                          </Text>
                        </Box>
                      </VStack>
                    )}
                  </>
                ) : (
                  <Box>
                    <FileUpload.Root
                      accept=".pdf,.doc,.docx,.ppt,.pptx"
                      onFileChange={(details) => {
                        if (details.acceptedFiles.length > 0) {
                          onUploadDocument?.(details.acceptedFiles[0]);
                        }
                      }}
                    >
                      <FileUpload.Trigger asChild>
                        <Button
                          variant="outline"
                          colorScheme="gray"
                          loading={isUploadingDocument}
                        >
                          <FaUpload /> Fazer Upload do Documento
                        </Button>
                      </FileUpload.Trigger>
                      <FileUpload.HiddenInput />
                    </FileUpload.Root>
                    <Text fontSize="xs" color="gray.400" mt={1}>
                      Aceita arquivos PDF, DOC, DOCX, PPT, PPTX
                    </Text>
                  </Box>
                )}
              </VStack>
            </HStack>
          )}

          <HStack gap={4}>
            <Icon color="gray.500" boxSize={6}>
              <FaClock />
            </Icon>
            <VStack align="start" gap={2}>
              <Text fontSize="md" color="gray.500" fontWeight="medium">
                Status
              </Text>
              <Text fontWeight="semibold" fontSize="md">
                {currentUser?.role === "ALUNO"
                  ? `Reunião com ${meeting.professorName}`
                  : `Reunião com ${meeting.studentName}`}
              </Text>
            </VStack>
          </HStack>
        </VStack>
      </Card.Body>
    </Card.Root>
  );
};
