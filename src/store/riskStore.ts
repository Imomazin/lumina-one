import { create } from 'zustand'
import { useStrategyStore } from './strategyStore'

export interface RiskExposure {
  category: string
  level: 'Low' | 'Medium' | 'High'
  derivedFrom: string
  likelihood: number // 1-5
  impact: number // 1-5
}

export interface RiskProfile {
  overallExposure: 'Low' | 'Medium' | 'High'
  exposureCategories: RiskExposure[]
  lastComputed: string
  sourceScenarioId: string
}

interface RiskState {
  profile: RiskProfile | null
  isComputing: boolean

  // Actions
  computeRiskFromStrategy: () => void
  clearRisk: () => void
}

// Risk derivation logic
function deriveRiskProfile(strategyScenario: any): RiskProfile {
  const exposures: RiskExposure[] = []

  // Derive risk exposures from strategy assumptions
  strategyScenario.assumptions.forEach((assumption: string) => {
    const lower = assumption.toLowerCase()

    // Market expansion risks
    if (lower.includes('expand') || lower.includes('growth') || lower.includes('new market')) {
      exposures.push({
        category: 'Market Entry Risk',
        level: strategyScenario.timeHorizon > 3 ? 'High' : 'Medium',
        derivedFrom: assumption,
        likelihood: 4,
        impact: 4,
      })
    }

    // Operational risks
    if (lower.includes('operational') || lower.includes('process') || lower.includes('efficiency')) {
      exposures.push({
        category: 'Operational Risk',
        level: 'Medium',
        derivedFrom: assumption,
        likelihood: 3,
        impact: 3,
      })
    }

    // Financial risks
    if (lower.includes('revenue') || lower.includes('cost') || lower.includes('pricing')) {
      exposures.push({
        category: 'Financial Risk',
        level: strategyScenario.timeHorizon > 5 ? 'High' : 'Medium',
        derivedFrom: assumption,
        likelihood: 3,
        impact: 4,
      })
    }

    // Technology risks
    if (lower.includes('technology') || lower.includes('digital') || lower.includes('platform')) {
      exposures.push({
        category: 'Technology Risk',
        level: 'Medium',
        derivedFrom: assumption,
        likelihood: 4,
        impact: 3,
      })
    }

    // Competitive risks
    if (lower.includes('competitive') || lower.includes('market share') || lower.includes('competitor')) {
      exposures.push({
        category: 'Competitive Risk',
        level: 'High',
        derivedFrom: assumption,
        likelihood: 4,
        impact: 4,
      })
    }
  })

  // If no specific exposures, add default based on time horizon
  if (exposures.length === 0) {
    exposures.push({
      category: 'Strategic Execution Risk',
      level: strategyScenario.timeHorizon > 3 ? 'High' : 'Medium',
      derivedFrom: strategyScenario.objective,
      likelihood: 3,
      impact: 3,
    })
  }

  // Calculate overall exposure
  const highCount = exposures.filter((e) => e.level === 'High').length
  const mediumCount = exposures.filter((e) => e.level === 'Medium').length

  const overallExposure =
    highCount >= 2 ? 'High' : highCount >= 1 || mediumCount >= 3 ? 'Medium' : 'Low'

  return {
    overallExposure,
    exposureCategories: exposures,
    lastComputed: new Date().toISOString(),
    sourceScenarioId: strategyScenario.id,
  }
}

export const useRiskStore = create<RiskState>()((set) => ({
  profile: null,
  isComputing: false,

  computeRiskFromStrategy: () => {
    const strategyScenario = useStrategyStore.getState().scenario

    if (!strategyScenario) {
      set({ profile: null, isComputing: false })
      return
    }

    set({ isComputing: true })

    // Simulate computation delay
    setTimeout(() => {
      const profile = deriveRiskProfile(strategyScenario)
      set({ profile, isComputing: false })
    }, 100)
  },

  clearRisk: () => {
    set({ profile: null, isComputing: false })
  },
}))

// Auto-compute when strategy changes
useStrategyStore.subscribe((state) => {
  if (state.scenario) {
    useRiskStore.getState().computeRiskFromStrategy()
  } else {
    useRiskStore.getState().clearRisk()
  }
})
