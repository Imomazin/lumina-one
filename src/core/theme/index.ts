/**
 * Core Theme Layer
 *
 * Centralized theme management for Lumina One.
 * Tailwind v4 with class-based dark mode.
 */

export type Theme = 'light' | 'dark' | 'system'

export { ThemeProvider, useTheme } from './ThemeProvider'

export function getStoredTheme(): Theme {
  if (typeof window === 'undefined') return 'dark'
  return (localStorage.getItem('theme') as Theme) || 'dark'
}

export function setStoredTheme(theme: Theme): void {
  if (typeof window === 'undefined') return
  localStorage.setItem('theme', theme)
}

export function applyTheme(theme: Theme): void {
  if (typeof window === 'undefined') return

  const root = document.documentElement

  if (theme === 'system') {
    const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches
      ? 'dark'
      : 'light'
    root.classList.toggle('dark', systemTheme === 'dark')
  } else {
    root.classList.toggle('dark', theme === 'dark')
  }
}

// Initialize theme (called in index.html before React loads)
export function initializeTheme(): void {
  const theme = getStoredTheme()
  applyTheme(theme)
}
