import { DollarSign, TrendingUp, AlertCircle, CheckCircle, ArrowRight, Shield } from 'lucide-react'
import { useStrategyStore, useRiskStore, useFinanceStore } from '../../../store'
import { PageShell, Card, ActivityFeed, Section } from '../../../components/ui'

export function FinanceDashboard() {
  const strategyScenario = useStrategyStore(state => state.scenario)
  const risk = useRiskStore(state => state.profile)
  const finance = useFinanceStore(state => state.model)
  const getRecentActivity = useFinanceStore(state => state.getRecentActivity)

  return (
    <PageShell>
      <div>
        {/* Header */}
        <div className="flex items-center gap-4 mb-8">
          <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500 to-green-600 shadow-sm">
            <DollarSign className="w-6 h-6 text-white" />
          </div>
          <div>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Finance</h1>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
              Financial implications auto-derived from Strategy and Risk
            </p>
          </div>
        </div>

        {/* Scenario ID */}
        {strategyScenario && (
          <div className="mb-8 px-4 py-3 bg-emerald-50 dark:bg-emerald-900/20 rounded-xl border border-emerald-200 dark:border-emerald-800 flex items-center justify-between">
            <p className="text-sm text-emerald-700 dark:text-emerald-400">
              Active Scenario: <span className="font-mono font-semibold">{strategyScenario.name}</span>
            </p>
            {finance && (
              <div className="px-2.5 py-1 rounded-full bg-emerald-100 dark:bg-emerald-900/30 text-xs font-semibold text-emerald-700 dark:text-emerald-400 flex items-center gap-1.5">
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                Live
              </div>
            )}
          </div>
        )}

        {/* Dependency Guard: Finance requires both Strategy AND Risk */}
        {!strategyScenario ? (
          <Card>
            <div className="text-center py-12">
              <div className="flex justify-center mb-4">
                <div className="p-4 rounded-full bg-amber-100 dark:bg-amber-900/30">
                  <AlertCircle className="w-12 h-12 text-amber-600 dark:text-amber-400" />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">
                Strategy Required
              </h3>
              <p className="text-slate-600 dark:text-slate-400 mb-6 max-w-md mx-auto">
                Finance derives from both Strategy and Risk. Please configure your Strategy first.
              </p>
              <a
                href="/app/strategy"
                className="inline-flex items-center gap-2 px-6 py-3 bg-lumina-600 hover:bg-lumina-700 text-white font-medium rounded-lg transition-colors shadow-sm"
              >
                <TrendingUp className="w-5 h-5" />
                Configure Strategy
                <ArrowRight className="w-4 h-4" />
              </a>
              <div className="mt-8 p-4 rounded-lg bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 max-w-lg mx-auto">
                <p className="text-sm text-blue-800 dark:text-blue-300">
                  <strong>Intelligence Flow:</strong> Strategy → Risk → Finance
                </p>
                <p className="text-xs text-blue-700 dark:text-blue-400 mt-1">
                  Financial implications are automatically calculated from strategic objectives, time horizon, and risk exposure.
                </p>
              </div>
            </div>
          </Card>
        ) : !risk ? (
          <Card>
            <div className="text-center py-12">
              <div className="flex justify-center mb-4">
                <div className="p-4 rounded-full bg-amber-100 dark:bg-amber-900/30">
                  <AlertCircle className="w-12 h-12 text-amber-600 dark:text-amber-400" />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">
                Risk Analysis Required
              </h3>
              <p className="text-slate-600 dark:text-slate-400 mb-6 max-w-md mx-auto">
                Finance requires both Strategy and Risk. Your Strategy is configured, but Risk analysis is missing.
              </p>
              <a
                href="/app/risk"
                className="inline-flex items-center gap-2 px-6 py-3 bg-lumina-600 hover:bg-lumina-700 text-white font-medium rounded-lg transition-colors shadow-sm"
              >
                <Shield className="w-5 h-5" />
                View Risk Analysis
                <ArrowRight className="w-4 h-4" />
              </a>
              <div className="mt-8 p-4 rounded-lg bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 max-w-lg mx-auto">
                <p className="text-sm text-blue-800 dark:text-blue-300">
                  <strong>Dual Dependency:</strong> Finance consumes both Strategy and Risk
                </p>
                <p className="text-xs text-blue-700 dark:text-blue-400 mt-1">
                  Risk should be automatically derived from your Strategy. Check the Risk module to view exposure analysis.
                </p>
              </div>
            </div>
          </Card>
        ) : null}

        {/* Active Finance Analysis */}
        {strategyScenario && risk && finance && (
          <div className="space-y-6">
            {/* Strategy Context */}
            <div className="p-4 rounded-lg bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800">
              <h3 className="text-sm font-semibold text-blue-900 dark:text-blue-300 mb-3">
                Strategy Context
              </h3>
              <div className="space-y-2 text-sm">
                <div className="flex items-start gap-2">
                  <TrendingUp className="w-4 h-4 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-medium text-blue-800 dark:text-blue-300">Objective:</span>
                    <span className="text-blue-700 dark:text-blue-400 ml-2">{strategyScenario?.objective}</span>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-medium text-blue-800 dark:text-blue-300">Time Horizon:</span>
                    <span className="text-blue-700 dark:text-blue-400 ml-2">{strategyScenario?.timeHorizon} years</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Risk Context */}
            <div className={`p-4 rounded-lg border ${
              risk.overallExposure === 'High'
                ? 'bg-red-50 dark:bg-red-900/20 border-red-200 dark:border-red-800'
                : risk.overallExposure === 'Medium'
                ? 'bg-amber-50 dark:bg-amber-900/20 border-amber-200 dark:border-amber-800'
                : 'bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-800'
            }`}>
              <h3 className={`text-sm font-semibold mb-3 ${
                risk.overallExposure === 'High'
                  ? 'text-red-900 dark:text-red-300'
                  : risk.overallExposure === 'Medium'
                  ? 'text-amber-900 dark:text-amber-300'
                  : 'text-green-900 dark:text-green-300'
              }`}>
                Risk Context
              </h3>
              <div className="flex items-center justify-between">
                <span className={`text-sm ${
                  risk.overallExposure === 'High'
                    ? 'text-red-800 dark:text-red-300'
                    : risk.overallExposure === 'Medium'
                    ? 'text-amber-800 dark:text-amber-300'
                    : 'text-green-800 dark:text-green-300'
                }`}>
                  Overall Risk Exposure
                </span>
                <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                  risk.overallExposure === 'High'
                    ? 'bg-red-200 dark:bg-red-800 text-red-800 dark:text-red-200'
                    : risk.overallExposure === 'Medium'
                    ? 'bg-amber-200 dark:bg-amber-800 text-amber-800 dark:text-amber-200'
                    : 'bg-green-200 dark:bg-green-800 text-green-800 dark:text-green-200'
                }`}>
                  {risk.overallExposure}
                </span>
              </div>
            </div>

            {/* Derived Financial Analysis */}
            <div className="p-6 rounded-lg bg-gradient-to-br from-emerald-50 to-green-50 dark:from-emerald-900/20 dark:to-green-900/20 border border-emerald-200 dark:border-emerald-800">
              <h3 className="text-lg font-semibold text-emerald-900 dark:text-emerald-300 mb-4">
                Derived Financial Implications
              </h3>

              {/* Financial Pressure Level */}
              <div className="mb-6 p-4 rounded-lg bg-white dark:bg-gray-800 border border-emerald-200 dark:border-emerald-700">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    Financial Pressure Level
                  </span>
                  <span className={`px-3 py-1 rounded-full text-sm font-bold ${
                    finance.pressureLevel === 'High'
                      ? 'bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400'
                      : finance.pressureLevel === 'Medium'
                      ? 'bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-400'
                      : 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400'
                  }`}>
                    {finance.pressureLevel}
                  </span>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Based on {risk.overallExposure.toLowerCase()} risk exposure and {strategyScenario?.timeHorizon}-year strategic horizon
                </p>
              </div>

              {/* Capital Buffer Requirement */}
              <div className="mb-6 p-4 rounded-lg bg-white dark:bg-gray-800 border border-emerald-200 dark:border-emerald-700">
                <h4 className="text-sm font-semibold text-emerald-800 dark:text-emerald-400 mb-2">
                  Recommended Capital Buffer
                </h4>
                <p className="text-2xl font-bold text-emerald-900 dark:text-emerald-300 mb-1">
                  {finance.capitalBufferRequirement}
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Adjusted for current risk profile
                </p>
              </div>

              {/* Financial Implications List */}
              <div className="space-y-3">
                <h4 className="text-sm font-semibold text-emerald-800 dark:text-emerald-400 mb-3">
                  Key Implications
                </h4>
                {finance.implications.map((implication, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 p-3 rounded-lg bg-white dark:bg-gray-800 border border-emerald-200 dark:border-emerald-700"
                  >
                    <div className="flex items-center justify-center w-6 h-6 rounded-full bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400 flex-shrink-0 text-sm font-bold">
                      {index + 1}
                    </div>
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      {implication}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Derivation Logic Explanation */}
            <div className="p-4 rounded-lg bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
              <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                How This Was Derived
              </h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Finance automatically analyzes Strategy time horizon ({strategyScenario?.timeHorizon} years) and
                Risk exposure level ({risk.overallExposure}) to determine financial pressure, capital
                requirements, and liquidity implications. This is a live, reactive calculation that updates
                whenever Strategy or Risk changes.
              </p>
            </div>
          </div>
        )}

        {/* Activity Feed */}
        {strategyScenario && risk && (
          <Section
            title="Activity Log"
            description="Recent financial model computations and updates"
          >
            <ActivityFeed
              activities={getRecentActivity(10)}
              emptyMessage="No activity yet"
            />
          </Section>
        )}
      </div>
    </PageShell>
  )
}
