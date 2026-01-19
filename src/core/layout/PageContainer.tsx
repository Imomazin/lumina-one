import { ReactNode } from 'react'

interface PageContainerProps {
  children: ReactNode
  maxWidth?: 'default' | 'wide' | 'full'
}

/**
 * PageContainer
 *
 * Standard page container for all module pages.
 * Provides consistent max-width and padding.
 */
export default function PageContainer({ children, maxWidth = 'default' }: PageContainerProps) {
  const widthClass = {
    default: 'max-w-7xl',  // 1280px - most pages
    wide: 'max-w-[1440px]', // 1440px - dashboards
    full: 'max-w-full',     // Full width - special cases
  }[maxWidth]

  return (
    <div className={`${widthClass} mx-auto px-6 py-8`}>
      {children}
    </div>
  )
}
