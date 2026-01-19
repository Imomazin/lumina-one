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
  scenario: StrategyScenario | null
  isLoading: boolean
  error: string | null

  // Actions
  createScenario: (input: StrategyInput) => void
  updateScenario: (updates: Partial<StrategyInput>) => void
  deleteScenario: () => void
  setScenario: (scenario: StrategyScenario | null) => void
}

export const useStrategyStore = create<StrategyState>()(
  persist(
    (set) => ({
      scenario: null,
      isLoading: false,
      error: null,

      createScenario: (input: StrategyInput) => {
        const now = new Date().toISOString()
        const scenario: StrategyScenario = {
          id: crypto.randomUUID(),
          ...input,
          createdAt: now,
          updatedAt: now,
          status: 'active',
        }
        set({ scenario, error: null })
      },

      updateScenario: (updates: Partial<StrategyInput>) => {
        set((state) => {
          if (!state.scenario) return state
          return {
            scenario: {
              ...state.scenario,
              ...updates,
              updatedAt: new Date().toISOString(),
            },
            error: null,
          }
        })
      },

      deleteScenario: () => {
        set({ scenario: null, error: null })
      },

      setScenario: (scenario: StrategyScenario | null) => {
        set({ scenario, error: null })
      },
    }),
    {
      name: 'lumina-strategy-storage',
    }
  )
)
