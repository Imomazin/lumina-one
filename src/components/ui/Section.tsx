import { ReactNode } from 'react'

interface SectionProps {
  title?: string
  description?: string
  children: ReactNode
}

/**
 * Section - Semantic section container for dashboard content
 *
 * Provides:
 * - Optional title and description
 * - Consistent spacing between content blocks
 * - Clear visual hierarchy
 */
export function Section({ title, description, children }: SectionProps) {
  return (
    <section className="space-y-4">
      {(title || description) && (
        <div className="space-y-1">
          {title && (
            <h2 className="text-xl font-bold text-gray-900 dark:text-white">
              {title}
            </h2>
          )}
          {description && (
            <p className="text-sm text-gray-600 dark:text-gray-400">
              {description}
            </p>
          )}
        </div>
      )}
      <div className="space-y-4">
        {children}
      </div>
    </section>
  )
}
