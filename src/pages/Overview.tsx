import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { getAllModules } from '../modules'
import { PageContainer } from '../core/layout'
import { useStrategyStore } from '../store'

export default function Overview() {
  const modules = getAllModules()
  const strategyScenario = useStrategyStore(state => state.scenario)

  return (
    <PageContainer maxWidth="wide">
      <div className="mb-8">
        <h1 className="text-2xl font-semibold text-gray-900 dark:text-white">
          Overview
        </h1>
        {strategyScenario && (
          <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
            Active scenario: {strategyScenario.name}
          </p>
        )}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {modules.map((module) => {
          const Icon = module.icon
          return (
            <Link
              key={module.id}
              to={`/app${module.baseRoute}`}
              className="group p-6 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 hover:border-gray-300 dark:hover:border-gray-600 transition-colors"
            >
              <div className="flex items-center gap-3 mb-3">
                <Icon className="w-5 h-5 text-gray-600 dark:text-gray-400" />
                <h3 className="text-base font-medium text-gray-900 dark:text-white">
                  {module.label}
                </h3>
              </div>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
                {module.description}
              </p>
              <div className="flex items-center gap-1 text-sm text-blue-600 dark:text-blue-400 font-medium">
                Open
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </div>
            </Link>
          )
        })}
      </div>
    </PageContainer>
  )
}
