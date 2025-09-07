import {
  Box,
  Button,
  Card,
  Field,
  Input,
  Text,
  VStack,
} from "@chakra-ui/react";
import { FaRegTrashAlt } from "react-icons/fa";
import type { DeliveryFormProps } from "../types";
import { MdDownload } from "react-icons/md";

export const DeliveryForm = ({
  onSubmit,
  isLoading = false,
  selectedFileName,
  onRemoveFile,
  onFileChange,
  descriptionText,
  buttonText,
  disabledSomeAssets,
  deliveryData,
  deliveryType,
  deliveryForm,
  defaultTitle,
  onDownloadFile,
}: DeliveryFormProps) => {
  const {
    formState: { errors },
    handleSubmit,
    setValue,
  } = deliveryForm;

  return (
    <Card.Root
      bg="transparent"
      border="2px solid"
      borderColor="textPrimary"
      borderRadius="lg"
    >
      <Card.Header>
        <Text color="textPrimary" fontSize="sm" mt={2}>
          {!disabledSomeAssets ? descriptionText : "Arquivos do TCC"}
        </Text>
      </Card.Header>
      <Card.Body>
        <Box
          as="form"
          onSubmit={handleSubmit((data) =>
            onSubmit(data, deliveryType, deliveryData?.id)
          )}
        >
          <VStack gap={4} align="stretch">
            <Field.Root invalid={Boolean(errors.title)}>
              <Field.Label htmlFor="title" color="textPrimary">
                Título do TCC
              </Field.Label>
              <Input
                disabled={disabledSomeAssets}
                id="title"
                defaultValue={defaultTitle}
                placeholder="Digite o título do seu TCC"
                onChange={(e) => setValue("title", e.target.value)}
                color="textPrimary"
              />
              {errors.title && (
                <Field.ErrorText>{errors.title.message}</Field.ErrorText>
              )}
            </Field.Root>

            <Field.Root invalid={Boolean(errors.file)}>
              <Field.Label htmlFor="file" color="textPrimary">
                Arquivo
              </Field.Label>
              <Box position="relative" width="100%" height="100px">
                <Input
                  disabled={disabledSomeAssets}
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
                      {!disabledSomeAssets && (
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
                      )}
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
                  {errors.file.message?.toString()}
                </Field.ErrorText>
              )}
            </Field.Root>
            {Boolean(deliveryData?.bucketFileKey) && (
              <Button
                type="button"
                className="download-file-button"
                onClick={() =>
                  onDownloadFile(deliveryData?.bucketFileKey || "")
                }
                _hover={{ background: "#125a54 !important" }}
              >
                Baixar <MdDownload />
              </Button>
            )}
            {Boolean(buttonText) && !disabledSomeAssets && (
              <Button
                type="submit"
                loading={isLoading}
                loadingText="Publicando..."
                bg="textPrimary"
                color="background"
              >
                {buttonText}
              </Button>
            )}
          </VStack>
        </Box>
      </Card.Body>
    </Card.Root>
  );
};
