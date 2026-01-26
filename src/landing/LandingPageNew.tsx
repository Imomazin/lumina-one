import { ArrowRight } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import { useStrategyStore } from '../store'
import { ROUTES } from '../routes'
import { BuildStamp } from '../components/BuildStamp'
import { LuminaOneWordmark } from '../components/LuminaOneLogo'
import { ModuleCube } from '../components/ModuleCube'

export function LandingPageNew() {
  const navigate = useNavigate()
  const createScenario = useStrategyStore(state => state.createScenario)

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
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-black/80 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <LuminaOneWordmark />

          <nav className="hidden md:flex items-center gap-8">
            <a href="#modules" className="text-sm text-white/70 hover:text-white transition-colors">
              Modules
            </a>
            <a href="#how-it-works" className="text-sm text-white/70 hover:text-white transition-colors">
              How It Works
            </a>
            <button
              onClick={() => navigate(ROUTES.login)}
              className="text-sm text-white/70 hover:text-white transition-colors"
            >
              Dashboard
            </button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left: Copy */}
            <div>
              <div className="inline-block px-4 py-1.5 bg-white/5 border border-white/10 rounded-full text-xs font-medium text-white/80 mb-6">
                ENTERPRISE PLANNING
              </div>

              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                Link strategy,<br />
                risk, and finance
              </h1>

              <p className="text-xl text-white/60 mb-8 max-w-lg">
                The executive platform for scenario planning. Define your strategy once.
                Risk analysis and financial models derive automatically.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={handleGetStarted}
                  className="group px-6 py-3 bg-white text-black font-semibold rounded-lg hover:bg-white/90 transition-all flex items-center justify-center gap-2"
                >
                  Get Started
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>

                <button
                  onClick={() => navigate(ROUTES.login)}
                  className="px-6 py-3 bg-white/5 border border-white/10 text-white font-semibold rounded-lg hover:bg-white/10 transition-all"
                >
                  Sign In
                </button>
              </div>

              <p className="text-sm text-white/40 mt-4">
                Free to start. No credit card required.
              </p>
            </div>

            {/* Right: Large featured cube - Strategy */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                <ModuleCube color="strategy" size={320} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Three Modules Section */}
      <section id="modules" className="py-20 px-6 bg-white/[0.02]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Three connected modules
            </h2>
            <p className="text-lg text-white/60 max-w-2xl mx-auto">
              Each module builds on the others. Changes cascade automatically
              through the system.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
            {/* Strategy Module */}
            <div>
              <ModuleCube color="strategy" size={200} className="mx-auto" />

              <div className="mt-8 text-center">
                <h3 className="text-xl font-bold mb-3">Strategy</h3>
                <p className="text-white/60 text-sm mb-4">
                  Set objectives, define assumptions, track KPIs.
                  The foundation for all analysis.
                </p>
                <div className="flex flex-wrap gap-2 justify-center">
                  <span className="px-3 py-1 bg-purple-500/10 text-purple-400 text-xs rounded border border-purple-500/20">
                    Scenarios
                  </span>
                  <span className="px-3 py-1 bg-purple-500/10 text-purple-400 text-xs rounded border border-purple-500/20">
                    Assumptions
                  </span>
                  <span className="px-3 py-1 bg-purple-500/10 text-purple-400 text-xs rounded border border-purple-500/20">
                    KPIs
                  </span>
                </div>
              </div>
            </div>

            {/* Risk Module */}
            <div>
              <ModuleCube color="risk" size={200} className="mx-auto" />

              <div className="mt-8 text-center">
                <h3 className="text-xl font-bold mb-3">Risk</h3>
                <p className="text-white/60 text-sm mb-4">
                  Automatic risk assessment from your strategy.
                  Identifies exposures and scores impact.
                </p>
                <div className="flex flex-wrap gap-2 justify-center">
                  <span className="px-3 py-1 bg-red-500/10 text-red-400 text-xs rounded border border-red-500/20">
                    Auto-derived
                  </span>
                  <span className="px-3 py-1 bg-red-500/10 text-red-400 text-xs rounded border border-red-500/20">
                    Exposure scoring
                  </span>
                  <span className="px-3 py-1 bg-red-500/10 text-red-400 text-xs rounded border border-red-500/20">
                    Impact analysis
                  </span>
                </div>
              </div>
            </div>

            {/* Finance Module */}
            <div>
              <ModuleCube color="finance" size={200} className="mx-auto" />

              <div className="mt-8 text-center">
                <h3 className="text-xl font-bold mb-3">Finance</h3>
                <p className="text-white/60 text-sm mb-4">
                  Financial projections built from strategy and risk.
                  Year-by-year forecasts with risk adjustments.
                </p>
                <div className="flex flex-wrap gap-2 justify-center">
                  <span className="px-3 py-1 bg-yellow-500/10 text-yellow-400 text-xs rounded border border-yellow-500/20">
                    Projections
                  </span>
                  <span className="px-3 py-1 bg-yellow-500/10 text-yellow-400 text-xs rounded border border-yellow-500/20">
                    Risk-adjusted
                  </span>
                  <span className="px-3 py-1 bg-yellow-500/10 text-yellow-400 text-xs rounded border border-yellow-500/20">
                    Multi-year
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white/[0.02] border border-white/10 rounded-2xl p-12">
            <h2 className="text-3xl font-bold mb-12 text-center">
              How it works
            </h2>

            <div className="space-y-8">
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-purple-500/10 border border-purple-500/20 rounded-lg flex items-center justify-center text-purple-400 font-bold">
                  1
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Define your strategy</h3>
                  <p className="text-white/60">
                    Create scenarios with clear objectives, time horizons, and assumptions.
                    Set the KPIs you want to track.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-red-500/10 border border-red-500/20 rounded-lg flex items-center justify-center text-red-400 font-bold">
                  2
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Risk derives automatically</h3>
                  <p className="text-white/60">
                    Based on your strategy, the system identifies potential risks,
                    scores exposures, and calculates overall threat levels.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-yellow-500/10 border border-yellow-500/20 rounded-lg flex items-center justify-center text-yellow-400 font-bold">
                  3
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Finance models generate</h3>
                  <p className="text-white/60">
                    Financial projections are built from your strategy and adjusted for risk.
                    See year-by-year forecasts instantly.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-12 pt-8 border-t border-white/10 text-center">
              <p className="text-white/80 mb-6">
                Everything updates in real-time. Change your strategy, see the impact immediately.
              </p>
              <button
                onClick={handleGetStarted}
                className="px-6 py-3 bg-white text-black font-semibold rounded-lg hover:bg-white/90 transition-all inline-flex items-center gap-2"
              >
                Try it now
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-8 px-6 bg-white/[0.01]">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-white/40">
              © 2026 Lumina One. Enterprise planning platform.
            </p>
            <BuildStamp className="text-white/30" />
          </div>
        </div>
      </footer>
    </div>
  )
}
