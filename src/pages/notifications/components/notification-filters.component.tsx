import { 
  HStack, 
  Select, 
  createListCollection,
  Switch,
  Text,
  Box 
} from "@chakra-ui/react";
import type { NotificationFiltersProps } from "../types";
import { DateFilter } from "./date-filter.component";

export const NotificationFilters = ({
  selectedType,
  onTypeChange,
  showOnlyUnread,
  onToggleUnread,
  control,
}: NotificationFiltersProps) => {
  const typeOptions = createListCollection({
    items: [
      { value: "all", label: "Todos os tipos" },
      { value: "ATRASO_ENTREGA", label: "Atraso de entrega" },
      { value: "ATRASO_AVALIACAO", label: "Atraso de avaliação" },
      { value: "NOVO_PARECER", label: "Novo parecer" },
      { value: "NOVA_REUNIAO", label: "Nova reunião" },
      { value: "AVALIACAO_DISPONIVEL", label: "Avaliação disponível" },
      { value: "REUNIAO_CANCELADA", label: "Reunião cancelada" },
      { value: "NOVA_ENTREGA", label: "Nova entrega" },
    ],
  });

  return (
    <HStack gap={6} p={4} borderRadius="md" justify="space-between">
      <Box flex={1}>
        <Text fontSize="sm" fontWeight="medium" mb={2}>
          Filtrar por tipo
        </Text>
        <Select.Root
          collection={typeOptions}
          size="sm"
          value={[selectedType]}
          onValueChange={(details) => onTypeChange(details.value[0])}
        >
          <Select.Control>
            <Select.Trigger>
              <Select.ValueText placeholder="Selecione um tipo" />
            </Select.Trigger>
            <Select.IndicatorGroup>
              <Select.Indicator />
            </Select.IndicatorGroup>
          </Select.Control>
          <Select.Positioner>
            <Select.Content>
              {typeOptions.items.map((option) => (
                <Select.Item key={option.value} item={option.value}>
                  <Select.ItemText>{option.label}</Select.ItemText>
                </Select.Item>
              ))}
            </Select.Content>
          </Select.Positioner>
        </Select.Root>
      </Box>

      <Box>
        <DateFilter control={control} id="startDate" label="Data inicial:"/>
      </Box>

      
      <Box>
        <DateFilter control={control} id="endDate" label="Data final:"/>
      </Box>

      <Box>
        <Text fontSize="sm" fontWeight="medium" mb={2}>
          Mostrar apenas
        </Text>
        <HStack gap={2}>
          <Switch.Root
            checked={showOnlyUnread}
            onCheckedChange={(details) => onToggleUnread(details.checked)}
            size="sm"
          >
            <Switch.HiddenInput />
            <Switch.Control>
              <Switch.Thumb />
            </Switch.Control>
          </Switch.Root>
          <Text fontSize="sm">Não lidas</Text>
        </HStack>
      </Box>
    </HStack>
  );
};