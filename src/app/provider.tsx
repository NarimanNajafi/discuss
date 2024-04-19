'use client'

import { NextUIProvider } from "@nextui-org/react";
import { ProviderProps } from "react";

interface providerProps {
    children: React.ReactNode
}

export default function Provider({ children }: providerProps) {
    return <NextUIProvider>{children}</NextUIProvider>
}