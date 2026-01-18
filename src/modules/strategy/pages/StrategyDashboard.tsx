import { TrendingUp, Target, Users, FileText, Calendar, BarChart3 } from 'lucide-react'

export function StrategyDashboard() {
  const features = [
    {
      icon: Target,
      title: 'Strategic Planning',
      description: 'Define and track strategic objectives and key results',
    },
    {
      icon: BarChart3,
      title: 'Performance Analytics',
      description: 'Monitor strategic KPIs and performance metrics',
    },
    {
      icon: Calendar,
      title: 'Roadmap Management',
      description: 'Plan and visualize strategic initiatives over time',
    },
    {
      icon: Users,
      title: 'Stakeholder Alignment',
      description: 'Collaborate with teams on strategic execution',
    },
    {
      icon: FileText,
      title: 'Strategic Reporting',
      description: 'Generate executive-level strategy reports',
    },
    {
      icon: TrendingUp,
      title: 'Scenario Planning',
      description: 'Model and evaluate strategic alternatives',
    },
  ]

  return (
    <div className="flex items-center justify-center min-h-full p-8">
      <div className="max-w-4xl w-full">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 mb-6">
            <TrendingUp className="w-10 h-10" />
          </div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-3">
            Strategy Module
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-2">
            Strategic Planning & Execution Intelligence
          </p>
          <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400">
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
                  <div className="p-2 rounded-lg bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400">
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
              The Strategy module is under development. It will provide comprehensive
              strategic planning, execution tracking, and performance management capabilities.
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
