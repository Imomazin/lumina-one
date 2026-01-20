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

export interface ActivityLog {
  id: string
  action: string
  description: string
  timestamp: string
  scenarioId?: string
}

interface StrategyState {
  scenarios: StrategyScenario[]
  activeScenarioId: string | null
  scenario: StrategyScenario | null // Current active scenario (computed)
  isLoading: boolean
  error: string | null
  activityLog: ActivityLog[]

  // Actions
  createScenario: (input: StrategyInput) => void
  updateScenario: (updates: Partial<StrategyInput>) => void
  deleteScenario: (id?: string) => void
  setActiveScenario: (id: string) => void
  setScenario: (scenario: StrategyScenario | null) => void
  getAllScenarios: () => StrategyScenario[]
  getRecentActivity: (limit?: number) => ActivityLog[]
  logActivity: (action: string, description: string, scenarioId?: string) => void
}

export const useStrategyStore = create<StrategyState>()(
  persist(
    (set, get) => ({
      scenarios: [],
      activeScenarioId: null,
      scenario: null,
      isLoading: false,
      error: null,
      activityLog: [],

      logActivity: (action: string, description: string, scenarioId?: string) => {
        const activity: ActivityLog = {
          id: crypto.randomUUID(),
          action,
          description,
          timestamp: new Date().toISOString(),
          scenarioId,
        }
        set((state) => ({
          activityLog: [activity, ...state.activityLog].slice(0, 50), // Keep last 50 activities
        }))
      },

      getRecentActivity: (limit = 10) => {
        return get().activityLog.slice(0, limit)
      },

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

        get().logActivity(
          'scenario_created',
          `Created new scenario "${input.name}"`,
          newScenario.id
        )
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

        const currentScenario = get().scenario
        if (currentScenario) {
          get().logActivity(
            'scenario_updated',
            `Updated scenario "${currentScenario.name}"`,
            currentScenario.id
          )
        }
      },

      deleteScenario: (id?: string) => {
        const targetId = id || get().activeScenarioId
        const targetScenario = get().scenarios.find(s => s.id === targetId)

        set((state) => {
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

        if (targetScenario) {
          get().logActivity(
            'scenario_deleted',
            `Deleted scenario "${targetScenario.name}"`,
            targetId || undefined
          )
        }
      },

      setActiveScenario: (id: string) => {
        const newActiveScenario = get().scenarios.find(s => s.id === id)

        set({
          activeScenarioId: id,
          scenario: newActiveScenario || null,
          error: null,
        })

        if (newActiveScenario) {
          get().logActivity(
            'scenario_switched',
            `Switched to scenario "${newActiveScenario.name}"`,
            id
          )
        }
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
