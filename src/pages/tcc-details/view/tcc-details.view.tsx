import { Container, Box } from "@chakra-ui/react";
import { AppBreadcrumbs } from "../../../components/global/app-breadcrumbs";
import type { TCCDetailsProps } from "../types";
import { RoutesUrl } from "../../../types/Router";
import { TCCSteps } from "../components/tcc-steps.component";

export const TCCDetails = ({ redirect }: TCCDetailsProps) => {
  return (
    <Container maxW="1200px">
      <Box p={4}>
        <AppBreadcrumbs
          links={[{ label: "Home", navigate: () => redirect(RoutesUrl.HOME) }]}
          currentLinkLabel="Detalhes do TCC"
        />
        <TCCSteps />

        
        {/* forms da proposta */}
        

        {/* detalhes proposta */}

        {/* outros... */}
      </Box>
    </Container>
  );
};
