/**
 * Strategy State Persistence
 *
 * LocalStorage-backed store for StrategyScenario.
 * This is the single source of truth for strategy state.
 *
 * Later: Replace localStorage with Supabase for multi-user support.
 */

import { StrategyScenario } from '../domain/strategy';
import { logger } from '../core/logging';

const STORAGE_KEY = 'lumina-strategy-scenario';

/**
 * Save StrategyScenario to localStorage
 */
export function saveStrategyScenario(scenario: StrategyScenario): void {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(scenario));
  } catch (error) {
    logger.error('Failed to save strategy scenario:', error);
  }
}

/**
 * Load StrategyScenario from localStorage
 */
export function loadStrategyScenario(): StrategyScenario | null {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (!stored) {
      return null;
    }

    const parsed: unknown = JSON.parse(stored);

    // Type guard and basic validation
    if (
      typeof parsed !== 'object' ||
      parsed === null ||
      !('id' in parsed) ||
      !('objective' in parsed)
    ) {
      return null;
    }

    return parsed as StrategyScenario;
  } catch (error) {
    logger.error('Failed to load strategy scenario:', error);
    return null;
  }
}

/**
 * Delete StrategyScenario from localStorage
 */
export function clearStrategyScenario(): void {
  try {
    localStorage.removeItem(STORAGE_KEY);
  } catch (error) {
    logger.error('Failed to clear strategy scenario:', error);
  }
}

/**
 * Check if a StrategyScenario exists
 */
export function hasStrategyScenario(): boolean {
  return loadStrategyScenario() !== null;
}
