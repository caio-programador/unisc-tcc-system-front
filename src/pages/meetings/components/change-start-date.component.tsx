import { Box, Select, createListCollection } from "@chakra-ui/react";
import { useCallback, useMemo } from "react";
import type { ChangeStartDateProps } from "../types";

export const ChangeStartDate = ({
  handleChangeStartDate,
}: ChangeStartDateProps) => {
  const optionsCollection = useMemo(() => {
    return createListCollection({
      items: [
        {
          value: "next",
          label: "Próximas",
        },
        {
          value: "all",
          label: "Todas",
        },
      ],
    });
  }, []);

  const handleChange = useCallback(
    (value: string) => {
      if (value === "next") {
        handleChangeStartDate(new Date());
      } else {
        handleChangeStartDate(undefined);
      }
    },
    [handleChangeStartDate]
  );

  return (
    <Box mt={4} maxW="200px">
      <Select.Root
        collection={optionsCollection}
        size="md"
        defaultValue={["next"]}
        onValueChange={(details) => handleChange(details.value[0])}
        positioning={{ sameWidth: true, placement: "bottom" }}
      >
        <Select.Control>
          <Select.Trigger>
            <Select.ValueText opacity={1} placeholder="Selecione o período" />
          </Select.Trigger>

          <Select.IndicatorGroup>
            <Select.Indicator />
          </Select.IndicatorGroup>
        </Select.Control>
        <Select.Positioner>
          <Select.Content>
            {optionsCollection.items.map((option) => (
              <Select.Item key={option.value} item={option.value}>
                <Select.ItemText>{option.label}</Select.ItemText>
              </Select.Item>
            ))}
          </Select.Content>
        </Select.Positioner>
      </Select.Root>
    </Box>
  );
};
