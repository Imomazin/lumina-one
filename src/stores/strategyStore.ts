/**
 * Strategy State Persistence
 *
 * LocalStorage-backed store for StrategyScenario.
 * This is the single source of truth for strategy state.
 *
 * Later: Replace localStorage with Supabase for multi-user support.
 */

import { StrategyScenario } from '../domain/strategy'

const STORAGE_KEY = 'lumina-strategy-scenario'

/**
 * Save StrategyScenario to localStorage
 */
export function saveStrategyScenario(scenario: StrategyScenario): void {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(scenario))
  } catch (error) {
    console.error('Failed to save strategy scenario:', error)
  }
}

/**
 * Load StrategyScenario from localStorage
 */
export function loadStrategyScenario(): StrategyScenario | null {
  try {
    const stored = localStorage.getItem(STORAGE_KEY)
    if (!stored) return null

    const parsed = JSON.parse(stored)

    // Basic validation
    if (!parsed.id || !parsed.objective) {
      return null
    }

    return parsed as StrategyScenario
  } catch (error) {
    console.error('Failed to load strategy scenario:', error)
    return null
  }
}

/**
 * Delete StrategyScenario from localStorage
 */
export function clearStrategyScenario(): void {
  try {
    localStorage.removeItem(STORAGE_KEY)
  } catch (error) {
    console.error('Failed to clear strategy scenario:', error)
  }
}

/**
 * Check if a StrategyScenario exists
 */
export function hasStrategyScenario(): boolean {
  return loadStrategyScenario() !== null
}
