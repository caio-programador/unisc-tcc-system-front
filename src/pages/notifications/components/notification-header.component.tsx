import { Flex, Heading, Button, Text, Badge, HStack } from "@chakra-ui/react";
import { FaCheckDouble } from "react-icons/fa";
import { AppBreadcrumbs } from "../../../components/global/app-breadcrumbs";
import { RoutesUrl } from "../../../types/Router";
import type { NotificationHeaderProps } from "../types";

export const NotificationHeader = ({ 
  redirect, 
  totalNotifications, 
  unreadCount, 
  onMarkAllAsRead 
}: NotificationHeaderProps) => {
  return (
    <Flex direction="column" gap={4}>
      <AppBreadcrumbs
        links={[
          { label: "Home", navigate: () => redirect(RoutesUrl.HOME) }
        ]}
        currentLinkLabel="Notificações"
      />
      
      <Flex justifyContent="space-between" alignItems="center">
        <HStack gap={3}>
          <Heading size="lg" color="textPrimary">
            Notificações
          </Heading>
          {unreadCount > 0 && (
            <Badge colorScheme="red" variant="solid" borderRadius="full">
              {unreadCount}
            </Badge>
          )}
        </HStack>

        {unreadCount > 0 && (
          <Button
            variant="outline"
            color="textPrimary"
            size="sm"
            onClick={onMarkAllAsRead}
            _hover={{ bg: "gray.100", color: "background" }}
          >
            <FaCheckDouble /> Marcar todas como lidas
          </Button>
        )}
      </Flex>

      <Text fontSize="sm" color="gray.500">
        {totalNotifications} notificaç{totalNotifications !== 1 ? 'ões' : 'ão'} no total
        {unreadCount > 0 && ` • ${unreadCount} não lida${unreadCount !== 1 ? 's' : ''}`}
      </Text>
    </Flex>
  );
};