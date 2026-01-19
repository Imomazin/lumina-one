import { createContext, useContext, useState, useCallback, ReactNode } from 'react'

// Strategy state
export interface StrategyState {
  objective: string
  timeHorizon: string
  assumptions: string[]
}

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
  scenarioId: string
  strategy: StrategyState | null
  risk: RiskState | null
  finance: FinanceState | null
  updateStrategy: (strategy: StrategyState) => void
  updateRisk: (risk: RiskState) => void
  updateFinance: (finance: FinanceState) => void
  resetScenario: () => void
}

const LuminaContext = createContext<LuminaContextState | undefined>(undefined)

export function LuminaProvider({ children }: { children: ReactNode }) {
  const [scenarioId, setScenarioId] = useState<string>(() => `scenario-${Date.now()}`)
  const [strategy, setStrategy] = useState<StrategyState | null>(null)
  const [risk, setRisk] = useState<RiskState | null>(null)
  const [finance, setFinance] = useState<FinanceState | null>(null)

  const updateStrategy = useCallback((newStrategy: StrategyState) => {
    setStrategy(newStrategy)

    // Auto-derive Risk from Strategy
    const exposureCategories = newStrategy.assumptions.map((assumption, index) => ({
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
    const horizonYears = parseInt(newStrategy.timeHorizon) || 1
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

  const updateRisk = useCallback((newRisk: RiskState) => {
    setRisk(newRisk)
  }, [])

  const updateFinance = useCallback((newFinance: FinanceState) => {
    setFinance(newFinance)
  }, [])

  const resetScenario = useCallback(() => {
    setScenarioId(`scenario-${Date.now()}`)
    setStrategy(null)
    setRisk(null)
    setFinance(null)
  }, [])

  return (
    <LuminaContext.Provider
      value={{
        scenarioId,
        strategy,
        risk,
        finance,
        updateStrategy,
        updateRisk,
        updateFinance,
        resetScenario,
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
