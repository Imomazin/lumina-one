import { Link } from 'react-router-dom'
import { CheckCircle2, ArrowRight, TrendingUp, Shield, DollarSign } from 'lucide-react'
import { getAllModules } from '../modules'
import { PageContainer } from '../core/layout'
import { useLumina } from '../context/LuminaContext'

export default function Overview() {
  const modules = getAllModules()
  const activeCount = modules.length // All modules are now active
  const inDevCount = 0 // No modules in development
  const { strategy, risk, finance } = useLumina()

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
          const StatusIcon = CheckCircle2

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
                <div className="flex items-center gap-1.5 text-xs font-medium text-green-700 dark:text-green-400">
                  <StatusIcon className="w-3.5 h-3.5" />
                  Operational
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
                Open module
                <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-0.5 transition-transform" />
              </div>
            </Link>
          )
        })}
      </div>

      {/* Intelligence Flow Dependency Graph */}
      <div className="mt-8 p-6 rounded-lg bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 border border-blue-200 dark:border-blue-800">
        <div className="flex items-center gap-2 mb-4">
          <ArrowRight className="w-5 h-5 text-blue-600 dark:text-blue-400" />
          <h2 className="text-lg font-bold text-gray-900 dark:text-white">
            Intelligence Flow
          </h2>
        </div>
        <p className="text-sm text-gray-600 dark:text-gray-400 mb-6">
          Live cross-module dependencies
        </p>

        <div className="flex items-center justify-between gap-4">
          {/* Strategy Node */}
          <div className="flex-1 p-4 rounded-lg bg-white dark:bg-gray-800 border-2 border-blue-200 dark:border-blue-700">
            <div className="flex items-center gap-2 mb-2">
              <TrendingUp className="w-4 h-4 text-blue-600 dark:text-blue-400" />
              <span className="text-sm font-semibold text-gray-900 dark:text-white">Strategy</span>
            </div>
            {strategy ? (
              <div className="space-y-1">
                <p className="text-xs text-gray-600 dark:text-gray-400 line-clamp-1">
                  {strategy.objective}
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-500">
                  {strategy.timeHorizon}yr • {strategy.assumptions.length} assumptions
                </p>
              </div>
            ) : (
              <p className="text-xs text-gray-400 dark:text-gray-500">No data</p>
            )}
          </div>

          {/* Arrow */}
          <div className="flex items-center">
            <ArrowRight className="w-5 h-5 text-gray-400" />
          </div>

          {/* Risk Node */}
          <div className={`flex-1 p-4 rounded-lg border-2 ${
            risk
              ? risk.overallExposure === 'High'
                ? 'bg-red-50 dark:bg-red-900/20 border-red-200 dark:border-red-700'
                : risk.overallExposure === 'Medium'
                ? 'bg-amber-50 dark:bg-amber-900/20 border-amber-200 dark:border-amber-700'
                : 'bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-700'
              : 'bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700'
          }`}>
            <div className="flex items-center gap-2 mb-2">
              <Shield className="w-4 h-4 text-gray-600 dark:text-gray-400" />
              <span className="text-sm font-semibold text-gray-900 dark:text-white">Risk</span>
            </div>
            {risk ? (
              <div className="space-y-1">
                <p className={`text-xs font-medium ${
                  risk.overallExposure === 'High'
                    ? 'text-red-700 dark:text-red-400'
                    : risk.overallExposure === 'Medium'
                    ? 'text-amber-700 dark:text-amber-400'
                    : 'text-green-700 dark:text-green-400'
                }`}>
                  {risk.overallExposure} Exposure
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-500">
                  {risk.exposureCategories.length} categories
                </p>
              </div>
            ) : (
              <p className="text-xs text-gray-400 dark:text-gray-500">Derived from Strategy</p>
            )}
          </div>

          {/* Arrow */}
          <div className="flex items-center">
            <ArrowRight className="w-5 h-5 text-gray-400" />
          </div>

          {/* Finance Node */}
          <div className={`flex-1 p-4 rounded-lg border-2 ${
            finance
              ? 'bg-emerald-50 dark:bg-emerald-900/20 border-emerald-200 dark:border-emerald-700'
              : 'bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700'
          }`}>
            <div className="flex items-center gap-2 mb-2">
              <DollarSign className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
              <span className="text-sm font-semibold text-gray-900 dark:text-white">Finance</span>
            </div>
            {finance ? (
              <div className="space-y-1">
                <p className={`text-xs font-medium ${
                  finance.pressureLevel === 'High'
                    ? 'text-red-700 dark:text-red-400'
                    : finance.pressureLevel === 'Medium'
                    ? 'text-amber-700 dark:text-amber-400'
                    : 'text-green-700 dark:text-green-400'
                }`}>
                  {finance.pressureLevel} Pressure
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-500">
                  {finance.capitalBufferRequirement}
                </p>
              </div>
            ) : (
              <p className="text-xs text-gray-400 dark:text-gray-500">Derived from Strategy + Risk</p>
            )}
          </div>
        </div>

        {strategy && (
          <div className="mt-4 pt-4 border-t border-blue-200 dark:border-blue-800">
            <Link
              to="/control-plane"
              className="inline-flex items-center gap-2 text-sm font-medium text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
            >
              View full intelligence flow
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        )}
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
