import { create } from 'zustand'
import { persist } from 'zustand/middleware'

export interface StrategyScenario {
  id: string
  name: string
  objective: string
  timeHorizon: number // Years
  assumptions: string[]
  createdAt: string
  updatedAt: string
  status: 'draft' | 'active' | 'archived'
}

export interface StrategyInput {
  name: string
  objective: string
  timeHorizon: number
  assumptions: string[]
}

interface StrategyState {
  scenarios: StrategyScenario[]
  activeScenarioId: string | null
  scenario: StrategyScenario | null // Current active scenario (computed)
  isLoading: boolean
  error: string | null

  // Actions
  createScenario: (input: StrategyInput) => void
  updateScenario: (updates: Partial<StrategyInput>) => void
  deleteScenario: (id?: string) => void
  setActiveScenario: (id: string) => void
  setScenario: (scenario: StrategyScenario | null) => void
  getAllScenarios: () => StrategyScenario[]
}

export const useStrategyStore = create<StrategyState>()(
  persist(
    (set, get) => ({
      scenarios: [],
      activeScenarioId: null,
      scenario: null,
      isLoading: false,
      error: null,

      createScenario: (input: StrategyInput) => {
        const now = new Date().toISOString()
        const newScenario: StrategyScenario = {
          id: crypto.randomUUID(),
          ...input,
          createdAt: now,
          updatedAt: now,
          status: 'active',
        }

        set((state) => ({
          scenarios: [...state.scenarios, newScenario],
          activeScenarioId: newScenario.id,
          scenario: newScenario,
          error: null,
        }))
      },

      updateScenario: (updates: Partial<StrategyInput>) => {
        set((state) => {
          if (!state.scenario) return state

          const updatedScenario = {
            ...state.scenario,
            ...updates,
            updatedAt: new Date().toISOString(),
          }

          const updatedScenarios = state.scenarios.map(s =>
            s.id === state.scenario!.id ? updatedScenario : s
          )

          return {
            scenarios: updatedScenarios,
            scenario: updatedScenario,
            error: null,
          }
        })
      },

      deleteScenario: (id?: string) => {
        set((state) => {
          const targetId = id || state.activeScenarioId
          if (!targetId) return state

          const updatedScenarios = state.scenarios.filter(s => s.id !== targetId)
          const newActiveId = updatedScenarios.length > 0 ? updatedScenarios[0].id : null
          const newActiveScenario = updatedScenarios.find(s => s.id === newActiveId) || null

          return {
            scenarios: updatedScenarios,
            activeScenarioId: newActiveId,
            scenario: newActiveScenario,
            error: null,
          }
        })
      },

      setActiveScenario: (id: string) => {
        set((state) => {
          const newActiveScenario = state.scenarios.find(s => s.id === id) || null
          return {
            activeScenarioId: id,
            scenario: newActiveScenario,
            error: null,
          }
        })
      },

      setScenario: (scenario: StrategyScenario | null) => {
        set({ scenario, error: null })
      },

      getAllScenarios: () => {
        return get().scenarios
      },
    }),
    {
      name: 'lumina-strategy-storage',
    }
  )
)
