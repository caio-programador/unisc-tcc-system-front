import {
  Box,
  Heading,
  Text,
  Button,
  VStack,
  Center,
  Container,
  Icon,
} from "@chakra-ui/react";
import { FiAlertTriangle, FiHome, FiArrowLeft } from "react-icons/fi";

interface ErrorScreenProps {
  onTryAgain: () => void;
  onGoHome: () => void;
}

export const ErrorScreen = ({ onTryAgain, onGoHome }: ErrorScreenProps) => {
  return (
    <Container maxW="container.md" py={20}>
      <Center>
        <VStack gap={8} textAlign="center">
          <Icon as={FiAlertTriangle} w={20} h={20} color="red.500" />
          
          <Heading size="xl" fontWeight="bold" color="white">
            Algo deu errado por aqui
          </Heading>
          
          <Text fontSize="lg" opacity={0.8} color="white" maxW="md">
            Tente novamente agora ou mais tarde.
          </Text>
          
          <VStack gap={4} w="full" maxW="sm">
            <Button
              backgroundColor={"textPrimary"} 
              color={"background"} 
              border={"none"}
              outline={"none"}
              boxShadow={"none"}
              _hover={{transform: "scale(1.03)", backgroundColor: "textPrimaryHover"}}
              size="lg"
              w="full"
              onClick={onTryAgain}
            >
              <FiArrowLeft />
              Tentar Novamente
            </Button>
            
            <Button
              backgroundColor={"background"} 
              color={"textPrimary"} 
              _hover={{transform: "scale(1.03)", backgroundColor: "textPrimaryHover"}}
              size="lg"
              w="full"
              border={"1px solid"}
              borderColor={"textPrimary"}
              onClick={onGoHome}
            >
              <FiHome />
              Voltar para Home
            </Button>
          </VStack>
        </VStack>
      </Center>
    </Container>
  );
};
