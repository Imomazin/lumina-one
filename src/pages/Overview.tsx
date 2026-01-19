import { Link } from 'react-router-dom'
import { CheckCircle2, ArrowRight, TrendingUp, Shield, DollarSign, LayoutGrid } from 'lucide-react'
import { getAllModules } from '../modules'
import { PageContainer } from '../core/layout'
import { useStrategyStore, useRiskStore, useFinanceStore } from '../store'

export default function Overview() {
  const modules = getAllModules()
  const activeCount = modules.length // All modules are now active
  const strategyScenario = useStrategyStore(state => state.scenario)
  const risk = useRiskStore(state => state.profile)
  const finance = useFinanceStore(state => state.model)

  return (
    <PageContainer maxWidth="wide">
      {/* System Header - Enhanced */}
      <div className="mb-12">
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-700 p-8 shadow-2xl">
          {/* Decorative background */}
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLW9wYWNpdHk9IjAuMDUiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-30" />

          <div className="relative flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center shadow-lg border-2 border-white/30">
                <LayoutGrid className="w-8 h-8 text-white" />
              </div>
              <div>
                <h1 className="text-4xl font-bold text-white mb-1 drop-shadow-lg">
                  System Overview
                </h1>
                <p className="text-blue-100 font-medium">
                  {activeCount} operational modules • Real-time intelligence flow
                </p>
              </div>
            </div>
            {strategyScenario && (
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 shadow-lg">
                <div className="w-2.5 h-2.5 rounded-full bg-green-400 animate-pulse shadow-lg shadow-green-400/50" />
                <span className="text-sm font-semibold text-white">System Active</span>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Module Grid - Enhanced */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
        {modules.map((module, index) => {
          const Icon = module.icon
          const StatusIcon = CheckCircle2

          // Gradient colors for each module
          const gradients = [
            'from-purple-500 via-indigo-600 to-blue-700',
            'from-blue-500 via-cyan-600 to-teal-700',
            'from-emerald-500 via-green-600 to-lime-700'
          ]
          const gradient = gradients[index % gradients.length]

          return (
            <Link
              key={module.id}
              to={`/app${module.baseRoute}`}
              className="group relative overflow-hidden rounded-2xl bg-white dark:bg-gray-900 border-2 border-gray-200 dark:border-gray-700 hover:border-transparent hover:shadow-2xl hover:scale-[1.02] transition-all duration-300"
            >
              {/* Gradient overlay on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />

              <div className="relative p-8">
                {/* Header with Icon */}
                <div className="flex items-start justify-between mb-6">
                  <div className={`p-4 rounded-2xl bg-gradient-to-br ${gradient} shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-gradient-to-r from-green-400 to-emerald-500 text-white text-xs font-bold shadow-lg">
                    <StatusIcon className="w-4 h-4" />
                    READY
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 transition-all">
                  {module.label}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                  {module.description}
                </p>

                {/* Action Button */}
                <div className={`flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-gradient-to-r ${gradient} text-white font-semibold text-sm shadow-lg group-hover:shadow-xl transition-all`}>
                  Open Module
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          )
        })}
      </div>

      {/* Intelligence Flow Dependency Graph - Enhanced */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 p-10 shadow-2xl border-2 border-blue-500/20">
        {/* Animated background pattern */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjAzIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-40" />

        <div className="relative">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-400 to-indigo-600 flex items-center justify-center shadow-lg">
                <ArrowRight className="w-6 h-6 text-white" />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-white mb-1">
                  Intelligence Flow
                </h2>
                <p className="text-blue-200 font-medium">
                  Real-time cross-module dependencies and data propagation
                </p>
              </div>
            </div>
            {strategyScenario && (
              <div className="px-4 py-2 rounded-full bg-green-500/20 backdrop-blur-sm border border-green-400/30 text-sm font-bold text-green-300 flex items-center gap-2 shadow-lg">
                <div className="w-3 h-3 rounded-full bg-green-400 animate-pulse shadow-lg shadow-green-400/50" />
                LIVE
              </div>
            )}
          </div>

        <div className="flex items-center justify-between gap-8">
          {/* Strategy Node */}
          <div className="flex-1 p-6 rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-600 shadow-2xl border-2 border-blue-400/50 backdrop-blur-sm transform hover:scale-105 transition-all duration-300">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 rounded-xl bg-white/20 backdrop-blur-sm border border-white/30">
                <TrendingUp className="w-6 h-6 text-white" />
              </div>
              <span className="text-lg font-bold text-white">Strategy</span>
            </div>
            {strategyScenario ? (
              <div className="space-y-3">
                <p className="text-sm text-white font-medium line-clamp-2">
                  {strategyScenario.objective}
                </p>
                <div className="flex items-center gap-2">
                  <span className="px-3 py-1 rounded-lg bg-white/20 backdrop-blur-sm border border-white/30 text-xs text-white font-bold">
                    {strategyScenario.timeHorizon}yr
                  </span>
                  <span className="text-xs text-blue-100 font-medium">{strategyScenario.assumptions.length} assumptions</span>
                </div>
              </div>
            ) : (
              <p className="text-sm text-blue-200">Awaiting configuration</p>
            )}
          </div>

          {/* Arrow with glow */}
          <div className="flex items-center">
            <div className="relative">
              <div className="absolute inset-0 blur-lg bg-blue-400 opacity-50" />
              <ArrowRight className="relative w-8 h-8 text-blue-300" />
            </div>
          </div>

          {/* Risk Node */}
          <div className={`flex-1 p-6 rounded-2xl border-2 shadow-2xl backdrop-blur-sm transform hover:scale-105 transition-all duration-300 ${
            risk
              ? risk.overallExposure === 'High'
                ? 'bg-gradient-to-br from-red-500 to-rose-600 border-red-400/50'
                : risk.overallExposure === 'Medium'
                ? 'bg-gradient-to-br from-amber-500 to-orange-600 border-amber-400/50'
                : 'bg-gradient-to-br from-green-500 to-emerald-600 border-green-400/50'
              : 'bg-gradient-to-br from-gray-500 to-slate-600 border-gray-400/50'
          }`}>
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 rounded-xl bg-white/20 backdrop-blur-sm border border-white/30">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <span className="text-lg font-bold text-white">Risk</span>
            </div>
            {risk ? (
              <div className="space-y-3">
                <p className="text-sm font-bold text-white">
                  {risk.overallExposure} Exposure
                </p>
                <p className="text-xs text-white/80 font-medium">
                  {risk.exposureCategories.length} risk categories identified
                </p>
              </div>
            ) : (
              <p className="text-sm text-white/80">Auto-derived from Strategy</p>
            )}
          </div>

          {/* Arrow with glow */}
          <div className="flex items-center">
            <div className="relative">
              <div className="absolute inset-0 blur-lg bg-emerald-400 opacity-50" />
              <ArrowRight className="relative w-8 h-8 text-emerald-300" />
            </div>
          </div>

          {/* Finance Node */}
          <div className={`flex-1 p-6 rounded-2xl border-2 shadow-2xl backdrop-blur-sm transform hover:scale-105 transition-all duration-300 ${
            finance
              ? 'bg-gradient-to-br from-emerald-500 to-green-600 border-emerald-400/50'
              : 'bg-gradient-to-br from-gray-500 to-slate-600 border-gray-400/50'
          }`}>
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 rounded-xl bg-white/20 backdrop-blur-sm border border-white/30">
                <DollarSign className="w-6 h-6 text-white" />
              </div>
              <span className="text-lg font-bold text-white">Finance</span>
            </div>
            {finance ? (
              <div className="space-y-3">
                <p className="text-sm font-bold text-white">
                  {finance.pressureLevel} Pressure
                </p>
                <p className="text-xs text-white/80 font-medium">
                  {finance.capitalBufferRequirement}
                </p>
              </div>
            ) : (
              <p className="text-sm text-white/80">Auto-derived from Strategy + Risk</p>
            )}
          </div>
        </div>

        {strategyScenario && (
          <div className="mt-8 pt-6 border-t border-white/10">
            <Link
              to="/control-plane"
              className="inline-flex items-center gap-3 px-6 py-3 rounded-xl bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white font-bold shadow-lg hover:shadow-xl transition-all transform hover:scale-105"
            >
              View Full Intelligence Flow
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        )}
        </div>
      </div>

      {/* System Stats - Enhanced */}
      <div className="mt-12 grid grid-cols-3 gap-8">
        <div className="relative overflow-hidden p-8 rounded-2xl bg-gradient-to-br from-green-500 to-emerald-600 shadow-2xl transform hover:scale-105 transition-all duration-300">
          <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16" />
          <div className="relative">
            <div className="text-5xl font-bold text-white mb-2">
              {activeCount}
            </div>
            <div className="text-sm font-semibold text-green-100 uppercase tracking-wide">
              Active Modules
            </div>
          </div>
        </div>
        <div className="relative overflow-hidden p-8 rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-600 shadow-2xl transform hover:scale-105 transition-all duration-300">
          <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16" />
          <div className="relative">
            <div className="text-5xl font-bold text-white mb-2">
              {strategyScenario ? '1' : '0'}
            </div>
            <div className="text-sm font-semibold text-blue-100 uppercase tracking-wide">
              Active Scenarios
            </div>
          </div>
        </div>
        <div className="relative overflow-hidden p-8 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-600 shadow-2xl transform hover:scale-105 transition-all duration-300">
          <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16" />
          <div className="relative">
            <div className="text-5xl font-bold text-white mb-2">
              {modules.length}
            </div>
            <div className="text-sm font-semibold text-purple-100 uppercase tracking-wide">
              Total Modules
            </div>
          </div>
        </div>
      </div>
    </PageContainer>
  )
}
