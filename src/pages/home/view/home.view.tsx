import { Box, Heading, Center, Container, Flex, Em } from "@chakra-ui/react";
import { AppAlerts } from "../components/app-alerts.component";
import { QuickSchedule } from "../components/quick-schedule.component";
import type { HomeProps } from "../types";
import { Mosaic } from "../components/mosaic.component";
import { MosaicSkeleton } from "../components/mosaic-skeleton.component";

export const Home = ({ redirect, user, isLoadingPersonalInfo }: HomeProps) => {
  return (
    <Container maxW={1300}>
      <Box p={6}>
        <Center>
          <Heading mb={6}>
            Bem vindo ao Dashboard TCC, Aluno <Em>{user?.name}</Em>
          </Heading>
        </Center>

        <Flex
          marginTop={18}
          width={"100%"}
          gap={20}
          direction={{ base: "column", lg: "row" }}
        >
          {isLoadingPersonalInfo ? <MosaicSkeleton /> : <Mosaic redirect={redirect} user={user} />}
          
          <Flex direction="column" gap={6} flex="2" justify="flex-start">
            <AppAlerts />
            <QuickSchedule />
          </Flex>
        </Flex>
      </Box>
    </Container>
  );
};
