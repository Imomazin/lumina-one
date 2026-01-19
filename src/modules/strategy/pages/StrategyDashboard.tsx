import { useState, useEffect } from 'react'
import { TrendingUp, Plus, X, Save } from 'lucide-react'
import { useLumina } from '../../../context/LuminaContext'
import { PageShell, Section, Card } from '../../../components/ui'
import { validateStrategyInput } from '../../../domain/strategy'

export function StrategyDashboard() {
  const { strategyScenario, createStrategy, updateStrategy } = useLumina()

  const [name, setName] = useState('')
  const [objective, setObjective] = useState('')
  const [timeHorizon, setTimeHorizon] = useState<number>(3)
  const [assumptions, setAssumptions] = useState<string[]>([''])
  const [errors, setErrors] = useState<string[]>([])

  // Load existing strategy when component mounts
  useEffect(() => {
    if (strategyScenario) {
      setName(strategyScenario.name)
      setObjective(strategyScenario.objective)
      setTimeHorizon(strategyScenario.timeHorizon)
      setAssumptions(strategyScenario.assumptions.length > 0 ? strategyScenario.assumptions : [''])
    }
  }, [strategyScenario])

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

    const input = {
      name: name.trim(),
      objective: objective.trim(),
      timeHorizon,
      assumptions: filteredAssumptions,
    }

    const validation = validateStrategyInput(input)
    if (!validation.valid) {
      setErrors(validation.errors)
      return
    }

    setErrors([])

    if (strategyScenario) {
      updateStrategy(input)
    } else {
      createStrategy(input)
    }
  }

  return (
    <PageShell>
      {/* Page Header */}
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

      {/* Scenario Info */}
      {strategyScenario && (
        <Card>
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-700 dark:text-gray-300">Active Scenario</p>
              <p className="text-xs text-gray-500 dark:text-gray-400 mt-1 font-mono">{strategyScenario.id}</p>
            </div>
            <div className="flex items-center gap-3">
              <div className="text-xs text-gray-500 dark:text-gray-400">
                Updated: {new Date(strategyScenario.updatedAt).toLocaleString()}
              </div>
              <div className="px-2.5 py-1 rounded-full bg-green-100 dark:bg-green-900/30 text-xs font-semibold text-green-700 dark:text-green-400 flex items-center gap-1.5">
                <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                Active
              </div>
            </div>
          </div>
        </Card>
      )}

      {/* Validation Errors */}
      {errors.length > 0 && (
        <Card className="bg-red-50 dark:bg-red-900/20 border-red-200 dark:border-red-800">
          <div className="flex items-start gap-3">
            <div className="flex-shrink-0 w-6 h-6 rounded-full bg-red-100 dark:bg-red-900/30 flex items-center justify-center">
              <X className="w-4 h-4 text-red-600 dark:text-red-400" />
            </div>
            <div className="flex-1">
              <h3 className="text-sm font-semibold text-red-900 dark:text-red-300 mb-2">
                Please fix the following errors:
              </h3>
              <ul className="space-y-1">
                {errors.map((error, i) => (
                  <li key={i} className="text-sm text-red-800 dark:text-red-400">
                    • {error}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Card>
      )}

      {/* Strategy Form */}
      <Section
        title={strategyScenario ? "Update Strategy" : "Create Strategy"}
        description="Define the strategic scenario for intelligence flow"
      >
        <Card>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Scenario Name
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="e.g., European Expansion 2026"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
              />
            </div>

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

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Time Horizon (years)
              </label>
              <input
                type="number"
                min="1"
                max="10"
                value={timeHorizon}
                onChange={(e) => setTimeHorizon(parseInt(e.target.value) || 1)}
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
                  className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors shadow-sm flex items-center gap-2"
                >
                  <Save className="w-4 h-4" />
                  {strategyScenario ? 'Update Strategy' : 'Create Strategy'}
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
      {strategyScenario && (
        <Section
          title="Active Strategy"
          description="Current strategic configuration - persisted and driving Risk & Finance"
        >
          <Card className="bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-800">
            <dl className="space-y-4">
              <div>
                <dt className="text-sm font-semibold text-green-900 dark:text-green-300">Scenario Name</dt>
                <dd className="text-sm text-green-800 dark:text-green-400 mt-1">{strategyScenario.name}</dd>
              </div>
              <div>
                <dt className="text-sm font-semibold text-green-900 dark:text-green-300">Objective</dt>
                <dd className="text-sm text-green-800 dark:text-green-400 mt-1">{strategyScenario.objective}</dd>
              </div>
              <div>
                <dt className="text-sm font-semibold text-green-900 dark:text-green-300">Time Horizon</dt>
                <dd className="text-sm text-green-800 dark:text-green-400 mt-1">{strategyScenario.timeHorizon} years</dd>
              </div>
              <div>
                <dt className="text-sm font-semibold text-green-900 dark:text-green-300">Assumptions</dt>
                <dd className="text-sm text-green-800 dark:text-green-400 mt-2">
                  <ul className="space-y-2">
                    {strategyScenario.assumptions.map((assumption, i) => (
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
              <div className="flex items-center justify-between pt-3 border-t border-green-200 dark:border-green-800">
                <div className="text-xs text-green-700 dark:text-green-400">
                  Created: {new Date(strategyScenario.createdAt).toLocaleString()}
                </div>
                <div className="px-2 py-1 rounded bg-green-200 dark:bg-green-800 text-xs font-medium text-green-900 dark:text-green-200">
                  Persisted in LocalStorage
                </div>
              </div>
            </dl>
          </Card>
        </Section>
      )}
    </PageShell>
  )
}
