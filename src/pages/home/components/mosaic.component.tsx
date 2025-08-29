import { Box, Grid, GridItem } from "@chakra-ui/react";
import { FaUser, FaFileAlt, FaTasks, FaPlusCircle, FaCalendar } from "react-icons/fa";
import type { MosaicProps } from "../types";
import { ActionCard } from "./action-card.component";
import { RoutesUrl } from "../../../types/Router";
import { useScreenSize } from "../hooks/use-screen-size";
import { HiUserAdd } from "react-icons/hi";

export const Mosaic = ({ redirect }: MosaicProps) => {
  const { isMobile } = useScreenSize();

    return (
      <Box flex="4">
        <Grid
            templateColumns={`repeat(${isMobile ? '': '5'}, 1fr)`}
            templateRows={`repeat(${isMobile ? '': '3'}, 200px)`}
            gap={6}
            h="100%"
          >
            <GridItem colSpan={isMobile ? 5 : 2} marginTop={1}>
              <ActionCard
                icon={<FaUser />}
                title="Meu Perfil"
                description="Veja e edite suas informações."
                onClick={() => redirect(RoutesUrl.PROFILE)}
              />
            </GridItem>
            <GridItem colSpan={isMobile ? 5 : 3}>
              <ActionCard
                icon={<FaTasks />}
                title="Gerenciar TCC"
                description="Acompanhe o progresso do seu trabalho."
                onClick={() => redirect(RoutesUrl.TCC_DETAILS)}
              />
            </GridItem>

            <GridItem colSpan={isMobile ? 5 : 3}>
              <ActionCard
                icon={<FaFileAlt />}
                title="Trabalhos"
                description="Consulte os TCCs disponíveis."
                onClick={() => redirect(RoutesUrl.TCC_LIST)}
              />
            </GridItem>

            <GridItem colSpan={isMobile ? 5 : 2}>
              <ActionCard
                icon={<FaCalendar />}
                title="Reuniões"
                description="Veja e edite suas reuniões."
                onClick={() => redirect(RoutesUrl.MEETINGS)}
              />
            </GridItem>


            <GridItem colSpan={5}>
              <ActionCard
                icon={<FaUser />}
                title="Listagem de Usuários"
                description="Visualize todos os usuários do sistema"
                onClick={() => redirect(RoutesUrl.USER_LIST)}
              />
            </GridItem>

            
            <GridItem colSpan={5} >
              <ActionCard
                icon={<HiUserAdd />}
                title="Cadastre Alunos/Professores"
                description="Crie novos usuários"
                onClick={() => redirect(RoutesUrl.REGISTER)}
              />
            </GridItem>
          </Grid>
        </Box>
    )
};
