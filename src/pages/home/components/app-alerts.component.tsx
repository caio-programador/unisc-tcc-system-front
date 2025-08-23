import { Alert, Heading, VStack } from "@chakra-ui/react";
import { CiCircleAlert } from "react-icons/ci";

export const AppAlerts = () => {
    const mockedNotifications = [
      {
        id: 1,
        status: 'warning',
        message: 'Você tem uma avaliação pendente para revisar.'
      },
      {
        id: 2,
        status: 'error',
        message: 'Seu TCC está com prazo atrasado!'
      }
    ]
    return (
      <VStack align="stretch" mb={6}>
        <Heading size="md" mb={4}>Notificações</Heading>
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
