import { createContext, useContext, useState, useEffect, ReactNode } from 'react'
import { createClient, SupabaseClient, User, Session } from '@supabase/supabase-js'

// Supabase client - will be configured with environment variables
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'https://placeholder.supabase.co'
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 'placeholder-key'

const supabase: SupabaseClient = createClient(supabaseUrl, supabaseAnonKey)

interface AuthContextType {
  user: User | null
  session: Session | null
  loading: boolean
  signInWithEmail: (email: string) => Promise<void>
  signOut: () => Promise<void>
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [session, setSession] = useState<Session | null>(null)
  const [loading, setLoading] = useState(true)

  // Check if we're in demo mode (no real Supabase credentials)
  const isDemoMode = supabaseUrl === 'https://placeholder.supabase.co'

  useEffect(() => {
    if (isDemoMode) {
      // Demo mode: Check for demo session in localStorage
      const demoSession = localStorage.getItem('lumina-demo-session')
      if (demoSession) {
        const mockUser = {
          id: 'demo-user',
          email: JSON.parse(demoSession).email,
          app_metadata: {},
          user_metadata: {},
          aud: 'authenticated',
          created_at: new Date().toISOString(),
        } as User
        setUser(mockUser)
        setSession({ user: mockUser, access_token: 'demo-token' } as Session)
      }
      setLoading(false)
      return
    }

    // Real Supabase mode
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session)
      setUser(session?.user ?? null)
      setLoading(false)
    })

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session)
      setUser(session?.user ?? null)
    })

    return () => subscription.unsubscribe()
  }, [isDemoMode])

  const signInWithEmail = async (email: string) => {
    if (isDemoMode) {
      // Demo mode: Simulate sign-in
      localStorage.setItem('lumina-demo-session', JSON.stringify({ email }))
      const mockUser = {
        id: 'demo-user',
        email,
        app_metadata: {},
        user_metadata: {},
        aud: 'authenticated',
        created_at: new Date().toISOString(),
      } as User
      setUser(mockUser)
      setSession({ user: mockUser, access_token: 'demo-token' } as Session)

      // Redirect to app after a short delay
      setTimeout(() => {
        window.location.href = '/app/overview'
      }, 1500)
      return
    }

    // Real Supabase magic link
    const { error } = await supabase.auth.signInWithOtp({
      email,
      options: {
        emailRedirectTo: `${window.location.origin}/app/overview`,
      },
    })

    if (error) throw error
  }

  const signOut = async () => {
    if (isDemoMode) {
      localStorage.removeItem('lumina-demo-session')
      setUser(null)
      setSession(null)
      window.location.href = '/'
      return
    }

    await supabase.auth.signOut()
    window.location.href = '/'
  }

  return (
    <AuthContext.Provider value={{ user, session, loading, signInWithEmail, signOut }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}

export { supabase }
