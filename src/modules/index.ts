import { lazy, ComponentType } from 'react';
import { LucideIcon } from 'lucide-react';
import { Shield, TrendingUp, DollarSign } from 'lucide-react';

export interface ModuleMetadata {
  id: string;
  label: string;
  baseRoute: string;
  icon: LucideIcon;
  description?: string;
  enabled: boolean;
}

export interface ModuleDefinition extends ModuleMetadata {
  component: ComponentType;
}

// Module Registry
// This is the single source of truth for all modules in Lumina One
export const moduleRegistry: ModuleDefinition[] = [
  {
    id: 'risk',
    label: 'Risk',
    baseRoute: '/risk',
    icon: Shield,
    description: 'Risk Intelligence & Management',
    enabled: true,
    component: lazy(() => import('./risk').then(m => ({ default: m.RiskModule }))),
  },
  {
    id: 'strategy',
    label: 'Strategy',
    baseRoute: '/strategy',
    icon: TrendingUp,
    description: 'Strategic Planning & Execution',
    enabled: true,
    // Real domain state with localStorage persistence
    component: lazy(() => import('./strategy').then(m => ({ default: m.StrategyModule }))),
  },
  {
    id: 'finance',
    label: 'Finance',
    baseRoute: '/finance',
    icon: DollarSign,
    description: 'Financial Intelligence & Analysis',
    enabled: true,
    // Real domain state - derives from Strategy + Risk
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
