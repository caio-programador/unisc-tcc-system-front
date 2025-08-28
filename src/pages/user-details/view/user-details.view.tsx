import {
  Box,
  Text,
  Heading,
  VStack,
  HStack,
  Select,
  Input,
  Button,
  Separator,
  Field,
  createListCollection,
  Portal,
} from "@chakra-ui/react";
import { Controller } from "react-hook-form";
import { AppBreadcrumbs } from "../../../components/global/app-breadcrumbs";
import type { UserDetailsProps } from "../types";

const mockProfessores = createListCollection({
  items: [
    { id: 1, name: "Professor A" },
    { id: 2, name: "Professor B" },
    { id: 3, name: "Professor C" },
  ],
});

export const UserDetails = ({
  control,
  errors,
  handleSubmit,
  register,
}: UserDetailsProps) => {
  return (
    <Box p={8}>
      <AppBreadcrumbs
        links={[{ label: "Home", navigate: () => {} }]}
        currentLinkLabel="Detalhes do Usuário"
      />
      {/* Título */}
      <Heading size="lg" mb={6} textAlign="left">
        Perfil do Usuário
      </Heading>

      {/* Informações básicas (somente leitura) */}
      <VStack gap={4} align="stretch" mb={8}>
        <HStack>
          <Text fontWeight="bold">Nome:</Text>
          <Text>Fulano da Silva</Text>
        </HStack>

        <HStack>
          <Text fontWeight="bold">Email:</Text>
          <Text>fulano@email.com</Text>
        </HStack>

        <HStack>
          <Text fontWeight="bold">Role:</Text>
          <Text>Aluno</Text>
        </HStack>
      </VStack>

      <Separator mb={6} />

      {/* Formulário editável */}
      <VStack as="form" gap={6} align="stretch">
        <Field.Root invalid={false}>
          <Field.Label>Orientador:</Field.Label>

          <Controller
            control={control}
            name="orientador"
            render={({ field: { onChange, onBlur, value } }) => (
              <Select.Root
                collection={mockProfessores}
                size="md"
                onValueChange={(details) => onChange(details.value[0])}
                onBlur={onBlur}
                value={value ? [value.name] : []}
              >
                <Select.Control>
                  <Select.Trigger>
                    <Select.ValueText
                      color={value ? "textPrimary" : "textSecondary"}
                      opacity={value ? 1 : 0.6}
                      placeholder="Selecione o orientador"
                    />
                  </Select.Trigger>

                  <Select.IndicatorGroup>
                    <Select.Indicator />
                  </Select.IndicatorGroup>
                </Select.Control>
                <Portal>
                  <Select.Positioner>
                    <Select.Content
                      backgroundColor={"background"}
                      border={"1px solid"}
                      borderColor={"darkBlue.700"}
                      boxShadow="lg"
                    >
                      {mockProfessores.items.map((option) => (
                        <Select.Item key={option.id} item={option.id}>
                          <Select.ItemText>{option.name}</Select.ItemText>
                        </Select.Item>
                      ))}
                    </Select.Content>
                  </Select.Positioner>
                </Portal>
              </Select.Root>
            )}
          />
        </Field.Root>

        <Field.Root>
          <Field.Label>Data final da proposta</Field.Label>
          <Input type="date" />
        </Field.Root>

        <Field.Root>
          <Field.Label>Data final do TCC</Field.Label>
          <Input type="date" />
        </Field.Root>

        <Button colorScheme="blue" alignSelf="flex-start">
          Salvar Alterações
        </Button>
      </VStack>
    </Box>
  );
};
