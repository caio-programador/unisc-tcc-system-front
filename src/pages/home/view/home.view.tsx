import {
  Box,
  Heading,
  Container,
  Flex,
  Em,
  Button,
} from "@chakra-ui/react";
import { AppAlerts } from "../components/app-alerts.component";
import { QuickSchedule } from "../components/quick-schedule.component";
import type { HomeProps } from "../types";
import { Mosaic } from "../components/mosaic.component";
import { MosaicSkeleton } from "../components/mosaic-skeleton.component";
import { IoIosLogOut } from "react-icons/io";

export const Home = ({ redirect, user, isLoadingPersonalInfo, logout }: HomeProps) => {
  return (
    <Container maxW={1300}>
      <Box p={6}>
        <Flex padding="2%" justifyContent="space-between" alignItems="start">
          <Heading mb={6}>
            Bem vindo ao Dashboard TCC, {user?.role} <Em>{user?.name}</Em>
          </Heading>
          <Button
            onClick={logout}
            backgroundColor={"textPrimary"}
            color={"background"}
            size="sm"
            fontSize={"sm"}
            fontWeight={"normal"}
            paddingX="10px"
            marginTop={"10px"}
            height={"30px"}
          >
            Logout <IoIosLogOut />
          </Button>
        </Flex>

        <Flex
          marginTop={18}
          width={"100%"}
          gap={20}
          direction={{ base: "column", lg: "row" }}
        >
          {isLoadingPersonalInfo ? (
            <MosaicSkeleton />
          ) : (
            <Mosaic redirect={redirect} user={user} />
          )}

          <Flex direction="column" gap={6} flex="2" justify="flex-start">
            <AppAlerts />
            <QuickSchedule />
          </Flex>
        </Flex>
      </Box>
    </Container>
  );
};
