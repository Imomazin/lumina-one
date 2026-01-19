import { useState, useEffect } from 'react'
import { TrendingUp, Plus, X } from 'lucide-react'
import { useLumina } from '../../../context/LuminaContext'
import { PageContainer } from '../../../core/layout'

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
    <PageContainer>
      <div className="max-w-3xl">
        {/* Header */}
        <div className="flex items-center gap-3 mb-6">
          <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-blue-100 dark:bg-blue-900/20">
            <TrendingUp className="w-5 h-5 text-blue-600 dark:text-blue-400" />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Strategy</h1>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Define strategic objectives and assumptions
            </p>
          </div>
        </div>

        {/* Scenario ID */}
        <div className="mb-6 px-4 py-2 bg-gray-50 dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
          <p className="text-xs text-gray-500 dark:text-gray-400">
            Scenario: <span className="font-mono text-gray-700 dark:text-gray-300">{scenarioId}</span>
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Strategic Objective */}
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Strategic Objective
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

          {/* Time Horizon */}
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

          {/* Key Assumptions */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Key Assumptions
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
          </div>

          {/* Submit Button */}
          <div className="flex items-center gap-4 pt-4">
            <button
              type="submit"
              className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors"
            >
              Update Strategy
            </button>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Changes will automatically propagate to Risk and Finance modules
            </p>
          </div>
        </form>

        {/* Current Strategy Display */}
        {strategy && (
          <div className="mt-8 p-6 rounded-lg bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800">
            <h3 className="text-sm font-semibold text-green-900 dark:text-green-300 mb-4">
              Active Strategy
            </h3>
            <dl className="space-y-3 text-sm">
              <div>
                <dt className="font-medium text-green-800 dark:text-green-400">Objective:</dt>
                <dd className="text-green-700 dark:text-green-300 mt-1">{strategy.objective}</dd>
              </div>
              <div>
                <dt className="font-medium text-green-800 dark:text-green-400">Time Horizon:</dt>
                <dd className="text-green-700 dark:text-green-300 mt-1">{strategy.timeHorizon} years</dd>
              </div>
              <div>
                <dt className="font-medium text-green-800 dark:text-green-400">Assumptions:</dt>
                <dd className="text-green-700 dark:text-green-300 mt-1">
                  <ul className="list-disc list-inside space-y-1">
                    {strategy.assumptions.map((assumption, i) => (
                      <li key={i}>{assumption}</li>
                    ))}
                  </ul>
                </dd>
              </div>
            </dl>
          </div>
        )}
      </div>
    </PageContainer>
  )
}
