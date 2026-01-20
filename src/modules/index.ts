import { lazy, ComponentType } from 'react';
import { LucideIcon } from 'lucide-react';
import { Shield, TrendingUp, DollarSign } from 'lucide-react';

export type ModuleMaturity = 'active' | 'beta' | 'locked'

export interface ModuleMetadata {
  id: string;
  label: string;
  baseRoute: string;
  icon: LucideIcon;
  description?: string;
  enabled: boolean;
  maturity: ModuleMaturity;
  upstreamDependencies?: string[];
  lastUpdated?: string;
}

export interface ModuleDefinition extends ModuleMetadata {
  component: ComponentType;
}

// Module Registry - Single Source of Truth
// This is the authoritative registry for all modules in Lumina One
export const moduleRegistry: ModuleDefinition[] = [
  {
    id: 'strategy',
    label: 'Strategy',
    baseRoute: '/strategy',
    icon: TrendingUp,
    description: 'Strategic Planning & Scenario Management',
    enabled: true,
    maturity: 'active',
    upstreamDependencies: [],
    lastUpdated: new Date().toISOString(),
    component: lazy(() => import('./strategy').then(m => ({ default: m.StrategyModule }))),
  },
  {
    id: 'risk',
    label: 'Risk',
    baseRoute: '/risk',
    icon: Shield,
    description: 'Risk Intelligence & Exposure Management',
    enabled: true,
    maturity: 'active',
    upstreamDependencies: ['strategy'],
    lastUpdated: new Date().toISOString(),
    component: lazy(() => import('./risk').then(m => ({ default: m.RiskModule }))),
  },
  {
    id: 'finance',
    label: 'Finance',
    baseRoute: '/finance',
    icon: DollarSign,
    description: 'Financial Intelligence & Projections',
    enabled: true,
    maturity: 'active',
    upstreamDependencies: ['strategy', 'risk'],
    lastUpdated: new Date().toISOString(),
    component: lazy(() => import('./finance').then(m => ({ default: m.FinanceModule }))),
  },
];

// Helper functions
export const getModuleById = (id: string): ModuleDefinition | undefined => {
  return moduleRegistry.find(m => m.id === id);
};

export const getEnabledModules = (): ModuleDefinition[] => {
  return moduleRegistry.filter(m => m.enabled);
};

export const getAllModules = (): ModuleDefinition[] => {
  return moduleRegistry;
};

export const getModuleMaturityBadge = (maturity: ModuleMaturity): { label: string; color: string } => {
  switch (maturity) {
    case 'active':
      return { label: 'Active', color: 'green' }
    case 'beta':
      return { label: 'Beta', color: 'amber' }
    case 'locked':
      return { label: 'Locked', color: 'red' }
  }
};
