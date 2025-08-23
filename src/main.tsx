import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from './config/query-client';
import { AppRouterProvider } from './routes';
import { ChakraProvider } from '@chakra-ui/react';
import system from './config/theme';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <ChakraProvider value={system}>
        <AppRouterProvider />
      </ChakraProvider>
    </QueryClientProvider>
  </StrictMode>,
)