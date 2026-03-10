/**
 * Core Navigation Layer
 *
 * Helpers for cross-module navigation in Lumina One.
 * Prevents hardcoded paths and enables module communication.
 */

import { moduleRegistry } from '../../modules';
import { logger } from '../logging';

export interface NavigationHelper {
  getModulePath: (moduleId: string, subPath?: string) => string;
  jumpToModule: (moduleId: string) => void;
  jumpToRisk: (subPath?: string) => string;
  jumpToStrategy: (subPath?: string) => string;
  jumpToFinance: (subPath?: string) => string;
}

/**
 * Get the full path for a module (with optional subpath)
 */
export function getModulePath(moduleId: string, subPath?: string): string {
  const module = moduleRegistry.find(m => m.id === moduleId);
  if (!module) {
    logger.warn(`Module '${moduleId}' not found in registry`);
    return '/';
  }

  const base = module.baseRoute;
  return subPath ? `${base}/${subPath.replace(/^\//, '')}` : base;
}

/**
 * Navigate to a specific module
 * Usage: window.location.href = jumpToModule('risk')
 */
export function jumpToModule(moduleId: string): string {
  return getModulePath(moduleId);
}

/**
 * Navigate to Risk module
 * Usage: <Link to={jumpToRisk('alerts')}>Go to Risk Alerts</Link>
 */
export function jumpToRisk(subPath?: string): string {
  return getModulePath('risk', subPath);
}

/**
 * Navigate to Strategy module
 * Usage: <Link to={jumpToStrategy('planning')}>Go to Strategy Planning</Link>
 */
export function jumpToStrategy(subPath?: string): string {
  return getModulePath('strategy', subPath);
}

/**
 * Navigate to Finance module
 * Usage: <Link to={jumpToFinance('analysis')}>Go to Finance Analysis</Link>
 */
export function jumpToFinance(subPath?: string): string {
  return getModulePath('finance', subPath);
}

/**
 * Get all available modules for navigation
 */
export function getAvailableModules() {
  return moduleRegistry.filter(m => m.enabled);
}
