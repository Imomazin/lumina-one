import { TrendingUp, Shield, DollarSign, AlertCircle, Activity, RefreshCw, ChevronDown } from 'lucide-react'
import { useState } from 'react'
import { useStrategyStore, useRiskStore, useFinanceStore } from '../store'
import { PageContainer } from '../core/layout'

export default function ControlPlane() {
  const strategyScenario = useStrategyStore(state => state.scenario)
  const risk = useRiskStore(state => state.profile)
  const finance = useFinanceStore(state => state.model)
  const allScenarios = useStrategyStore(state => state.getAllScenarios())
  const setActiveScenario = useStrategyStore(state => state.setActiveScenario)
  const [showScenarioDropdown, setShowScenarioDropdown] = useState(false)

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

      {/* Scenario Controls */}
      {allScenarios.length > 0 && (
        <div className="mb-8 p-4 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-sm font-semibold text-gray-700 dark:text-gray-300">Scenario Manager</h3>
            <div className="px-2 py-1 rounded-full bg-blue-100 dark:bg-blue-900/30 text-xs font-medium text-blue-700 dark:text-blue-400">
              {allScenarios.length} scenario{allScenarios.length !== 1 ? 's' : ''}
            </div>
          </div>

          <div className="relative">
            <button
              onClick={() => setShowScenarioDropdown(!showScenarioDropdown)}
              className="w-full flex items-center justify-between px-4 py-3 bg-gray-50 dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            >
              <div className="flex items-center gap-3">
                <RefreshCw className="w-4 h-4 text-purple-600 dark:text-purple-400" />
                <div className="text-left">
                  <p className="text-sm font-medium text-gray-900 dark:text-white">
                    {strategyScenario?.name || "No scenario selected"}
                  </p>
                  {strategyScenario && (
                    <p className="text-xs text-gray-500 dark:text-gray-400 font-mono">
                      {strategyScenario.id.slice(0, 8)}...
                    </p>
                  )}
                </div>
              </div>
              <ChevronDown className={`w-5 h-5 text-gray-400 transition-transform ${showScenarioDropdown ? 'rotate-180' : ''}`} />
            </button>

            {showScenarioDropdown && (
              <div className="absolute z-10 w-full mt-2 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 shadow-lg">
                {allScenarios.map((scenario) => (
                  <button
                    key={scenario.id}
                    onClick={() => {
                      setActiveScenario(scenario.id)
                      setShowScenarioDropdown(false)
                    }}
                    className={`w-full px-4 py-3 text-left hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors first:rounded-t-lg last:rounded-b-lg ${
                      scenario.id === strategyScenario?.id ? 'bg-purple-50 dark:bg-purple-900/20' : ''
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium text-gray-900 dark:text-white">
                          {scenario.name}
                        </p>
                        <p className="text-xs text-gray-500 dark:text-gray-400">
                          {scenario.objective}
                        </p>
                      </div>
                      {scenario.id === strategyScenario?.id && (
                        <div className="flex-shrink-0 w-2 h-2 rounded-full bg-green-500" />
                      )}
                    </div>
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      )}

      {/* Scenario ID */}
      <div className="mb-8 px-4 py-3 bg-purple-50 dark:bg-purple-900/20 rounded-xl border border-purple-200 dark:border-purple-800">
        <div className="flex items-center justify-between">
          <p className="text-sm text-purple-700 dark:text-purple-400">
            Active Scenario: <span className="font-mono font-semibold">{strategyScenario?.id || "No Scenario"}</span>
          </p>
          {strategyScenario && (
            <div className="px-2.5 py-1 rounded-full bg-green-100 dark:bg-green-900/30 text-xs font-semibold text-green-700 dark:text-green-400 flex items-center gap-1.5">
              <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
              Live
            </div>
          )}
        </div>
      </div>

      {/* No Data State */}
      {!strategyScenario && (
        <div className="p-12 text-center rounded-lg bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
          <AlertCircle className="w-16 h-16 text-gray-400 dark:text-gray-500 mx-auto mb-4" />
          <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-300 mb-2">
            No Active Intelligence Flow
          </h3>
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
            The Control Plane will display live data from Strategy → Risk → Finance once you define a strategyScenario?.
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
      {strategyScenario && (
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
                  {strategyScenario?.objective}
                </p>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div className="p-3 rounded-lg bg-white dark:bg-gray-800">
                  <p className="text-xs font-medium text-blue-800 dark:text-blue-400 mb-1">
                    Time Horizon
                  </p>
                  <p className="text-sm text-gray-900 dark:text-white font-medium">
                    {strategyScenario?.timeHorizon} years
                  </p>
                </div>
                <div className="p-3 rounded-lg bg-white dark:bg-gray-800">
                  <p className="text-xs font-medium text-blue-800 dark:text-blue-400 mb-1">
                    Assumptions
                  </p>
                  <p className="text-sm text-gray-900 dark:text-white font-medium">
                    {strategyScenario?.assumptions.length} defined
                  </p>
                </div>
              </div>
              <div className="p-3 rounded-lg bg-white dark:bg-gray-800">
                <p className="text-xs font-medium text-blue-800 dark:text-blue-400 mb-2">
                  Key Assumptions
                </p>
                <ul className="space-y-1">
                  {strategyScenario?.assumptions.map((assumption, i) => (
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

          {/* Alerts Section */}
          {(risk || finance) && (
            <div className="p-6 rounded-lg bg-amber-50 dark:bg-amber-900/20 border-2 border-amber-200 dark:border-amber-800">
              <div className="flex items-center gap-3 mb-4">
                <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-amber-600 text-white">
                  <AlertCircle className="w-5 h-5" />
                </div>
                <div>
                  <h2 className="text-lg font-bold text-amber-900 dark:text-amber-300">System Alerts</h2>
                  <p className="text-xs text-amber-700 dark:text-amber-400">Active warnings and notifications</p>
                </div>
              </div>
              <div className="space-y-3">
                {risk && risk.overallExposure === 'High' && (
                  <div className="p-3 rounded-lg bg-red-100 dark:bg-red-900/30 border border-red-200 dark:border-red-800">
                    <div className="flex items-start gap-2">
                      <AlertCircle className="w-5 h-5 text-red-600 dark:text-red-400 flex-shrink-0" />
                      <div>
                        <p className="text-sm font-medium text-red-900 dark:text-red-300">High Risk Exposure Detected</p>
                        <p className="text-xs text-red-700 dark:text-red-400 mt-1">
                          {risk.exposureCategories.filter(e => e.level === 'High').length} high-risk categories identified. Review risk mitigation strategies.
                        </p>
                      </div>
                    </div>
                  </div>
                )}
                {finance && finance.pressureLevel === 'High' && (
                  <div className="p-3 rounded-lg bg-orange-100 dark:bg-orange-900/30 border border-orange-200 dark:border-orange-800">
                    <div className="flex items-start gap-2">
                      <DollarSign className="w-5 h-5 text-orange-600 dark:text-orange-400 flex-shrink-0" />
                      <div>
                        <p className="text-sm font-medium text-orange-900 dark:text-orange-300">High Financial Pressure</p>
                        <p className="text-xs text-orange-700 dark:text-orange-400 mt-1">
                          Capital buffer requirement: {finance.capitalBufferRequirement}. Consider liquidity planning.
                        </p>
                      </div>
                    </div>
                  </div>
                )}
                {strategyScenario && strategyScenario.timeHorizon > 5 && (
                  <div className="p-3 rounded-lg bg-blue-100 dark:bg-blue-900/30 border border-blue-200 dark:border-blue-800">
                    <div className="flex items-start gap-2">
                      <TrendingUp className="w-5 h-5 text-blue-600 dark:text-blue-400 flex-shrink-0" />
                      <div>
                        <p className="text-sm font-medium text-blue-900 dark:text-blue-300">Long-Term Strategy</p>
                        <p className="text-xs text-blue-700 dark:text-blue-400 mt-1">
                          {strategyScenario.timeHorizon}-year horizon requires extended financial planning and quarterly reviews.
                        </p>
                      </div>
                    </div>
                  </div>
                )}
                {(!risk || risk.overallExposure === 'Low') && (!finance || finance.pressureLevel === 'Low') && (
                  <div className="p-3 rounded-lg bg-green-100 dark:bg-green-900/30 border border-green-200 dark:border-green-800">
                    <div className="flex items-start gap-2">
                      <Shield className="w-5 h-5 text-green-600 dark:text-green-400 flex-shrink-0" />
                      <div>
                        <p className="text-sm font-medium text-green-900 dark:text-green-300">All Systems Normal</p>
                        <p className="text-xs text-green-700 dark:text-green-400 mt-1">
                          Low risk exposure and financial pressure. Continue monitoring intelligence flow.
                        </p>
                      </div>
                    </div>
                  </div>
                )}
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
