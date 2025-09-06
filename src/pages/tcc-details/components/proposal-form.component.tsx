import {
  Box,
  Button,
  Card,
  Field,
  Heading,
  Input,
  Text,
  VStack,
} from "@chakra-ui/react";
import { useFormContext } from "react-hook-form";
import type { ProposalFormData } from "../hooks/use-proposal-form/schema";
import { FaRegTrashAlt } from "react-icons/fa";
import type { ProposalFormProps } from "../types";

export const ProposalForm = ({
  onSubmit,
  isLoading = false,
  selectedFileName,
  onFileChange,
  onRemoveFile,
}: ProposalFormProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useFormContext<ProposalFormData>();

  const handleFormSubmit = (data: ProposalFormData) => {
    onSubmit(data);
  };

  return (
    <Card.Root
      bg="transparent"
      border="2px solid"
      borderColor="textPrimary"
      borderRadius="lg"
    >
      <Card.Header>
        <Heading size="md" color="textPrimary">
          Publicar Proposta
        </Heading>
        <Text color="textPrimary" fontSize="sm" mt={2}>
          Preencha os dados abaixo para publicar sua proposta de TCC
        </Text>
      </Card.Header>
      <Card.Body>
        <Box as="form" onSubmit={handleSubmit(handleFormSubmit)}>
          <VStack gap={4} align="stretch">
            <Field.Root invalid={Boolean(errors.title)}>
              <Field.Label htmlFor="title" color="textPrimary">
                Título do TCC
              </Field.Label>
              <Input
                id="title"
                placeholder="Digite o título do seu TCC"
                {...register("title")}
                color="textPrimary"
              />
              {errors.title && (
                <Field.ErrorText>{errors.title.message}</Field.ErrorText>
              )}
            </Field.Root>

            <Field.Root invalid={Boolean(errors.file)}>
              <Field.Label htmlFor="file" color="textPrimary">
                Arquivo da Proposta
              </Field.Label>
              <Box position="relative" width="100%" height="100px">
                <Input
                  id="file"
                  type="file"
                  accept=".pdf,.doc,.docx"
                  onChange={onFileChange}
                  color="textPrimary"
                  position="absolute"
                  opacity={0}
                  width="100%"
                  height="80px"
                  cursor="pointer"
                  zIndex={2}
                />
                <Box
                  as="div"
                  bg="background"
                  border="2px dashed"
                  borderColor={errors.file ? "red.500" : "textPrimary"}
                  borderRadius="md"
                  p={2}
                  textAlign="center"
                  cursor="pointer"
                  width="100%"
                  height="80px"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  position="relative"
                >
                  {selectedFileName ? (
                    <>
                      <Text
                        color="textPrimary"
                        fontSize="sm"
                        fontWeight="medium"
                      >
                        {selectedFileName}
                      </Text>
                      <Button
                        className="remove-file-button"
                        onClick={onRemoveFile}
                        variant="ghost"
                        size="sm"
                        color="textPrimary"
                        position="absolute"
                        right={0}
                        top={4.5}
                        zIndex={3}
                        p={0.5}
                        m={0.5}
                        _hover={{
                          color: "red.500",
                          backgroundColor: "red.500",
                        }}
                        alignItems="center"
                        justifyContent="center"
                      >
                        <FaRegTrashAlt />
                      </Button>
                    </>
                  ) : (
                    <VStack gap={1}>
                      <Text color="textPrimary" fontSize="sm">
                        Clique para selecionar arquivo
                      </Text>
                      <Text color="darkBlue.100" fontSize="xs">
                        PDF, DOC ou DOCX
                      </Text>
                    </VStack>
                  )}
                </Box>
              </Box>
              {errors.file && (
                <Field.ErrorText mt={"-1.4em"} pt={0}>
                  {errors.file.message}
                </Field.ErrorText>
              )}
            </Field.Root>

            <Button
              type="submit"
              loading={isLoading}
              loadingText="Publicando..."
              bg="textPrimary"
              color="background"
              _hover={{ transform: "scale(1.03)" }}
            >
              Publicar Proposta
            </Button>
          </VStack>
        </Box>
      </Card.Body>
    </Card.Root>
  );
};
