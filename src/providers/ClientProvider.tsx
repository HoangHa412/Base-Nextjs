'use client'

import { ReactNode } from "react"
import { getQueryClient } from '@/app/query-client'
import { QueryClientProvider } from '@tanstack/react-query'

interface ConfigProviderProps {
    children: ReactNode
}

export default function ClientProvider({ children }: ConfigProviderProps) {
    const queryClient = getQueryClient();
    return (
        <QueryClientProvider client={queryClient}>
            {children}
        </QueryClientProvider>
    )
}