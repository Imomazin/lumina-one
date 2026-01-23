import { ReactNode } from 'react'
import { LucideIcon } from 'lucide-react'
import { Button } from './Button'

export interface EmptyStateProps {
  icon?: LucideIcon
  title: string
  description: string
  action?: {
    label: string
    onClick: () => void
  }
  children?: ReactNode
}

export function EmptyState({ icon: Icon, title, description, action, children }: EmptyStateProps) {
  return (
    <div className="flex flex-col items-center justify-center py-16 px-4 text-center">
      {Icon && (
        <div className="mb-4">
          <div className="w-16 h-16 rounded-2xl bg-gray-100 dark:bg-gray-800 flex items-center justify-center">
            <Icon className="w-8 h-8 text-gray-400 dark:text-gray-600" />
          </div>
        </div>
      )}

      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{title}</h3>

      <p className="text-gray-600 dark:text-gray-400 max-w-md mb-6">{description}</p>

      {action && (
        <Button variant="primary" size="md" onClick={action.onClick}>
          {action.label}
        </Button>
      )}

      {children && <div className="mt-6">{children}</div>}
    </div>
  )
}
