import { LucideIcon } from 'lucide-react'
import { ReactNode } from 'react'

interface ModuleCardProps {
  icon: LucideIcon
  title: string
  description: string
  status: 'active' | 'coming-soon'
  children?: ReactNode
}

/**
 * ModuleCard
 *
 * Standard module landing card.
 * Used for module welcome screens and overview cards.
 */
export default function ModuleCard({ icon: Icon, title, description, status, children }: ModuleCardProps) {
  const statusConfig = {
    active: {
      label: 'Operational',
      badge: 'bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-400 border-green-200 dark:border-green-800',
    },
    'coming-soon': {
      label: 'Coming Soon',
      badge: 'bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-400 border-blue-200 dark:border-blue-800',
    },
  }

  const config = statusConfig[status]

  return (
    <div className="flex items-center justify-center min-h-full p-8">
      <div className="max-w-2xl w-full">
        <div className="text-center mb-8">
          {/* Icon */}
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 mb-6">
            <Icon className="w-10 h-10" />
          </div>

          {/* Title */}
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-3">
            {title}
          </h1>

          {/* Description */}
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            {description}
          </p>

          {/* Status Badge */}
          <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium border ${config.badge}`}>
            {config.label}
          </span>
        </div>

        {/* Custom Content */}
        {children}
      </div>
    </div>
  )
}
