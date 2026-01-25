import { ReactNode, HTMLAttributes } from 'react'

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode
  className?: string
}

/**
 * Card - Content container with elevation and borders
 *
 * Provides:
 * - Rounded corners (rounded-xl)
 * - White background with dark mode support
 * - Border and subtle shadow
 * - Internal padding
 */
export function Card({ children, className = '', ...props }: CardProps) {
  return (
    <div className={`rounded-xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 shadow-sm p-6 ${className}`} {...props}>
      {children}
    </div>
  )
}
