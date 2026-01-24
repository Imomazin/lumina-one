import { ArrowRight, Check, Zap, Shield, TrendingUp, Globe, Lock, BarChart3 } from 'lucide-react'
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
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-black/80 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <LuminaOneWordmark />

          <nav className="hidden md:flex items-center gap-8">
            <a href="#modules" className="text-sm text-white/70 hover:text-white transition-colors">
              Modules
            </a>
            <a href="#features" className="text-sm text-white/70 hover:text-white transition-colors">
              Features
            </a>
            <button
              onClick={() => navigate(ROUTES.login)}
              className="px-4 py-2 bg-white text-black text-sm font-semibold rounded-lg hover:bg-white/90 transition-all"
            >
              Dashboard
            </button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        {/* Gradient background */}
        <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 via-black to-black" />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left: Copy */}
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full text-sm">
                <Zap className="w-4 h-4 text-yellow-400" />
                <span className="text-white/80">Enterprise Planning Platform</span>
              </div>

              <h1 className="text-6xl md:text-7xl font-bold leading-tight">
                Strategy meets
                <span className="block bg-gradient-to-r from-purple-400 via-red-400 to-yellow-400 bg-clip-text text-transparent">
                  execution
                </span>
              </h1>

              <p className="text-xl text-white/60 max-w-lg">
                Define your strategy once. Watch Risk and Finance auto-derive in real-time.
                No more spreadsheets. No more silos.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={handleGetStarted}
                  className="group px-8 py-4 bg-white text-black font-semibold rounded-xl hover:bg-white/90 transition-all flex items-center justify-center gap-2 shadow-2xl shadow-white/10"
                >
                  Start Free Trial
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>

                <button
                  onClick={() => navigate(ROUTES.login)}
                  className="px-8 py-4 bg-white/5 border border-white/10 text-white font-semibold rounded-xl hover:bg-white/10 transition-all"
                >
                  View Demo
                </button>
              </div>

              <div className="flex items-center gap-8 pt-4">
                <div className="flex items-center gap-2">
                  <Check className="w-5 h-5 text-green-400" />
                  <span className="text-sm text-white/60">No credit card</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-5 h-5 text-green-400" />
                  <span className="text-sm text-white/60">14-day trial</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-5 h-5 text-green-400" />
                  <span className="text-sm text-white/60">Cancel anytime</span>
                </div>
              </div>
            </div>

            {/* Right: Large revolving cube */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                <div className="absolute inset-0 bg-purple-500/20 blur-[100px] rounded-full" />
                <ModuleCube color="strategy" size={320} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Three Modules Section - Clickable */}
      <section id="modules" className="py-32 px-6 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-white/[0.02] to-black" />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              Three powerful modules
            </h2>
            <p className="text-xl text-white/60 max-w-3xl mx-auto">
              Each module is a complete platform. Together, they create an unstoppable planning system.
              Click any cube to explore.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            {/* Strategy Module - Clickable */}
            <div className="group relative">
              <div className="absolute inset-0 bg-purple-500/10 blur-3xl group-hover:bg-purple-500/20 transition-all duration-500 rounded-full" />

              <div className="relative text-center space-y-6">
                <ModuleCube
                  color="strategy"
                  size={200}
                  className="mx-auto"
                  href="https://ambi-sight-reloaded-git-claude-fi-184691-imos-projects-98c0794a.vercel.app/"
                />

                <div>
                  <div className="inline-flex items-center gap-2 mb-3">
                    <TrendingUp className="w-5 h-5 text-purple-400" />
                    <h3 className="text-2xl font-bold">Lumina S</h3>
                  </div>
                  <p className="text-white/60 mb-4">
                    Strategic planning workspace. Define scenarios, set objectives, track KPIs.
                  </p>

                  <a
                    href="https://ambi-sight-reloaded-git-claude-fi-184691-imos-projects-98c0794a.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors text-sm font-semibold"
                  >
                    Launch Lumina S
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>

            {/* Risk Module - Clickable */}
            <div className="group relative">
              <div className="absolute inset-0 bg-red-500/10 blur-3xl group-hover:bg-red-500/20 transition-all duration-500 rounded-full" />

              <div className="relative text-center space-y-6">
                <ModuleCube
                  color="risk"
                  size={200}
                  className="mx-auto"
                  href="https://risk-coach-mvp-git-claude-lumina-62a0d8-imos-projects-98c0794a.vercel.app/"
                />

                <div>
                  <div className="inline-flex items-center gap-2 mb-3">
                    <Shield className="w-5 h-5 text-red-400" />
                    <h3 className="text-2xl font-bold">Lumina R</h3>
                  </div>
                  <p className="text-white/60 mb-4">
                    Risk intelligence engine. Auto-derived threat analysis and exposure scoring.
                  </p>

                  <a
                    href="https://risk-coach-mvp-git-claude-lumina-62a0d8-imos-projects-98c0794a.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-red-400 hover:text-red-300 transition-colors text-sm font-semibold"
                  >
                    Launch Lumina R
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>

            {/* Finance Module - Clickable */}
            <div className="group relative">
              <div className="absolute inset-0 bg-yellow-500/10 blur-3xl group-hover:bg-yellow-500/20 transition-all duration-500 rounded-full" />

              <div className="relative text-center space-y-6">
                <ModuleCube
                  color="finance"
                  size={200}
                  className="mx-auto"
                  href="https://lumina-f-git-claude-nav-shell-2ep8j-imos-projects-98c0794a.vercel.app/"
                />

                <div>
                  <div className="inline-flex items-center gap-2 mb-3">
                    <BarChart3 className="w-5 h-5 text-yellow-400" />
                    <h3 className="text-2xl font-bold">Lumina F</h3>
                  </div>
                  <p className="text-white/60 mb-4">
                    Financial modeling suite. Risk-adjusted projections and multi-year forecasts.
                  </p>

                  <a
                    href="https://lumina-f-git-claude-nav-shell-2ep8j-imos-projects-98c0794a.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-yellow-400 hover:text-yellow-300 transition-colors text-sm font-semibold"
                  >
                    Launch Lumina F
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-32 px-6 bg-white/[0.02]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            {/* Left: Feature list */}
            <div className="space-y-12">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold mb-4">
                  Built for enterprise scale
                </h2>
                <p className="text-xl text-white/60">
                  Everything you need to plan, analyze, and execute at the highest level.
                </p>
              </div>

              <div className="space-y-8">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-purple-500/10 border border-purple-500/20 rounded-xl flex items-center justify-center">
                    <Zap className="w-6 h-6 text-purple-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Real-time cascade</h3>
                    <p className="text-white/60">
                      Change your strategy. Watch Risk and Finance update instantly across all scenarios.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-red-500/10 border border-red-500/20 rounded-xl flex items-center justify-center">
                    <Lock className="w-6 h-6 text-red-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Enterprise security</h3>
                    <p className="text-white/60">
                      SOC 2 compliant. End-to-end encryption. Role-based access control.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-yellow-500/10 border border-yellow-500/20 rounded-xl flex items-center justify-center">
                    <Globe className="w-6 h-6 text-yellow-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Multi-scenario planning</h3>
                    <p className="text-white/60">
                      Run unlimited scenarios. Compare side-by-side. Export to any format.
                    </p>
                  </div>
                </div>
              </div>

              <button
                onClick={handleGetStarted}
                className="group px-8 py-4 bg-white text-black font-semibold rounded-xl hover:bg-white/90 transition-all inline-flex items-center gap-2"
              >
                Start Planning
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            {/* Right: Visual demonstration */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 via-red-500/20 to-yellow-500/20 blur-3xl" />

              <div className="relative bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-xl">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 rounded-full bg-red-500" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500" />
                    <div className="w-3 h-3 rounded-full bg-green-500" />
                  </div>

                  <div className="space-y-3">
                    <div className="bg-purple-500/20 border border-purple-500/30 rounded-lg p-4">
                      <div className="text-sm font-semibold text-purple-400 mb-2">Strategy Input</div>
                      <div className="text-xs text-white/60">5-year APAC expansion • $50M target</div>
                    </div>

                    <div className="flex items-center justify-center py-2">
                      <ArrowRight className="w-5 h-5 text-white/40" />
                    </div>

                    <div className="bg-red-500/20 border border-red-500/30 rounded-lg p-4">
                      <div className="text-sm font-semibold text-red-400 mb-2">Risk Analysis</div>
                      <div className="text-xs text-white/60">Market exposure: Medium • Regulatory: Low</div>
                    </div>

                    <div className="flex items-center justify-center py-2">
                      <ArrowRight className="w-5 h-5 text-white/40" />
                    </div>

                    <div className="bg-yellow-500/20 border border-yellow-500/30 rounded-lg p-4">
                      <div className="text-sm font-semibold text-yellow-400 mb-2">Financial Model</div>
                      <div className="text-xs text-white/60">Risk-adjusted NPV: $42M • IRR: 18.5%</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="text-6xl font-bold bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent mb-4">
                85%
              </div>
              <div className="text-white/60">
                Faster planning cycles with auto-derivation
              </div>
            </div>

            <div className="text-center">
              <div className="text-6xl font-bold bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent mb-4">
                100%
              </div>
              <div className="text-white/60">
                Consistency across Strategy, Risk, and Finance
              </div>
            </div>

            <div className="text-center">
              <div className="text-6xl font-bold bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent mb-4">
                24/7
              </div>
              <div className="text-white/60">
                Real-time updates as your strategy evolves
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-900/20 to-black" />

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            Ready to transform
            <br />
            your planning?
          </h2>
          <p className="text-xl text-white/60 mb-12 max-w-2xl mx-auto">
            Join forward-thinking enterprises using Lumina ONE to link strategy, risk, and finance.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={handleGetStarted}
              className="group px-10 py-5 bg-white text-black text-lg font-semibold rounded-xl hover:bg-white/90 transition-all inline-flex items-center justify-center gap-3 shadow-2xl shadow-white/10"
            >
              Start Free Trial
              <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              onClick={() => navigate(ROUTES.login)}
              className="px-10 py-5 bg-white/5 border border-white/10 text-white text-lg font-semibold rounded-xl hover:bg-white/10 transition-all"
            >
              View Live Demo
            </button>
          </div>

          <p className="text-sm text-white/40 mt-8">
            No credit card required • 14-day free trial • Cancel anytime
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-12 px-6 bg-black">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex flex-col md:flex-row items-center gap-6">
              <LuminaOneWordmark />
              <div className="flex items-center gap-6 text-sm text-white/60">
                <a href="#modules" className="hover:text-white transition-colors">Modules</a>
                <a href="#features" className="hover:text-white transition-colors">Features</a>
                <button onClick={() => navigate(ROUTES.login)} className="hover:text-white transition-colors">
                  Dashboard
                </button>
              </div>
            </div>
            <BuildStamp className="text-white/30" />
          </div>
          <div className="text-center md:text-left mt-8 text-sm text-white/40">
            © 2026 Lumina One. Enterprise planning platform.
          </div>
        </div>
      </footer>
    </div>
  )
}
