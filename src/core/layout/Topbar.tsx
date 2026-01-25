import { User, LogOut, LogIn, Sun, Moon, Monitor } from 'lucide-react'
import { useAuth } from '../../auth/AuthContext'
import { useStrategyStore } from '../../store'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ROUTES } from '../../routes'
import { useTheme, Theme } from '../theme'
import { useLumina } from '../../context/LuminaContext'

export default function Topbar() {
  const { user, signOut } = useAuth()
  const { strategyScenario } = useLumina()
  const { theme, setTheme } = useTheme()
  const [showMenu, setShowMenu] = useState(false)
  const [showThemeMenu, setShowThemeMenu] = useState(false)
  const navigate = useNavigate()

  const themeIcons = {
    light: Sun,
    dark: Moon,
    system: Monitor,
  }

  const ThemeIcon = themeIcons[theme]

  return (
    <header className="h-16 border-b border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900">
      <div className="flex items-center justify-between h-full px-6">
        <div className="flex items-center gap-4">
          <div className="text-sm text-gray-600 dark:text-gray-400">
            <span className="font-medium text-gray-900 dark:text-white">Active Scenario:</span>{' '}
            {strategyScenario ? (
              <span className="text-blue-600 dark:text-blue-400 font-medium">{strategyScenario.name}</span>
            ) : (
              <span className="text-gray-400 dark:text-gray-500">None configured</span>
            )}
          </div>
        </div>

        <div className="flex items-center gap-4">
          {/* Theme Toggle */}
          <div className="relative">
            <button
              onClick={() => setShowThemeMenu(!showThemeMenu)}
              className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              aria-label="Toggle theme"
            >
              <ThemeIcon className="w-5 h-5 text-gray-600 dark:text-gray-300" />
            </button>

            {showThemeMenu && (
              <>
                <div
                  className="fixed inset-0 z-10"
                  onClick={() => setShowThemeMenu(false)}
                />
                <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-xl z-20 py-2">
                  {(['light', 'dark', 'system'] as Theme[]).map((themeOption) => {
                    const Icon = themeIcons[themeOption]
                    return (
                      <button
                        key={themeOption}
                        onClick={() => {
                          setTheme(themeOption)
                          setShowThemeMenu(false)
                        }}
                        className={`w-full flex items-center gap-3 px-4 py-2 text-sm transition-colors ${
                          theme === themeOption
                            ? 'bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400'
                            : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                        }`}
                      >
                        <Icon className="w-4 h-4" />
                        <span className="capitalize">{themeOption}</span>
                        {theme === themeOption && (
                          <span className="ml-auto text-blue-600 dark:text-blue-400">✓</span>
                        )}
                      </button>
                    )
                  })}
                </div>
              </>
            )}
          </div>

          {/* User Menu */}
          <div className="relative">
            <button
              onClick={() => setShowMenu(!showMenu)}
              className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            >
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                <User className="w-5 h-5 text-white" />
              </div>
              <span className="text-sm font-medium text-gray-900 dark:text-white">
                {user?.email || 'Guest'}
              </span>
            </button>

            {showMenu && (
              <>
                <div
                  className="fixed inset-0 z-10"
                  onClick={() => setShowMenu(false)}
                />
                <div className="absolute right-0 mt-2 w-64 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-xl z-20 py-2">
                  <div className="px-4 py-3 border-b border-gray-200 dark:border-gray-700">
                    <p className="text-sm font-medium text-gray-900 dark:text-white">
                      {user?.email || 'Guest User'}
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                      {user ? 'Authenticated' : 'Not signed in'}
                    </p>
                  </div>
                  {user ? (
                    <button
                      onClick={() => {
                        setShowMenu(false)
                        signOut()
                      }}
                      className="w-full flex items-center gap-3 px-4 py-2 text-sm text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors"
                    >
                      <LogOut className="w-4 h-4" />
                      <span>Sign Out</span>
                    </button>
                  ) : (
                    <button
                      onClick={() => {
                        setShowMenu(false)
                        navigate(ROUTES.login)
                      }}
                      className="w-full flex items-center gap-3 px-4 py-2 text-sm text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors"
                    >
                      <LogIn className="w-4 h-4" />
                      <span>Sign In</span>
                    </button>
                  )}
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </header>
  )
}
