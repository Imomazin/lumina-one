import { Link } from 'react-router-dom'
import { CheckCircle2, Clock, ArrowRight } from 'lucide-react'
import { getAllModules } from '../modules'
import { PageContainer } from '../core/layout'

export default function Overview() {
  const modules = getAllModules()
  const activeCount = modules.filter(m => m.id === 'risk').length
  const inDevCount = modules.length - activeCount

  return (
    <PageContainer maxWidth="wide">
      {/* System Header */}
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
          System Overview
        </h1>
        <p className="text-sm text-gray-600 dark:text-gray-400">
          Intelligence modules • {activeCount} operational • {inDevCount} in development
        </p>
      </div>

      {/* Module Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {modules.map((module) => {
          const Icon = module.icon
          const isActive = module.id === 'risk'
          const StatusIcon = isActive ? CheckCircle2 : Clock

          return (
            <Link
              key={module.id}
              to={module.baseRoute}
              className="group p-6 rounded-lg border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 hover:border-gray-300 dark:hover:border-gray-700 transition-colors"
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800">
                  <Icon className="w-5 h-5 text-gray-700 dark:text-gray-300" />
                </div>
                <div className={`flex items-center gap-1.5 text-xs font-medium ${
                  isActive
                    ? 'text-green-700 dark:text-green-400'
                    : 'text-blue-700 dark:text-blue-400'
                }`}>
                  <StatusIcon className="w-3.5 h-3.5" />
                  {isActive ? 'Operational' : 'Coming Soon'}
                </div>
              </div>

              {/* Content */}
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
                {module.label}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                {module.description}
              </p>

              {/* Action */}
              <div className="flex items-center text-sm text-gray-700 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                {isActive ? 'Open module' : 'View status'}
                <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-0.5 transition-transform" />
              </div>
            </Link>
          )
        })}
      </div>

      {/* System Stats */}
      <div className="mt-8 grid grid-cols-3 gap-6">
        <div className="p-4 rounded-lg bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-800">
          <div className="text-2xl font-bold text-gray-900 dark:text-white">
            {activeCount}
          </div>
          <div className="text-xs text-gray-600 dark:text-gray-400 mt-1">
            Active
          </div>
        </div>
        <div className="p-4 rounded-lg bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-800">
          <div className="text-2xl font-bold text-gray-900 dark:text-white">
            {inDevCount}
          </div>
          <div className="text-xs text-gray-600 dark:text-gray-400 mt-1">
            In Development
          </div>
        </div>
        <div className="p-4 rounded-lg bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-800">
          <div className="text-2xl font-bold text-gray-900 dark:text-white">
            {modules.length}
          </div>
          <div className="text-xs text-gray-600 dark:text-gray-400 mt-1">
            Total Modules
          </div>
        </div>
      </div>
    </PageContainer>
  )
}
