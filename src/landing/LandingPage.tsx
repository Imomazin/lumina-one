import { ArrowRight, Shield, TrendingUp, BarChart3, ChevronRight, Moon, Sun, Monitor } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { useStrategyStore } from '../store'
import { ROUTES } from '../routes'
import { LuminaOneWordmark } from '../components/LuminaOneLogo'
import { ModuleCube } from '../components/ModuleCube'
import { RevolvingDiamond } from '../components/RevolvingDiamond'
import { Footer } from '../components/Footer'
import { WorldCitiesSkyline } from '../components/WorldCitiesSkyline'
import { TriangulatedRotatingScroller } from '../components/TriangulatedRotatingScroller'

type LandingTheme = 'dark' | 'white' | 'system'

export function LandingPage() {
  const navigate = useNavigate()
  const createScenario = useStrategyStore(state => state.createScenario)
  const [landingTheme, setLandingTheme] = useState<LandingTheme>(() => {
    const stored = localStorage.getItem('landing_theme') as LandingTheme
    return stored || 'dark'
  })
  const [showThemeMenu, setShowThemeMenu] = useState(false)

  // Resolve theme (system -> dark or white)
  const resolvedTheme = landingTheme === 'system'
    ? (typeof window !== 'undefined' && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'white')
    : landingTheme

  // Update theme when changed
  useEffect(() => {
    localStorage.setItem('landing_theme', landingTheme)
  }, [landingTheme])

  // Listen for system theme changes
  useEffect(() => {
    if (landingTheme !== 'system') return

    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
    const handler = () => {
      // Force re-render when system theme changes
      setLandingTheme('system')
    }

    mediaQuery.addEventListener('change', handler)
    return () => mediaQuery.removeEventListener('change', handler)
  }, [landingTheme])

  const themeIcons = {
    dark: Moon,
    white: Sun,
    system: Monitor,
  }

  const ThemeIcon = themeIcons[landingTheme]

  // Dynamic styles based on theme
  const bgClass = resolvedTheme === 'dark' ? 'bg-black' : 'bg-white'
  const textClass = resolvedTheme === 'dark' ? 'text-white' : 'text-gray-900'
  const borderClass = resolvedTheme === 'dark' ? 'border-white/10' : 'border-gray-200'
  const headerBgClass = resolvedTheme === 'dark' ? 'bg-black/80' : 'bg-white/80'

  const handleGetStarted = () => {
    createScenario({
      name: 'Demo: Asia-Pacific Expansion',
      objective: 'Establish market leadership in APAC region through strategic partnerships and localized product offerings',
      timeHorizon: 5,
      assumptions: [
        'APAC market will grow 12% annually over next 5 years',
        'Strategic partnerships reduce market entry costs by 40%',
        'Localized products increase customer acquisition by 60%',
        'Competitive landscape remains stable with 3 major players',
        'Regulatory environment favorable for foreign investment'
      ]
    })
    navigate(ROUTES.app.overview)
  }

  return (
    <div className={`min-h-screen ${bgClass} ${textClass} overflow-x-hidden`} style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
      {/* Header */}
      <header className={`fixed top-0 left-0 right-0 z-50 border-b ${borderClass} ${headerBgClass} backdrop-blur-xl`}>
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <LuminaOneWordmark />

          <nav className="hidden md:flex items-center gap-8">
            <a href="#modules" className={`text-sm font-medium ${resolvedTheme === 'dark' ? 'text-white/70 hover:text-white' : 'text-gray-600 hover:text-gray-900'} transition-colors`}>
              Modules
            </a>
            <a href="#customers" className={`text-sm font-medium ${resolvedTheme === 'dark' ? 'text-white/70 hover:text-white' : 'text-gray-600 hover:text-gray-900'} transition-colors`}>
              Customers
            </a>
            <a href="#features" className={`text-sm font-medium ${resolvedTheme === 'dark' ? 'text-white/70 hover:text-white' : 'text-gray-600 hover:text-gray-900'} transition-colors`}>
              Features
            </a>

            {/* Theme Toggle */}
            <div className="relative">
              <button
                onClick={() => setShowThemeMenu(!showThemeMenu)}
                className={`p-2 rounded-lg ${resolvedTheme === 'dark' ? 'hover:bg-white/10' : 'hover:bg-gray-100'} transition-colors`}
                aria-label="Toggle theme"
              >
                <ThemeIcon className={`w-5 h-5 ${resolvedTheme === 'dark' ? 'text-white/70' : 'text-gray-600'}`} />
              </button>

              {showThemeMenu && (
                <>
                  <div
                    className="fixed inset-0 z-10"
                    onClick={() => setShowThemeMenu(false)}
                  />
                  <div className={`absolute right-0 mt-2 w-40 ${resolvedTheme === 'dark' ? 'bg-gray-900 border-white/20' : 'bg-white border-gray-200'} border rounded-lg shadow-xl z-20 py-2`}>
                    {(['dark', 'white', 'system'] as LandingTheme[]).map((themeOption) => {
                      const Icon = themeIcons[themeOption]
                      const label = themeOption === 'dark' ? 'Dark' : themeOption === 'white' ? 'White' : 'System'
                      return (
                        <button
                          key={themeOption}
                          onClick={() => {
                            setLandingTheme(themeOption)
                            setShowThemeMenu(false)
                          }}
                          className={`w-full flex items-center gap-3 px-4 py-2 text-sm transition-colors ${
                            landingTheme === themeOption
                              ? resolvedTheme === 'dark'
                                ? 'bg-blue-500/20 text-blue-400'
                                : 'bg-blue-50 text-blue-600'
                              : resolvedTheme === 'dark'
                              ? 'text-gray-300 hover:bg-white/10'
                              : 'text-gray-700 hover:bg-gray-100'
                          }`}
                        >
                          <Icon className="w-4 h-4" />
                          <span>{label}</span>
                          {landingTheme === themeOption && (
                            <span className="ml-auto">✓</span>
                          )}
                        </button>
                      )
                    })}
                  </div>
                </>
              )}
            </div>

            <button
              onClick={() => navigate(ROUTES.login)}
              className={`px-4 py-2 ${resolvedTheme === 'dark' ? 'bg-white text-black hover:bg-white/90' : 'bg-black text-white hover:bg-black/90'} text-sm font-semibold rounded-lg transition-all`}
            >
              Dashboard
            </button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative pt-40 pb-40 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            {/* Left: Copy */}
            <div className="space-y-10">
              <div className={`inline-flex items-center gap-2 px-3 py-1.5 ${resolvedTheme === 'dark' ? 'bg-white/5 border-white/10 text-white/60' : 'bg-gray-100 border-gray-300 text-gray-600'} border rounded-md text-xs font-medium uppercase tracking-wider`}>
                Enterprise Intelligence
              </div>

              <h1 className={`text-4xl md:text-5xl font-semibold leading-[1.15] tracking-tight ${resolvedTheme === 'dark' ? 'text-white/95' : 'text-gray-900'}`}>
                Unified intelligence across
                <br />
                <span className="text-purple-600">Strategy</span>
                <span className={resolvedTheme === 'dark' ? 'text-white/95' : 'text-gray-900'}>, </span>
                <span className="text-red-700">Risk</span>
                <span className={resolvedTheme === 'dark' ? 'text-white/95' : 'text-gray-900'}>, and </span>
                <span className="text-amber-600">Finance</span>
              </h1>

              <p className={`text-lg font-normal ${resolvedTheme === 'dark' ? 'text-white/60' : 'text-gray-600'} max-w-lg leading-relaxed`}>
                Automatically derive risk and financial models from your strategic plans.
                Maintain consistency across modules.
                Reduce planning cycles.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={handleGetStarted}
                  className="px-8 py-3.5 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors flex items-center justify-center gap-2"
                >
                  View Demo
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  onClick={() => navigate(ROUTES.login)}
                  className={`px-8 py-3.5 ${resolvedTheme === 'dark' ? 'bg-white/5 border-white/10 text-white/90 hover:bg-white/10' : 'bg-gray-100 border-gray-300 text-gray-900 hover:bg-gray-200'} border font-medium rounded-lg transition-colors`}
                >
                  Sign In
                </button>
              </div>

              <div className={`flex items-center gap-6 pt-2 text-sm ${resolvedTheme === 'dark' ? 'text-white/50' : 'text-gray-500'}`}>
                <span>Enterprise-ready</span>
                <span className={resolvedTheme === 'dark' ? 'text-white/20' : 'text-gray-300'}>•</span>
                <span>SOC 2 compliant</span>
                <span className={resolvedTheme === 'dark' ? 'text-white/20' : 'text-gray-300'}>•</span>
                <span>Self-hosted available</span>
              </div>
            </div>

            {/* Right: Revolving Diamond */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-pink-500/20 blur-[120px] rounded-full" />
                <RevolvingDiamond size={350} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Three Modules Section */}
      <section id="modules" className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-24">
            <div className={`inline-block px-3 py-1.5 ${resolvedTheme === 'dark' ? 'bg-white/5 border-white/10 text-white/60' : 'bg-gray-100 border-gray-300 text-gray-600'} border rounded-md text-xs font-medium uppercase tracking-wider mb-8`}>
              Intelligence Modules
            </div>
            <h2 className={`text-3xl md:text-4xl font-semibold mb-6 tracking-tight ${resolvedTheme === 'dark' ? 'text-white/95' : 'text-gray-900'}`}>
              Three modules. One system.
            </h2>
            <p className={`text-lg font-normal ${resolvedTheme === 'dark' ? 'text-white/60' : 'text-gray-600'} max-w-2xl mx-auto leading-relaxed`}>
              Each module serves a distinct function. All modules share a single source of truth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Strategy Module */}
            <div className="text-center space-y-10">
              <ModuleCube
                color="strategy"
                size={200}
                className="mx-auto"
                href="https://ambi-sight-reloaded-git-claude-fi-184691-imos-projects-98c0794a.vercel.app/"
              />

              <div>
                <div className="flex items-center justify-center gap-2 mb-2">
                  <TrendingUp className="w-4 h-4 text-purple-400 drop-shadow-lg" />
                  <h3 className={`text-lg font-semibold tracking-tight ${resolvedTheme === 'dark' ? 'text-white/90' : 'text-gray-900'}`} style={{ textShadow: resolvedTheme === 'dark' ? '0 1px 2px rgba(0, 0, 0, 0.5), 0 -1px 1px rgba(255, 255, 255, 0.05)' : '0 1px 2px rgba(255, 255, 255, 0.8), 0 -1px 1px rgba(0, 0, 0, 0.1)' }}>Lumina S</h3>
                </div>
                <p className={`text-sm ${resolvedTheme === 'dark' ? 'text-white/50' : 'text-gray-600'} mb-6 leading-relaxed`} style={{ textShadow: resolvedTheme === 'dark' ? '0 1px 2px rgba(0, 0, 0, 0.3)' : '0 1px 1px rgba(255, 255, 255, 0.5)' }}>
                  Strategic planning and scenario modeling. Single source of truth.
                </p>

                <div className={`space-y-1.5 mb-6 text-sm ${resolvedTheme === 'dark' ? 'text-white/40' : 'text-gray-500'}`} style={{ textShadow: resolvedTheme === 'dark' ? '0 1px 2px rgba(0, 0, 0, 0.3)' : '0 1px 1px rgba(255, 255, 255, 0.5)' }}>
                  <div>Scenario modeling</div>
                  <div>KPI tracking</div>
                  <div>Assumption management</div>
                </div>

                <a
                  href="https://ambi-sight-reloaded-git-claude-fi-184691-imos-projects-98c0794a.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-purple-400 hover:text-purple-300 transition-colors text-sm font-medium"
                  style={{ textShadow: '0 0 10px rgba(168, 85, 247, 0.3)' }}
                >
                  Launch module
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Risk Module */}
            <div className="text-center space-y-10">
              <ModuleCube
                color="risk"
                size={200}
                className="mx-auto"
                href="https://lumina-r-git-claude-setup-lumina-210dfe-imos-projects-98c0794a.vercel.app/"
              />

              <div>
                <div className="flex items-center justify-center gap-2 mb-2">
                  <Shield className="w-4 h-4 text-red-400 drop-shadow-lg" />
                  <h3 className={`text-lg font-semibold tracking-tight ${resolvedTheme === 'dark' ? 'text-white/90' : 'text-gray-900'}`} style={{ textShadow: resolvedTheme === 'dark' ? '0 1px 2px rgba(0, 0, 0, 0.5), 0 -1px 1px rgba(255, 255, 255, 0.05)' : '0 1px 2px rgba(255, 255, 255, 0.8), 0 -1px 1px rgba(0, 0, 0, 0.1)' }}>Lumina R</h3>
                </div>
                <p className={`text-sm ${resolvedTheme === 'dark' ? 'text-white/50' : 'text-gray-600'} mb-6 leading-relaxed`} style={{ textShadow: resolvedTheme === 'dark' ? '0 1px 2px rgba(0, 0, 0, 0.3)' : '0 1px 1px rgba(255, 255, 255, 0.5)' }}>
                  Automatically derived risk analysis from strategic plans.
                </p>

                <div className={`space-y-1.5 mb-6 text-sm ${resolvedTheme === 'dark' ? 'text-white/40' : 'text-gray-500'}`} style={{ textShadow: resolvedTheme === 'dark' ? '0 1px 2px rgba(0, 0, 0, 0.3)' : '0 1px 1px rgba(255, 255, 255, 0.5)' }}>
                  <div>Auto-derived risks</div>
                  <div>Exposure scoring</div>
                  <div>Impact analysis</div>
                </div>

                <a
                  href="https://lumina-r-git-claude-setup-lumina-210dfe-imos-projects-98c0794a.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-red-400 hover:text-red-300 transition-colors text-sm font-medium"
                  style={{ textShadow: '0 0 10px rgba(239, 68, 68, 0.3)' }}
                >
                  Launch module
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Finance Module */}
            <div className="text-center space-y-10">
              <ModuleCube
                color="finance"
                size={200}
                className="mx-auto"
                href="https://lumina-f-git-claude-nav-shell-2ep8j-imos-projects-98c0794a.vercel.app/"
              />

              <div>
                <div className="flex items-center justify-center gap-2 mb-2">
                  <BarChart3 className="w-4 h-4 text-yellow-400 drop-shadow-lg" />
                  <h3 className={`text-lg font-semibold tracking-tight ${resolvedTheme === 'dark' ? 'text-white/90' : 'text-gray-900'}`} style={{ textShadow: resolvedTheme === 'dark' ? '0 1px 2px rgba(0, 0, 0, 0.5), 0 -1px 1px rgba(255, 255, 255, 0.05)' : '0 1px 2px rgba(255, 255, 255, 0.8), 0 -1px 1px rgba(0, 0, 0, 0.1)' }}>Lumina F</h3>
                </div>
                <p className={`text-sm ${resolvedTheme === 'dark' ? 'text-white/50' : 'text-gray-600'} mb-6 leading-relaxed`} style={{ textShadow: resolvedTheme === 'dark' ? '0 1px 2px rgba(0, 0, 0, 0.3)' : '0 1px 1px rgba(255, 255, 255, 0.5)' }}>
                  Risk-adjusted financial models derived from strategy.
                </p>

                <div className={`space-y-1.5 mb-6 text-sm ${resolvedTheme === 'dark' ? 'text-white/40' : 'text-gray-500'}`} style={{ textShadow: resolvedTheme === 'dark' ? '0 1px 2px rgba(0, 0, 0, 0.3)' : '0 1px 1px rgba(255, 255, 255, 0.5)' }}>
                  <div>Multi-year forecasts</div>
                  <div>Risk adjustments</div>
                  <div>Scenario comparison</div>
                </div>

                <a
                  href="https://lumina-f-git-claude-nav-shell-2ep8j-imos-projects-98c0794a.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-yellow-400 hover:text-yellow-300 transition-colors text-sm font-medium"
                  style={{ textShadow: '0 0 10px rgba(251, 191, 36, 0.3)' }}
                >
                  Launch module
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Platform Preview Section - Triangulated Rotating Scroller */}
      <section className={`py-32 px-6 ${resolvedTheme === 'dark' ? 'bg-gradient-to-b from-black to-black/95' : 'bg-gradient-to-b from-gray-50 to-white'}`}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <div className={`inline-block px-3 py-1.5 ${resolvedTheme === 'dark' ? 'bg-white/5 border-white/10 text-white/60' : 'bg-gray-100 border-gray-300 text-gray-600'} border rounded-md text-xs font-medium uppercase tracking-wider mb-8`}>
              Platform Preview
            </div>
            <h2 className={`text-3xl md:text-4xl font-semibold mb-6 tracking-tight ${resolvedTheme === 'dark' ? 'text-white/95' : 'text-gray-900'}`}>
              Three modules working in harmony
            </h2>
            <p className={`text-lg font-normal ${resolvedTheme === 'dark' ? 'text-white/60' : 'text-gray-600'} max-w-2xl mx-auto leading-relaxed`}>
              Experience how Lumina ONE brings Strategy, Risk, and Finance together in a unified intelligence platform.
            </p>
          </div>

          {/* Triangulated Rotating Scroller */}
          <TriangulatedRotatingScroller theme={resolvedTheme} />
        </div>
      </section>

      {/* Customer Stories */}
      <section id="customers" className="py-32 px-6 overflow-hidden">
        <style>{`
          @keyframes scrollLeft {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          @keyframes scrollRight {
            0% { transform: translateX(-50%); }
            100% { transform: translateX(0); }
          }
          .scroll-left {
            animation: scrollLeft 30s linear infinite;
          }
          .scroll-right {
            animation: scrollRight 30s linear infinite;
          }
          .scroll-left:hover, .scroll-right:hover {
            animation-play-state: paused;
          }
        `}</style>

        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <div className={`inline-block px-3 py-1.5 ${resolvedTheme === 'dark' ? 'bg-white/5 border-white/10 text-white/60' : 'bg-gray-100 border-gray-300 text-gray-600'} border rounded-md text-xs font-medium uppercase tracking-wider mb-8`}>
              Case Studies
            </div>
            <h2 className={`text-3xl md:text-4xl font-semibold mb-6 tracking-tight ${resolvedTheme === 'dark' ? 'text-white/95' : 'text-gray-900'}`}>
              Deployed at scale
            </h2>
            <p className={`text-lg font-normal ${resolvedTheme === 'dark' ? 'text-white/60' : 'text-gray-600'} max-w-2xl mx-auto leading-relaxed`}>
              Enterprise teams use Lumina ONE to maintain consistency across strategic planning, risk assessment, and financial modeling.
            </p>
          </div>

          <div className="space-y-24">
            {/* Story 1 - Scrolls Left */}
            <div className="relative">
              <div className="scroll-left flex gap-8">
                {[1, 2].map((i) => (
                  <div key={i} className="flex-shrink-0 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                    <div className="space-y-4">
                      <div className={`inline-flex items-center gap-2 px-2.5 py-1 ${resolvedTheme === 'dark' ? 'bg-white/5 border-white/10 text-white/50' : 'bg-gray-100 border-gray-300 text-gray-600'} border rounded text-xs font-medium uppercase tracking-wider`}>
                        Enterprise Software
                      </div>
                      <h3 className={`text-xl font-semibold tracking-tight ${resolvedTheme === 'dark' ? 'text-white/90' : 'text-gray-900'}`}>
                        TechCorp reduced planning cycles from 6 weeks to 3 days
                      </h3>
                      <p className={`text-sm ${resolvedTheme === 'dark' ? 'text-white/60' : 'text-gray-600'} leading-relaxed`}>
                        Quarterly planning now uses a single scenario model. Risk and finance update automatically from strategy changes.
                      </p>
                      <div className="grid grid-cols-2 gap-4 pt-2">
                        <div>
                          <div className={`text-2xl font-semibold ${resolvedTheme === 'dark' ? 'text-white/80' : 'text-gray-900'}`}>95%</div>
                          <div className={`text-xs ${resolvedTheme === 'dark' ? 'text-white/50' : 'text-gray-600'}`}>Faster planning</div>
                        </div>
                        <div>
                          <div className={`text-2xl font-semibold ${resolvedTheme === 'dark' ? 'text-white/80' : 'text-gray-900'}`}>$2.4M</div>
                          <div className={`text-xs ${resolvedTheme === 'dark' ? 'text-white/50' : 'text-gray-600'}`}>Annual savings</div>
                        </div>
                      </div>
                      {/* Real Dashboard Image */}
                      <div className={`mt-4 aspect-video rounded-lg border ${resolvedTheme === 'dark' ? 'border-white/10' : 'border-gray-300'} overflow-hidden`}>
                        <img
                          src="/images/customer-techcorp-dashboard.jpg"
                          alt="Strategy Dashboard showing KPIs and metrics"
                          className="w-full h-full object-cover opacity-90"
                        />
                      </div>
                    </div>
                    <div className={`${resolvedTheme === 'dark' ? 'bg-white/[0.02] border-white/10' : 'bg-gray-50 border-gray-300'} border rounded-lg p-6 space-y-4`}>
                      <div className={`text-xs ${resolvedTheme === 'dark' ? 'text-white/50' : 'text-gray-600'} uppercase tracking-wider`}>Scenario Flow</div>
                      <div className="space-y-3">
                        <div className={`${resolvedTheme === 'dark' ? 'bg-white/[0.02] border-white/10' : 'bg-white border-gray-200'} border rounded p-3`}>
                          <div className={`text-xs ${resolvedTheme === 'dark' ? 'text-white/50' : 'text-gray-600'}`}>Strategy Input</div>
                          <div className={`text-sm ${resolvedTheme === 'dark' ? 'text-white/80' : 'text-gray-900'}`}>$180M revenue • 12 markets</div>
                        </div>
                        <div className="flex justify-center">
                          <ChevronRight className={`w-4 h-4 ${resolvedTheme === 'dark' ? 'text-white/20' : 'text-gray-400'}`} />
                        </div>
                        <div className={`${resolvedTheme === 'dark' ? 'bg-white/[0.02] border-white/10' : 'bg-white border-gray-200'} border rounded p-3`}>
                          <div className={`text-xs ${resolvedTheme === 'dark' ? 'text-white/50' : 'text-gray-600'}`}>Auto-Derived Risks</div>
                          <div className={`text-sm ${resolvedTheme === 'dark' ? 'text-white/80' : 'text-gray-900'}`}>47 risks • $18M exposure</div>
                        </div>
                        <div className="flex justify-center">
                          <ChevronRight className={`w-4 h-4 ${resolvedTheme === 'dark' ? 'text-white/20' : 'text-gray-400'}`} />
                        </div>
                        <div className={`${resolvedTheme === 'dark' ? 'bg-white/[0.02] border-white/10' : 'bg-white border-gray-200'} border rounded p-3`}>
                          <div className={`text-xs ${resolvedTheme === 'dark' ? 'text-white/50' : 'text-gray-600'}`}>Financial Model</div>
                          <div className={`text-sm ${resolvedTheme === 'dark' ? 'text-white/80' : 'text-gray-900'}`}>NPV: $142M • IRR: 22%</div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Story 2 - Scrolls Right */}
            <div className="relative">
              <div className="scroll-right flex gap-8">
                {[1, 2].map((i) => (
                  <div key={i} className="flex-shrink-0 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                    <div className="space-y-4 order-2 lg:order-1">
                      <div className={`${resolvedTheme === 'dark' ? 'bg-white/[0.02] border-white/10' : 'bg-gray-50 border-gray-300'} border rounded-lg p-6`}>
                        <div className={`text-xs ${resolvedTheme === 'dark' ? 'text-white/50' : 'text-gray-600'} uppercase tracking-wider mb-4`}>Risk Dashboard</div>
                        <div className="grid grid-cols-3 gap-3 mb-4">
                          <div className="text-center">
                            <div className={`text-xl font-semibold ${resolvedTheme === 'dark' ? 'text-white/80' : 'text-gray-900'}`}>148</div>
                            <div className={`text-xs ${resolvedTheme === 'dark' ? 'text-white/40' : 'text-gray-500'}`}>Factors</div>
                          </div>
                          <div className="text-center">
                            <div className={`text-xl font-semibold ${resolvedTheme === 'dark' ? 'text-white/80' : 'text-gray-900'}`}>$45M</div>
                            <div className={`text-xs ${resolvedTheme === 'dark' ? 'text-white/40' : 'text-gray-500'}`}>Impact</div>
                          </div>
                          <div className="text-center">
                            <div className={`text-xl font-semibold ${resolvedTheme === 'dark' ? 'text-white/80' : 'text-gray-900'}`}>98%</div>
                            <div className={`text-xs ${resolvedTheme === 'dark' ? 'text-white/40' : 'text-gray-500'}`}>Confidence</div>
                          </div>
                        </div>
                      </div>
                      {/* Real Dashboard Image */}
                      <div className={`aspect-video rounded-lg border ${resolvedTheme === 'dark' ? 'border-white/10' : 'border-gray-300'} overflow-hidden`}>
                        <img
                          src="/images/customer-financefirst-risk.jpg"
                          alt="Risk Analysis Dashboard with exposure metrics"
                          className="w-full h-full object-cover opacity-90"
                        />
                      </div>
                    </div>
                    <div className="space-y-4 order-1 lg:order-2">
                      <div className={`inline-flex items-center gap-2 px-2.5 py-1 ${resolvedTheme === 'dark' ? 'bg-white/5 border-white/10 text-white/50' : 'bg-gray-100 border-gray-300 text-gray-600'} border rounded text-xs font-medium uppercase tracking-wider`}>
                        Financial Services
                      </div>
                      <h3 className={`text-xl font-semibold tracking-tight ${resolvedTheme === 'dark' ? 'text-white/90' : 'text-gray-900'}`}>
                        FinanceFirst automated risk compliance across 47 countries
                      </h3>
                      <p className={`text-sm ${resolvedTheme === 'dark' ? 'text-white/60' : 'text-gray-600'} leading-relaxed`}>
                        Regulatory risk now tracked automatically. Compliance issues flagged before they escalate.
                      </p>
                      <div className="grid grid-cols-2 gap-4 pt-2">
                        <div>
                          <div className={`text-2xl font-semibold ${resolvedTheme === 'dark' ? 'text-white/80' : 'text-gray-900'}`}>87%</div>
                          <div className={`text-xs ${resolvedTheme === 'dark' ? 'text-white/50' : 'text-gray-600'}`}>Fewer incidents</div>
                        </div>
                        <div>
                          <div className={`text-2xl font-semibold ${resolvedTheme === 'dark' ? 'text-white/80' : 'text-gray-900'}`}>24hr</div>
                          <div className={`text-xs ${resolvedTheme === 'dark' ? 'text-white/50' : 'text-gray-600'}`}>Assessment time</div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Story 3 - Scrolls Left */}
            <div className="relative">
              <div className="scroll-left flex gap-8">
                {[1, 2].map((i) => (
                  <div key={i} className="flex-shrink-0 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                    <div className="space-y-4">
                      <div className={`inline-flex items-center gap-2 px-2.5 py-1 ${resolvedTheme === 'dark' ? 'bg-white/5 border-white/10 text-white/50' : 'bg-gray-100 border-gray-300 text-gray-600'} border rounded text-xs font-medium uppercase tracking-wider`}>
                        Retail
                      </div>
                      <h3 className={`text-xl font-semibold tracking-tight ${resolvedTheme === 'dark' ? 'text-white/90' : 'text-gray-900'}`}>
                        RetailMax launched 12 product lines with integrated forecasts
                      </h3>
                      <p className={`text-sm ${resolvedTheme === 'dark' ? 'text-white/60' : 'text-gray-600'} leading-relaxed`}>
                        Product launches now model strategy, risk, and finance together. Market conditions update projections in real time.
                      </p>
                      <div className="grid grid-cols-2 gap-4 pt-2">
                        <div>
                          <div className={`text-2xl font-semibold ${resolvedTheme === 'dark' ? 'text-white/80' : 'text-gray-900'}`}>92%</div>
                          <div className={`text-xs ${resolvedTheme === 'dark' ? 'text-white/50' : 'text-gray-600'}`}>Forecast accuracy</div>
                        </div>
                        <div>
                          <div className={`text-2xl font-semibold ${resolvedTheme === 'dark' ? 'text-white/80' : 'text-gray-900'}`}>3x</div>
                          <div className={`text-xs ${resolvedTheme === 'dark' ? 'text-white/50' : 'text-gray-600'}`}>ROI improvement</div>
                        </div>
                      </div>
                      {/* Real Dashboard Image */}
                      <div className={`mt-4 aspect-video rounded-lg border ${resolvedTheme === 'dark' ? 'border-white/10' : 'border-gray-300'} overflow-hidden`}>
                        <img
                          src="/images/customer-retailmax-forecast.jpg"
                          alt="Financial Forecast Dashboard with projections"
                          className="w-full h-full object-cover opacity-90"
                        />
                      </div>
                    </div>
                    <div className={`${resolvedTheme === 'dark' ? 'bg-white/[0.02] border-white/10' : 'bg-gray-50 border-gray-300'} border rounded-lg p-6`}>
                      <div className={`text-xs ${resolvedTheme === 'dark' ? 'text-white/50' : 'text-gray-600'} uppercase tracking-wider mb-4`}>Launch Timeline</div>
                      <div className="space-y-3">
                        <div className="flex items-center gap-3">
                          <div className={`w-2 h-2 ${resolvedTheme === 'dark' ? 'bg-white/40' : 'bg-gray-400'} rounded-full`} />
                          <div className="flex-1">
                            <div className={`text-xs ${resolvedTheme === 'dark' ? 'text-white/50' : 'text-gray-600'}`}>Q1: Strategy</div>
                            <div className={`text-sm ${resolvedTheme === 'dark' ? 'text-white/80' : 'text-gray-900'}`}>$12M opportunity</div>
                          </div>
                        </div>
                        <div className="flex items-center gap-3">
                          <div className={`w-2 h-2 ${resolvedTheme === 'dark' ? 'bg-white/40' : 'bg-gray-400'} rounded-full`} />
                          <div className="flex-1">
                            <div className={`text-xs ${resolvedTheme === 'dark' ? 'text-white/50' : 'text-gray-600'}`}>Q2: Risk Assessment</div>
                            <div className={`text-sm ${resolvedTheme === 'dark' ? 'text-white/80' : 'text-gray-900'}`}>Medium exposure</div>
                          </div>
                        </div>
                        <div className="flex items-center gap-3">
                          <div className={`w-2 h-2 ${resolvedTheme === 'dark' ? 'bg-white/40' : 'bg-gray-400'} rounded-full`} />
                          <div className="flex-1">
                            <div className={`text-xs ${resolvedTheme === 'dark' ? 'text-white/50' : 'text-gray-600'}`}>Q3-Q4: Launch</div>
                            <div className={`text-sm ${resolvedTheme === 'dark' ? 'text-white/80' : 'text-gray-900'}`}>$8.2M projected</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Stats Section */}
      <section className="py-32 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            <div className="text-center space-y-3">
              <div className={`text-5xl font-semibold ${resolvedTheme === 'dark' ? 'text-white/90' : 'text-gray-900'} tracking-tight`}>
                85%
              </div>
              <div className={`${resolvedTheme === 'dark' ? 'text-white/50' : 'text-gray-600'} text-sm leading-relaxed`}>
                Faster planning cycles
              </div>
            </div>

            <div className="text-center space-y-3">
              <div className={`text-5xl font-semibold ${resolvedTheme === 'dark' ? 'text-white/90' : 'text-gray-900'} tracking-tight`}>
                100%
              </div>
              <div className={`${resolvedTheme === 'dark' ? 'text-white/50' : 'text-gray-600'} text-sm leading-relaxed`}>
                Cross-module consistency
              </div>
            </div>

            <div className="text-center space-y-3">
              <div className={`text-5xl font-semibold ${resolvedTheme === 'dark' ? 'text-white/90' : 'text-gray-900'} tracking-tight`}>
                Real-time
              </div>
              <div className={`${resolvedTheme === 'dark' ? 'text-white/50' : 'text-gray-600'} text-sm leading-relaxed`}>
                Automatic updates
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="features" className="py-32 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-20">
            <h2 className={`text-3xl md:text-4xl font-semibold mb-6 tracking-tight ${resolvedTheme === 'dark' ? 'text-white/95' : 'text-gray-900'}`}>
              How it works
            </h2>
            <p className={`text-base ${resolvedTheme === 'dark' ? 'text-white/60' : 'text-gray-600'}`}>
              Define strategy. Risk and finance derive automatically.
            </p>
          </div>

          <div className={`${resolvedTheme === 'dark' ? 'bg-white/[0.02] border-white/10' : 'bg-gray-50 border-gray-300'} border rounded-lg p-10`}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="space-y-4">
                <div className="relative h-48 rounded-lg overflow-hidden">
                  <img
                    src="/images/presentation-blue.jpg"
                    alt="Strategy Planning"
                    className="w-full h-full object-cover"
                  />
                  <div className={`absolute inset-0 ${resolvedTheme === 'dark' ? 'bg-gradient-to-t from-black/80 via-black/40' : 'bg-gradient-to-t from-white/80 via-white/40'}`} />
                  <div className="absolute bottom-4 left-4">
                    <div className={`w-10 h-10 ${resolvedTheme === 'dark' ? 'bg-white/10 border-white/20' : 'bg-white border-gray-300'} border rounded flex items-center justify-center backdrop-blur-sm`}>
                      <TrendingUp className={`w-5 h-5 ${resolvedTheme === 'dark' ? 'text-white/90' : 'text-gray-900'}`} />
                    </div>
                  </div>
                </div>
                <div className={`text-lg font-semibold ${resolvedTheme === 'dark' ? 'text-white/90' : 'text-gray-900'}`}>1. Define Strategy</div>
                <p className={`text-sm ${resolvedTheme === 'dark' ? 'text-white/60' : 'text-gray-600'} leading-relaxed`}>
                  Create scenarios with objectives, assumptions, and KPIs in collaborative sessions.
                </p>
              </div>

              <div className="space-y-4">
                <div className="relative h-48 rounded-lg overflow-hidden">
                  <img
                    src="/images/data-analysis.jpg"
                    alt="Risk Analysis"
                    className="w-full h-full object-cover"
                  />
                  <div className={`absolute inset-0 ${resolvedTheme === 'dark' ? 'bg-gradient-to-t from-black/80 via-black/40' : 'bg-gradient-to-t from-white/80 via-white/40'}`} />
                  <div className="absolute bottom-4 left-4">
                    <div className={`w-10 h-10 ${resolvedTheme === 'dark' ? 'bg-white/10 border-white/20' : 'bg-white border-gray-300'} border rounded flex items-center justify-center backdrop-blur-sm`}>
                      <Shield className={`w-5 h-5 ${resolvedTheme === 'dark' ? 'text-white/90' : 'text-gray-900'}`} />
                    </div>
                  </div>
                </div>
                <div className={`text-lg font-semibold ${resolvedTheme === 'dark' ? 'text-white/90' : 'text-gray-900'}`}>2. Risk Derives</div>
                <p className={`text-sm ${resolvedTheme === 'dark' ? 'text-white/60' : 'text-gray-600'} leading-relaxed`}>
                  Risk analysis generates automatically from strategy inputs with real-time data.
                </p>
              </div>

              <div className="space-y-4">
                <div className="relative h-48 rounded-lg overflow-hidden">
                  <img
                    src="/images/stock-trading.jpg"
                    alt="Financial Forecasting"
                    className="w-full h-full object-cover"
                  />
                  <div className={`absolute inset-0 ${resolvedTheme === 'dark' ? 'bg-gradient-to-t from-black/80 via-black/40' : 'bg-gradient-to-t from-white/80 via-white/40'}`} />
                  <div className="absolute bottom-4 left-4">
                    <div className={`w-10 h-10 ${resolvedTheme === 'dark' ? 'bg-white/10 border-white/20' : 'bg-white border-gray-300'} border rounded flex items-center justify-center backdrop-blur-sm`}>
                      <BarChart3 className={`w-5 h-5 ${resolvedTheme === 'dark' ? 'text-white/90' : 'text-gray-900'}`} />
                    </div>
                  </div>
                </div>
                <div className={`text-lg font-semibold ${resolvedTheme === 'dark' ? 'text-white/90' : 'text-gray-900'}`}>3. Finance Builds</div>
                <p className={`text-sm ${resolvedTheme === 'dark' ? 'text-white/60' : 'text-gray-600'} leading-relaxed`}>
                  Financial projections adjust for identified risks with market intelligence.
                </p>
              </div>
            </div>

            <div className={`mt-10 pt-8 border-t ${resolvedTheme === 'dark' ? 'border-white/10' : 'border-gray-300'} text-center`}>
              <p className={`text-sm ${resolvedTheme === 'dark' ? 'text-white/50' : 'text-gray-600'}`}>
                Strategy changes cascade automatically across all modules.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <div className={`inline-block px-3 py-1.5 ${resolvedTheme === 'dark' ? 'bg-white/5 border-white/10 text-white/60' : 'bg-gray-100 border-gray-300 text-gray-600'} border rounded-md text-xs font-medium uppercase tracking-wider mb-8`}>
              Trusted by Leaders
            </div>
            <h2 className={`text-3xl md:text-4xl font-semibold mb-6 tracking-tight ${resolvedTheme === 'dark' ? 'text-white/95' : 'text-gray-900'}`}>
              What our customers say
            </h2>
            <p className={`text-lg font-normal ${resolvedTheme === 'dark' ? 'text-white/60' : 'text-gray-600'} max-w-2xl mx-auto leading-relaxed`}>
              Join thousands of satisfied professionals transforming their strategic planning process.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <div className={`${resolvedTheme === 'dark' ? 'bg-white/[0.02] border-white/10' : 'bg-gray-50 border-gray-300'} border rounded-lg p-6 space-y-4`}>
              <div className="flex items-center gap-4">
                <img
                  src="/images/conference-speaker.jpg"
                  alt="Customer"
                  className={`w-14 h-14 rounded-full object-cover border-2 ${resolvedTheme === 'dark' ? 'border-white/10' : 'border-gray-300'}`}
                />
                <div>
                  <div className={`text-sm font-semibold ${resolvedTheme === 'dark' ? 'text-white/90' : 'text-gray-900'}`}>Michael Chen</div>
                  <div className={`text-xs ${resolvedTheme === 'dark' ? 'text-white/50' : 'text-gray-600'}`}>CFO, TechCorp</div>
                </div>
              </div>
              <p className={`text-sm ${resolvedTheme === 'dark' ? 'text-white/70' : 'text-gray-600'} leading-relaxed`}>
                "Lumina ONE transformed our planning process. What used to take weeks now happens in days, with complete visibility across all departments."
              </p>
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-4 h-4 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className={`${resolvedTheme === 'dark' ? 'bg-white/[0.02] border-white/10' : 'bg-gray-50 border-gray-300'} border rounded-lg p-6 space-y-4`}>
              <div className="flex items-center gap-4">
                <img
                  src="/images/coffee-discussion.jpg"
                  alt="Customer"
                  className={`w-14 h-14 rounded-full object-cover border-2 ${resolvedTheme === 'dark' ? 'border-white/10' : 'border-gray-300'}`}
                />
                <div>
                  <div className={`text-sm font-semibold ${resolvedTheme === 'dark' ? 'text-white/90' : 'text-gray-900'}`}>Sarah Martinez</div>
                  <div className={`text-xs ${resolvedTheme === 'dark' ? 'text-white/50' : 'text-gray-600'}`}>VP Strategy, FinanceFirst</div>
                </div>
              </div>
              <p className={`text-sm ${resolvedTheme === 'dark' ? 'text-white/70' : 'text-gray-600'} leading-relaxed`}>
                "The automatic risk derivation is a game-changer. Our compliance team now has real-time visibility into strategic decisions."
              </p>
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-4 h-4 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </div>

            {/* Testimonial 3 */}
            <div className={`${resolvedTheme === 'dark' ? 'bg-white/[0.02] border-white/10' : 'bg-gray-50 border-gray-300'} border rounded-lg p-6 space-y-4`}>
              <div className="flex items-center gap-4">
                <img
                  src="/images/office-plant.jpg"
                  alt="Customer"
                  className={`w-14 h-14 rounded-full object-cover border-2 ${resolvedTheme === 'dark' ? 'border-white/10' : 'border-gray-300'}`}
                />
                <div>
                  <div className={`text-sm font-semibold ${resolvedTheme === 'dark' ? 'text-white/90' : 'text-gray-900'}`}>David Thompson</div>
                  <div className={`text-xs ${resolvedTheme === 'dark' ? 'text-white/50' : 'text-gray-600'}`}>Head of Finance, RetailMax</div>
                </div>
              </div>
              <p className={`text-sm ${resolvedTheme === 'dark' ? 'text-white/70' : 'text-gray-600'} leading-relaxed`}>
                "Financial forecasting is now seamlessly integrated with our strategy. The ROI improvement has been remarkable."
              </p>
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-4 h-4 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </div>
          </div>

          {/* Team collaboration showcase */}
          <div className={`mt-16 pt-16 border-t ${resolvedTheme === 'dark' ? 'border-white/10' : 'border-gray-200'}`}>
            <div className="text-center mb-10">
              <h3 className={`text-xl font-semibold mb-2 ${resolvedTheme === 'dark' ? 'text-white/90' : 'text-gray-900'}`}>
                Powering Collaboration Across Teams
              </h3>
              <p className={`text-sm ${resolvedTheme === 'dark' ? 'text-white/60' : 'text-gray-600'}`}>
                Join enterprise teams already transforming their strategic planning
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="relative rounded-lg overflow-hidden h-64">
                <img
                  src="/images/team-collaboration.jpg"
                  alt="Team collaboration"
                  className="w-full h-full object-cover"
                />
                <div className={`absolute inset-0 ${resolvedTheme === 'dark' ? 'bg-gradient-to-t from-black/60' : 'bg-gradient-to-t from-white/60'}`} />
                <div className="absolute bottom-4 left-4 right-4">
                  <div className={`text-sm font-medium ${resolvedTheme === 'dark' ? 'text-white' : 'text-gray-900'}`}>Cross-functional Planning</div>
                  <div className={`text-xs ${resolvedTheme === 'dark' ? 'text-white/70' : 'text-gray-600'}`}>Strategy, Risk & Finance aligned</div>
                </div>
              </div>

              <div className="relative rounded-lg overflow-hidden h-64">
                <img
                  src="/images/team-meeting.jpg"
                  alt="Team meeting"
                  className="w-full h-full object-cover"
                />
                <div className={`absolute inset-0 ${resolvedTheme === 'dark' ? 'bg-gradient-to-t from-black/60' : 'bg-gradient-to-t from-white/60'}`} />
                <div className="absolute bottom-4 left-4 right-4">
                  <div className={`text-sm font-medium ${resolvedTheme === 'dark' ? 'text-white' : 'text-gray-900'}`}>Executive Reviews</div>
                  <div className={`text-xs ${resolvedTheme === 'dark' ? 'text-white/70' : 'text-gray-600'}`}>Real-time scenario modeling</div>
                </div>
              </div>

              <div className="relative rounded-lg overflow-hidden h-64">
                <img
                  src="/images/team-meeting-casual.jpg"
                  alt="Casual team discussion"
                  className="w-full h-full object-cover"
                />
                <div className={`absolute inset-0 ${resolvedTheme === 'dark' ? 'bg-gradient-to-t from-black/60' : 'bg-gradient-to-t from-white/60'}`} />
                <div className="absolute bottom-4 left-4 right-4">
                  <div className={`text-sm font-medium ${resolvedTheme === 'dark' ? 'text-white' : 'text-gray-900'}`}>Agile Workshops</div>
                  <div className={`text-xs ${resolvedTheme === 'dark' ? 'text-white/70' : 'text-gray-600'}`}>Rapid iteration & feedback</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* World Cities Skyline Section */}
      <section className="relative py-32 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className={`inline-block px-3 py-1.5 ${resolvedTheme === 'dark' ? 'bg-white/5 border-white/10 text-white/60' : 'bg-gray-100 border-gray-300 text-gray-600'} border rounded-md text-xs font-medium uppercase tracking-wider mb-8`}>
              Global Reach
            </div>
            <h2 className={`text-3xl md:text-4xl font-semibold mb-6 tracking-tight ${resolvedTheme === 'dark' ? 'text-white/95' : 'text-gray-900'}`}>
              Trusted worldwide
            </h2>
            <p className={`text-lg font-normal ${resolvedTheme === 'dark' ? 'text-white/60' : 'text-gray-600'} max-w-2xl mx-auto leading-relaxed`}>
              Enterprise teams across major cities rely on Lumina ONE for strategic planning and risk management.
            </p>
          </div>
        </div>

        {/* World Cities Skyline */}
        <WorldCitiesSkyline theme={resolvedTheme} />
      </section>

      {/* Final CTA */}
      <section className="relative py-32 px-6 overflow-hidden">
        {/* Hero Background Image */}
        <div className="absolute inset-0">
          <img
            src="/images/hero-background.jpg"
            alt="Enterprise background"
            className={`w-full h-full object-cover ${resolvedTheme === 'dark' ? 'opacity-30' : 'opacity-20'}`}
          />
          <div className={`absolute inset-0 ${resolvedTheme === 'dark' ? 'bg-gradient-to-t from-black via-black/80 to-black/90' : 'bg-gradient-to-t from-white via-white/80 to-white/90'}`} />
        </div>

        <div className="max-w-3xl mx-auto text-center relative z-10">
          <h2 className={`text-3xl md:text-4xl font-semibold mb-6 leading-tight tracking-tight ${resolvedTheme === 'dark' ? 'text-white/95' : 'text-gray-900'}`}>
            Maintain consistency across<br />Strategy, Risk, and Finance
          </h2>
          <p className={`text-base ${resolvedTheme === 'dark' ? 'text-white/60' : 'text-gray-600'} mb-10 max-w-xl mx-auto leading-relaxed`}>
            Single source of truth. Automatic derivation. Real-time updates.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={handleGetStarted}
              className="px-8 py-3.5 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors inline-flex items-center justify-center gap-2"
            >
              View Demo
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={() => navigate(ROUTES.login)}
              className={`px-8 py-3.5 ${resolvedTheme === 'dark' ? 'bg-white/5 border-white/10 text-white/90 hover:bg-white/10' : 'bg-gray-100 border-gray-300 text-gray-900 hover:bg-gray-200'} border font-medium rounded-lg transition-colors`}
            >
              Sign In
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  )
}
