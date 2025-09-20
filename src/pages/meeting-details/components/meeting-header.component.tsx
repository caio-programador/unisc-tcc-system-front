import { Flex, Heading } from "@chakra-ui/react";
import { AppBreadcrumbs } from "../../../components/global/app-breadcrumbs";
import { RoutesUrl } from "../../../types/Router";
import type { MeetingHeaderProps } from "../types";

export const MeetingHeader = ({ meeting, redirect }: MeetingHeaderProps) => {
  return (
    <Flex direction="column" gap={4}>
      <AppBreadcrumbs
        links={[
          { label: "Home", navigate: () => redirect(RoutesUrl.HOME) },
          { label: "Reuniões", navigate: () => redirect(RoutesUrl.MEETINGS) }
        ]}
        currentLinkLabel="Detalhes da Reunião"
      />
      
      <Heading size="lg" color="textPrimary">
        {meeting.subject}
      </Heading>
    </Flex>
  );
};