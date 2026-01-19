import { DollarSign } from 'lucide-react'
import { ModuleCard } from '../../../core/layout'

export function FinanceDashboard() {
  return (
    <ModuleCard
      icon={DollarSign}
      title="Finance"
      description="Financial Intelligence & Analysis"
      status="coming-soon"
    >
      <div className="text-center p-6 rounded-xl bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
        <p className="text-sm text-gray-600 dark:text-gray-400">
          The Finance module is under development. It will provide comprehensive
          financial analytics, budgeting, forecasting, and reporting capabilities.
        </p>
      </div>
    </ModuleCard>
  )
}
