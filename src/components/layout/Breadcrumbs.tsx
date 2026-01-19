import { Link } from 'react-router-dom'
import { ChevronRight } from 'lucide-react'

export interface BreadcrumbItem {
  label: string
  href?: string
}

export interface BreadcrumbsProps {
  items: BreadcrumbItem[]
}

export function Breadcrumbs({ items }: BreadcrumbsProps) {
  return (
    <nav className="flex items-center gap-2 text-sm">
      {items.map((item, index) => {
        const isLast = index === items.length - 1

        return (
          <div key={index} className="flex items-center gap-2">
            {item.href && !isLast ? (
              <Link
                to={item.href}
                className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
              >
                {item.label}
              </Link>
            ) : (
              <span
                className={
                  isLast
                    ? 'text-gray-900 dark:text-white font-medium'
                    : 'text-gray-600 dark:text-gray-400'
                }
              >
                {item.label}
              </span>
            )}

            {!isLast && <ChevronRight className="w-4 h-4 text-gray-400" />}
          </div>
        )
      })}
    </nav>
  )
}
