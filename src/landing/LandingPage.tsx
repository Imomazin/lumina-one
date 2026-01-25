import { ArrowRight, Shield, TrendingUp, BarChart3, ChevronRight, DollarSign } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import { useStrategyStore } from '../store'
import { ROUTES } from '../routes'
import { BuildStamp } from '../components/BuildStamp'
import { LuminaOneWordmark } from '../components/LuminaOneLogo'
import { ModuleCube } from '../components/ModuleCube'
import { RevolvingDiamond } from '../components/RevolvingDiamond'
import { Footer } from '../components/Footer'

export function LandingPage() {
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
    <div className="min-h-screen bg-black text-white overflow-x-hidden" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-black/80 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <LuminaOneWordmark />

          <nav className="hidden md:flex items-center gap-8">
            <a href="#modules" className="text-sm font-medium text-white/70 hover:text-white transition-colors">
              Modules
            </a>
            <a href="#customers" className="text-sm font-medium text-white/70 hover:text-white transition-colors">
              Customers
            </a>
            <a href="#features" className="text-sm font-medium text-white/70 hover:text-white transition-colors">
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
      <section className="relative pt-40 pb-40 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            {/* Left: Copy */}
            <div className="space-y-10">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/5 border border-white/10 rounded-md text-xs font-medium text-white/60 uppercase tracking-wider">
                Enterprise Intelligence
              </div>

              <h1 className="text-4xl md:text-5xl font-semibold leading-[1.15] tracking-tight text-white/95">
                Unified intelligence across
                <br />
                <span className="text-purple-600">Strategy</span>
                <span className="text-white/95">, </span>
                <span className="text-red-700">Risk</span>
                <span className="text-white/95">, and </span>
                <span className="text-amber-600">Finance</span>
              </h1>

              <p className="text-lg font-normal text-white/60 max-w-lg leading-relaxed">
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
                  className="px-8 py-3.5 bg-white/5 border border-white/10 text-white/90 font-medium rounded-lg hover:bg-white/10 transition-colors"
                >
                  Sign In
                </button>
              </div>

              <div className="flex items-center gap-6 pt-2 text-sm text-white/50">
                <span>Enterprise-ready</span>
                <span className="text-white/20">•</span>
                <span>SOC 2 compliant</span>
                <span className="text-white/20">•</span>
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
            <div className="inline-block px-3 py-1.5 bg-white/5 border border-white/10 rounded-md text-xs font-medium text-white/60 uppercase tracking-wider mb-8">
              Intelligence Modules
            </div>
            <h2 className="text-3xl md:text-4xl font-semibold mb-6 tracking-tight text-white/95">
              Three modules. One system.
            </h2>
            <p className="text-lg font-normal text-white/60 max-w-2xl mx-auto leading-relaxed">
              Each module serves a distinct function. All modules share a single source of truth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Strategy Module */}
            <div className="text-center space-y-6">
              <ModuleCube
                color="strategy"
                size={200}
                className="mx-auto"
                href="https://ambi-sight-reloaded-git-claude-fi-184691-imos-projects-98c0794a.vercel.app/"
              />

              <div>
                <div className="flex items-center justify-center gap-2 mb-2">
                  <TrendingUp className="w-4 h-4 text-purple-400" />
                  <h3 className="text-lg font-semibold tracking-tight text-white/90">Lumina S</h3>
                </div>
                <p className="text-sm text-white/50 mb-6 leading-relaxed">
                  Strategic planning and scenario modeling. Single source of truth.
                </p>

                <div className="space-y-1.5 mb-6 text-sm text-white/40">
                  <div>Scenario modeling</div>
                  <div>KPI tracking</div>
                  <div>Assumption management</div>
                </div>

                <a
                  href="https://ambi-sight-reloaded-git-claude-fi-184691-imos-projects-98c0794a.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-purple-400 hover:text-purple-300 transition-colors text-sm font-medium"
                >
                  Launch module
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Risk Module */}
            <div className="text-center space-y-6">
              <ModuleCube
                color="risk"
                size={200}
                className="mx-auto"
                href="https://risk-coach-mvp-git-claude-lumina-62a0d8-imos-projects-98c0794a.vercel.app/"
              />

              <div>
                <div className="flex items-center justify-center gap-2 mb-2">
                  <Shield className="w-4 h-4 text-red-400" />
                  <h3 className="text-lg font-semibold tracking-tight text-white/90">Lumina R</h3>
                </div>
                <p className="text-sm text-white/50 mb-6 leading-relaxed">
                  Automatically derived risk analysis from strategic plans.
                </p>

                <div className="space-y-1.5 mb-6 text-sm text-white/40">
                  <div>Auto-derived risks</div>
                  <div>Exposure scoring</div>
                  <div>Impact analysis</div>
                </div>

                <a
                  href="https://risk-coach-mvp-git-claude-lumina-62a0d8-imos-projects-98c0794a.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-red-400 hover:text-red-300 transition-colors text-sm font-medium"
                >
                  Launch module
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Finance Module */}
            <div className="text-center space-y-6">
              <ModuleCube
                color="finance"
                size={200}
                className="mx-auto"
                href="https://lumina-f-git-claude-nav-shell-2ep8j-imos-projects-98c0794a.vercel.app/"
              />

              <div>
                <div className="flex items-center justify-center gap-2 mb-2">
                  <BarChart3 className="w-4 h-4 text-yellow-400" />
                  <h3 className="text-lg font-semibold tracking-tight text-white/90">Lumina F</h3>
                </div>
                <p className="text-sm text-white/50 mb-6 leading-relaxed">
                  Risk-adjusted financial models derived from strategy.
                </p>

                <div className="space-y-1.5 mb-6 text-sm text-white/40">
                  <div>Multi-year forecasts</div>
                  <div>Risk adjustments</div>
                  <div>Scenario comparison</div>
                </div>

                <a
                  href="https://lumina-f-git-claude-nav-shell-2ep8j-imos-projects-98c0794a.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-yellow-400 hover:text-yellow-300 transition-colors text-sm font-medium"
                >
                  Launch module
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
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
            <div className="inline-block px-3 py-1.5 bg-white/5 border border-white/10 rounded-md text-xs font-medium text-white/60 uppercase tracking-wider mb-8">
              Case Studies
            </div>
            <h2 className="text-3xl md:text-4xl font-semibold mb-6 tracking-tight text-white/95">
              Deployed at scale
            </h2>
            <p className="text-lg font-normal text-white/60 max-w-2xl mx-auto leading-relaxed">
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
                      <div className="inline-flex items-center gap-2 px-2.5 py-1 bg-white/5 border border-white/10 rounded text-xs font-medium text-white/50 uppercase tracking-wider">
                        Enterprise Software
                      </div>
                      <h3 className="text-xl font-semibold tracking-tight text-white/90">
                        TechCorp reduced planning cycles from 6 weeks to 3 days
                      </h3>
                      <p className="text-sm text-white/60 leading-relaxed">
                        Quarterly planning now uses a single scenario model. Risk and finance update automatically from strategy changes.
                      </p>
                      <div className="grid grid-cols-2 gap-4 pt-2">
                        <div>
                          <div className="text-2xl font-semibold text-white/80">95%</div>
                          <div className="text-xs text-white/50">Faster planning</div>
                        </div>
                        <div>
                          <div className="text-2xl font-semibold text-white/80">$2.4M</div>
                          <div className="text-xs text-white/50">Annual savings</div>
                        </div>
                      </div>
                      {/* Image placeholder */}
                      <div className="mt-4 aspect-video bg-gradient-to-br from-purple-500/10 to-blue-500/10 rounded-lg border border-white/10 flex items-center justify-center">
                        <div className="text-center">
                          <TrendingUp className="w-12 h-12 text-purple-400/40 mx-auto mb-2" />
                          <div className="text-xs text-white/40">Strategy Dashboard</div>
                        </div>
                      </div>
                    </div>
                    <div className="bg-white/[0.02] border border-white/10 rounded-lg p-6 space-y-4">
                      <div className="text-xs text-white/50 uppercase tracking-wider">Scenario Flow</div>
                      <div className="space-y-3">
                        <div className="bg-white/[0.02] border border-white/10 rounded p-3">
                          <div className="text-xs text-white/50">Strategy Input</div>
                          <div className="text-sm text-white/80">$180M revenue • 12 markets</div>
                        </div>
                        <div className="flex justify-center">
                          <ChevronRight className="w-4 h-4 text-white/20" />
                        </div>
                        <div className="bg-white/[0.02] border border-white/10 rounded p-3">
                          <div className="text-xs text-white/50">Auto-Derived Risks</div>
                          <div className="text-sm text-white/80">47 risks • $18M exposure</div>
                        </div>
                        <div className="flex justify-center">
                          <ChevronRight className="w-4 h-4 text-white/20" />
                        </div>
                        <div className="bg-white/[0.02] border border-white/10 rounded p-3">
                          <div className="text-xs text-white/50">Financial Model</div>
                          <div className="text-sm text-white/80">NPV: $142M • IRR: 22%</div>
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
                      <div className="bg-white/[0.02] border border-white/10 rounded-lg p-6">
                        <div className="text-xs text-white/50 uppercase tracking-wider mb-4">Risk Dashboard</div>
                        <div className="grid grid-cols-3 gap-3 mb-4">
                          <div className="text-center">
                            <div className="text-xl font-semibold text-white/80">148</div>
                            <div className="text-xs text-white/40">Factors</div>
                          </div>
                          <div className="text-center">
                            <div className="text-xl font-semibold text-white/80">$45M</div>
                            <div className="text-xs text-white/40">Impact</div>
                          </div>
                          <div className="text-center">
                            <div className="text-xl font-semibold text-white/80">98%</div>
                            <div className="text-xs text-white/40">Confidence</div>
                          </div>
                        </div>
                      </div>
                      {/* Image placeholder */}
                      <div className="aspect-video bg-gradient-to-br from-red-500/10 to-orange-500/10 rounded-lg border border-white/10 flex items-center justify-center">
                        <div className="text-center">
                          <Shield className="w-12 h-12 text-red-400/40 mx-auto mb-2" />
                          <div className="text-xs text-white/40">Risk Analysis</div>
                        </div>
                      </div>
                    </div>
                    <div className="space-y-4 order-1 lg:order-2">
                      <div className="inline-flex items-center gap-2 px-2.5 py-1 bg-white/5 border border-white/10 rounded text-xs font-medium text-white/50 uppercase tracking-wider">
                        Financial Services
                      </div>
                      <h3 className="text-xl font-semibold tracking-tight text-white/90">
                        FinanceFirst automated risk compliance across 47 countries
                      </h3>
                      <p className="text-sm text-white/60 leading-relaxed">
                        Regulatory risk now tracked automatically. Compliance issues flagged before they escalate.
                      </p>
                      <div className="grid grid-cols-2 gap-4 pt-2">
                        <div>
                          <div className="text-2xl font-semibold text-white/80">87%</div>
                          <div className="text-xs text-white/50">Fewer incidents</div>
                        </div>
                        <div>
                          <div className="text-2xl font-semibold text-white/80">24hr</div>
                          <div className="text-xs text-white/50">Assessment time</div>
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
                      <div className="inline-flex items-center gap-2 px-2.5 py-1 bg-white/5 border border-white/10 rounded text-xs font-medium text-white/50 uppercase tracking-wider">
                        Retail
                      </div>
                      <h3 className="text-xl font-semibold tracking-tight text-white/90">
                        RetailMax launched 12 product lines with integrated forecasts
                      </h3>
                      <p className="text-sm text-white/60 leading-relaxed">
                        Product launches now model strategy, risk, and finance together. Market conditions update projections in real time.
                      </p>
                      <div className="grid grid-cols-2 gap-4 pt-2">
                        <div>
                          <div className="text-2xl font-semibold text-white/80">92%</div>
                          <div className="text-xs text-white/50">Forecast accuracy</div>
                        </div>
                        <div>
                          <div className="text-2xl font-semibold text-white/80">3x</div>
                          <div className="text-xs text-white/50">ROI improvement</div>
                        </div>
                      </div>
                      {/* Image placeholder */}
                      <div className="mt-4 aspect-video bg-gradient-to-br from-yellow-500/10 to-orange-500/10 rounded-lg border border-white/10 flex items-center justify-center">
                        <div className="text-center">
                          <DollarSign className="w-12 h-12 text-yellow-400/40 mx-auto mb-2" />
                          <div className="text-xs text-white/40">Financial Forecast</div>
                        </div>
                      </div>
                    </div>
                    <div className="bg-white/[0.02] border border-white/10 rounded-lg p-6">
                      <div className="text-xs text-white/50 uppercase tracking-wider mb-4">Launch Timeline</div>
                      <div className="space-y-3">
                        <div className="flex items-center gap-3">
                          <div className="w-2 h-2 bg-white/40 rounded-full" />
                          <div className="flex-1">
                            <div className="text-xs text-white/50">Q1: Strategy</div>
                            <div className="text-sm text-white/80">$12M opportunity</div>
                          </div>
                        </div>
                        <div className="flex items-center gap-3">
                          <div className="w-2 h-2 bg-white/40 rounded-full" />
                          <div className="flex-1">
                            <div className="text-xs text-white/50">Q2: Risk Assessment</div>
                            <div className="text-sm text-white/80">Medium exposure</div>
                          </div>
                        </div>
                        <div className="flex items-center gap-3">
                          <div className="w-2 h-2 bg-white/40 rounded-full" />
                          <div className="flex-1">
                            <div className="text-xs text-white/50">Q3-Q4: Launch</div>
                            <div className="text-sm text-white/80">$8.2M projected</div>
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
              <div className="text-5xl font-semibold text-white/90 tracking-tight">
                85%
              </div>
              <div className="text-white/50 text-sm leading-relaxed">
                Faster planning cycles
              </div>
            </div>

            <div className="text-center space-y-3">
              <div className="text-5xl font-semibold text-white/90 tracking-tight">
                100%
              </div>
              <div className="text-white/50 text-sm leading-relaxed">
                Cross-module consistency
              </div>
            </div>

            <div className="text-center space-y-3">
              <div className="text-5xl font-semibold text-white/90 tracking-tight">
                Real-time
              </div>
              <div className="text-white/50 text-sm leading-relaxed">
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
            <h2 className="text-3xl md:text-4xl font-semibold mb-6 tracking-tight text-white/95">
              How it works
            </h2>
            <p className="text-base text-white/60">
              Define strategy. Risk and finance derive automatically.
            </p>
          </div>

          <div className="bg-white/[0.02] border border-white/10 rounded-lg p-10">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <div className="space-y-3">
                <div className="w-12 h-12 bg-white/5 border border-white/10 rounded flex items-center justify-center">
                  <TrendingUp className="w-5 h-5 text-white/60" />
                </div>
                <div className="text-lg font-semibold text-white/90">1. Define Strategy</div>
                <p className="text-sm text-white/60 leading-relaxed">
                  Create scenarios with objectives, assumptions, and KPIs.
                </p>
              </div>

              <div className="space-y-3">
                <div className="w-12 h-12 bg-white/5 border border-white/10 rounded flex items-center justify-center">
                  <Shield className="w-5 h-5 text-white/60" />
                </div>
                <div className="text-lg font-semibold text-white/90">2. Risk Derives</div>
                <p className="text-sm text-white/60 leading-relaxed">
                  Risk analysis generates automatically from strategy inputs.
                </p>
              </div>

              <div className="space-y-3">
                <div className="w-12 h-12 bg-white/5 border border-white/10 rounded flex items-center justify-center">
                  <BarChart3 className="w-5 h-5 text-white/60" />
                </div>
                <div className="text-lg font-semibold text-white/90">3. Finance Builds</div>
                <p className="text-sm text-white/60 leading-relaxed">
                  Financial projections adjust for identified risks.
                </p>
              </div>
            </div>

            <div className="mt-10 pt-8 border-t border-white/10 text-center">
              <p className="text-sm text-white/50">
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
            <div className="inline-block px-3 py-1.5 bg-white/5 border border-white/10 rounded-md text-xs font-medium text-white/60 uppercase tracking-wider mb-8">
              Trusted by Leaders
            </div>
            <h2 className="text-3xl md:text-4xl font-semibold mb-6 tracking-tight text-white/95">
              What our customers say
            </h2>
            <p className="text-lg font-normal text-white/60 max-w-2xl mx-auto leading-relaxed">
              Join thousands of satisfied professionals transforming their strategic planning process.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <div className="bg-white/[0.02] border border-white/10 rounded-lg p-6 space-y-4">
              <div className="flex items-center gap-4">
                <img
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=80&h=80&fit=crop&crop=faces"
                  alt="Customer"
                  className="w-14 h-14 rounded-full object-cover border-2 border-white/10"
                />
                <div>
                  <div className="text-sm font-semibold text-white/90">Michael Chen</div>
                  <div className="text-xs text-white/50">CFO, TechCorp</div>
                </div>
              </div>
              <p className="text-sm text-white/70 leading-relaxed">
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
            <div className="bg-white/[0.02] border border-white/10 rounded-lg p-6 space-y-4">
              <div className="flex items-center gap-4">
                <img
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=80&h=80&fit=crop&crop=faces"
                  alt="Customer"
                  className="w-14 h-14 rounded-full object-cover border-2 border-white/10"
                />
                <div>
                  <div className="text-sm font-semibold text-white/90">Sarah Martinez</div>
                  <div className="text-xs text-white/50">VP Strategy, FinanceFirst</div>
                </div>
              </div>
              <p className="text-sm text-white/70 leading-relaxed">
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
            <div className="bg-white/[0.02] border border-white/10 rounded-lg p-6 space-y-4">
              <div className="flex items-center gap-4">
                <img
                  src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=80&h=80&fit=crop&crop=faces"
                  alt="Customer"
                  className="w-14 h-14 rounded-full object-cover border-2 border-white/10"
                />
                <div>
                  <div className="text-sm font-semibold text-white/90">David Thompson</div>
                  <div className="text-xs text-white/50">Head of Finance, RetailMax</div>
                </div>
              </div>
              <p className="text-sm text-white/70 leading-relaxed">
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

          {/* Additional row of satisfied customers */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 pt-16 border-t border-white/10">
            <div className="text-center space-y-3">
              <img
                src="https://images.unsplash.com/photo-1580489944761-15a19d654956?w=120&h=120&fit=crop&crop=faces"
                alt="Satisfied customer"
                className="w-20 h-20 rounded-full object-cover border-2 border-white/10 mx-auto"
              />
              <div>
                <div className="text-sm font-medium text-white/80">Emma Wilson</div>
                <div className="text-xs text-white/50">Risk Manager</div>
              </div>
            </div>

            <div className="text-center space-y-3">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&h=120&fit=crop&crop=faces"
                alt="Satisfied customer"
                className="w-20 h-20 rounded-full object-cover border-2 border-white/10 mx-auto"
              />
              <div>
                <div className="text-sm font-medium text-white/80">James Parker</div>
                <div className="text-xs text-white/50">Strategy Director</div>
              </div>
            </div>

            <div className="text-center space-y-3">
              <img
                src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=120&h=120&fit=crop&crop=faces"
                alt="Satisfied customer"
                className="w-20 h-20 rounded-full object-cover border-2 border-white/10 mx-auto"
              />
              <div>
                <div className="text-sm font-medium text-white/80">Rachel Kim</div>
                <div className="text-xs text-white/50">Financial Analyst</div>
              </div>
            </div>

            <div className="text-center space-y-3">
              <img
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=120&h=120&fit=crop&crop=faces"
                alt="Satisfied customer"
                className="w-20 h-20 rounded-full object-cover border-2 border-white/10 mx-auto"
              />
              <div>
                <div className="text-sm font-medium text-white/80">Alex Johnson</div>
                <div className="text-xs text-white/50">COO</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-semibold mb-6 leading-tight tracking-tight text-white/95">
            Maintain consistency across<br />Strategy, Risk, and Finance
          </h2>
          <p className="text-base text-white/60 mb-10 max-w-xl mx-auto leading-relaxed">
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
              className="px-8 py-3.5 bg-white/5 border border-white/10 text-white/90 font-medium rounded-lg hover:bg-white/10 transition-colors"
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
