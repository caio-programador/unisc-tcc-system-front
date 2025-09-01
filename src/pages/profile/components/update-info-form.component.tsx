import { Card, Stack, Button } from "@chakra-ui/react";
import type { UpdateInfoFormProps } from "../types";
import { LabelInput } from "./label-input.component";

export const UpdateInfoForm = ({
  errors,
  hasValues,
  user,
  isPending,
  setValue,
  onSubmit,
}: UpdateInfoFormProps) => {
  return (
    <Card.Body>
      <Stack gap={4}>
        <form onSubmit={onSubmit}>
          <LabelInput
            defaultValue={user.name}
            errors={errors}
            setValue={setValue}
            type="name"
            label="Nome"
          />
          <LabelInput
            defaultValue={user.email}
            errors={errors}
            setValue={setValue}
            type="email"
            label="Email"
          />
          {hasValues && (
            <Button
              loading={isPending}
              mt={5}
              type="submit"
              backgroundColor="primary"
              color="textPrimary"
            >
              Atualizar
            </Button>
          )}
        </form>
      </Stack>
    </Card.Body>
  );
};
