import { create } from 'zustand'
import { persist } from 'zustand/middleware'

// Workflow step types from Lumina S
export type WorkflowStep = 'discover' | 'diagnose' | 'design' | 'decide' | 'deliver'

// Organization profile
export interface OrganizationProfile {
  name: string
  industry: string
  size: 'startup' | 'small' | 'medium' | 'large' | 'enterprise'
  challenges: string[]
  goals: string[]
}

// KPI tracking
export interface KPI {
  id: string
  name: string
  target: string
  current?: string
  unit?: string
}

export interface StrategyScenario {
  id: string
  name: string
  objective: string
  timeHorizon: number // Years
  assumptions: string[]
  createdAt: string
  updatedAt: string
  status: 'draft' | 'active' | 'archived'

  // Enhanced fields from Lumina S
  currentStep?: WorkflowStep
  completedSteps?: WorkflowStep[]
  confidenceIndex?: number // 0-100
  riskGauge?: number // 0-100
  organization?: OrganizationProfile
  kpis?: KPI[]
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

  // Enhanced actions from Lumina S
  updateOrganization: (org: OrganizationProfile) => void
  addKPI: (kpi: Omit<KPI, 'id'>) => void
  updateKPI: (id: string, updates: Partial<KPI>) => void
  deleteKPI: (id: string) => void
  setWorkflowStep: (step: WorkflowStep) => void
  completeWorkflowStep: (step: WorkflowStep) => void
  updateConfidenceIndex: (value: number) => void
  updateRiskGauge: (value: number) => void
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

      // Enhanced actions from Lumina S
      updateOrganization: (org: OrganizationProfile) => {
        set((state) => {
          if (!state.scenario) return state

          const updatedScenario = {
            ...state.scenario,
            organization: org,
            updatedAt: new Date().toISOString(),
          }

          return {
            scenario: updatedScenario,
            scenarios: state.scenarios.map(s =>
              s.id === state.scenario!.id ? updatedScenario : s
            ),
          }
        })

        get().logActivity('organization_updated', `Updated organization profile for "${org.name}"`)
      },

      addKPI: (kpi: Omit<KPI, 'id'>) => {
        set((state) => {
          if (!state.scenario) return state

          const newKPI: KPI = {
            ...kpi,
            id: crypto.randomUUID(),
          }

          const updatedScenario = {
            ...state.scenario,
            kpis: [...(state.scenario.kpis || []), newKPI],
            updatedAt: new Date().toISOString(),
          }

          return {
            scenario: updatedScenario,
            scenarios: state.scenarios.map(s =>
              s.id === state.scenario!.id ? updatedScenario : s
            ),
          }
        })

        get().logActivity('kpi_added', `Added KPI "${kpi.name}"`)
      },

      updateKPI: (id: string, updates: Partial<KPI>) => {
        set((state) => {
          if (!state.scenario || !state.scenario.kpis) return state

          const updatedScenario = {
            ...state.scenario,
            kpis: state.scenario.kpis.map(k =>
              k.id === id ? { ...k, ...updates } : k
            ),
            updatedAt: new Date().toISOString(),
          }

          return {
            scenario: updatedScenario,
            scenarios: state.scenarios.map(s =>
              s.id === state.scenario!.id ? updatedScenario : s
            ),
          }
        })

        get().logActivity('kpi_updated', `Updated KPI`)
      },

      deleteKPI: (id: string) => {
        set((state) => {
          if (!state.scenario || !state.scenario.kpis) return state

          const updatedScenario = {
            ...state.scenario,
            kpis: state.scenario.kpis.filter(k => k.id !== id),
            updatedAt: new Date().toISOString(),
          }

          return {
            scenario: updatedScenario,
            scenarios: state.scenarios.map(s =>
              s.id === state.scenario!.id ? updatedScenario : s
            ),
          }
        })

        get().logActivity('kpi_deleted', `Deleted KPI`)
      },

      setWorkflowStep: (step: WorkflowStep) => {
        set((state) => {
          if (!state.scenario) return state

          const updatedScenario = {
            ...state.scenario,
            currentStep: step,
            updatedAt: new Date().toISOString(),
          }

          return {
            scenario: updatedScenario,
            scenarios: state.scenarios.map(s =>
              s.id === state.scenario!.id ? updatedScenario : s
            ),
          }
        })

        get().logActivity('workflow_step_changed', `Moved to ${step} step`)
      },

      completeWorkflowStep: (step: WorkflowStep) => {
        set((state) => {
          if (!state.scenario) return state

          const completedSteps = state.scenario.completedSteps || []
          if (completedSteps.includes(step)) return state

          const updatedScenario = {
            ...state.scenario,
            completedSteps: [...completedSteps, step],
            updatedAt: new Date().toISOString(),
          }

          return {
            scenario: updatedScenario,
            scenarios: state.scenarios.map(s =>
              s.id === state.scenario!.id ? updatedScenario : s
            ),
          }
        })

        get().logActivity('workflow_step_completed', `Completed ${step} step`)
      },

      updateConfidenceIndex: (value: number) => {
        set((state) => {
          if (!state.scenario) return state

          const updatedScenario = {
            ...state.scenario,
            confidenceIndex: Math.min(100, Math.max(0, value)),
            updatedAt: new Date().toISOString(),
          }

          return {
            scenario: updatedScenario,
            scenarios: state.scenarios.map(s =>
              s.id === state.scenario!.id ? updatedScenario : s
            ),
          }
        })
      },

      updateRiskGauge: (value: number) => {
        set((state) => {
          if (!state.scenario) return state

          const updatedScenario = {
            ...state.scenario,
            riskGauge: Math.min(100, Math.max(0, value)),
            updatedAt: new Date().toISOString(),
          }

          return {
            scenario: updatedScenario,
            scenarios: state.scenarios.map(s =>
              s.id === state.scenario!.id ? updatedScenario : s
            ),
          }
        })
      },
    }),
    {
      name: 'lumina-strategy-storage',
    }
  )
)
