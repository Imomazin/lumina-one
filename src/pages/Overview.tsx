import { Link } from 'react-router-dom'
import { CheckCircle2, ArrowRight, TrendingUp, Shield, DollarSign, LayoutGrid } from 'lucide-react'
import { getAllModules } from '../modules'
import { PageContainer } from '../core/layout'
import { useLumina } from '../context/LuminaContext'

export default function Overview() {
  const modules = getAllModules()
  const activeCount = modules.length // All modules are now active
  const { strategyScenario, risk, finance } = useLumina()

  return (
    <PageContainer maxWidth="wide">
      {/* System Header */}
      <div className="mb-10">
        <div className="flex items-center gap-3 mb-3">
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center shadow-sm">
            <LayoutGrid className="w-5 h-5 text-white" />
          </div>
          <div>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
              System Overview
            </h1>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-0.5">
              {activeCount} operational modules • Live intelligence flow
            </p>
          </div>
        </div>
      </div>

      {/* Module Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {modules.map((module) => {
          const Icon = module.icon
          const StatusIcon = CheckCircle2

          return (
            <Link
              key={module.id}
              to={`/app${module.baseRoute}`}
              className="group relative p-6 rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 hover:border-blue-300 dark:hover:border-blue-700 hover:shadow-lg transition-all duration-200"
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="p-3 rounded-lg bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-800 group-hover:from-blue-50 group-hover:to-indigo-50 dark:group-hover:from-blue-900/20 dark:group-hover:to-indigo-900/20 transition-all">
                  <Icon className="w-6 h-6 text-gray-700 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors" />
                </div>
                <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-green-50 dark:bg-green-900/20 text-xs font-medium text-green-700 dark:text-green-400">
                  <StatusIcon className="w-3.5 h-3.5" />
                  Ready
                </div>
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                {module.label}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-6">
                {module.description}
              </p>

              {/* Action */}
              <div className="flex items-center text-sm font-medium text-gray-700 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                Open module
                <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          )
        })}
      </div>

      {/* Intelligence Flow Dependency Graph */}
      <div className="mt-10 p-8 rounded-xl bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-blue-900/20 dark:via-indigo-900/20 dark:to-purple-900/20 border-2 border-blue-200 dark:border-blue-800 shadow-sm">
        <div className="flex items-center justify-between mb-6">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center">
                <ArrowRight className="w-4 h-4 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                Intelligence Flow
              </h2>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Live cross-module dependencies and data propagation
            </p>
          </div>
          {strategyScenario && (
            <div className="px-3 py-1.5 rounded-full bg-green-100 dark:bg-green-900/30 text-xs font-semibold text-green-700 dark:text-green-400 flex items-center gap-1.5">
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              Live
            </div>
          )}
        </div>

        <div className="flex items-center justify-between gap-6">
          {/* Strategy Node */}
          <div className="flex-1 p-5 rounded-xl bg-white dark:bg-gray-800 border-2 border-blue-300 dark:border-blue-700 shadow-sm">
            <div className="flex items-center gap-2 mb-3">
              <div className="p-1.5 rounded-lg bg-blue-100 dark:bg-blue-900/30">
                <TrendingUp className="w-4 h-4 text-blue-600 dark:text-blue-400" />
              </div>
              <span className="text-sm font-bold text-gray-900 dark:text-white">Strategy</span>
            </div>
            {strategyScenario ? (
              <div className="space-y-2">
                <p className="text-sm text-gray-700 dark:text-gray-300 line-clamp-2 font-medium">
                  {strategyScenario.objective}
                </p>
                <div className="flex items-center gap-2 text-xs text-gray-500 dark:text-gray-400">
                  <span className="px-2 py-0.5 rounded bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-400 font-medium">
                    {strategyScenario.timeHorizon}yr
                  </span>
                  <span>•</span>
                  <span>{strategyScenario.assumptions.length} assumptions</span>
                </div>
              </div>
            ) : (
              <p className="text-sm text-gray-400 dark:text-gray-500">No data</p>
            )}
          </div>

          {/* Arrow */}
          <div className="flex items-center">
            <ArrowRight className="w-6 h-6 text-blue-400 dark:text-blue-500" />
          </div>

          {/* Risk Node */}
          <div className={`flex-1 p-5 rounded-xl border-2 shadow-sm ${
            risk
              ? risk.overallExposure === 'High'
                ? 'bg-red-50 dark:bg-red-900/20 border-red-300 dark:border-red-700'
                : risk.overallExposure === 'Medium'
                ? 'bg-amber-50 dark:bg-amber-900/20 border-amber-300 dark:border-amber-700'
                : 'bg-green-50 dark:bg-green-900/20 border-green-300 dark:border-green-700'
              : 'bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-700'
          }`}>
            <div className="flex items-center gap-2 mb-3">
              <div className={`p-1.5 rounded-lg ${
                risk
                  ? risk.overallExposure === 'High'
                    ? 'bg-red-100 dark:bg-red-900/30'
                    : risk.overallExposure === 'Medium'
                    ? 'bg-amber-100 dark:bg-amber-900/30'
                    : 'bg-green-100 dark:bg-green-900/30'
                  : 'bg-gray-100 dark:bg-gray-700'
              }`}>
                <Shield className="w-4 h-4 text-gray-600 dark:text-gray-400" />
              </div>
              <span className="text-sm font-bold text-gray-900 dark:text-white">Risk</span>
            </div>
            {risk ? (
              <div className="space-y-2">
                <p className={`text-sm font-bold ${
                  risk.overallExposure === 'High'
                    ? 'text-red-700 dark:text-red-400'
                    : risk.overallExposure === 'Medium'
                    ? 'text-amber-700 dark:text-amber-400'
                    : 'text-green-700 dark:text-green-400'
                }`}>
                  {risk.overallExposure} Exposure
                </p>
                <p className="text-xs text-gray-600 dark:text-gray-400">
                  {risk.exposureCategories.length} risk categories identified
                </p>
              </div>
            ) : (
              <p className="text-sm text-gray-400 dark:text-gray-500">Auto-derived from Strategy</p>
            )}
          </div>

          {/* Arrow */}
          <div className="flex items-center">
            <ArrowRight className="w-6 h-6 text-emerald-400 dark:text-emerald-500" />
          </div>

          {/* Finance Node */}
          <div className={`flex-1 p-5 rounded-xl border-2 shadow-sm ${
            finance
              ? 'bg-emerald-50 dark:bg-emerald-900/20 border-emerald-300 dark:border-emerald-700'
              : 'bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-700'
          }`}>
            <div className="flex items-center gap-2 mb-3">
              <div className="p-1.5 rounded-lg bg-emerald-100 dark:bg-emerald-900/30">
                <DollarSign className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
              </div>
              <span className="text-sm font-bold text-gray-900 dark:text-white">Finance</span>
            </div>
            {finance ? (
              <div className="space-y-2">
                <p className={`text-sm font-bold ${
                  finance.pressureLevel === 'High'
                    ? 'text-red-700 dark:text-red-400'
                    : finance.pressureLevel === 'Medium'
                    ? 'text-amber-700 dark:text-amber-400'
                    : 'text-green-700 dark:text-green-400'
                }`}>
                  {finance.pressureLevel} Pressure
                </p>
                <p className="text-xs text-gray-600 dark:text-gray-400">
                  {finance.capitalBufferRequirement}
                </p>
              </div>
            ) : (
              <p className="text-sm text-gray-400 dark:text-gray-500">Auto-derived from Strategy + Risk</p>
            )}
          </div>
        </div>

        {strategyScenario && (
          <div className="mt-6 pt-6 border-t border-blue-200 dark:border-blue-800">
            <Link
              to="/control-plane"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold transition-colors shadow-sm"
            >
              View full intelligence flow
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        )}
      </div>

      {/* System Stats */}
      <div className="mt-10 grid grid-cols-3 gap-6">
        <div className="p-6 rounded-xl bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 border border-green-200 dark:border-green-800">
          <div className="text-3xl font-bold text-green-700 dark:text-green-400 mb-1">
            {activeCount}
          </div>
          <div className="text-sm font-medium text-green-600 dark:text-green-500">
            Active Modules
          </div>
        </div>
        <div className="p-6 rounded-xl bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 border border-blue-200 dark:border-blue-800">
          <div className="text-3xl font-bold text-blue-700 dark:text-blue-400 mb-1">
            {strategyScenario ? '1' : '0'}
          </div>
          <div className="text-sm font-medium text-blue-600 dark:text-blue-500">
            Active Scenarios
          </div>
        </div>
        <div className="p-6 rounded-xl bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 border border-purple-200 dark:border-purple-800">
          <div className="text-3xl font-bold text-purple-700 dark:text-purple-400 mb-1">
            {modules.length}
          </div>
          <div className="text-sm font-medium text-purple-600 dark:text-purple-500">
            Total Modules
          </div>
        </div>
      </div>
    </PageContainer>
  )
}
