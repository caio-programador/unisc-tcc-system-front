import {
  Card,
  HStack,
  VStack,
  Text,
  Badge,
  Button,
  Icon,
  Box,
} from "@chakra-ui/react";
import {
  FaBell,
  FaExclamationTriangle,
  FaCalendarAlt,
  FaFileAlt,
  FaEye,
  FaTrash,
} from "react-icons/fa";
import { formatDateTime } from "../../../utils/format-date";
import type { NotificationItemProps } from "../types";
import type { AlertType } from "../../../types/Alert";

const getNotificationIcon = (type: AlertType) => {
  switch (type) {
    case "ATRASO_ENTREGA":
    case "ATRASO_AVALIACAO":
      return <FaExclamationTriangle />;
    case "NOVA_REUNIAO":
      return <FaCalendarAlt />;
    case "NOVO_PARECER":
    case "AVALIACAO_DISPONIVEL":
      return <FaFileAlt />;
    default:
      return <FaBell />;
  }
};

const getNotificationColor = (type: AlertType) => {
  switch (type) {
    case "ATRASO_ENTREGA":
    case "ATRASO_AVALIACAO":
      return "red";
    case "NOVA_REUNIAO":
      return "blue";
    case "NOVO_PARECER":
      return "green";
    case "AVALIACAO_DISPONIVEL":
      return "purple";
    default:
      return "gray";
  }
};

const getNotificationTypeLabel = (type: AlertType) => {
  switch (type) {
    case "ATRASO_ENTREGA":
      return "Atraso de Entrega";
    case "ATRASO_AVALIACAO":
      return "Atraso de Avaliação";
    case "NOVA_REUNIAO":
      return "Nova Reunião";
    case "NOVO_PARECER":
      return "Novo Parecer";
    case "AVALIACAO_DISPONIVEL":
      return "Avaliação Disponível";
    default:
      return "Notificação";
  }
};

export const NotificationItem = ({
  notification,
  onMarkAsRead,
  onDelete,
}: NotificationItemProps) => {
  const iconColor = getNotificationColor(notification.type);

  return (
    <Card.Root
      borderRadius="xl"
      shadow="sm"
      bg={notification.isRead ? "white" : "blue.50"}
      borderLeft={`4px solid`}
      borderLeftColor={`${iconColor}.500`}
      transition="all 0.2s"
      _hover={{ shadow: "md" }}
    >
      <Card.Body p={4}>
        <HStack justify="space-between" align="start">
          <HStack gap={3} flex={1}>
            <Box
              p={2}
              bg={`${iconColor}.100`}
              borderRadius="md"
              color={`${iconColor}.600`}
            >
              <Icon boxSize={4}>
                {getNotificationIcon(notification.type)}
              </Icon>
            </Box>

            <VStack align="start" gap={2} flex={1}>
              <HStack gap={2}>
                <Badge
                  colorScheme={iconColor}
                  variant="subtle"
                  fontSize="xs"
                >
                  {getNotificationTypeLabel(notification.type)}
                </Badge>
                {!notification.isRead && (
                  <Badge colorScheme="blue" variant="solid" fontSize="xs">
                    Nova
                  </Badge>
                )}
              </HStack>

              <Text
                fontSize="sm"
                fontWeight={notification.isRead ? "normal" : "medium"}
                color={notification.isRead ? "gray.600" : "gray.800"}
              >
                {notification.message}
              </Text>

              <Text fontSize="xs" color="gray.500">
                {formatDateTime(notification.generatedAt)}
              </Text>
            </VStack>
          </HStack>

          <VStack gap={1}>
            {!notification.isRead && (
              <Button
                size="xs"
                variant="ghost"
                colorScheme="blue"
                onClick={() => onMarkAsRead(notification.id)}
              >
                <FaEye /> Marcar como lida
              </Button>
            )}
            <Button
              size="xs"
              variant="ghost"
              colorScheme="red"
              onClick={() => onDelete(notification.id)}
            >
              <FaTrash /> Excluir
            </Button>
          </VStack>
        </HStack>
      </Card.Body>
    </Card.Root>
  );
};