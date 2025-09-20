import {
  Alert,
  Button,
  Flex,
  Heading,
  VStack,
  Text,
  HStack,
  Icon,
  Card,
  Badge,
} from "@chakra-ui/react";
import { IoIosNotifications } from "react-icons/io";
import { MdNotificationsNone } from "react-icons/md";
import { CiCircleAlert } from "react-icons/ci";
import type { AppAlertsProps } from "../types";
import type { AlertType } from "../../../types/Alert";
import { RoutesUrl } from "../../../types/Router";
import { NotificationsSkeleton } from "./notifications-skeleton.component";
import { useCallback } from "react";

const getAlertStatus = (
  type: AlertType
): "success" | "info" | "warning" | "error" => {
  switch (type) {
    case "ATRASO_ENTREGA":
    case "ATRASO_AVALIACAO":
      return "error";
    case "REUNIAO_CANCELADA":
      return "warning";
    case "NOVA_REUNIAO":
    case "NOVO_PARECER":
    case "AVALIACAO_DISPONIVEL":
    case "NOVA_ENTREGA":
      return "info";
    default:
      return "info";
  }
};

const EmptyNotifications = () => {
  return (
    <Card.Root
      borderRadius="xl"
      shadow="sm"
      w="full"
      bg="gray.50"
      border="2px dashed"
      borderColor="gray.200"
    >
      <Card.Body p={6} textAlign="center">
        <VStack gap={3}>
          <Icon size="xl" color="gray.400">
            <MdNotificationsNone />
          </Icon>
          <Text fontSize="sm" color="gray.600" fontWeight="medium">
            Nenhuma notificação
          </Text>
          <Text fontSize="xs" color="gray.500">
            Você está em dia com tudo!
          </Text>
        </VStack>
      </Card.Body>
    </Card.Root>
  );
};

export const AppAlerts = ({
  redirect,
  notifications,
  isLoadingNotifications,
}: AppAlertsProps) => {
  const truncate = useCallback((text: string, maxLength = 50) => {
    if (text.length <= maxLength) {
      return text;
    }
    return text.substring(0, maxLength - 3) + "...";
  }, []);

  const totalUnreadCount =
    notifications?.filter((notification) => !notification.isRead).length || 0;

  return (
    <VStack align="stretch" mb={6}>
      <Flex gap={4} mb={4} align="center" justify="space-between">
        <HStack gap={2}>
          <Heading size="sm">Notificações</Heading>
          {totalUnreadCount > 0 && (
            <Badge
              colorScheme="red"
              variant="solid"
              borderRadius="full"
              fontSize="xs"
            >
              {totalUnreadCount}
            </Badge>
          )}
        </HStack>
        <Button
          backgroundColor="textPrimary"
          color="background"
          size="sm"
          fontSize="sm"
          fontWeight="normal"
          height="30px"
          onClick={() => redirect(RoutesUrl.NOTIFICATIONS)}
        >
          Todas as notificações <IoIosNotifications size={24} />
        </Button>
      </Flex>

      {isLoadingNotifications ? (
        <NotificationsSkeleton />
      ) : !notifications || notifications.length === 0 ? (
        <EmptyNotifications />
      ) : (
        <VStack gap={3}>
          {notifications.map((notification) => (
            <Alert.Root
              key={notification.id}
              status={getAlertStatus(notification.type)}
              borderRadius="md"
              cursor="pointer"
              onClick={() => redirect(RoutesUrl.NOTIFICATIONS)}
              transition="all 0.2s"
              _hover={{ shadow: "md" }}
            >
              <Alert.Indicator>
                <CiCircleAlert />
              </Alert.Indicator>
              <Alert.Content>
                <Alert.Title>{truncate(notification.message)}</Alert.Title>
              </Alert.Content>
            </Alert.Root>
          ))}
        </VStack>
      )}
    </VStack>
  );
};
