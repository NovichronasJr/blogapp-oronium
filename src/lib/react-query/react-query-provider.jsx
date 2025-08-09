// src/lib/react-query-provider.tsx
'use client';

import { QueryClientProvider, HydrationBoundary } from '@tanstack/react-query';
import { queryClient } from './queryClient';

export const ReactQueryProvider = ({ children, dehydratedState }) => {
  return (
    <QueryClientProvider client={queryClient}>
      <HydrationBoundary state={dehydratedState}>
        {children}
      </HydrationBoundary>
    </QueryClientProvider>
  );
};

