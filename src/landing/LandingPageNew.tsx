import { ArrowRight, Check, Zap, Shield, TrendingUp, Globe, Lock, BarChart3, Users, Sparkles, Target, Layers, Box } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import { useStrategyStore } from '../store'
import { ROUTES } from '../routes'
import { BuildStamp } from '../components/BuildStamp'
import { LuminaOneWordmark } from '../components/LuminaOneLogo'
import { ModuleCube } from '../components/ModuleCube'
import { RevolvingDiamond } from '../components/RevolvingDiamond'

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
            <a href="#use-cases" className="text-sm text-white/70 hover:text-white transition-colors">
              Use Cases
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
      <section className="relative pt-32 pb-32 px-6 overflow-hidden">
        {/* Animated gradient background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-purple-600/10 to-pink-600/10 animate-pulse" style={{ animationDuration: '8s' }} />
          <div className="absolute inset-0 bg-black/60" />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            {/* Left: Copy */}
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-full text-sm">
                <Sparkles className="w-4 h-4 text-blue-400" />
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent font-semibold">
                  Complete Business Intelligence Platform
                </span>
              </div>

              <h1 className="text-6xl md:text-7xl font-bold leading-tight">
                One platform.
                <br />
                <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Every insight.
                </span>
              </h1>

              <p className="text-xl text-white/70 max-w-lg leading-relaxed">
                Strategy, Risk, and Finance in perfect sync. Auto-derived intelligence that updates in real-time.
                No spreadsheets. No silos. Just clarity.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={handleGetStarted}
                  className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white font-semibold rounded-xl transition-all flex items-center justify-center gap-2 shadow-2xl shadow-purple-500/20"
                >
                  Start Free Trial
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>

                <button
                  onClick={() => navigate(ROUTES.login)}
                  className="px-8 py-4 bg-white/5 border border-white/10 text-white font-semibold rounded-xl hover:bg-white/10 transition-all"
                >
                  View Live Demo
                </button>
              </div>

              <div className="flex items-center gap-8 pt-4">
                <div className="flex items-center gap-2">
                  <Check className="w-5 h-5 text-emerald-400" />
                  <span className="text-sm text-white/60">No credit card</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-5 h-5 text-emerald-400" />
                  <span className="text-sm text-white/60">14-day free trial</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-5 h-5 text-emerald-400" />
                  <span className="text-sm text-white/60">Cancel anytime</span>
                </div>
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

      {/* Three Modules Section - Clickable */}
      <section id="modules" className="py-32 px-6 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-blue-950/5 to-black" />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-20">
            <div className="inline-block px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full text-sm text-blue-400 font-semibold mb-6">
              THREE POWERFUL MODULES
            </div>
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              Click any module to explore
            </h2>
            <p className="text-xl text-white/60 max-w-3xl mx-auto leading-relaxed">
              Each module is a complete platform on its own. Together, they create an unstoppable
              intelligence system that keeps your entire organization aligned.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            {/* Strategy Module */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-purple-600/5 blur-3xl group-hover:from-purple-500/10 group-hover:to-purple-600/10 transition-all duration-500 rounded-full" />

              <div className="relative text-center space-y-6">
                <ModuleCube
                  color="strategy"
                  size={220}
                  className="mx-auto"
                  href="https://ambi-sight-reloaded-git-claude-fi-184691-imos-projects-98c0794a.vercel.app/"
                />

                <div>
                  <div className="inline-flex items-center gap-2 mb-3">
                    <TrendingUp className="w-5 h-5 text-purple-400" />
                    <h3 className="text-2xl font-bold">Lumina S</h3>
                  </div>
                  <p className="text-white/60 mb-6 leading-relaxed">
                    Strategic planning workspace. Define scenarios, set objectives, track KPIs.
                    The source of truth for your entire organization.
                  </p>

                  <div className="space-y-2 mb-6">
                    <div className="flex items-center gap-2 justify-center text-sm text-white/50">
                      <Check className="w-4 h-4 text-purple-400" />
                      <span>Scenario modeling</span>
                    </div>
                    <div className="flex items-center gap-2 justify-center text-sm text-white/50">
                      <Check className="w-4 h-4 text-purple-400" />
                      <span>KPI tracking</span>
                    </div>
                    <div className="flex items-center gap-2 justify-center text-sm text-white/50">
                      <Check className="w-4 h-4 text-purple-400" />
                      <span>Assumption management</span>
                    </div>
                  </div>

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

            {/* Risk Module */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 to-red-600/5 blur-3xl group-hover:from-red-500/10 group-hover:to-red-600/10 transition-all duration-500 rounded-full" />

              <div className="relative text-center space-y-6">
                <ModuleCube
                  color="risk"
                  size={220}
                  className="mx-auto"
                  href="https://risk-coach-mvp-git-claude-lumina-62a0d8-imos-projects-98c0794a.vercel.app/"
                />

                <div>
                  <div className="inline-flex items-center gap-2 mb-3">
                    <Shield className="w-5 h-5 text-red-400" />
                    <h3 className="text-2xl font-bold">Lumina R</h3>
                  </div>
                  <p className="text-white/60 mb-6 leading-relaxed">
                    Risk intelligence engine. Auto-derived threat analysis and exposure scoring
                    based on your strategy.
                  </p>

                  <div className="space-y-2 mb-6">
                    <div className="flex items-center gap-2 justify-center text-sm text-white/50">
                      <Check className="w-4 h-4 text-red-400" />
                      <span>Auto-derived risks</span>
                    </div>
                    <div className="flex items-center gap-2 justify-center text-sm text-white/50">
                      <Check className="w-4 h-4 text-red-400" />
                      <span>Exposure scoring</span>
                    </div>
                    <div className="flex items-center gap-2 justify-center text-sm text-white/50">
                      <Check className="w-4 h-4 text-red-400" />
                      <span>Impact analysis</span>
                    </div>
                  </div>

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

            {/* Finance Module */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/5 to-yellow-600/5 blur-3xl group-hover:from-yellow-500/10 group-hover:to-yellow-600/10 transition-all duration-500 rounded-full" />

              <div className="relative text-center space-y-6">
                <ModuleCube
                  color="finance"
                  size={220}
                  className="mx-auto"
                  href="https://lumina-f-git-claude-nav-shell-2ep8j-imos-projects-98c0794a.vercel.app/"
                />

                <div>
                  <div className="inline-flex items-center gap-2 mb-3">
                    <BarChart3 className="w-5 h-5 text-yellow-400" />
                    <h3 className="text-2xl font-bold">Lumina F</h3>
                  </div>
                  <p className="text-white/60 mb-6 leading-relaxed">
                    Financial modeling suite. Risk-adjusted projections and multi-year forecasts
                    derived from your strategy.
                  </p>

                  <div className="space-y-2 mb-6">
                    <div className="flex items-center gap-2 justify-center text-sm text-white/50">
                      <Check className="w-4 h-4 text-yellow-400" />
                      <span>Multi-year forecasts</span>
                    </div>
                    <div className="flex items-center gap-2 justify-center text-sm text-white/50">
                      <Check className="w-4 h-4 text-yellow-400" />
                      <span>Risk adjustments</span>
                    </div>
                    <div className="flex items-center gap-2 justify-center text-sm text-white/50">
                      <Check className="w-4 h-4 text-yellow-400" />
                      <span>Scenario comparison</span>
                    </div>
                  </div>

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

      {/* How It Works - Visual Flow */}
      <section id="features" className="py-32 px-6 bg-gradient-to-b from-black via-purple-950/10 to-black">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              How it works
            </h2>
            <p className="text-xl text-white/60">
              Intelligence that flows automatically. No manual data entry. No reconciliation.
            </p>
          </div>

          <div className="relative">
            {/* Gradient background */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-red-500/10 to-yellow-500/10 blur-3xl rounded-3xl" />

            <div className="relative bg-white/[0.02] border border-white/10 rounded-3xl p-12 backdrop-blur-xl">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Step 1: Strategy */}
                <div className="text-center space-y-4">
                  <div className="w-16 h-16 mx-auto bg-purple-500/10 border border-purple-500/20 rounded-2xl flex items-center justify-center">
                    <TrendingUp className="w-8 h-8 text-purple-400" />
                  </div>
                  <div className="text-6xl font-bold text-purple-400">1</div>
                  <h3 className="text-xl font-semibold">Define Strategy</h3>
                  <p className="text-white/60 text-sm leading-relaxed">
                    Create your scenario with objectives, assumptions, and KPIs. This is your single source of truth.
                  </p>
                </div>

                {/* Arrow */}
                <div className="hidden md:flex items-center justify-center">
                  <ArrowRight className="w-12 h-12 text-white/20" />
                </div>

                {/* Step 2: Risk */}
                <div className="text-center space-y-4">
                  <div className="w-16 h-16 mx-auto bg-red-500/10 border border-red-500/20 rounded-2xl flex items-center justify-center">
                    <Shield className="w-8 h-8 text-red-400" />
                  </div>
                  <div className="text-6xl font-bold text-red-400">2</div>
                  <h3 className="text-xl font-semibold">Risk Auto-Derives</h3>
                  <p className="text-white/60 text-sm leading-relaxed">
                    Lumina analyzes your strategy and automatically identifies risks, scores exposures, and calculates threat levels.
                  </p>
                </div>
              </div>

              <div className="flex justify-center my-8">
                <ArrowRight className="w-12 h-12 text-white/20 rotate-90" />
              </div>

              <div className="text-center space-y-4">
                <div className="w-16 h-16 mx-auto bg-yellow-500/10 border border-yellow-500/20 rounded-2xl flex items-center justify-center">
                  <BarChart3 className="w-8 h-8 text-yellow-400" />
                </div>
                <div className="text-6xl font-bold text-yellow-400">3</div>
                <h3 className="text-xl font-semibold">Finance Models Build</h3>
                <p className="text-white/60 text-sm leading-relaxed max-w-md mx-auto">
                  Financial projections are generated from your strategy and adjusted for the identified risks. See year-by-year forecasts instantly.
                </p>
              </div>

              <div className="mt-12 pt-8 border-t border-white/10 text-center">
                <p className="text-white/80 mb-6 text-lg">
                  Change your strategy once. Watch everything update in real-time.
                </p>
                <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 rounded-xl">
                  <Zap className="w-5 h-5 text-purple-400" />
                  <span className="text-sm font-semibold text-purple-300">Real-time cascade across all modules</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section id="use-cases" className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <div className="inline-block px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full text-sm text-blue-400 font-semibold mb-6">
              USE CASES
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Built for every scenario
            </h2>
            <p className="text-xl text-white/60 max-w-2xl mx-auto">
              From market expansion to M&A, product launches to digital transformation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white/[0.02] border border-white/10 rounded-2xl p-8 hover:bg-white/[0.04] transition-all">
              <div className="w-12 h-12 bg-blue-500/10 border border-blue-500/20 rounded-xl flex items-center justify-center mb-4">
                <Globe className="w-6 h-6 text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Market Expansion</h3>
              <p className="text-white/60 leading-relaxed">
                Model new market entry scenarios with multi-year projections, risk-adjusted for regulatory, competitive, and operational challenges.
              </p>
            </div>

            <div className="bg-white/[0.02] border border-white/10 rounded-2xl p-8 hover:bg-white/[0.04] transition-all">
              <div className="w-12 h-12 bg-purple-500/10 border border-purple-500/20 rounded-xl flex items-center justify-center mb-4">
                <Target className="w-6 h-6 text-purple-400" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Product Launch</h3>
              <p className="text-white/60 leading-relaxed">
                Plan product launches with clear success metrics, identified risks, and financial targets that cascade through your organization.
              </p>
            </div>

            <div className="bg-white/[0.02] border border-white/10 rounded-2xl p-8 hover:bg-white/[0.04] transition-all">
              <div className="w-12 h-12 bg-red-500/10 border border-red-500/20 rounded-xl flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-red-400" />
              </div>
              <h3 className="text-xl font-semibold mb-3">M&A Analysis</h3>
              <p className="text-white/60 leading-relaxed">
                Evaluate acquisition targets with integrated strategy, risk, and financial modeling. See the full picture before you commit.
              </p>
            </div>

            <div className="bg-white/[0.02] border border-white/10 rounded-2xl p-8 hover:bg-white/[0.04] transition-all">
              <div className="w-12 h-12 bg-yellow-500/10 border border-yellow-500/20 rounded-xl flex items-center justify-center mb-4">
                <Layers className="w-6 h-6 text-yellow-400" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Digital Transformation</h3>
              <p className="text-white/60 leading-relaxed">
                Plan major technology initiatives with clear milestones, risk mitigation strategies, and financial impact analysis.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-32 px-6 bg-gradient-to-b from-black via-blue-950/5 to-black">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center space-y-4">
              <div className="text-7xl font-bold bg-gradient-to-br from-purple-400 to-purple-600 bg-clip-text text-transparent">
                85%
              </div>
              <div className="text-white/60 text-lg leading-relaxed">
                Faster planning cycles with automatic derivation
              </div>
            </div>

            <div className="text-center space-y-4">
              <div className="text-7xl font-bold bg-gradient-to-br from-red-400 to-red-600 bg-clip-text text-transparent">
                100%
              </div>
              <div className="text-white/60 text-lg leading-relaxed">
                Consistency across Strategy, Risk, and Finance
              </div>
            </div>

            <div className="text-center space-y-4">
              <div className="text-7xl font-bold bg-gradient-to-br from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
                24/7
              </div>
              <div className="text-white/60 text-lg leading-relaxed">
                Real-time updates as your strategy evolves
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enterprise Features */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Enterprise-ready from day one
            </h2>
            <p className="text-xl text-white/60">
              Security, compliance, and scale built in.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center space-y-3">
              <div className="w-12 h-12 mx-auto bg-blue-500/10 border border-blue-500/20 rounded-xl flex items-center justify-center">
                <Lock className="w-6 h-6 text-blue-400" />
              </div>
              <h3 className="font-semibold">SOC 2 Compliant</h3>
              <p className="text-sm text-white/60">Enterprise-grade security standards</p>
            </div>

            <div className="text-center space-y-3">
              <div className="w-12 h-12 mx-auto bg-purple-500/10 border border-purple-500/20 rounded-xl flex items-center justify-center">
                <Shield className="w-6 h-6 text-purple-400" />
              </div>
              <h3 className="font-semibold">End-to-End Encryption</h3>
              <p className="text-sm text-white/60">Your data stays private</p>
            </div>

            <div className="text-center space-y-3">
              <div className="w-12 h-12 mx-auto bg-red-500/10 border border-red-500/20 rounded-xl flex items-center justify-center">
                <Users className="w-6 h-6 text-red-400" />
              </div>
              <h3 className="font-semibold">Role-Based Access</h3>
              <p className="text-sm text-white/60">Granular permission controls</p>
            </div>

            <div className="text-center space-y-3">
              <div className="w-12 h-12 mx-auto bg-yellow-500/10 border border-yellow-500/20 rounded-xl flex items-center justify-center">
                <Box className="w-6 h-6 text-yellow-400" />
              </div>
              <h3 className="font-semibold">Unlimited Scenarios</h3>
              <p className="text-sm text-white/60">Scale without limits</p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-40 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-purple-600/20 to-pink-600/20" />
        <div className="absolute inset-0 bg-black/60" />

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Turn complexity into
            <br />
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              crystal clarity
            </span>
          </h2>
          <p className="text-xl text-white/70 mb-12 max-w-2xl mx-auto leading-relaxed">
            Join forward-thinking enterprises using Lumina ONE to unify Strategy, Risk, and Finance
            into a single source of truth.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <button
              onClick={handleGetStarted}
              className="group px-10 py-5 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white text-lg font-semibold rounded-xl transition-all inline-flex items-center justify-center gap-3 shadow-2xl shadow-purple-500/20"
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

          <p className="text-sm text-white/50">
            No credit card required • 14-day free trial • Cancel anytime
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-12 px-6 bg-black">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-8">
            <div className="flex flex-col md:flex-row items-center gap-6">
              <LuminaOneWordmark />
              <div className="flex items-center gap-6 text-sm text-white/60">
                <a href="#modules" className="hover:text-white transition-colors">Modules</a>
                <a href="#features" className="hover:text-white transition-colors">Features</a>
                <a href="#use-cases" className="hover:text-white transition-colors">Use Cases</a>
                <button onClick={() => navigate(ROUTES.login)} className="hover:text-white transition-colors">
                  Dashboard
                </button>
              </div>
            </div>
            <BuildStamp className="text-white/30" />
          </div>
          <div className="text-center md:text-left text-sm text-white/40">
            © 2026 Lumina One. Complete business intelligence platform.
          </div>
        </div>
      </footer>
    </div>
  )
}
