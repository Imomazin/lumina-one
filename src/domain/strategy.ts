/**
 * Strategy Domain Model
 *
 * This is the source of truth for strategic planning in Lumina One.
 * All other modules (Risk, Finance) derive their state from StrategyScenario.
 */

export interface StrategyScenario {
  id: string
  name: string
  objective: string
  timeHorizon: number // Years (e.g., 2, 3, 5)
  assumptions: string[]
  createdAt: string // ISO timestamp
  updatedAt: string // ISO timestamp
  status: 'draft' | 'active' | 'archived'
}

export interface StrategyScenarioInput {
  name: string
  objective: string
  timeHorizon: number
  assumptions: string[]
}

/**
 * Create a new StrategyScenario with generated metadata
 */
export function createStrategyScenario(
  input: StrategyScenarioInput
): StrategyScenario {
  const now = new Date().toISOString()

  return {
    id: generateScenarioId(),
    name: input.name,
    objective: input.objective,
    timeHorizon: input.timeHorizon,
    assumptions: input.assumptions,
    createdAt: now,
    updatedAt: now,
    status: 'active',
  }
}

/**
 * Update an existing StrategyScenario
 */
export function updateStrategyScenario(
  existing: StrategyScenario,
  updates: Partial<StrategyScenarioInput>
): StrategyScenario {
  return {
    ...existing,
    ...updates,
    updatedAt: new Date().toISOString(),
  }
}

/**
 * Generate a unique scenario ID
 */
function generateScenarioId(): string {
  return `scenario-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`
}

/**
 * Validate StrategyScenario input
 */
export function validateStrategyInput(
  input: Partial<StrategyScenarioInput>
): { valid: boolean; errors: string[] } {
  const errors: string[] = []

  if (!input.name?.trim()) {
    errors.push('Scenario name is required')
  }

  if (!input.objective?.trim()) {
    errors.push('Strategic objective is required')
  }

  if (!input.timeHorizon || input.timeHorizon <= 0) {
    errors.push('Time horizon must be greater than 0')
  }

  if (!input.assumptions || input.assumptions.filter(a => a.trim()).length === 0) {
    errors.push('At least one assumption is required')
  }

  return {
    valid: errors.length === 0,
    errors,
  }
}
