import { useState, useEffect } from 'react'
import { TrendingUp, Plus, X } from 'lucide-react'
import { useLumina } from '../../../context/LuminaContext'
import { PageShell, Section, Card } from '../../../components/ui'

export function StrategyDashboard() {
  const { strategy, updateStrategy, scenarioId } = useLumina()

  const [objective, setObjective] = useState('')
  const [timeHorizon, setTimeHorizon] = useState('')
  const [assumptions, setAssumptions] = useState<string[]>([''])

  // Load existing strategy when component mounts
  useEffect(() => {
    if (strategy) {
      setObjective(strategy.objective)
      setTimeHorizon(strategy.timeHorizon)
      setAssumptions(strategy.assumptions.length > 0 ? strategy.assumptions : [''])
    }
  }, [strategy])

  const handleAddAssumption = () => {
    setAssumptions([...assumptions, ''])
  }

  const handleRemoveAssumption = (index: number) => {
    if (assumptions.length > 1) {
      setAssumptions(assumptions.filter((_, i) => i !== index))
    }
  }

  const handleAssumptionChange = (index: number, value: string) => {
    const newAssumptions = [...assumptions]
    newAssumptions[index] = value
    setAssumptions(newAssumptions)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    const filteredAssumptions = assumptions.filter(a => a.trim() !== '')

    if (!objective.trim() || !timeHorizon.trim() || filteredAssumptions.length === 0) {
      return
    }

    updateStrategy({
      objective: objective.trim(),
      timeHorizon: timeHorizon.trim(),
      assumptions: filteredAssumptions,
    })
  }

  return (
    <PageShell>
      {/* Page Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 shadow-sm">
            <TrendingUp className="w-6 h-6 text-white" />
          </div>
          <div>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Strategy</h1>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
              Define strategic objectives and key assumptions
            </p>
          </div>
        </div>
        <div className="px-3 py-1.5 bg-amber-100 dark:bg-amber-900/30 border border-amber-300 dark:border-amber-700 rounded-lg">
          <span className="text-xs font-semibold text-amber-900 dark:text-amber-300">
            DEMO / CONCEPT PREVIEW
          </span>
        </div>
      </div>

      {/* Scenario Badge */}
      <Card>
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-gray-700 dark:text-gray-300">Active Scenario</p>
            <p className="text-xs text-gray-500 dark:text-gray-400 mt-1 font-mono">{scenarioId}</p>
          </div>
          <div className="px-2.5 py-1 rounded-full bg-blue-100 dark:bg-blue-900/30 text-xs font-semibold text-blue-700 dark:text-blue-400 flex items-center gap-1.5">
            <div className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
            Live
          </div>
        </div>
      </Card>

      {/* Strategic Objective Section */}
      <Section
        title="Strategic Objective"
        description="Define the primary strategic goal for this scenario"
      >
        <Card>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Objective
              </label>
              <input
                type="text"
                value={objective}
                onChange={(e) => setObjective(e.target.value)}
                placeholder="e.g., Expand into European markets within 24 months"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Time Horizon (years)
              </label>
              <input
                type="text"
                value={timeHorizon}
                onChange={(e) => setTimeHorizon(e.target.value)}
                placeholder="e.g., 2 or 5"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
              />
            </div>
          </form>
        </Card>
      </Section>

      {/* Key Assumptions Section */}
      <Section
        title="Key Assumptions"
        description="Define the critical assumptions underlying your strategy"
      >
        <Card>
          <form onSubmit={handleSubmit}>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  Assumptions
                </label>
                <button
                  type="button"
                  onClick={handleAddAssumption}
                  className="flex items-center gap-1 px-3 py-1 text-sm text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-lg transition-colors"
                >
                  <Plus className="w-4 h-4" />
                  Add
                </button>
              </div>

              <div className="space-y-3">
                {assumptions.map((assumption, index) => (
                  <div key={index} className="flex gap-2">
                    <input
                      type="text"
                      value={assumption}
                      onChange={(e) => handleAssumptionChange(index, e.target.value)}
                      placeholder={`Assumption ${index + 1}`}
                      className="flex-1 px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                    {assumptions.length > 1 && (
                      <button
                        type="button"
                        onClick={() => handleRemoveAssumption(index)}
                        className="flex items-center justify-center w-11 h-11 text-gray-400 hover:text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg transition-colors"
                      >
                        <X className="w-5 h-5" />
                      </button>
                    )}
                  </div>
                ))}
              </div>

              <div className="flex items-center gap-4 pt-4 border-t border-gray-200 dark:border-gray-800">
                <button
                  type="submit"
                  className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors shadow-sm"
                >
                  Update Strategy
                </button>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Changes will automatically propagate to Risk and Finance modules
                </p>
              </div>
            </div>
          </form>
        </Card>
      </Section>

      {/* Active Strategy Display */}
      {strategy && (
        <Section
          title="Active Strategy"
          description="Current strategic configuration for this scenario"
        >
          <Card className="bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-800">
            <dl className="space-y-4">
              <div>
                <dt className="text-sm font-semibold text-green-900 dark:text-green-300">Objective</dt>
                <dd className="text-sm text-green-800 dark:text-green-400 mt-1">{strategy.objective}</dd>
              </div>
              <div>
                <dt className="text-sm font-semibold text-green-900 dark:text-green-300">Time Horizon</dt>
                <dd className="text-sm text-green-800 dark:text-green-400 mt-1">{strategy.timeHorizon} years</dd>
              </div>
              <div>
                <dt className="text-sm font-semibold text-green-900 dark:text-green-300">Assumptions</dt>
                <dd className="text-sm text-green-800 dark:text-green-400 mt-2">
                  <ul className="space-y-2">
                    {strategy.assumptions.map((assumption, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="flex-shrink-0 w-5 h-5 rounded-full bg-green-200 dark:bg-green-800 text-green-800 dark:text-green-200 flex items-center justify-center text-xs font-medium">
                          {i + 1}
                        </span>
                        <span>{assumption}</span>
                      </li>
                    ))}
                  </ul>
                </dd>
              </div>
            </dl>
          </Card>
        </Section>
      )}
    </PageShell>
  )
}
