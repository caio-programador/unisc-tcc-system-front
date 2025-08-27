import { Center, Box, Stack, Heading, Button } from "@chakra-ui/react";
import type { LoginProps } from "../types";
import { LabelInput } from "../components/label-input.component";

export default function Login({
  errors,
  isPending,
  onSubmit,
  register,
}: LoginProps) {
  return (
    <Center h="100vh">
      <Box
        p="6"
        borderWidth="1px"
        borderRadius="lg"
        overflow="hidden"
        boxShadow="md"
      >
        <Stack>
          <Heading size="lg" textAlign="center">
            Login da Faculdade
          </Heading>
          <form onSubmit={onSubmit}>
            <LabelInput
              id="email"
              label="E-mail"
              placeholder="Digite seu e-mail"
              register={register}
              errors={errors}
            />
            <LabelInput
              id="password"
              placeholder="Digite sua senha"
              label="Senha"
              register={register}
              errors={errors}
            />
            <Button
              variant="subtle"
              colorScheme="blue"
              type="submit"
              size="lg"
              width="full"
              marginTop={9}
              loading={isPending}
            >
              Entrar
            </Button>
          </form>
        </Stack>
      </Box>
    </Center>
  );
}
