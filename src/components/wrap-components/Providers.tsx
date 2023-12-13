import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import React from 'react';

interface ProvidersProps {
  children: React.ReactNode;
}

const Providers = ({ children }: ProvidersProps) => {
  const queryClient = new QueryClient({
    defaultOptions: {},
  });

  return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>;
};

export default Providers;
