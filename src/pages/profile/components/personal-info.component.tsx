import { Card, Heading, Text } from "@chakra-ui/react";
import { UpdateInfoForm } from "./update-info-form.component";
import type { PersonalInfoProps } from "../types";

export const PersonalInfo = ({
  errors,
  hasValues,
  user,
  isPending,
  onSubmit,
  setValue,
}: PersonalInfoProps) => {
  return (
    <Card.Root maxW="md" mx="auto" mb={8}>
      <Card.Header>
        <Heading size="md">Informações Pessoais</Heading>
        <Text fontSize="sm" color="gray.500">
          Atualize suas informações pessoais clicando em cima
        </Text>
      </Card.Header>
      <UpdateInfoForm
        isPending={isPending}
        user={user}
        setValue={setValue}
        hasValues={hasValues}
        errors={errors}
        onSubmit={onSubmit}
      />
    </Card.Root>
  );
};
