/**
 * Centralized route definitions for Lumina One
 *
 * Single source of truth for all navigation paths.
 * Use these constants throughout the application to prevent route mismatches.
 */

export const ROUTES = {
  // Public routes
  landing: '/',
  login: '/login',

  // Protected app routes
  app: {
    root: '/app',
    overview: '/app/overview',
    controlPlane: '/app/control-plane',

    // Intelligence modules
    strategy: '/app/strategy',
    risk: '/app/risk',
    finance: '/app/finance',
  },
} as const

// Type-safe route helper
export type AppRoute = typeof ROUTES.app[keyof typeof ROUTES.app]
