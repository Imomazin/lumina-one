import { ReactNode } from 'react'

interface PageShellProps {
  children: ReactNode
}

/**
 * PageShell - Main container for all dashboard pages
 *
 * Provides:
 * - Max width constraint (max-w-7xl)
 * - Horizontal centering
 * - Consistent padding
 * - Vertical spacing
 */
export function PageShell({ children }: PageShellProps) {
  return (
    <div className="max-w-7xl mx-auto px-6 py-8 space-y-8">
      {children}
    </div>
  )
}
