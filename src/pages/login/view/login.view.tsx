import { Center, Box, Stack, Heading, Field, Input, Button } from "@chakra-ui/react";
import { PasswordInput } from "../../../components/ui/password-input";

export default function Login() {
  return (
    <Center h="100vh">
      <Box p="6" borderWidth="1px" borderRadius="lg" overflow="hidden" boxShadow="md">
        <Stack>
          <Heading size="lg" textAlign="center">Login da Faculdade</Heading>
          <Field.Root>
            <Field.Label htmlFor="email">E-mail</Field.Label>
            <Input type="email" id="email" placeholder="Digite seu e-mail" />
          </Field.Root>
          <Field.Root>
            <Field.Label htmlFor="senha">Senha</Field.Label>
            <PasswordInput id="senha" placeholder="Digite sua senha" />
          </Field.Root>
          <Button variant="subtle" colorScheme="blue" size="lg" width="full">Entrar</Button>
        </Stack>
      </Box>
    </Center>
)
}