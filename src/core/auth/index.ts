/**
 * Core Authentication Layer
 *
 * This is a stub for future global authentication.
 * Currently, modules handle their own auth (Risk uses auto-login).
 *
 * Future: Centralized auth for all modules
 */

export interface User {
  id: string
  email: string
  name: string
  role: 'admin' | 'user' | 'viewer'
  avatar?: string
}

export interface AuthState {
  user: User | null
  isAuthenticated: boolean
  isLoading: boolean
}

// Placeholder - modules currently manage their own auth
export function useAuth(): AuthState {
  return {
    user: null,
    isAuthenticated: false,
    isLoading: false,
  }
}
