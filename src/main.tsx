import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from './config';
import { AppRouterProvider } from './routes';
import { Provider } from './components/ui/provider';
import { ThemeProvider } from 'next-themes';


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <Provider>
        <ThemeProvider enableSystem={true} enableColorScheme={true}>
          <AppRouterProvider />
        </ThemeProvider>
      </Provider>
    </QueryClientProvider>
  </StrictMode>,
)
