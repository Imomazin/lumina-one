import { ReactNode } from 'react'
import { useAuth } from './AuthContext'
import { Loader2 } from 'lucide-react'

interface ProtectedRouteProps {
  children: ReactNode
}

/**
 * ProtectedRoute - Allows demo access without authentication
 *
 * Previously: Redirected to /login if not authenticated
 * Now: Allows access in demo mode (read-only)
 *
 * This enables:
 * - Landing page CTAs to work without auth
 * - Users can explore the platform before signing in
 * - Demo mode indicator shows when not authenticated
 */
export function ProtectedRoute({ children }: ProtectedRouteProps) {
  const { loading } = useAuth()

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50 dark:bg-slate-900">
        <div className="text-center">
          <Loader2 className="w-12 h-12 text-blue-500 animate-spin mx-auto mb-4" />
          <p className="text-slate-600 dark:text-slate-400">Loading...</p>
        </div>
      </div>
    )
  }

  // Allow access regardless of auth state (demo mode)
  return <>{children}</>
}
