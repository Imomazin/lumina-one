import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle2, Clock } from 'lucide-react'
import { getAllModules } from '../modules'

export default function Overview() {
  const modules = getAllModules()

  const getModuleStatus = (moduleId: string) => {
    if (moduleId === 'risk') {
      return { label: 'Operational', color: 'text-green-600 dark:text-green-400', icon: CheckCircle2 }
    }
    return { label: 'Coming Soon', color: 'text-blue-600 dark:text-blue-400', icon: Clock }
  }

  return (
    <div className="min-h-full bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Lumina One
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-2">
            Unified Intelligence Control Plane
          </p>
          <p className="text-sm text-gray-500 dark:text-gray-500">
            Strategy, Risk & Financial Intelligence in one platform
          </p>
        </div>

        {/* Module Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {modules.map((module) => {
            const Icon = module.icon
            const status = getModuleStatus(module.id)
            const StatusIcon = status.icon

            return (
              <Link
                key={module.id}
                to={module.baseRoute}
                className="group relative bg-white dark:bg-gray-800 rounded-2xl border-2 border-gray-200 dark:border-gray-700 p-8 hover:border-blue-500 dark:hover:border-blue-500 transition-all duration-200 hover:shadow-xl"
              >
                {/* Module Icon */}
                <div className="flex items-center justify-between mb-6">
                  <div className="p-4 rounded-xl bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 group-hover:bg-blue-100 dark:group-hover:bg-blue-900/30 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    <Icon className="w-8 h-8" />
                  </div>
                  <div className={`flex items-center gap-2 text-sm font-medium ${status.color}`}>
                    <StatusIcon className="w-4 h-4" />
                    {status.label}
                  </div>
                </div>

                {/* Module Info */}
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                  {module.label}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-6">
                  {module.description}
                </p>

                {/* Action */}
                <div className="flex items-center text-blue-600 dark:text-blue-400 font-medium group-hover:translate-x-1 transition-transform">
                  {module.id === 'risk' ? 'Open module' : 'Learn more'}
                  <ArrowRight className="w-4 h-4 ml-2" />
                </div>
              </Link>
            )
          })}
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-6">
            <div className="text-3xl font-bold text-gray-900 dark:text-white mb-1">
              {modules.filter(m => m.id === 'risk').length}
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400">
              Active Modules
            </div>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-6">
            <div className="text-3xl font-bold text-gray-900 dark:text-white mb-1">
              {modules.filter(m => m.id !== 'risk').length}
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400">
              In Development
            </div>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-6">
            <div className="text-3xl font-bold text-gray-900 dark:text-white mb-1">
              {modules.length}
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400">
              Total Intelligence Modules
            </div>
          </div>
        </div>

        {/* Footer Note */}
        <div className="text-center mt-12">
          <p className="text-sm text-gray-500 dark:text-gray-500">
            Select a module from the sidebar or cards above to get started
          </p>
        </div>
      </div>
    </div>
  )
}
