import { DollarSign, TrendingUp, PieChart, BarChart3, FileText, Calculator } from 'lucide-react'

export function FinanceDashboard() {
  const features = [
    {
      icon: BarChart3,
      title: 'Financial Analytics',
      description: 'Real-time financial performance metrics and KPIs',
    },
    {
      icon: PieChart,
      title: 'Budget Management',
      description: 'Track budgets, forecasts, and variance analysis',
    },
    {
      icon: TrendingUp,
      title: 'Revenue Intelligence',
      description: 'Monitor revenue streams and growth patterns',
    },
    {
      icon: Calculator,
      title: 'Scenario Modeling',
      description: 'Model financial scenarios and projections',
    },
    {
      icon: FileText,
      title: 'Financial Reporting',
      description: 'Generate comprehensive financial reports',
    },
    {
      icon: DollarSign,
      title: 'Cash Flow Analysis',
      description: 'Analyze and forecast cash flow patterns',
    },
  ]

  return (
    <div className="flex items-center justify-center min-h-full p-8">
      <div className="max-w-4xl w-full">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 mb-6">
            <DollarSign className="w-10 h-10" />
          </div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-3">
            Finance Module
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-2">
            Financial Intelligence & Analysis
          </p>
          <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400">
            Coming Soon
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {features.map((feature) => {
            const Icon = feature.icon
            return (
              <div
                key={feature.title}
                className="p-6 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800"
              >
                <div className="flex items-start gap-4">
                  <div className="p-2 rounded-lg bg-green-50 dark:bg-green-900/20 text-green-600 dark:text-green-400">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-1">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        <div className="text-center">
          <div className="inline-flex flex-col items-center gap-3 p-6 rounded-xl bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
            <p className="text-sm text-gray-600 dark:text-gray-400">
              The Finance module is under development. It will provide comprehensive
              financial analytics, budgeting, forecasting, and reporting capabilities.
            </p>
            <p className="text-xs text-gray-500 dark:text-gray-500">
              Check back soon for updates
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
