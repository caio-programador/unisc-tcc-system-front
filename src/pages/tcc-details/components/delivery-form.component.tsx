import {
  Box,
  Button,
  Card,
  Field,
  Input,
  Text,
  VStack,
  HStack,
  Badge,
  Separator,
} from "@chakra-ui/react";
import { FaRegTrashAlt } from "react-icons/fa";
import type { DeliveryFormProps } from "../types";
import { MdDownload } from "react-icons/md";
import { ChangeAdmissibility } from "./change-admissibility.component";
import { formatDate, formatDateTime } from "../../../utils/format-date";
import { useScreenSize } from "../../../hooks/use-screen-size";
import { truncate } from "../../../utils/truncate";

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
  currentAdmissibility,
  onChangeAdmissibility,
  isPendingChangeAdmissibility,
  isAdvisor,
  shouldShowDeliveryForm,
  shouldShowChangeAdmissibility,
  shouldShowDonwnloadFileButton,
  tccData,
}: DeliveryFormProps) => {
  const {
    formState: { errors },
    handleSubmit,
    setValue,
  } = deliveryForm;

  const { isMobile } = useScreenSize();


  return (
    <Card.Root
      bg="transparent"
      border="2px solid"
      borderColor="textPrimary"
      borderRadius="lg"
      width="100%"
    >
      <Card.Header>
        {tccData && (
          <>
            <Box
              mb={4}
              p={3}
              bg="gray.50"
              borderRadius="md"
              border="1px solid"
              borderColor="gray.200"
            >
              <Text fontSize="sm" fontWeight="semibold" color="gray.700" mb={2}>
                📅 Informações de Prazos
              </Text>
              <HStack gap={6} flexWrap="wrap">
                <Box>
                  <Text fontSize="xs" color="gray.500">
                    Prazo da Proposta:
                  </Text>
                  <Text fontSize="sm" fontWeight="medium">
                    {formatDate(tccData.proposalDeliveryDate)}
                  </Text>
                </Box>
                <Box>
                  <Text fontSize="xs" color="gray.500">
                    Prazo do TCC:
                  </Text>
                  <Text fontSize="sm" fontWeight="medium">
                    {formatDate(tccData.tccDeliveryDate)}
                  </Text>
                </Box>
              </HStack>
            </Box>

            {deliveryData && (
              <>
                <Box
                  mb={4}
                  p={3}
                  bg="blue.50"
                  borderRadius="md"
                  border="1px solid"
                  borderColor="blue.200"
                >
                  <Text
                    fontSize="sm"
                    fontWeight="semibold"
                    color="blue.700"
                    mb={2}
                  >
                    📤 Última Entrega
                  </Text>
                  <HStack justify="space-between" flexWrap="wrap">
                    <VStack align="start" gap={1}>
                      <Text fontSize="xs" color="blue.600">
                        Tipo:{" "}
                        {deliveryData.deliveryType === "PROPOSTA" && "Proposta"}
                        {deliveryData.deliveryType === "TC" && "TCC Final"}
                        {deliveryData.deliveryType ===
                          "REELABORACAO_PROPOSTA" && "Reelaboração da Proposta"}
                        {deliveryData.deliveryType === "REELABORACAO_TC" &&
                          "Reelaboração do TCC"}
                      </Text>
                      <Text fontSize="xs" color="blue.600">
                        Enviado em: {formatDateTime(deliveryData.updatedAt)}
                      </Text>
                      {deliveryData.quantityEvaluations > 0 && (
                        <Text fontSize="xs" color="blue.600">
                          Avaliações: {deliveryData.quantityEvaluations}/3 •
                          Média: {deliveryData.averageScore.toFixed(1)}
                        </Text>
                      )}
                    </VStack>
                    <Badge
                      colorScheme={
                        deliveryData.deliveryStatus === "APROVADO"
                          ? "green"
                          : deliveryData.deliveryStatus === "REPROVADO"
                          ? "red"
                          : deliveryData.deliveryStatus ===
                            "AGUARDANDO_AVALIACAO"
                          ? "yellow"
                          : "gray"
                      }
                      variant="subtle"
                    >
                      {deliveryData.deliveryStatus === "APROVADO" && "Aprovado"}
                      {deliveryData.deliveryStatus === "REPROVADO" &&
                        "Reprovado"}
                      {deliveryData.deliveryStatus === "AGUARDANDO_AVALIACAO" &&
                        "Aguardando Avaliação"}
                      {deliveryData.deliveryStatus ===
                        "REELABORACAO_REPROVADA" && "Reelaboração Reprovada"}
                    </Badge>
                  </HStack>
                </Box>
                <Separator mb={4} />
              </>
            )}
          </>
        )}

        {shouldShowChangeAdmissibility ? (
          isAdvisor ? (
            <ChangeAdmissibility
              currentAdmissibility={currentAdmissibility}
              onChangeAdmissibility={onChangeAdmissibility}
              isPendingChangeAdmissibility={isPendingChangeAdmissibility}
            />
          ) : (
            <Text
              color="background"
              fontSize="md"
              p={3}
              background="textPrimary"
              width="fit-content"
              borderRadius={12}
            >
              Admissibilidade:{" "}
              {currentAdmissibility === "APPROVED"
                ? "Aprovado"
                : currentAdmissibility === "PENDING"
                ? "Pendente"
                : "Reprovado"}
            </Text>
          )
        ) : null}
        <Text color="textPrimary" fontSize="sm" mt={8}>
          {!disabledSomeAssets ? descriptionText : "Arquivos do TCC"}
        </Text>
      </Card.Header>
      <Card.Body>
        {shouldShowDeliveryForm && (
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
                          fontSize={isMobile ? "xs" : "sm"}
                          fontWeight="medium"
                        >
                          {truncate(selectedFileName)}
                        </Text>
                        {!disabledSomeAssets && (
                          <Button
                            className="remove-file-button"
                            onClick={onRemoveFile}
                            variant="ghost"
                            size="sm"
                            color="textPrimary"
                            position="absolute"
                            right={4}
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
              {Boolean(deliveryData?.bucketFileKey) &&
                shouldShowDonwnloadFileButton && (
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
        )}
      </Card.Body>
    </Card.Root>
  );
};
