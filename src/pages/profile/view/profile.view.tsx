import { Box, Container } from "@chakra-ui/react";

import { AppBreadcrumbs } from "../../../components/global/app-breadcrumbs";
import { QuickLinks } from "../components/quick-links.component";
import { HeaderProfile } from "../components/header-profile.component";
import { PersonalInfo } from "../components/personal-info.component";
import type { ProfileProps } from "../types";
import { RoutesUrl } from "../../../types/Router";

export const Profile = ({
  errors,
  hasValues,
  user,
  onSubmit,
  redirect,
  setValue,
}: ProfileProps) => {
  return (
    <Container maxW="600px">
      <Box p={4} >
        <AppBreadcrumbs
          links={[{ label: "Home", navigate: () => redirect(RoutesUrl.HOME) }]}
          currentLinkLabel="Perfil"
        />
        <HeaderProfile />

        <PersonalInfo
          user={user}
          hasValues={hasValues}
          errors={errors}
          onSubmit={onSubmit}
          setValue={setValue}
        />
        <QuickLinks redirect={redirect} />
      </Box>
    </Container>
  );
};
