import { ArrowRight, Check, Zap, Shield, TrendingUp, BarChart3, Sparkles, Building2, Rocket, ChevronRight } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import { useStrategyStore } from '../store'
import { ROUTES } from '../routes'
import { BuildStamp } from '../components/BuildStamp'
import { LuminaOneWordmark } from '../components/LuminaOneLogo'
import { ModuleCube } from '../components/ModuleCube'
import { RevolvingDiamond } from '../components/RevolvingDiamond'

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
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-full text-sm font-medium">
                <Sparkles className="w-4 h-4 text-blue-400" />
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent font-semibold">
                  Complete Business Intelligence Platform
                </span>
              </div>

              <h1 className="text-sm md:text-base font-bold leading-[1.1] tracking-tight">
                One platform.
                <br />
                <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Every insight.
                </span>
              </h1>

              <p className="text-base font-normal text-white/70 max-w-lg leading-relaxed">
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
                  <span className="text-sm font-medium text-white/60">No credit card</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-5 h-5 text-emerald-400" />
                  <span className="text-sm font-medium text-white/60">14-day free trial</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-5 h-5 text-emerald-400" />
                  <span className="text-sm font-medium text-white/60">Cancel anytime</span>
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

      {/* Three Modules Section */}
      <section id="modules" className="py-32 px-6 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-blue-950/5 to-black" />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-20">
            <div className="inline-block px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full text-sm text-blue-400 font-semibold mb-6 tracking-wide">
              THREE POWERFUL MODULES
            </div>
            <h2 className="text-base md:text-sm font-bold mb-6 tracking-tight">
              Click any module to explore
            </h2>
            <p className="text-base font-normal text-white/60 max-w-3xl mx-auto leading-relaxed">
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
                    <h3 className="text-sm font-bold tracking-tight">Lumina S</h3>
                  </div>
                  <p className="text-white/60 mb-6 leading-relaxed font-normal">
                    Strategic planning workspace. Define scenarios, set objectives, track KPIs.
                    The source of truth for your entire organization.
                  </p>

                  <div className="space-y-2 mb-6">
                    <div className="flex items-center gap-2 justify-center text-sm text-white/50 font-medium">
                      <Check className="w-4 h-4 text-purple-400" />
                      <span>Scenario modeling</span>
                    </div>
                    <div className="flex items-center gap-2 justify-center text-sm text-white/50 font-medium">
                      <Check className="w-4 h-4 text-purple-400" />
                      <span>KPI tracking</span>
                    </div>
                    <div className="flex items-center gap-2 justify-center text-sm text-white/50 font-medium">
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
                    <h3 className="text-sm font-bold tracking-tight">Lumina R</h3>
                  </div>
                  <p className="text-white/60 mb-6 leading-relaxed font-normal">
                    Risk intelligence engine. Auto-derived threat analysis and exposure scoring
                    based on your strategy.
                  </p>

                  <div className="space-y-2 mb-6">
                    <div className="flex items-center gap-2 justify-center text-sm text-white/50 font-medium">
                      <Check className="w-4 h-4 text-red-400" />
                      <span>Auto-derived risks</span>
                    </div>
                    <div className="flex items-center gap-2 justify-center text-sm text-white/50 font-medium">
                      <Check className="w-4 h-4 text-red-400" />
                      <span>Exposure scoring</span>
                    </div>
                    <div className="flex items-center gap-2 justify-center text-sm text-white/50 font-medium">
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
                    <h3 className="text-sm font-bold tracking-tight">Lumina F</h3>
                  </div>
                  <p className="text-white/60 mb-6 leading-relaxed font-normal">
                    Financial modeling suite. Risk-adjusted projections and multi-year forecasts
                    derived from your strategy.
                  </p>

                  <div className="space-y-2 mb-6">
                    <div className="flex items-center gap-2 justify-center text-sm text-white/50 font-medium">
                      <Check className="w-4 h-4 text-yellow-400" />
                      <span>Multi-year forecasts</span>
                    </div>
                    <div className="flex items-center gap-2 justify-center text-sm text-white/50 font-medium">
                      <Check className="w-4 h-4 text-yellow-400" />
                      <span>Risk adjustments</span>
                    </div>
                    <div className="flex items-center gap-2 justify-center text-sm text-white/50 font-medium">
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

      {/* Real Customer Stories */}
      <section id="customers" className="py-40 px-6 bg-gradient-to-b from-black via-purple-950/5 to-black overflow-hidden">
        <style>{`
          @keyframes scrollRightToLeft {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }

          @keyframes scrollLeftToRight {
            0% { transform: translateX(-50%); }
            100% { transform: translateX(0); }
          }

          .scroll-container-rtl {
            animation: scrollRightToLeft 40s linear infinite;
          }

          .scroll-container-ltr {
            animation: scrollLeftToRight 40s linear infinite;
          }

          .scroll-container-rtl:hover,
          .scroll-container-ltr:hover {
            animation-play-state: paused;
          }
        `}</style>

        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-24">
            <div className="inline-block px-4 py-2 bg-purple-500/10 border border-purple-500/20 rounded-full text-sm text-purple-400 font-semibold mb-6 tracking-wide">
              CUSTOMER STORIES
            </div>
            <h2 className="text-base md:text-sm font-bold mb-6 tracking-tight">
              Real results. Real companies.
            </h2>
            <p className="text-base font-normal text-white/60 max-w-3xl mx-auto leading-relaxed">
              See how leading enterprises use Lumina ONE to transform complexity into clarity.
            </p>
          </div>

          <div className="space-y-32">
            {/* Story 1: TechCorp Global - Scrolling Right to Left */}
            <div className="relative">
              <div className="overflow-hidden">
                <div className="scroll-container-rtl flex gap-8">
                  {/* Duplicate content for seamless loop */}
                  {[1, 2].map((iteration) => (
                    <div key={iteration} className="flex-shrink-0 w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center px-4">
                      <div className="space-y-6">
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-blue-500/10 border border-blue-500/20 rounded-full text-xs font-semibold text-blue-400 tracking-wide">
                          <Building2 className="w-3.5 h-3.5" />
                          ENTERPRISE SOFTWARE
                        </div>
                        <h3 className="text-sm font-bold tracking-tight leading-tight">
                          TechCorp slashed planning cycles from 6 weeks to 3 days
                        </h3>
                        <p className="text-sm text-white/60 leading-relaxed font-normal">
                          Before Lumina ONE, TechCorp's quarterly planning involved dozens of spreadsheets,
                          endless email chains, and constant version conflicts. Now their executive team sees
                          real-time intelligence across Strategy, Risk, and Finance in one unified view.
                        </p>

                        <div className="grid grid-cols-2 gap-6 pt-4">
                          <div className="space-y-2">
                            <div className="text-sm font-bold text-blue-400">95%</div>
                            <div className="text-sm font-medium text-white/60">Faster decision making</div>
                          </div>
                          <div className="space-y-2">
                            <div className="text-sm font-bold text-purple-400">$2.4M</div>
                            <div className="text-sm font-medium text-white/60">Saved annually</div>
                          </div>
                        </div>

                        <blockquote className="border-l-2 border-blue-500/50 pl-6 italic text-white/70 font-normal">
                          "Lumina ONE eliminated our planning bottleneck. We make better decisions faster,
                          and everyone works from the same source of truth."
                          <footer className="mt-2 text-sm not-italic text-white/50 font-medium">
                            — Sarah Chen, VP Strategy at TechCorp
                          </footer>
                        </blockquote>
                      </div>

                      <div className="relative">
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 blur-3xl rounded-3xl" />
                        <div className="relative bg-gradient-to-br from-blue-950/40 to-purple-950/40 backdrop-blur-xl border border-white/10 rounded-2xl p-8 space-y-6">
                          <div className="flex items-center gap-3 pb-4 border-b border-white/10">
                            <div className="w-10 h-10 bg-blue-500/20 rounded-lg flex items-center justify-center">
                              <TrendingUp className="w-5 h-5 text-blue-400" />
                            </div>
                            <div className="flex-1">
                              <div className="text-sm font-semibold text-white">Asia-Pacific Expansion</div>
                              <div className="text-xs text-white/50 font-medium">5-year scenario • Active</div>
                            </div>
                            <div className="text-xs font-medium text-emerald-400 flex items-center gap-1">
                              <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse" />
                              Live
                            </div>
                          </div>

                          <div className="space-y-4">
                            <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-4 space-y-2">
                              <div className="text-xs font-semibold text-blue-400 mb-1 tracking-wide">STRATEGY INPUT</div>
                              <div className="text-sm text-white/80 font-medium">$180M revenue target • 12 new markets</div>
                              <div className="grid grid-cols-2 gap-2 mt-3">
                                <div className="bg-blue-500/10 rounded px-2 py-1">
                                  <div className="text-xs text-blue-300 font-medium">6 KPIs</div>
                                </div>
                                <div className="bg-blue-500/10 rounded px-2 py-1">
                                  <div className="text-xs text-blue-300 font-medium">18 Assumptions</div>
                                </div>
                              </div>
                            </div>
                            <div className="flex items-center justify-center">
                              <ChevronRight className="w-5 h-5 text-white/30" />
                            </div>
                            <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-4 space-y-2">
                              <div className="text-xs font-semibold text-red-400 mb-1 tracking-wide">AUTO-DERIVED RISKS</div>
                              <div className="text-sm text-white/80 font-medium mb-2">Currency: High • Regulatory: Medium</div>
                              <div className="grid grid-cols-3 gap-2">
                                <div className="bg-red-500/10 rounded px-2 py-1 text-center">
                                  <div className="text-sm font-bold text-red-400">47</div>
                                  <div className="text-xs text-red-300">Risks</div>
                                </div>
                                <div className="bg-yellow-500/10 rounded px-2 py-1 text-center">
                                  <div className="text-sm font-bold text-yellow-400">$18M</div>
                                  <div className="text-xs text-yellow-300">Exposure</div>
                                </div>
                                <div className="bg-emerald-500/10 rounded px-2 py-1 text-center">
                                  <div className="text-sm font-bold text-emerald-400">12</div>
                                  <div className="text-xs text-emerald-300">Mitigations</div>
                                </div>
                              </div>
                            </div>
                            <div className="flex items-center justify-center">
                              <ChevronRight className="w-5 h-5 text-white/30" />
                            </div>
                            <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-lg p-4 space-y-2">
                              <div className="text-xs font-semibold text-yellow-400 mb-1 tracking-wide">FINANCIAL MODEL</div>
                              <div className="text-sm text-white/80 font-medium mb-2">Risk-adjusted NPV: $142M • IRR: 22%</div>
                              {/* Mini bar chart visualization */}
                              <div className="flex items-end gap-1 h-12 mt-3">
                                {[40, 65, 55, 80, 90].map((height, i) => (
                                  <div key={i} className="flex-1 bg-gradient-to-t from-yellow-500/50 to-yellow-400/30 rounded-t" style={{ height: `${height}%` }} />
                                ))}
                              </div>
                              <div className="text-xs text-white/50 text-center mt-1">5-year revenue projection</div>
                            </div>
                          </div>

                          <div className="pt-4 border-t border-white/10">
                            <div className="flex items-center justify-between">
                              <div className="flex items-center gap-2 text-xs font-medium text-emerald-400">
                                <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
                                Real-time sync across all modules
                              </div>
                              <div className="text-xs text-white/40">Updated 2 min ago</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Story 2: FinanceFirst Bank - Scrolling Left to Right */}
            <div className="relative">
              <div className="overflow-hidden">
                <div className="scroll-container-ltr flex gap-8">
                  {/* Duplicate content for seamless loop */}
                  {[1, 2].map((iteration) => (
                    <div key={iteration} className="flex-shrink-0 w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center px-4">
                      <div className="order-2 lg:order-1 relative">
                        <div className="absolute inset-0 bg-gradient-to-br from-red-500/20 to-yellow-500/20 blur-3xl rounded-3xl" />
                        <div className="relative bg-gradient-to-br from-red-950/40 to-yellow-950/40 backdrop-blur-xl border border-white/10 rounded-2xl p-8">
                          <div className="space-y-6">
                            <div className="flex items-center justify-between pb-3 border-b border-white/10">
                              <div className="text-sm font-semibold text-white tracking-wide">REGULATORY COMPLIANCE DASHBOARD</div>
                              <div className="text-xs font-medium text-emerald-400 flex items-center gap-1">
                                <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse" />
                                Monitoring
                              </div>
                            </div>

                            <div className="grid grid-cols-3 gap-4">
                              <div className="bg-white/5 border border-white/10 rounded-lg p-4 text-center">
                                <div className="text-sm font-bold text-red-400 mb-1">148</div>
                                <div className="text-xs text-white/60 font-medium">Risk factors</div>
                                <div className="text-xs text-red-400/60 mt-1">↑ 12 new</div>
                              </div>
                              <div className="bg-white/5 border border-white/10 rounded-lg p-4 text-center">
                                <div className="text-sm font-bold text-yellow-400 mb-1">$45M</div>
                                <div className="text-xs text-white/60 font-medium">Impact range</div>
                                <div className="text-xs text-yellow-400/60 mt-1">↓ $8M lower</div>
                              </div>
                              <div className="bg-white/5 border border-white/10 rounded-lg p-4 text-center">
                                <div className="text-sm font-bold text-emerald-400 mb-1">98%</div>
                                <div className="text-xs text-white/60 font-medium">Confidence</div>
                                <div className="text-xs text-emerald-400/60 mt-1">High</div>
                              </div>
                            </div>

                            <div className="space-y-3">
                              <div className="flex items-center justify-between p-3 bg-white/5 rounded-lg">
                                <div className="flex items-center gap-2">
                                  <div className="w-2 h-2 bg-red-400 rounded-full" />
                                  <span className="text-sm text-white/80 font-medium">Operational Risk</span>
                                </div>
                                <div className="flex items-center gap-2">
                                  <div className="flex-1 w-20 h-1.5 bg-white/10 rounded-full overflow-hidden">
                                    <div className="h-full bg-red-400 rounded-full" style={{ width: '85%' }} />
                                  </div>
                                  <span className="text-sm font-semibold text-red-400">High</span>
                                </div>
                              </div>
                              <div className="flex items-center justify-between p-3 bg-white/5 rounded-lg">
                                <div className="flex items-center gap-2">
                                  <div className="w-2 h-2 bg-yellow-400 rounded-full" />
                                  <span className="text-sm text-white/80 font-medium">Market Risk</span>
                                </div>
                                <div className="flex items-center gap-2">
                                  <div className="flex-1 w-20 h-1.5 bg-white/10 rounded-full overflow-hidden">
                                    <div className="h-full bg-yellow-400 rounded-full" style={{ width: '60%' }} />
                                  </div>
                                  <span className="text-sm font-semibold text-yellow-400">Medium</span>
                                </div>
                              </div>
                              <div className="flex items-center justify-between p-3 bg-white/5 rounded-lg">
                                <div className="flex items-center gap-2">
                                  <div className="w-2 h-2 bg-emerald-400 rounded-full" />
                                  <span className="text-sm text-white/80 font-medium">Compliance Risk</span>
                                </div>
                                <div className="flex items-center gap-2">
                                  <div className="flex-1 w-20 h-1.5 bg-white/10 rounded-full overflow-hidden">
                                    <div className="h-full bg-emerald-400 rounded-full" style={{ width: '25%' }} />
                                  </div>
                                  <span className="text-sm font-semibold text-emerald-400">Low</span>
                                </div>
                              </div>
                            </div>

                            <div className="pt-3 border-t border-white/10">
                              <div className="grid grid-cols-2 gap-3">
                                <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-3">
                                  <div className="text-xs text-blue-400 font-medium">Countries monitored</div>
                                  <div className="text-sm font-bold text-white mt-1">47</div>
                                </div>
                                <div className="bg-purple-500/10 border border-purple-500/20 rounded-lg p-3">
                                  <div className="text-xs text-purple-400 font-medium">Regulations tracked</div>
                                  <div className="text-sm font-bold text-white mt-1">312</div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="order-1 lg:order-2 space-y-6">
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-red-500/10 border border-red-500/20 rounded-full text-xs font-semibold text-red-400 tracking-wide">
                          <Shield className="w-3.5 h-3.5" />
                          FINANCIAL SERVICES
                        </div>
                        <h3 className="text-sm font-bold tracking-tight leading-tight">
                          FinanceFirst automated risk compliance across 47 countries
                        </h3>
                        <p className="text-sm text-white/60 leading-relaxed font-normal">
                          Managing regulatory risk across multiple jurisdictions was a nightmare of
                          manual tracking and constant updates. Lumina ONE's auto-derived risk analysis
                          now flags potential compliance issues before they become problems.
                        </p>

                        <div className="grid grid-cols-2 gap-6 pt-4">
                          <div className="space-y-2">
                            <div className="text-sm font-bold text-red-400">87%</div>
                            <div className="text-sm font-medium text-white/60">Fewer compliance incidents</div>
                          </div>
                          <div className="space-y-2">
                            <div className="text-sm font-bold text-yellow-400">24hr</div>
                            <div className="text-sm font-medium text-white/60">Risk assessment time</div>
                          </div>
                        </div>

                        <blockquote className="border-l-2 border-red-500/50 pl-6 italic text-white/70 font-normal">
                          "The auto-derived risk scoring changed everything. We catch issues weeks earlier
                          and our audit process went from months to days."
                          <footer className="mt-2 text-sm not-italic text-white/50 font-medium">
                            — Marcus Reynolds, Chief Risk Officer
                          </footer>
                        </blockquote>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Story 3: RetailMax - Scrolling Right to Left */}
            <div className="relative">
              <div className="overflow-hidden">
                <div className="scroll-container-rtl flex gap-8">
                  {/* Duplicate content for seamless loop */}
                  {[1, 2].map((iteration) => (
                    <div key={iteration} className="flex-shrink-0 w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center px-4">
                      <div className="space-y-6">
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-purple-500/10 border border-purple-500/20 rounded-full text-xs font-semibold text-purple-400 tracking-wide">
                          <Rocket className="w-3.5 h-3.5" />
                          RETAIL & E-COMMERCE
                        </div>
                        <h3 className="text-sm font-bold tracking-tight leading-tight">
                          RetailMax launched 12 new product lines with perfect forecasts
                        </h3>
                        <p className="text-sm text-white/60 leading-relaxed font-normal">
                          Product launch planning used to involve gut feelings and historical data that
                          was always outdated. Now RetailMax models every launch with integrated strategy,
                          risk, and financial projections that update as market conditions change.
                        </p>

                        <div className="grid grid-cols-2 gap-6 pt-4">
                          <div className="space-y-2">
                            <div className="text-sm font-bold text-purple-400">92%</div>
                            <div className="text-sm font-medium text-white/60">Forecast accuracy</div>
                          </div>
                          <div className="space-y-2">
                            <div className="text-sm font-bold text-pink-400">3x</div>
                            <div className="text-sm font-medium text-white/60">ROI improvement</div>
                          </div>
                        </div>

                        <blockquote className="border-l-2 border-purple-500/50 pl-6 italic text-white/70 font-normal">
                          "We went from hoping our launches would succeed to knowing they will. The
                          risk-adjusted financial models are remarkably accurate."
                          <footer className="mt-2 text-sm not-italic text-white/50 font-medium">
                            — Jessica Park, Head of Product Strategy
                          </footer>
                        </blockquote>
                      </div>

                      <div className="relative">
                        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-pink-500/20 blur-3xl rounded-3xl" />
                        <div className="relative bg-gradient-to-br from-purple-950/40 to-pink-950/40 backdrop-blur-xl border border-white/10 rounded-2xl p-8 space-y-6">
                          <div className="flex items-center justify-between pb-3 border-b border-white/10">
                            <div className="text-sm font-semibold text-white tracking-wide">PRODUCT LAUNCH TIMELINE</div>
                            <div className="text-xs font-medium text-purple-400 flex items-center gap-1">
                              <div className="w-1.5 h-1.5 bg-purple-400 rounded-full animate-pulse" />
                              In Progress
                            </div>
                          </div>

                          <div className="space-y-4">
                            <div className="relative pl-6 pb-6 border-l-2 border-purple-500/30">
                              <div className="absolute left-0 top-0 w-3 h-3 bg-purple-500 rounded-full -translate-x-[7px]" />
                              <div className="flex items-center justify-between mb-2">
                                <div className="text-xs font-semibold text-purple-400 tracking-wide">Q1 2026</div>
                                <div className="px-2 py-0.5 bg-emerald-500/20 border border-emerald-500/30 rounded text-xs text-emerald-400 font-medium">Complete</div>
                              </div>
                              <div className="text-sm text-white/80 font-medium mb-2">Market research & strategy</div>
                              <div className="text-xs text-white/50 font-normal mb-2">Identified 3 target segments • $12M opportunity</div>
                              <div className="grid grid-cols-3 gap-2 mt-2">
                                <div className="bg-purple-500/10 rounded px-2 py-1 text-center">
                                  <div className="text-xs text-purple-300 font-medium">125K</div>
                                  <div className="text-xs text-purple-400/60">TAM</div>
                                </div>
                                <div className="bg-purple-500/10 rounded px-2 py-1 text-center">
                                  <div className="text-xs text-purple-300 font-medium">3</div>
                                  <div className="text-xs text-purple-400/60">Segments</div>
                                </div>
                                <div className="bg-purple-500/10 rounded px-2 py-1 text-center">
                                  <div className="text-xs text-purple-300 font-medium">$12M</div>
                                  <div className="text-xs text-purple-400/60">Year 1</div>
                                </div>
                              </div>
                            </div>

                            <div className="relative pl-6 pb-6 border-l-2 border-red-500/30">
                              <div className="absolute left-0 top-0 w-3 h-3 bg-red-500 rounded-full -translate-x-[7px]" />
                              <div className="flex items-center justify-between mb-2">
                                <div className="text-xs font-semibold text-red-400 tracking-wide">Q2 2026</div>
                                <div className="px-2 py-0.5 bg-emerald-500/20 border border-emerald-500/30 rounded text-xs text-emerald-400 font-medium">Complete</div>
                              </div>
                              <div className="text-sm text-white/80 font-medium mb-2">Risk assessment</div>
                              <div className="text-xs text-white/50 font-normal mb-2">Competitive threats: Medium • Supply chain: Low</div>
                              <div className="space-y-1.5 mt-2">
                                <div className="flex items-center justify-between text-xs">
                                  <span className="text-white/60">Competition</span>
                                  <div className="flex items-center gap-1">
                                    <div className="w-16 h-1 bg-white/10 rounded-full overflow-hidden">
                                      <div className="h-full bg-yellow-400" style={{ width: '60%' }} />
                                    </div>
                                    <span className="text-yellow-400 font-medium">Med</span>
                                  </div>
                                </div>
                                <div className="flex items-center justify-between text-xs">
                                  <span className="text-white/60">Supply chain</span>
                                  <div className="flex items-center gap-1">
                                    <div className="w-16 h-1 bg-white/10 rounded-full overflow-hidden">
                                      <div className="h-full bg-emerald-400" style={{ width: '25%' }} />
                                    </div>
                                    <span className="text-emerald-400 font-medium">Low</span>
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div className="relative pl-6">
                              <div className="absolute left-0 top-0 w-3 h-3 bg-yellow-500 rounded-full -translate-x-[7px] animate-pulse" />
                              <div className="flex items-center justify-between mb-2">
                                <div className="text-xs font-semibold text-yellow-400 tracking-wide">Q3-Q4 2026</div>
                                <div className="px-2 py-0.5 bg-yellow-500/20 border border-yellow-500/30 rounded text-xs text-yellow-400 font-medium">Active</div>
                              </div>
                              <div className="text-sm text-white/80 font-medium mb-2">Launch & scale</div>
                              <div className="text-xs text-white/50 font-normal mb-2">Projected revenue: $8.2M • Margin: 34%</div>
                              <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-lg p-3 mt-2">
                                <div className="flex items-center justify-between mb-2">
                                  <span className="text-xs text-yellow-300 font-medium">Revenue forecast</span>
                                  <span className="text-xs text-white/60">Monthly</span>
                                </div>
                                <div className="flex items-end gap-0.5 h-8">
                                  {[30, 45, 52, 68, 75, 82].map((height, i) => (
                                    <div key={i} className="flex-1 bg-gradient-to-t from-yellow-500/60 to-yellow-400/40 rounded-t" style={{ height: `${height}%` }} />
                                  ))}
                                </div>
                              </div>
                            </div>
                          </div>

                          <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                            <span className="text-xs font-medium text-white/60">Overall confidence</span>
                            <div className="flex items-center gap-2">
                              <div className="w-24 h-2 bg-white/10 rounded-full overflow-hidden">
                                <div className="h-full bg-gradient-to-r from-emerald-400 to-emerald-500 rounded-full" style={{ width: '89%' }} />
                              </div>
                              <span className="text-sm font-bold text-emerald-400">High (89%)</span>
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
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-32 px-6 bg-gradient-to-b from-black via-blue-950/5 to-black">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center space-y-4">
              <div className="text-base font-bold bg-gradient-to-br from-purple-400 to-purple-600 bg-clip-text text-transparent tracking-tight">
                85%
              </div>
              <div className="text-white/60 text-sm leading-relaxed font-normal">
                Faster planning cycles with automatic derivation
              </div>
            </div>

            <div className="text-center space-y-4">
              <div className="text-base font-bold bg-gradient-to-br from-red-400 to-red-600 bg-clip-text text-transparent tracking-tight">
                100%
              </div>
              <div className="text-white/60 text-sm leading-relaxed font-normal">
                Consistency across Strategy, Risk, and Finance
              </div>
            </div>

            <div className="text-center space-y-4">
              <div className="text-base font-bold bg-gradient-to-br from-yellow-400 to-yellow-600 bg-clip-text text-transparent tracking-tight">
                24/7
              </div>
              <div className="text-white/60 text-sm leading-relaxed font-normal">
                Real-time updates as your strategy evolves
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="features" className="py-32 px-6 bg-gradient-to-b from-black via-purple-950/10 to-black">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-sm md:text-base font-bold mb-4 tracking-tight">
              How it works
            </h2>
            <p className="text-base text-white/60 font-normal">
              Intelligence that flows automatically. No manual data entry. No reconciliation.
            </p>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-red-500/10 to-yellow-500/10 blur-3xl rounded-3xl" />

            <div className="relative bg-white/[0.02] border border-white/10 rounded-3xl p-12 backdrop-blur-xl">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center space-y-4">
                  <div className="w-16 h-16 mx-auto bg-purple-500/10 border border-purple-500/20 rounded-2xl flex items-center justify-center">
                    <TrendingUp className="w-8 h-8 text-purple-400" />
                  </div>
                  <div className="text-sm font-bold text-purple-400 tracking-tight">1</div>
                  <h3 className="text-base font-semibold tracking-tight">Define Strategy</h3>
                  <p className="text-white/60 text-sm leading-relaxed font-normal">
                    Create your scenario with objectives, assumptions, and KPIs. This is your single source of truth.
                  </p>
                </div>

                <div className="hidden md:flex items-center justify-center">
                  <ArrowRight className="w-12 h-12 text-white/20" />
                </div>

                <div className="text-center space-y-4">
                  <div className="w-16 h-16 mx-auto bg-red-500/10 border border-red-500/20 rounded-2xl flex items-center justify-center">
                    <Shield className="w-8 h-8 text-red-400" />
                  </div>
                  <div className="text-sm font-bold text-red-400 tracking-tight">2</div>
                  <h3 className="text-base font-semibold tracking-tight">Risk Auto-Derives</h3>
                  <p className="text-white/60 text-sm leading-relaxed font-normal">
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
                <div className="text-sm font-bold text-yellow-400 tracking-tight">3</div>
                <h3 className="text-base font-semibold tracking-tight">Finance Models Build</h3>
                <p className="text-white/60 text-sm leading-relaxed max-w-md mx-auto font-normal">
                  Financial projections are generated from your strategy and adjusted for the identified risks. See year-by-year forecasts instantly.
                </p>
              </div>

              <div className="mt-12 pt-8 border-t border-white/10 text-center">
                <p className="text-white/80 mb-6 text-sm font-normal">
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

      {/* Final CTA */}
      <section className="py-40 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-purple-600/20 to-pink-600/20" />
        <div className="absolute inset-0 bg-black/60" />

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-base md:text-sm font-bold mb-6 leading-tight tracking-tight">
            Turn complexity into
            <br />
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              crystal clarity
            </span>
          </h2>
          <p className="text-base text-white/70 mb-12 max-w-2xl mx-auto leading-relaxed font-normal">
            Join forward-thinking enterprises using Lumina ONE to unify Strategy, Risk, and Finance
            into a single source of truth.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <button
              onClick={handleGetStarted}
              className="group px-10 py-5 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white text-sm font-semibold rounded-xl transition-all inline-flex items-center justify-center gap-3 shadow-2xl shadow-purple-500/20"
            >
              Start Free Trial
              <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              onClick={() => navigate(ROUTES.login)}
              className="px-10 py-5 bg-white/5 border border-white/10 text-white text-sm font-semibold rounded-xl hover:bg-white/10 transition-all"
            >
              View Live Demo
            </button>
          </div>

          <p className="text-sm text-white/50 font-medium">
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
              <div className="flex items-center gap-6 text-sm text-white/60 font-medium">
                <a href="#modules" className="hover:text-white transition-colors">Modules</a>
                <a href="#customers" className="hover:text-white transition-colors">Customers</a>
                <a href="#features" className="hover:text-white transition-colors">Features</a>
                <button onClick={() => navigate(ROUTES.login)} className="hover:text-white transition-colors">
                  Dashboard
                </button>
              </div>
            </div>
            <BuildStamp className="text-white/30" />
          </div>
          <div className="text-center md:text-left text-sm text-white/40 font-normal">
            © 2026 Lumina One. Complete business intelligence platform.
          </div>
        </div>
      </footer>
    </div>
  )
}
