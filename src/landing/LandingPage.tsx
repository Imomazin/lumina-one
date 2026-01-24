import { ArrowRight, Target, Shield, DollarSign } from 'lucide-react'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { ROUTES } from '../routes'

export function LandingPage() {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
      {/* Header */}
      <header className="border-b border-slate-200 dark:border-slate-700 bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600" />
            <span className="text-xl font-bold text-slate-900 dark:text-white">Lumina One</span>
          </div>
          <button
            onClick={() => navigate(ROUTES.login)}
            className="px-4 py-2 text-sm font-medium text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors"
          >
            Sign In
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 py-20 md:py-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto"
        >
          <h1 className="text-5xl md:text-6xl font-bold text-slate-900 dark:text-white mb-6 leading-tight">
            Unified Strategy, Risk &<br />Financial Intelligence
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-400 mb-10 leading-relaxed">
            Where strategy assumptions automatically flow into risk exposures and financial projections.
            One platform. One truth. Continuous intelligence.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => navigate(ROUTES.app.overview)}
              className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all flex items-center gap-2 group"
            >
              Try Demo
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={() => navigate(ROUTES.login)}
              className="px-8 py-4 bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-600 text-slate-900 dark:text-white font-semibold rounded-lg hover:border-slate-400 dark:hover:border-slate-500 transition-colors"
            >
              Sign In
            </button>
          </div>
        </motion.div>
      </section>

      {/* 3 Module Cards */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Strategy Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            onClick={() => navigate(ROUTES.app.strategy)}
            className="bg-white dark:bg-slate-800 rounded-2xl p-8 border border-slate-200 dark:border-slate-700 hover:border-blue-300 dark:hover:border-blue-600 transition-all hover:shadow-xl group cursor-pointer"
          >
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <Target className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">
              Lumina S
            </h3>
            <p className="text-slate-600 dark:text-slate-400 mb-4">
              Define strategic objectives, time horizons, and key assumptions. Your strategy becomes the source of truth.
            </p>
            <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
              <li className="flex items-start gap-2">
                <span className="text-blue-500 mt-0.5">→</span>
                <span>Strategic objectives & KPIs</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-500 mt-0.5">→</span>
                <span>Growth assumptions</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-500 mt-0.5">→</span>
                <span>Time horizon planning</span>
              </li>
            </ul>
          </motion.div>

          {/* Risk Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            onClick={() => navigate(ROUTES.app.risk)}
            className="bg-white dark:bg-slate-800 rounded-2xl p-8 border border-slate-200 dark:border-slate-700 hover:border-amber-300 dark:hover:border-amber-600 transition-all hover:shadow-xl group cursor-pointer"
          >
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <Shield className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">
              Lumina R
            </h3>
            <p className="text-slate-600 dark:text-slate-400 mb-4">
              Automatically derive risk exposures from strategy. See what could go wrong before it does.
            </p>
            <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
              <li className="flex items-start gap-2">
                <span className="text-amber-500 mt-0.5">→</span>
                <span>Derived risk exposures</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-amber-500 mt-0.5">→</span>
                <span>Key Risk Indicators (KRIs)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-amber-500 mt-0.5">→</span>
                <span>Risk appetite monitoring</span>
              </li>
            </ul>
          </motion.div>

          {/* Finance Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            onClick={() => navigate(ROUTES.app.finance)}
            className="bg-white dark:bg-slate-800 rounded-2xl p-8 border border-slate-200 dark:border-slate-700 hover:border-emerald-300 dark:hover:border-emerald-600 transition-all hover:shadow-xl group cursor-pointer"
          >
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500 to-green-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <DollarSign className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">
              Lumina F
            </h3>
            <p className="text-slate-600 dark:text-slate-400 mb-4">
              Financial projections that react to strategy changes in real-time. No more spreadsheet reconciliation.
            </p>
            <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
              <li className="flex items-start gap-2">
                <span className="text-emerald-500 mt-0.5">→</span>
                <span>Auto-generated projections</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-500 mt-0.5">→</span>
                <span>Capital requirements</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-500 mt-0.5">→</span>
                <span>Liquidity analysis</span>
              </li>
            </ul>
          </motion.div>
        </div>
      </section>

      {/* Visual Flow Diagram */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="bg-gradient-to-br from-slate-100 to-blue-50 dark:from-slate-800 dark:to-slate-900 rounded-2xl p-12 border border-slate-200 dark:border-slate-700"
        >
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-8 text-center">
            Intelligence Flow
          </h2>
          <div className="flex items-center justify-center gap-4 flex-wrap">
            <div className="flex items-center gap-4">
              <div className="text-center">
                <div className="w-20 h-20 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center mb-2">
                  <Target className="w-10 h-10 text-white" />
                </div>
                <p className="text-sm font-semibold text-slate-700 dark:text-slate-300">Strategy</p>
              </div>
              <ArrowRight className="w-8 h-8 text-slate-400" />
              <div className="text-center">
                <div className="w-20 h-20 rounded-xl bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center mb-2">
                  <Shield className="w-10 h-10 text-white" />
                </div>
                <p className="text-sm font-semibold text-slate-700 dark:text-slate-300">Risk</p>
              </div>
              <ArrowRight className="w-8 h-8 text-slate-400" />
              <div className="text-center">
                <div className="w-20 h-20 rounded-xl bg-gradient-to-br from-emerald-500 to-green-600 flex items-center justify-center mb-2">
                  <DollarSign className="w-10 h-10 text-white" />
                </div>
                <p className="text-sm font-semibold text-slate-700 dark:text-slate-300">Finance</p>
              </div>
            </div>
          </div>
          <p className="text-center text-slate-600 dark:text-slate-400 mt-8 max-w-2xl mx-auto">
            Define your strategy once. Watch as risk exposures and financial projections update automatically.
            No manual reconciliation. No version conflicts. One source of truth.
          </p>
        </motion.div>
      </section>

      {/* Final CTA */}
      <section className="max-w-7xl mx-auto px-6 py-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-6">
            Ready to unify your intelligence?
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-400 mb-8">
            Experience the platform where strategy, risk, and finance become one.
          </p>
          <button
            onClick={() => navigate(ROUTES.app.overview)}
            className="px-10 py-5 bg-blue-600 hover:bg-blue-700 text-white text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all flex items-center gap-2 mx-auto group"
          >
            Get Started
            <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
          </button>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-200 dark:border-slate-700 bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600" />
              <span className="font-semibold text-slate-900 dark:text-white">Lumina One</span>
            </div>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              © 2026 Lumina One. Unified Intelligence Platform.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
