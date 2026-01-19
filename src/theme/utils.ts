/**
 * Theme Utility Functions
 * Helper functions for working with design tokens
 */

import { tokens } from './tokens'

/**
 * Get a color value from the token system
 */
export function getColor(path: string): string {
  const parts = path.split('.')
  let value: any = tokens.colors

  for (const part of parts) {
    value = value?.[part]
  }

  return value || path
}

/**
 * Get spacing value from the token system
 */
export function getSpacing(key: keyof typeof tokens.spacing): string {
  return tokens.spacing[key]
}

/**
 * Generate gradient class names for consistent gradient usage
 */
export const gradients = {
  primary: 'bg-gradient-to-br from-blue-500 via-indigo-600 to-purple-700',
  secondary: 'bg-gradient-to-br from-purple-500 via-indigo-600 to-blue-700',
  success: 'bg-gradient-to-br from-emerald-500 via-green-600 to-lime-700',
  danger: 'bg-gradient-to-br from-red-500 via-rose-600 to-pink-700',
  warning: 'bg-gradient-to-br from-amber-500 via-orange-600 to-yellow-700',
  neutral: 'bg-gradient-to-br from-gray-500 via-slate-600 to-zinc-700',

  // Module-specific gradients
  strategy: 'bg-gradient-to-br from-blue-500 via-cyan-600 to-teal-700',
  risk: 'bg-gradient-to-br from-purple-500 via-indigo-600 to-blue-700',
  finance: 'bg-gradient-to-br from-emerald-500 via-green-600 to-lime-700',

  // Dark variants
  darkHero: 'bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900',
  darkCard: 'bg-gradient-to-br from-gray-800 to-slate-900',
} as const

/**
 * Standard hover effects
 */
export const hoverEffects = {
  scale: 'hover:scale-105 transition-transform duration-200',
  lift: 'hover:-translate-y-1 transition-transform duration-200',
  glow: 'hover:shadow-xl transition-shadow duration-200',
  brightHover: 'hover:bg-opacity-90 transition-opacity duration-200',
} as const

/**
 * Focus ring utilities
 */
export const focusRing = 'focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500'

/**
 * Card styles for consistency
 */
export const cardStyles = {
  base: 'rounded-xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800',
  elevated: 'rounded-xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 shadow-lg',
  interactive: 'rounded-xl bg-white dark:bg-gray-900 border-2 border-gray-200 dark:border-gray-800 hover:border-blue-300 dark:hover:border-blue-700 hover:shadow-lg transition-all',
} as const
