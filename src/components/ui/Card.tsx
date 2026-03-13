import { ReactNode, HTMLAttributes } from 'react'

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode
  className?: string
  padding?: string
}

/**
 * Card - Content container with elevation and borders
 *
 * Provides:
 * - Rounded corners (rounded-xl)
 * - White background with dark mode support
 * - Border and subtle shadow
 * - Internal padding (customizable via padding prop)
 */
export function Card({ children, className = '', padding = 'p-6', ...props }: CardProps) {
  return (
    <div className={`rounded-xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 shadow-sm ${padding} ${className}`} {...props}>
      {children}
    </div>
  )
}
