import { Alert, Button, Flex, Heading, VStack } from "@chakra-ui/react";
import { CiCircleAlert } from "react-icons/ci";
import type { AppAlertsProps } from "../types";
import { RoutesUrl } from "../../../types/Router";

export const AppAlerts = ({ redirect }: AppAlertsProps) => {
  const mockedNotifications = [
    {
      id: 1,
      status: "warning",
      message: "Você tem uma avaliação pendente para revisar.",
    },
    {
      id: 2,
      status: "error",
      message: "Seu TCC está com prazo atrasado!",
    },
  ];
  return (
    <VStack align="stretch" mb={6}>
      <Flex gap={4} mb={4} align="center" justify="space-between">
        <Heading size="sm">Notificações</Heading>
        <Button
          backgroundColor={"textPrimary"}
          color={"background"}
          size="sm"
          fontSize={"sm"}
          fontWeight={"normal"}
          height={"30px"}
          onClick={() => redirect(RoutesUrl.NOTIFICATIONS)}
        >
          Todas as notificações
        </Button>
      </Flex>
      {mockedNotifications.map((notification) => (
        <Alert.Root
          key={notification.id}
          status={notification.status as "warning" | "error"}
          borderRadius="md"
          onClick={() => alert(notification.message)}
          cursor="pointer"
        >
          <CiCircleAlert />
          {notification.message}
        </Alert.Root>
      ))}
    </VStack>
  );
};
