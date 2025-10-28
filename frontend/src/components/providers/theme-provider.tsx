"use client"

import { createContext, useContext, useEffect, useState } from "react"

type Theme = "dark" | "light" | "system"

type ThemeProviderProps = {
  children: React.ReactNode
  defaultTheme?: Theme
  storageKey?: string
}

type ThemeProviderState = {
  theme: Theme
  setTheme: (theme: Theme) => void
}

const initialState: ThemeProviderState = {
  theme: "system",
  setTheme: () => null,
}

const ThemeProviderContext = createContext<ThemeProviderState>(initialState)

export function ThemeProvider({
  children,
  defaultTheme = "system",
  storageKey = "vite-ui-theme",
  ...props
}: ThemeProviderProps) {
  const [theme, setTheme] = useState<Theme>(defaultTheme)

  useEffect(() => {
    const storedTheme = localStorage.getItem(storageKey) as Theme
    if (storedTheme) {
      setTheme(storedTheme)
    }
  }, [])

  useEffect(() => {
    const root = window.document.documentElement
    
    const applyTheme = (newTheme: Theme) => {
      root.classList.remove("light", "dark")
      
      const effectiveTheme = newTheme === "system"
        ? (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light")
        : newTheme
      
      root.classList.add(effectiveTheme)
      root.style.setProperty("--theme-background", effectiveTheme === "dark" ? "0 0% 0%" : "0 0% 100%")
      root.style.setProperty("--theme-foreground", effectiveTheme === "dark" ? "0 0% 100%" : "0 0% 0%")
      root.style.setProperty("--theme-accent", "15 100% 50%") // Red-500
      root.style.setProperty("--theme-accent-2", "25 100% 50%") // Orange-500
    }
    
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)")
    const handleSystemThemeChange = () => {
      if (theme === "system") {
        applyTheme("system")
      }
    }
    
    mediaQuery.addEventListener("change", handleSystemThemeChange)
    applyTheme(theme)
    
    return () => mediaQuery.removeEventListener("change", handleSystemThemeChange)
  }, [theme])

  const value = {
    theme,
    setTheme: (theme: Theme) => {
      localStorage.setItem(storageKey, theme)
      setTheme(theme)
    },
  }

  return (
    <ThemeProviderContext.Provider {...props} value={value}>
      {children}
    </ThemeProviderContext.Provider>
  )
}

export const useTheme = () => {
  const context = useContext(ThemeProviderContext)

  if (context === undefined)
    throw new Error("useTheme must be used within a ThemeProvider")

  return context
}
