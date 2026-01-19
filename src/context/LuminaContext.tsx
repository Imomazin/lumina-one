import { createContext, useContext, useState, useCallback, ReactNode, useEffect } from 'react'
import { StrategyScenario, StrategyScenarioInput, createStrategyScenario, updateStrategyScenario } from '../domain/strategy'
import { loadStrategyScenario, saveStrategyScenario, clearStrategyScenario } from '../stores/strategyStore'

// Risk state (derived from Strategy)
export interface RiskState {
  exposureCategories: {
    category: string
    level: 'Low' | 'Medium' | 'High'
    derivedFrom: string
  }[]
  overallExposure: 'Low' | 'Medium' | 'High'
}

// Finance state (derived from Strategy + Risk)
export interface FinanceState {
  pressureLevel: 'Low' | 'Medium' | 'High'
  capitalBufferRequirement: string
  implications: string[]
}

interface LuminaContextState {
  // Real domain state
  strategyScenario: StrategyScenario | null

  // Derived states
  risk: RiskState | null
  finance: FinanceState | null

  // Actions
  createStrategy: (input: StrategyScenarioInput) => void
  updateStrategy: (updates: Partial<StrategyScenarioInput>) => void
  deleteStrategy: () => void
}

const LuminaContext = createContext<LuminaContextState | undefined>(undefined)

export function LuminaProvider({ children }: { children: ReactNode }) {
  const [strategyScenario, setStrategyScenario] = useState<StrategyScenario | null>(null)
  const [risk, setRisk] = useState<RiskState | null>(null)
  const [finance, setFinance] = useState<FinanceState | null>(null)

  // Load strategy from localStorage on mount
  useEffect(() => {
    const loaded = loadStrategyScenario()
    if (loaded) {
      setStrategyScenario(loaded)
      deriveRiskAndFinance(loaded)
    }
  }, [])

  // Derive Risk and Finance from Strategy
  const deriveRiskAndFinance = useCallback((scenario: StrategyScenario) => {
    // Auto-derive Risk from Strategy assumptions
    const exposureCategories = scenario.assumptions.map((assumption, index) => ({
      category: `Risk ${index + 1}: ${assumption.substring(0, 30)}...`,
      level: (assumption.toLowerCase().includes('aggressive') || assumption.toLowerCase().includes('uncertain'))
        ? 'High' as const
        : assumption.toLowerCase().includes('moderate')
        ? 'Medium' as const
        : 'Low' as const,
      derivedFrom: assumption,
    }))

    const highCount = exposureCategories.filter(e => e.level === 'High').length
    const overallExposure = highCount >= 2 ? 'High' as const
      : highCount >= 1 ? 'Medium' as const
      : 'Low' as const

    const derivedRisk: RiskState = {
      exposureCategories,
      overallExposure,
    }
    setRisk(derivedRisk)

    // Auto-derive Finance from Strategy + Risk
    const horizonYears = scenario.timeHorizon
    let pressureLevel: 'Low' | 'Medium' | 'High' = 'Low'
    let capitalBufferRequirement = '5-10% of capital'
    const implications: string[] = []

    if (overallExposure === 'High') {
      pressureLevel = 'High'
      capitalBufferRequirement = '20-30% of capital'
      implications.push('High risk increases capital buffer requirement')
      implications.push('Liquidity reserves should be increased')
    } else if (overallExposure === 'Medium') {
      pressureLevel = 'Medium'
      capitalBufferRequirement = '10-20% of capital'
      implications.push('Moderate risk requires balanced capital allocation')
    } else {
      implications.push('Low risk environment allows for optimized capital deployment')
    }

    if (horizonYears > 3) {
      implications.push('Long time horizon reduces short-term liquidity pressure')
    } else {
      implications.push('Short time horizon requires immediate capital availability')
    }

    const derivedFinance: FinanceState = {
      pressureLevel,
      capitalBufferRequirement,
      implications,
    }
    setFinance(derivedFinance)
  }, [])

  const createStrategy = useCallback((input: StrategyScenarioInput) => {
    const newScenario = createStrategyScenario(input)
    setStrategyScenario(newScenario)
    saveStrategyScenario(newScenario)
    deriveRiskAndFinance(newScenario)
  }, [deriveRiskAndFinance])

  const updateStrategy = useCallback((updates: Partial<StrategyScenarioInput>) => {
    if (!strategyScenario) return

    const updated = updateStrategyScenario(strategyScenario, updates)
    setStrategyScenario(updated)
    saveStrategyScenario(updated)
    deriveRiskAndFinance(updated)
  }, [strategyScenario, deriveRiskAndFinance])

  const deleteStrategy = useCallback(() => {
    setStrategyScenario(null)
    setRisk(null)
    setFinance(null)
    clearStrategyScenario()
  }, [])

  return (
    <LuminaContext.Provider
      value={{
        strategyScenario,
        risk,
        finance,
        createStrategy,
        updateStrategy,
        deleteStrategy,
      }}
    >
      {children}
    </LuminaContext.Provider>
  )
}

export function useLumina() {
  const context = useContext(LuminaContext)
  if (context === undefined) {
    throw new Error('useLumina must be used within a LuminaProvider')
  }
  return context
}
