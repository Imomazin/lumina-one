import { ReactNode } from 'react'
import { useStrategyStore, useRiskStore } from '../store'
import { EmptyState } from './ui'
import { AlertCircle, TrendingUp, Shield } from 'lucide-react'

interface RouteGuardProps {
  children: ReactNode
  requires?: 'strategy' | 'strategy-and-risk'
}

export function RouteGuard({ children, requires }: RouteGuardProps) {
  const strategyScenario = useStrategyStore(state => state.scenario)
  const riskProfile = useRiskStore(state => state.profile)

  // No requirements - allow access
  if (!requires) {
    return <>{children}</>
  }

  // Requires Strategy
  if (requires === 'strategy' && !strategyScenario) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-50 dark:bg-gray-900">
        <div className="max-w-2xl w-full mx-auto px-6">
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl border-2 border-amber-200 dark:border-amber-800 p-12">
            <EmptyState
              icon={AlertCircle}
              title="Strategy Required"
              description="Risk intelligence derives from Strategic assumptions. Please configure your Strategy first to enable Risk analysis."
              action={{
                label: 'Configure Strategy',
                onClick: () => window.location.href = '/app/strategy'
              }}
            >
              <div className="mt-8 p-4 rounded-xl bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800">
                <p className="text-sm text-blue-800 dark:text-blue-300 font-medium mb-2">
                  <strong>Intelligence Flow:</strong> Strategy → Risk → Finance
                </p>
                <p className="text-xs text-blue-700 dark:text-blue-400">
                  Risk exposures are automatically derived from your strategic assumptions and time horizon.
                </p>
              </div>
            </EmptyState>
          </div>
        </div>
      </div>
    )
  }

  // Requires Strategy AND Risk
  if (requires === 'strategy-and-risk') {
    if (!strategyScenario) {
      return (
        <div className="flex items-center justify-center min-h-screen bg-gray-50 dark:bg-gray-900">
          <div className="max-w-2xl w-full mx-auto px-6">
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl border-2 border-amber-200 dark:border-amber-800 p-12">
              <EmptyState
                icon={TrendingUp}
                title="Strategy Required"
                description="Finance derives from both Strategy and Risk. Please configure your Strategy first."
                action={{
                  label: 'Configure Strategy',
                  onClick: () => window.location.href = '/app/strategy'
                }}
              >
                <div className="mt-8 p-4 rounded-xl bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800">
                  <p className="text-sm text-blue-800 dark:text-blue-300 font-medium mb-2">
                    <strong>Intelligence Flow:</strong> Strategy → Risk → Finance
                  </p>
                  <p className="text-xs text-blue-700 dark:text-blue-400">
                    Financial implications are automatically calculated from strategic objectives and risk exposure.
                  </p>
                </div>
              </EmptyState>
            </div>
          </div>
        </div>
      )
    }

    if (!riskProfile) {
      return (
        <div className="flex items-center justify-center min-h-screen bg-gray-50 dark:bg-gray-900">
          <div className="max-w-2xl w-full mx-auto px-6">
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl border-2 border-amber-200 dark:border-amber-800 p-12">
              <EmptyState
                icon={Shield}
                title="Risk Analysis Required"
                description="Finance requires both Strategy and Risk. Your Strategy is configured, but Risk analysis is missing."
                action={{
                  label: 'View Risk Analysis',
                  onClick: () => window.location.href = '/app/risk'
                }}
              >
                <div className="mt-8 p-4 rounded-xl bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800">
                  <p className="text-sm text-blue-800 dark:text-blue-300 font-medium mb-2">
                    <strong>Dual Dependency:</strong> Finance consumes Strategy + Risk
                  </p>
                  <p className="text-xs text-blue-700 dark:text-blue-400">
                    Risk should be automatically derived from your Strategy. Check the Risk module to view exposure analysis.
                  </p>
                </div>
              </EmptyState>
            </div>
          </div>
        </div>
      )
    }
  }

  // All requirements met - render children
  return <>{children}</>
}
