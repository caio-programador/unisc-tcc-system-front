import { Box, Heading, Timeline, TimelineConnector, TimelineContent, TimelineTitle, TimelineDescription } from "@chakra-ui/react";

export const QuickSchedule = () => {
    const mockedEvents = [
      { title: "Reunião com orientador", description: "Discussão do cronograma", date: "23/08 - 14h" },
      { title: "Entrega do Capítulo 1", description: "Enviar primeira parte do TCC", date: "30/08 - 23h59" },
      { title: "Apresentação parcial", description: "Apresentar status intermediário", date: "05/09 - 10h" },
    ];
    return (
      <Box>
        <Heading size="md" mb={4}>Agenda Rápida</Heading>
        <Timeline.Root 
            variant="subtle" 
            size="md" 
            colorPalette="blue" 
            maxW="400px" 
            marginTop={8}
        >
          {mockedEvents.map((evt, idx) => (
            <Timeline.Item key={idx} >
              <Timeline.Connector>
                <Timeline.Separator />
                <Timeline.Indicator />
                {idx < mockedEvents.length - 1 && <TimelineConnector />}
              </Timeline.Connector>
              <TimelineContent>
                <TimelineTitle>{evt.title}</TimelineTitle>
                <TimelineDescription color="textWithGray">{evt.date} — {evt.description}</TimelineDescription>
              </TimelineContent>
            </Timeline.Item>
          ))}
            </Timeline.Root>
        </Box>
    )
};