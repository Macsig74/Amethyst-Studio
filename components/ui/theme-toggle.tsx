"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { cn } from "@/lib/utils"

interface ThemeToggleProps {
  className?: string
}

export function ThemeToggle({ className }: ThemeToggleProps) {
  const { theme, setTheme, resolvedTheme } = useTheme()
  const [mounted, setMounted] = React.useState(false)

  // Avoid hydration mismatch
  React.useEffect(() => {
    setMounted(true)
  }, [])

  const isDark = mounted && (theme === "dark" || resolvedTheme === "dark")

  if (!mounted) {
    return (
      <div className={cn("w-16 h-8 p-1 rounded-full bg-zinc-100 dark:bg-zinc-900 border border-border animate-pulse", className)} />
    )
  }

  return (
    <div
      className={cn(
        "flex w-16 h-8 p-1 rounded-full cursor-pointer transition-all duration-300 relative",
        isDark 
          ? "bg-zinc-950 border border-zinc-800" 
          : "bg-white border border-zinc-200",
        className
      )}
      onClick={() => setTheme(isDark ? "light" : "dark")}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          setTheme(isDark ? "light" : "dark")
        }
      }}
    >
      <div className="flex justify-between items-center w-full h-full relative z-10">
        <div className="flex justify-center items-center w-6 h-6 rounded-full shrink-0">
          <Moon 
            className={cn("w-3.5 h-3.5 transition-colors", isDark ? "text-white" : "text-zinc-400")} 
            strokeWidth={2}
          />
        </div>
        <div className="flex justify-center items-center w-6 h-6 rounded-full shrink-0">
          <Sun 
            className={cn("w-3.5 h-3.5 transition-colors", isDark ? "text-zinc-500" : "text-zinc-900")} 
            strokeWidth={2}
          />
        </div>
      </div>
      
      {/* Sliding background circle */}
      <div
        className={cn(
          "absolute top-1 left-1 w-6 h-6 rounded-full transition-transform duration-300 ease-in-out shadow-sm",
          isDark 
            ? "translate-x-0 bg-zinc-800" 
            : "translate-x-8 bg-zinc-100"
        )}
      />
    </div>
  )
}
