"use client"

import * as React from "react"
import { ThemeProvider as NextThemesProvider } from "next-themes"

// You don't need to import ThemeProviderProps, you can directly type the props using React.ComponentProps
export function ThemeProvider({ children, ...props }: React.PropsWithChildren<React.ComponentProps<typeof NextThemesProvider>>) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>
}
