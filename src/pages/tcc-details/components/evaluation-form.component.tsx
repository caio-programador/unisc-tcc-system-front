import { Box, Button, Field, Heading, Textarea } from "@chakra-ui/react";
import type { EvaluationFormProps } from "../types";
import { LabelInput } from "./label-input.component";

export const EvaluationForm = ({
  errors,
  onSubmit,
  register,
}: EvaluationFormProps) => {
  return (
    <Box mt="30px">
      <Box>
        <Heading size="lg" color="textPrimary" mb="10px">
          Avaliação da Proposta
        </Heading>
      </Box>
      <Box
        as="form"
        gap={6}
        display="flex"
        flexDirection="column"
        onSubmit={onSubmit}
      >
        <LabelInput
          errors={errors}
          id="introScore"
          register={register}
          labelTitle="Introdução"
          labelDescription="Justificativa da escolha, relevância do tema e definição clara do problema."
          type="number"
          placeholder="Nota (0 a 2)"
        />
        <LabelInput
          errors={errors}
          id="goalsScore"
          register={register}
          labelTitle="Definição dos Objetivos"
          labelDescription="Adequação dos objetivos frente ao problema proposto."
          type="number"
          placeholder="Nota (0 a 1)"
        />
        <LabelInput
          errors={errors}
          id="references"
          register={register}
          labelTitle="Revisão Bibliográfica"
          labelDescription="Fundamentação do tema com fontes, citações e
              atendimentos às normas da UNISC (normas ainda não
              precisam ser atendidas na Proposta). Redação com clareza,
              terminologia técnica, conceitos científicos, ortografia e
              concordância."
          type="number"
          placeholder="Nota (0 a 2)"
        />
        <LabelInput
          errors={errors}
          id="sequenceLogic"
          register={register}
          labelDescription="Abordagem sequencial lógica, equilibrada e ordenada.
            Revisão com abrangência sobre o problema investigativo."
          type="number"
          placeholder="Nota (0 a 1)"
        />
        <LabelInput
          errors={errors}
          id="procedures"
          register={register}
          labelTitle="Orientação Metodológica"
          labelDescription="Procedimentos adequados e bem definidos"
          type="number"
          placeholder="Nota (0 a 2)"
        />
        <LabelInput
          errors={errors}
          id="methodology"
          register={register}
          labelDescription="Coerência dos objetivos, metodologia e tipo de instrumentos."
          type="number"
          placeholder="Nota (0 a 2)"
        />
        <LabelInput
          errors={errors}
          id="total"
          register={register}
          labelTitle="Resumo das Notas"
          labelDescription="Adequação dos objetivos frente ao problema proposto."
          type="number"
          placeholder="Nota total (0 a 10)"
        />
        <Field.Root>
          <Field.Label fontSize="medium" mb={3} htmlFor="comments">
            Comentários (opcional)
          </Field.Label>
          <Textarea minH="80px" placeholder="Comentários..." {...register("comments")} />
        </Field.Root>
        {}
        <Button variant="subtle" type="submit" size="lg" width="full" mt={4}>
          Enviar Avaliação
        </Button>
      </Box>
    </Box>
  );
};
