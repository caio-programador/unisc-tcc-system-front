import {
  Center,
  Box,
  Stack,
  Heading,
  Button,
  VStack,
  Container,
} from "@chakra-ui/react";
import { LabelInput } from "../components/label-input.component";
import { SelectRole } from "../components/select-role.component";
import type { RegisterProps } from "../types";
import { AppBreadcrumbs } from "../../../components/global/app-breadcrumbs";
import { RoutesUrl } from "../../../types/Router";

export default function Register({
  errors,
  onSubmit,
  register,
  redirect,
  control,
  isPending,
}: RegisterProps) {
  return (
    <Container maxW="1000px">
      <Box paddingY={4}>
        <AppBreadcrumbs
          links={[{ label: "Home", navigate: () => redirect(RoutesUrl.HOME) }]}
          currentLinkLabel="Cadastro"
        />
      </Box>
      <Center py={8}>
        <Box
          p="6"
          borderWidth="1px"
          borderRadius="lg"
          overflow="hidden"
          boxShadow="md"
          w="full"
          maxW="md"
        >
          <Stack gap={4}>
            <Heading size="lg" textAlign="center">
              Cadastro da Faculdade
            </Heading>

            <form onSubmit={onSubmit}>
              <VStack gap={4}>
                <LabelInput
                  id="name"
                  label="Nome Completo"
                  placeholder="Digite seu nome completo"
                  register={register}
                  errors={errors}
                  type="text"
                />

                <LabelInput
                  id="email"
                  label="E-mail"
                  placeholder="Digite seu e-mail"
                  register={register}
                  errors={errors}
                  type="email"
                />

                <SelectRole
                  label="Tipo de Usuário"
                  control={control}
                  errors={errors}
                />

                <LabelInput
                  id="password"
                  placeholder="Digite sua senha"
                  label="Senha"
                  register={register}
                  errors={errors}
                  type="password"
                />

                <LabelInput
                  id="confirmPassword"
                  placeholder="Confirme sua senha"
                  label="Confirmar Senha"
                  register={register}
                  errors={errors}
                  type="password"
                />

                <Button
                  variant="subtle"
                  type="submit"
                  size="lg"
                  width="full"
                  mt={4}
                  loading={isPending}
                >
                  Cadastrar
                </Button>
              </VStack>
            </form>
          </Stack>
        </Box>
      </Center>
    </Container>
  );
}
