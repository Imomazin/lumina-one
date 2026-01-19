import { TrendingUp, Shield, DollarSign, AlertCircle, Activity } from 'lucide-react'
import { useLumina } from '../context/LuminaContext'
import { PageContainer } from '../core/layout'

export default function ControlPlane() {
  const { scenarioId, strategy, risk, finance } = useLumina()

  return (
    <PageContainer maxWidth="wide">
      {/* Header */}
      <div className="mb-10">
        <div className="flex items-center gap-4 mb-3">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center shadow-sm">
            <Activity className="w-6 h-6 text-white" />
          </div>
          <div>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Control Plane</h1>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
              Real-time intelligence flow visualization
            </p>
          </div>
        </div>
      </div>

      {/* Scenario ID */}
      <div className="mb-8 px-4 py-3 bg-purple-50 dark:bg-purple-900/20 rounded-xl border border-purple-200 dark:border-purple-800">
        <div className="flex items-center justify-between">
          <p className="text-sm text-purple-700 dark:text-purple-400">
            Active Scenario: <span className="font-mono font-semibold">{scenarioId}</span>
          </p>
          {strategy && (
            <div className="px-2.5 py-1 rounded-full bg-green-100 dark:bg-green-900/30 text-xs font-semibold text-green-700 dark:text-green-400 flex items-center gap-1.5">
              <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
              Live
            </div>
          )}
        </div>
      </div>

      {/* No Data State */}
      {!strategy && (
        <div className="p-12 text-center rounded-lg bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
          <AlertCircle className="w-16 h-16 text-gray-400 dark:text-gray-500 mx-auto mb-4" />
          <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-300 mb-2">
            No Active Intelligence Flow
          </h3>
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
            The Control Plane will display live data from Strategy → Risk → Finance once you define a strategy.
          </p>
          <a
            href="/strategy"
            className="inline-block px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors"
          >
            Define Strategy
          </a>
        </div>
      )}

      {/* Active Intelligence Flow */}
      {strategy && (
        <div className="space-y-6">
          {/* Strategy Section */}
          <div className="p-6 rounded-lg bg-blue-50 dark:bg-blue-900/20 border-2 border-blue-200 dark:border-blue-800">
            <div className="flex items-center gap-3 mb-4">
              <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-blue-600 text-white">
                <TrendingUp className="w-5 h-5" />
              </div>
              <div>
                <h2 className="text-lg font-bold text-blue-900 dark:text-blue-300">Strategy</h2>
                <p className="text-xs text-blue-700 dark:text-blue-400">Source module</p>
              </div>
            </div>
            <div className="space-y-3">
              <div className="p-3 rounded-lg bg-white dark:bg-gray-800">
                <p className="text-xs font-medium text-blue-800 dark:text-blue-400 mb-1">
                  Strategic Objective
                </p>
                <p className="text-sm text-gray-900 dark:text-white font-medium">
                  {strategy.objective}
                </p>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div className="p-3 rounded-lg bg-white dark:bg-gray-800">
                  <p className="text-xs font-medium text-blue-800 dark:text-blue-400 mb-1">
                    Time Horizon
                  </p>
                  <p className="text-sm text-gray-900 dark:text-white font-medium">
                    {strategy.timeHorizon} years
                  </p>
                </div>
                <div className="p-3 rounded-lg bg-white dark:bg-gray-800">
                  <p className="text-xs font-medium text-blue-800 dark:text-blue-400 mb-1">
                    Assumptions
                  </p>
                  <p className="text-sm text-gray-900 dark:text-white font-medium">
                    {strategy.assumptions.length} defined
                  </p>
                </div>
              </div>
              <div className="p-3 rounded-lg bg-white dark:bg-gray-800">
                <p className="text-xs font-medium text-blue-800 dark:text-blue-400 mb-2">
                  Key Assumptions
                </p>
                <ul className="space-y-1">
                  {strategy.assumptions.map((assumption, i) => (
                    <li key={i} className="text-sm text-gray-700 dark:text-gray-300 flex items-start gap-2">
                      <span className="text-blue-600 dark:text-blue-400">•</span>
                      <span>{assumption}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Flow Indicator */}
          <div className="flex items-center justify-center">
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
              <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
              <span className="text-xs font-medium text-gray-600 dark:text-gray-400">
                Derived ↓
              </span>
            </div>
          </div>

          {/* Risk Section */}
          {risk && (
            <div className={`p-6 rounded-lg border-2 ${
              risk.overallExposure === 'High'
                ? 'bg-red-50 dark:bg-red-900/20 border-red-200 dark:border-red-800'
                : risk.overallExposure === 'Medium'
                ? 'bg-amber-50 dark:bg-amber-900/20 border-amber-200 dark:border-amber-800'
                : 'bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-800'
            }`}>
              <div className="flex items-center gap-3 mb-4">
                <div className={`flex items-center justify-center w-10 h-10 rounded-lg text-white ${
                  risk.overallExposure === 'High'
                    ? 'bg-red-600'
                    : risk.overallExposure === 'Medium'
                    ? 'bg-amber-600'
                    : 'bg-green-600'
                }`}>
                  <Shield className="w-5 h-5" />
                </div>
                <div>
                  <h2 className={`text-lg font-bold ${
                    risk.overallExposure === 'High'
                      ? 'text-red-900 dark:text-red-300'
                      : risk.overallExposure === 'Medium'
                      ? 'text-amber-900 dark:text-amber-300'
                      : 'text-green-900 dark:text-green-300'
                  }`}>
                    Risk
                  </h2>
                  <p className={`text-xs ${
                    risk.overallExposure === 'High'
                      ? 'text-red-700 dark:text-red-400'
                      : risk.overallExposure === 'Medium'
                      ? 'text-amber-700 dark:text-amber-400'
                      : 'text-green-700 dark:text-green-400'
                  }`}>
                    Derived from Strategy
                  </p>
                </div>
                <div className="ml-auto">
                  <span className={`px-3 py-1 rounded-full text-sm font-bold ${
                    risk.overallExposure === 'High'
                      ? 'bg-red-200 dark:bg-red-800 text-red-800 dark:text-red-200'
                      : risk.overallExposure === 'Medium'
                      ? 'bg-amber-200 dark:bg-amber-800 text-amber-800 dark:text-amber-200'
                      : 'bg-green-200 dark:bg-green-800 text-green-800 dark:text-green-200'
                  }`}>
                    {risk.overallExposure} Exposure
                  </span>
                </div>
              </div>
              <div className="space-y-2">
                {risk.exposureCategories.map((exposure, i) => (
                  <div key={i} className="p-3 rounded-lg bg-white dark:bg-gray-800">
                    <div className="flex items-center justify-between mb-1">
                      <p className="text-sm font-medium text-gray-900 dark:text-white">
                        {exposure.category}
                      </p>
                      <span className={`px-2 py-0.5 rounded text-xs font-bold ${
                        exposure.level === 'High'
                          ? 'bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400'
                          : exposure.level === 'Medium'
                          ? 'bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-400'
                          : 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400'
                      }`}>
                        {exposure.level}
                      </span>
                    </div>
                    <p className="text-xs text-gray-600 dark:text-gray-400">
                      From: "{exposure.derivedFrom}"
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Flow Indicator */}
          <div className="flex items-center justify-center">
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
              <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-xs font-medium text-gray-600 dark:text-gray-400">
                Derived ↓
              </span>
            </div>
          </div>

          {/* Finance Section */}
          {finance && (
            <div className="p-6 rounded-lg bg-emerald-50 dark:bg-emerald-900/20 border-2 border-emerald-200 dark:border-emerald-800">
              <div className="flex items-center gap-3 mb-4">
                <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-emerald-600 text-white">
                  <DollarSign className="w-5 h-5" />
                </div>
                <div>
                  <h2 className="text-lg font-bold text-emerald-900 dark:text-emerald-300">Finance</h2>
                  <p className="text-xs text-emerald-700 dark:text-emerald-400">
                    Derived from Strategy + Risk
                  </p>
                </div>
                <div className="ml-auto">
                  <span className={`px-3 py-1 rounded-full text-sm font-bold ${
                    finance.pressureLevel === 'High'
                      ? 'bg-red-200 dark:bg-red-800 text-red-800 dark:text-red-200'
                      : finance.pressureLevel === 'Medium'
                      ? 'bg-amber-200 dark:bg-amber-800 text-amber-800 dark:text-amber-200'
                      : 'bg-green-200 dark:bg-green-800 text-green-800 dark:text-green-200'
                  }`}>
                    {finance.pressureLevel} Pressure
                  </span>
                </div>
              </div>
              <div className="space-y-3">
                <div className="p-3 rounded-lg bg-white dark:bg-gray-800">
                  <p className="text-xs font-medium text-emerald-800 dark:text-emerald-400 mb-1">
                    Recommended Capital Buffer
                  </p>
                  <p className="text-lg font-bold text-emerald-900 dark:text-emerald-300">
                    {finance.capitalBufferRequirement}
                  </p>
                </div>
                <div className="p-3 rounded-lg bg-white dark:bg-gray-800">
                  <p className="text-xs font-medium text-emerald-800 dark:text-emerald-400 mb-2">
                    Financial Implications
                  </p>
                  <ul className="space-y-1">
                    {finance.implications.map((implication, i) => (
                      <li key={i} className="text-sm text-gray-700 dark:text-gray-300 flex items-start gap-2">
                        <span className="text-emerald-600 dark:text-emerald-400">•</span>
                        <span>{implication}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </PageContainer>
  )
}
