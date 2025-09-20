import {
  Dialog,
  Button,
  Portal,
  Box,
  Field,
  Input,
  CloseButton,
  Select,
  createListCollection,
} from "@chakra-ui/react";
import { IoAdd } from "react-icons/io5";
import type { NewMeetingModalProps } from "../types";
import { Controller } from "react-hook-form";
import { useCallback, useMemo } from "react";

export const NewMeetingModal = ({
  control,
  errors,
  students,
  isPendingCreatingMeeting,
  handleSubmit,
  register,
}: NewMeetingModalProps) => {
  const getValidDateValue = useCallback(
    (value: string, onChange: (...event: unknown[]) => void) => {
      if (value) {
        const date = new Date(value);
        if (!isNaN(date.getTime())) {
          onChange(date);
        }
      } else {
        onChange(undefined);
      }
    },
    []
  );

  const formatDateTimeLocal = useCallback((date: Date | undefined) => {
    if (!date || !(date instanceof Date) || isNaN(date.getTime())) {
      return "";
    }
    const localDate = new Date(
      date.getTime() - date.getTimezoneOffset() * 60000
    );
    return localDate.toISOString().slice(0, 16);
  }, []);

  const studentsCollection = useMemo(() => {
    return createListCollection({
      items:
        students?.map((student) => ({
          value: String(student.id),
          label: student.name,
        })) || [],
    });
  }, [students]);

  return (
    <Dialog.Root size="xl" motionPreset="slide-in-bottom">
      <Dialog.Trigger asChild>
        <Button
          ml="auto"
          background="textPrimary"
          type="button"
          color="background"
        >
          <IoAdd /> Nova Reunião
        </Button>
      </Dialog.Trigger>
      <Portal>
        <Box as="form" onSubmit={handleSubmit} className="meeting-form">
          <Dialog.Backdrop />
          <Dialog.Positioner>
            <Dialog.Content mx={4}>
              <Dialog.Header>
                <Dialog.Title color="background">Nova reunião</Dialog.Title>
              </Dialog.Header>
              <Dialog.Body>
                <Field.Root mb={4} invalid={!!errors.subject}>
                  <Field.Label color="background" htmlFor="subject">
                    Assunto
                  </Field.Label>
                  <Input
                    className="meeting-input"
                    color="background"
                    outline="0"
                    id="subject"
                    placeholder="Assunto da reunião"
                    {...register("subject")}
                  />
                  <Field.ErrorText>
                    {errors.subject?.message ?? ""}
                  </Field.ErrorText>
                </Field.Root>
                <Field.Root mb={4} invalid={!!errors.link}>
                  <Field.Label color="background" htmlFor="link">
                    Link da reunião
                  </Field.Label>
                  <Input
                    className="meeting-input"
                    color="background"
                    outline="0"
                    id="link"
                    placeholder="Link da reunião"
                    {...register("link")}
                  />
                  <Field.ErrorText>
                    {errors.link?.message ?? ""}
                  </Field.ErrorText>
                </Field.Root>
                <Field.Root mb={4} invalid={!!errors.meetingDate}>
                  <Field.Label color="background" htmlFor="meetingDate">
                    Data da reunião
                  </Field.Label>
                  <Controller
                    control={control}
                    name="meetingDate"
                    render={({ field: { onChange, onBlur, value } }) => (
                      <Input
                        className="meeting-input"
                        color="background"
                        outline="0"
                        type="datetime-local"
                        onChange={(e) =>
                          getValidDateValue(e.target.value, onChange)
                        }
                        onBlur={onBlur}
                        value={formatDateTimeLocal(value)}
                      />
                    )}
                  />
                  <Field.ErrorText>
                    {errors.meetingDate?.message ?? ""}
                  </Field.ErrorText>
                </Field.Root>
                <Field.Root mb={4} invalid={!!errors.student}>
                  <Field.Label color="background" htmlFor="student">
                    Aluno
                  </Field.Label>
                  <Controller
                    control={control}
                    name="student"
                    render={({ field: { onChange, onBlur, value } }) => (
                      <Select.Root
                        collection={studentsCollection}
                        size="md"
                        onValueChange={(details) => onChange(details.value[0])}
                        onBlur={onBlur}
                        value={value ? [value] : []}
                        positioning={{ sameWidth: true, placement: "bottom" }}
                      >
                        <Select.Control>
                          <Select.Trigger>
                            <Select.ValueText
                              opacity={1}
                              className={
                                value
                                  ? "selection-meeting-active"
                                  : "selection-meeting-not-active"
                              }
                              placeholder="Selecione o aluno"
                            />
                          </Select.Trigger>

                          <Select.IndicatorGroup>
                            <Select.Indicator />
                          </Select.IndicatorGroup>
                        </Select.Control>
                        <Select.Positioner>
                          <Select.Content>
                            {studentsCollection.items.map((option) => (
                              <Select.Item
                                key={option.value}
                                item={option.value}
                              >
                                <Select.ItemText>
                                  {option.label}
                                </Select.ItemText>
                              </Select.Item>
                            ))}
                          </Select.Content>
                        </Select.Positioner>
                      </Select.Root>
                    )}
                  />
                  {errors.student && (
                    <Field.ErrorText>{errors.student.message}</Field.ErrorText>
                  )}
                </Field.Root>
              </Dialog.Body>
              <Dialog.Footer>
                <Dialog.ActionTrigger asChild>
                  <Button type="button" variant="outline">
                    Cancelar
                  </Button>
                </Dialog.ActionTrigger>
                <Button
                  type="submit"
                  background="background"
                  loading={isPendingCreatingMeeting}
                >
                  Criar reunião
                </Button>
              </Dialog.Footer>
              <Dialog.CloseTrigger asChild>
                <CloseButton size="sm" id="close-button"/>
              </Dialog.CloseTrigger>
            </Dialog.Content>
          </Dialog.Positioner>
        </Box>
      </Portal>
    </Dialog.Root>
  );
};
