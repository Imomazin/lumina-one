import { ArrowRight, Sparkles, TrendingUp, Shield, DollarSign, Layers } from 'lucide-react'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { useStrategyStore } from '../store'
import { ROUTES } from '../routes'
import { BuildStamp } from '../components/BuildStamp'

export function LandingPageNew() {
  const navigate = useNavigate()
  const createScenario = useStrategyStore(state => state.createScenario)

  const handleTryDemo = () => {
    // Inject real demo scenario
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
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-indigo-950 relative overflow-hidden">
      {/* Animated background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f12_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f12_1px,transparent_1px)] bg-[size:64px_64px]" />

      {/* Header */}
      <header className="relative z-10 border-b border-white/10 bg-black/20 backdrop-blur-xl sticky top-0">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 via-indigo-600 to-purple-600 shadow-lg" />
            <div>
              <span className="text-2xl font-bold text-white">Lumina One</span>
              <BuildStamp className="text-slate-400" />
            </div>
          </div>
          <button
            onClick={() => navigate(ROUTES.login)}
            className="px-6 py-2.5 text-sm font-semibold text-white hover:text-blue-400 transition-colors"
          >
            Sign In
          </button>
        </div>
      </header>

      {/* Hero Section with Central "ONE" Cube */}
      <section className="relative z-10 pt-20 pb-32">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-6xl md:text-7xl font-bold text-white mb-6">
              Three Pillars.
              <br />
              <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">
                One Intelligence.
              </span>
            </h1>
            <p className="text-xl text-slate-300 mb-12 max-w-2xl mx-auto">
              Unify Strategy, Risk, and Finance into a single source of truth. Real-time intelligence flow from vision to execution.
            </p>

            {/* Central "ONE" Cube - Unified Model */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.3, duration: 1 }}
              className="mb-16 flex justify-center"
            >
              <div className="relative w-64 h-64 group cursor-pointer">
                {/* Glowing background */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500 via-indigo-600 to-purple-600 rounded-3xl blur-3xl opacity-50 group-hover:opacity-70 transition-opacity" />

                {/* Main cube */}
                <div className="relative w-full h-full bg-gradient-to-br from-blue-500/20 via-indigo-600/20 to-purple-600/20 backdrop-blur-xl border-2 border-white/30 rounded-3xl shadow-2xl transform rotate-3 group-hover:rotate-6 transition-transform duration-500">
                  <div className="absolute inset-0 flex flex-col items-center justify-center p-6">
                    <Layers className="w-16 h-16 text-white mb-4" />
                    <h3 className="text-3xl font-bold text-white mb-2">ONE</h3>
                    <p className="text-sm text-slate-200 text-center">Unified Intelligence Platform</p>
                  </div>

                  {/* Floating labels */}
                  <div className="absolute -top-4 -left-4 px-3 py-1 bg-blue-500 text-white text-xs font-bold rounded-full">
                    S
                  </div>
                  <div className="absolute -top-4 -right-4 px-3 py-1 bg-indigo-500 text-white text-xs font-bold rounded-full">
                    R
                  </div>
                  <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 px-3 py-1 bg-purple-500 text-white text-xs font-bold rounded-full">
                    F
                  </div>
                </div>
              </div>
            </motion.div>

            <div className="flex items-center justify-center gap-4">
              <button
                onClick={handleTryDemo}
                className="group px-8 py-4 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:from-blue-500 hover:via-indigo-500 hover:to-purple-500 text-white font-bold rounded-xl shadow-2xl hover:shadow-blue-500/50 hover:scale-105 transition-all flex items-center gap-3"
              >
                <Sparkles className="w-5 h-5" />
                Try Live Demo
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={() => navigate(ROUTES.login)}
                className="px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-sm border-2 border-white/20 hover:border-white/40 text-white font-bold rounded-xl transition-all"
              >
                Sign In
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Three Module Cubes */}
      <section className="relative z-10 pb-32">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-white text-center mb-16">
            Three Foundational Modules
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Strategy Cube */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              viewport={{ once: true }}
              className="relative group cursor-pointer"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-blue-700 rounded-3xl blur-2xl opacity-30 group-hover:opacity-50 transition-opacity" />

              <div className="relative bg-gradient-to-br from-blue-500/10 to-blue-700/10 backdrop-blur-xl border-2 border-blue-500/30 rounded-3xl p-8 transform group-hover:-translate-y-2 group-hover:rotate-1 transition-all duration-500">
                {/* Cube visual */}
                <div className="w-24 h-24 mx-auto mb-6 bg-gradient-to-br from-blue-500 to-blue-700 rounded-2xl shadow-xl flex items-center justify-center transform group-hover:scale-110 transition-transform">
                  <TrendingUp className="w-12 h-12 text-white" />
                </div>

                <div className="absolute top-4 right-4 w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold text-sm">
                  S
                </div>

                <h3 className="text-2xl font-bold text-white mb-3 text-center">
                  Strategy
                </h3>
                <p className="text-slate-300 text-center text-sm mb-4">
                  Define objectives, assumptions, and KPIs. The source of truth for all intelligence.
                </p>

                <div className="flex flex-wrap gap-2 justify-center">
                  <span className="px-3 py-1 bg-blue-500/20 text-blue-300 text-xs rounded-full border border-blue-500/30">
                    Objectives
                  </span>
                  <span className="px-3 py-1 bg-blue-500/20 text-blue-300 text-xs rounded-full border border-blue-500/30">
                    Assumptions
                  </span>
                  <span className="px-3 py-1 bg-blue-500/20 text-blue-300 text-xs rounded-full border border-blue-500/30">
                    KPIs
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Risk Cube */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
              className="relative group cursor-pointer"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-500 to-indigo-700 rounded-3xl blur-2xl opacity-30 group-hover:opacity-50 transition-opacity" />

              <div className="relative bg-gradient-to-br from-indigo-500/10 to-indigo-700/10 backdrop-blur-xl border-2 border-indigo-500/30 rounded-3xl p-8 transform group-hover:-translate-y-2 group-hover:rotate-1 transition-all duration-500">
                {/* Cube visual */}
                <div className="w-24 h-24 mx-auto mb-6 bg-gradient-to-br from-indigo-500 to-indigo-700 rounded-2xl shadow-xl flex items-center justify-center transform group-hover:scale-110 transition-transform">
                  <Shield className="w-12 h-12 text-white" />
                </div>

                <div className="absolute top-4 right-4 w-8 h-8 bg-indigo-500 text-white rounded-full flex items-center justify-center font-bold text-sm">
                  R
                </div>

                <h3 className="text-2xl font-bold text-white mb-3 text-center">
                  Risk
                </h3>
                <p className="text-slate-300 text-center text-sm mb-4">
                  Auto-derived risk exposures from Strategy. Real-time threat assessment.
                </p>

                <div className="flex flex-wrap gap-2 justify-center">
                  <span className="px-3 py-1 bg-indigo-500/20 text-indigo-300 text-xs rounded-full border border-indigo-500/30">
                    Auto-Derived
                  </span>
                  <span className="px-3 py-1 bg-indigo-500/20 text-indigo-300 text-xs rounded-full border border-indigo-500/30">
                    Exposure
                  </span>
                  <span className="px-3 py-1 bg-indigo-500/20 text-indigo-300 text-xs rounded-full border border-indigo-500/30">
                    Scoring
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Finance Cube */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              viewport={{ once: true }}
              className="relative group cursor-pointer"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-purple-700 rounded-3xl blur-2xl opacity-30 group-hover:opacity-50 transition-opacity" />

              <div className="relative bg-gradient-to-br from-purple-500/10 to-purple-700/10 backdrop-blur-xl border-2 border-purple-500/30 rounded-3xl p-8 transform group-hover:-translate-y-2 group-hover:rotate-1 transition-all duration-500">
                {/* Cube visual */}
                <div className="w-24 h-24 mx-auto mb-6 bg-gradient-to-br from-purple-500 to-purple-700 rounded-2xl shadow-xl flex items-center justify-center transform group-hover:scale-110 transition-transform">
                  <DollarSign className="w-12 h-12 text-white" />
                </div>

                <div className="absolute top-4 right-4 w-8 h-8 bg-purple-500 text-white rounded-full flex items-center justify-center font-bold text-sm">
                  F
                </div>

                <h3 className="text-2xl font-bold text-white mb-3 text-center">
                  Finance
                </h3>
                <p className="text-slate-300 text-center text-sm mb-4">
                  Financial projections derived from Strategy + Risk. Year-by-year forecasts.
                </p>

                <div className="flex flex-wrap gap-2 justify-center">
                  <span className="px-3 py-1 bg-purple-500/20 text-purple-300 text-xs rounded-full border border-purple-500/30">
                    Projections
                  </span>
                  <span className="px-3 py-1 bg-purple-500/20 text-purple-300 text-xs rounded-full border border-purple-500/30">
                    Risk-Adjusted
                  </span>
                  <span className="px-3 py-1 bg-purple-500/20 text-purple-300 text-xs rounded-full border border-purple-500/30">
                    Forecasts
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Intelligence Flow Section */}
      <section className="relative z-10 pb-32">
        <div className="max-w-5xl mx-auto px-6">
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-12">
            <h2 className="text-3xl font-bold text-white text-center mb-8">
              Real-Time Intelligence Flow
            </h2>

            <div className="flex items-center justify-center gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-700 rounded-xl flex items-center justify-center mb-2">
                  <TrendingUp className="w-8 h-8 text-white" />
                </div>
                <p className="text-sm font-bold text-white">Strategy</p>
              </div>

              <ArrowRight className="w-8 h-8 text-blue-400" />

              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-indigo-700 rounded-xl flex items-center justify-center mb-2">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <p className="text-sm font-bold text-white">Risk</p>
              </div>

              <ArrowRight className="w-8 h-8 text-indigo-400" />

              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-700 rounded-xl flex items-center justify-center mb-2">
                  <DollarSign className="w-8 h-8 text-white" />
                </div>
                <p className="text-sm font-bold text-white">Finance</p>
              </div>
            </div>

            <p className="text-center text-slate-300 mt-8">
              Define strategy once. Risk and Finance auto-derive in real-time.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 border-t border-white/10 bg-black/20 backdrop-blur-xl py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-slate-400">
              © 2026 Lumina One. All rights reserved.
            </p>
            <BuildStamp className="text-slate-500" />
          </div>
        </div>
      </footer>
    </div>
  )
}
