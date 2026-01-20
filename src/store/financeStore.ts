import { create } from 'zustand'
import { useStrategyStore } from './strategyStore'
import { useRiskStore } from './riskStore'

export interface FinancialModel {
  pressureLevel: 'Low' | 'Medium' | 'High'
  capitalBufferRequirement: string
  implications: string[]
  lastComputed: string
  sourceScenarioId: string
  sourceRiskProfileId: string
}

export interface FinanceActivityLog {
  id: string
  action: string
  description: string
  timestamp: string
}

interface FinanceState {
  model: FinancialModel | null
  isComputing: boolean
  activityLog: FinanceActivityLog[]

  // Actions
  computeFinanceFromStrategyAndRisk: () => void
  clearFinance: () => void
  getRecentActivity: (limit?: number) => FinanceActivityLog[]
  logActivity: (action: string, description: string) => void
}

// Finance derivation logic
function deriveFinancialModel(strategyScenario: any, riskProfile: any): FinancialModel {
  const implications: string[] = []

  // Derive pressure level from risk and time horizon
  const pressureLevel =
    riskProfile.overallExposure === 'High' || strategyScenario.timeHorizon > 5
      ? 'High'
      : riskProfile.overallExposure === 'Medium'
      ? 'Medium'
      : 'Low'

  // Calculate capital buffer based on risk and time horizon
  const baseBuffer = 20
  const riskMultiplier = riskProfile.overallExposure === 'High' ? 2.5 : riskProfile.overallExposure === 'Medium' ? 1.5 : 1
  const timeMultiplier = 1 + strategyScenario.timeHorizon * 0.1
  const bufferPercentage = Math.round(baseBuffer * riskMultiplier * timeMultiplier)

  const capitalBufferRequirement = `${bufferPercentage}% of projected OpEx`

  // Generate implications based on strategy and risk
  implications.push(
    `Capital buffer of ${bufferPercentage}% recommended for ${strategyScenario.timeHorizon}-year horizon`
  )

  if (riskProfile.overallExposure === 'High') {
    implications.push('High-risk exposure requires enhanced liquidity reserves')
    implications.push('Stress testing recommended quarterly')
  }

  if (strategyScenario.timeHorizon > 5) {
    implications.push('Extended time horizon requires long-term financing strategy')
  }

  // Derive from specific risk categories
  riskProfile.exposureCategories.forEach((exposure: any) => {
    if (exposure.category.includes('Market Entry')) {
      implications.push('Market entry costs should be front-loaded in financial model')
    }
    if (exposure.category.includes('Financial')) {
      implications.push('Revenue sensitivity analysis required for financial planning')
    }
    if (exposure.category.includes('Operational')) {
      implications.push('Operational efficiency gains can offset capital requirements')
    }
  })

  // Limit to 5 implications
  return {
    pressureLevel,
    capitalBufferRequirement,
    implications: implications.slice(0, 5),
    lastComputed: new Date().toISOString(),
    sourceScenarioId: strategyScenario.id,
    sourceRiskProfileId: riskProfile.lastComputed,
  }
}

export const useFinanceStore = create<FinanceState>()((set, get) => ({
  model: null,
  isComputing: false,
  activityLog: [],

  logActivity: (action: string, description: string) => {
    const activity: FinanceActivityLog = {
      id: crypto.randomUUID(),
      action,
      description,
      timestamp: new Date().toISOString(),
    }
    set((state) => ({
      activityLog: [activity, ...state.activityLog].slice(0, 50), // Keep last 50 activities
    }))
  },

  getRecentActivity: (limit = 10) => {
    return get().activityLog.slice(0, limit)
  },

  computeFinanceFromStrategyAndRisk: () => {
    const strategyScenario = useStrategyStore.getState().scenario
    const riskProfile = useRiskStore.getState().profile

    if (!strategyScenario || !riskProfile) {
      set({ model: null, isComputing: false })
      return
    }

    set({ isComputing: true })

    // Simulate computation delay
    setTimeout(() => {
      const model = deriveFinancialModel(strategyScenario, riskProfile)
      set({ model, isComputing: false })

      get().logActivity(
        'finance_computed',
        `Finance auto-derived from strategy + risk (${model.pressureLevel} pressure, ${model.capitalBufferRequirement} buffer)`
      )
    }, 100)
  },

  clearFinance: () => {
    set({ model: null, isComputing: false })
    get().logActivity(
      'finance_cleared',
      'Financial model cleared due to upstream changes'
    )
  },
}))

// Auto-compute when risk changes
useRiskStore.subscribe((state) => {
  if (state.profile) {
    useFinanceStore.getState().computeFinanceFromStrategyAndRisk()
  } else {
    useFinanceStore.getState().clearFinance()
  }
})
