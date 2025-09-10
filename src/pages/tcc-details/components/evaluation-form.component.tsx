import { Box, Button, Field, Heading, Textarea } from "@chakra-ui/react";
import type { EvaluationFormProps } from "../types";
import { LabelInput } from "./label-input.component";
import { Controller } from "react-hook-form";

export const EvaluationForm = ({
  errors,
  isSubmittingEvaluation,
  thereIsEvaluationData,
  register,
  handleSubmit,
  onSubmitEvaluation,
  evaluationId,
  deliveryId,
  control,
}: EvaluationFormProps) => {
  return (
    <Box mt="30px">
      <Box>
        <Heading size="lg" color="textPrimary" mb="10px">
          Avaliação
        </Heading>
      </Box>
      <Box
        as="form"
        gap={6}
        display="flex"
        flexDirection="column"
        onSubmit={handleSubmit((data) =>
          onSubmitEvaluation(
            data,
            deliveryId,
            thereIsEvaluationData,
            evaluationId
          )
        )}
      >
        <LabelInput
          errors={errors}
          id="introduction"
          register={register}
          control={control}
          labelTitle="Introdução"
          labelDescription="Justificativa da escolha, relevância do tema e definição clara do problema."
          placeholder="Nota (0 a 2)"
        />
        <LabelInput
          errors={errors}
          id="goals"
          register={register}
          control={control}
          labelTitle="Definição dos Objetivos"
          labelDescription="Adequação dos objetivos frente ao problema proposto."
          placeholder="Nota (0 a 1)"
        />
        <LabelInput
          errors={errors}
          id="bibliographyRevision"
          labelTitle="Revisão Bibliográfica"
          labelDescription="Fundamentação do tema com fontes, citações e
              atendimentos às normas da UNISC (normas ainda não
              precisam ser atendidas na Proposta). Redação com clareza,
              terminologia técnica, conceitos científicos, ortografia e
              concordância. Bem como, abordagem sequencial lógica, equilibrada e ordenada.
            Revisão com abrangência sobre o problema investigativo."
          register={register}
          control={control}
          placeholder="Nota (0 a 3)"
        />
        <LabelInput
          errors={errors}
          id="methodology"
          register={register}
          control={control}
          labelTitle="Metodologia"
          labelDescription="Procedimentos adequados e bem definidos. Coerência dos objetivos, metodologia e tipo de instrumentos."
          placeholder="Nota (0 a 4)"
        />
        <LabelInput
          errors={errors}
          id="total"
          register={register}
          control={control}
          labelTitle="Resumo das Notas"
          labelDescription="Adequação dos objetivos frente ao problema proposto."
          placeholder="Nota total (0 a 10)"
        />
        <Field.Root>
          <Field.Label fontSize="medium" mb={3} htmlFor="comments">
            Comentários (opcional)
          </Field.Label>
          <Controller 
            control={control}
            name="comments"
            render={({ field }) => (
              <Textarea
                minH="80px"
                placeholder="Comentários..."
                {...field}
              />
            )}
          />
        </Field.Root>
        <Button
          variant="subtle"
          loading={isSubmittingEvaluation}
          type="submit"
          size="lg"
          width="full"
          mt={4}
        >
          {thereIsEvaluationData ? "Atualizar Avaliação" : "Enviar Avaliação"}
        </Button>
      </Box>
    </Box>
  );
};
