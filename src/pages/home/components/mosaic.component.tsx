import { Box, Grid, GridItem } from "@chakra-ui/react";
import { FaUser, FaFileAlt, FaTasks, FaPlusCircle, FaCalendar } from "react-icons/fa";
import type { MosaicProps } from "../types";
import { ActionCard } from "./action-card.component";
import { RoutesUrl } from "../../../types/Router";

export const Mosaic = ({ redirect }: MosaicProps) => {
    return (
      <Box flex="4">
        <Grid
            templateColumns="repeat(5, 1fr)"
            templateRows="repeat(3, 200px)"
            gap={6}
          >
            <GridItem colSpan={2}>
              <ActionCard
                icon={<FaUser />}
                title="Meu Perfil"
                description="Veja e edite suas informações."
                onClick={() => redirect(RoutesUrl.PROFILE)}
              />
            </GridItem>
            <GridItem colSpan={3}>
              <ActionCard
                icon={<FaTasks />}
                title="Gerenciar TCC"
                description="Acompanhe o progresso do seu trabalho."
                onClick={() => redirect(RoutesUrl.TCC_DETAILS)}
              />
            </GridItem>

            <GridItem colSpan={3}>
              <ActionCard
                icon={<FaFileAlt />}
                title="Trabalhos"
                description="Consulte os TCCs disponíveis."
                onClick={() => redirect(RoutesUrl.TCC_LIST)}
              />
            </GridItem>

            <GridItem colSpan={2}>
              <ActionCard
                icon={<FaCalendar />}
                title="Reuniões"
                description="Veja e edite suas reuniões."
                onClick={() => redirect(RoutesUrl.MEETINGS)}
              />
            </GridItem>

            <GridItem colSpan={5}>
              <ActionCard
                icon={<FaPlusCircle />}
                title="Nova Proposta"
                description="Crie e envie sua proposta."
                onClick={() => redirect(RoutesUrl.NEW_TCC)}
              />
            </GridItem>
          </Grid>
        </Box>
    )
};
