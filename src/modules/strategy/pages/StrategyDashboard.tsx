import { TrendingUp } from 'lucide-react'
import { ModuleCard } from '../../../core/layout'

export function StrategyDashboard() {
  return (
    <ModuleCard
      icon={TrendingUp}
      title="Strategy"
      description="Strategic Planning & Execution Intelligence"
      status="coming-soon"
    >
      <div className="text-center p-6 rounded-xl bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
        <p className="text-sm text-gray-600 dark:text-gray-400">
          The Strategy module is under development. It will provide comprehensive
          strategic planning, execution tracking, and performance management capabilities.
        </p>
      </div>
    </ModuleCard>
  )
}
