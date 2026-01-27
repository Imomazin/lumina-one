import { ArrowRight, Target, Shield, DollarSign, Sparkles, CheckCircle, Lock, Activity, FileText, BarChart3, Zap } from 'lucide-react'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { useStrategyStore } from '../store'
import { ROUTES } from '../routes'
import { BuildStamp } from '../components/BuildStamp'

export function LandingPage() {
  const navigate = useNavigate()
  const createScenario = useStrategyStore(state => state.createScenario)

  const handleTryDemo = () => {
    // Inject real demo scenario into state
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

    // Navigate to app - Risk and Finance will auto-derive
    navigate(ROUTES.app.overview)
  }

  return (
    <div className="min-h-screen bg-slate-900">
      {/* Header */}
      <header className="border-b border-slate-800 bg-slate-900/95 backdrop-blur-sm sticky top-0 z-50">
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

      {/* Hero Section with Background Image */}
      <section className="relative overflow-hidden">
        {/* Background Image with Overlay */}
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&q=80)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900/95 via-blue-900/90 to-indigo-900/95" />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 py-32 md:py-40">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-400/20 backdrop-blur-sm mb-6">
              <Sparkles className="w-4 h-4 text-blue-400" />
              <span className="text-sm font-semibold text-blue-300">Enterprise Intelligence Platform</span>
            </div>

            <h1 className="text-6xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Unified Strategy, Risk &<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400">
                Financial Intelligence
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-slate-300 mb-10 leading-relaxed max-w-3xl">
              Where strategic assumptions automatically propagate into risk exposures and financial projections.
              <span className="block mt-2 text-blue-300 font-semibold">One platform. One truth. Continuous intelligence.</span>
            </p>

            <div className="flex flex-col sm:flex-row items-start gap-4">
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

      {/* Enterprise Value Pillars */}
      <section className="bg-slate-950 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Enterprise-Grade Intelligence
            </h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              Built for organizations that demand governance, traceability, and auditability
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Lock,
                title: 'Governance',
                description: 'Role-based access control, approval workflows, and compliance tracking ensure enterprise security standards.',
                gradient: 'from-blue-500 to-indigo-600'
              },
              {
                icon: Activity,
                title: 'Traceability',
                description: 'Every assumption, exposure, and projection is linked to its source. Full audit trail from strategy to finance.',
                gradient: 'from-indigo-500 to-purple-600'
              },
              {
                icon: FileText,
                title: 'Auditability',
                description: 'Timestamped changes, version history, and derivation logic make compliance reviews effortless.',
                gradient: 'from-purple-500 to-pink-600'
              }
            ].map((pillar, idx) => {
              const Icon = pillar.icon
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="group p-8 rounded-2xl bg-gradient-to-br from-slate-900 to-slate-800 border border-slate-700 hover:border-slate-600 transition-all hover:scale-105"
                >
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${pillar.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg`}>
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3">{pillar.title}</h3>
                  <p className="text-slate-400 leading-relaxed">{pillar.description}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* How Lumina One Works */}
      <section className="bg-gradient-to-br from-slate-900 via-blue-950 to-indigo-950 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              How Lumina One Works
            </h2>
            <p className="text-xl text-blue-200 max-w-3xl mx-auto">
              Intelligence flows automatically from strategy through risk to finance
            </p>
          </motion.div>

          {/* Flow Visualization */}
          <div className="relative">
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  step: '01',
                  icon: Target,
                  title: 'Lumina S',
                  subtitle: 'Strategy',
                  description: 'Define strategic objectives, time horizons, and key assumptions. Your strategy becomes the authoritative source of truth.',
                  features: ['Strategic objectives', 'Market assumptions', 'Time horizon planning'],
                  gradient: 'from-blue-500 to-cyan-600',
                  link: null
                },
                {
                  step: '02',
                  icon: Shield,
                  title: 'Lumina R',
                  subtitle: 'Risk',
                  description: 'Risk exposures automatically derive from strategic assumptions. No manual input required.',
                  features: ['Auto-derived exposures', 'Likelihood & impact', 'Mitigation tracking'],
                  gradient: 'from-red-500 to-rose-600',
                  link: 'https://lumina-r.vercel.app/'
                },
                {
                  step: '03',
                  icon: DollarSign,
                  title: 'Lumina F',
                  subtitle: 'Finance',
                  description: 'Financial projections react to strategy and risk in real-time. No spreadsheet reconciliation.',
                  features: ['Auto-generated projections', 'Capital requirements', 'Sensitivity analysis'],
                  gradient: 'from-emerald-500 to-green-600',
                  link: null
                }
              ].map((module, idx) => {
                const Icon = module.icon
                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.15 }}
                    className="relative"
                  >
                    {/* Connector Arrow */}
                    {idx < 2 && (
                      <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                        <ArrowRight className="w-8 h-8 text-blue-400" />
                      </div>
                    )}

                    <div
                      className={`relative p-8 rounded-2xl bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 hover:border-blue-500/50 transition-all group ${module.link ? 'cursor-pointer hover:scale-105' : ''}`}
                      onClick={() => module.link && window.open(module.link, '_blank')}
                    >
                      {/* Step Number */}
                      <div className="absolute -top-4 -left-4 w-12 h-12 rounded-xl bg-gradient-to-br from-blue-600 to-indigo-700 flex items-center justify-center font-bold text-white shadow-lg">
                        {module.step}
                      </div>

                      {/* Icon */}
                      <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${module.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-xl`}>
                        <Icon className="w-8 h-8 text-white" />
                      </div>

                      <h3 className="text-2xl font-bold text-white mb-1">{module.title}</h3>
                      <p className="text-blue-300 text-sm font-semibold mb-4">{module.subtitle}</p>
                      <p className="text-slate-300 mb-6 leading-relaxed">{module.description}</p>

                      <ul className="space-y-2">
                        {module.features.map((feature, fidx) => (
                          <li key={fidx} className="flex items-center gap-2 text-sm text-slate-400">
                            <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>

                      {/* Link indicator for clickable cards */}
                      {module.link && (
                        <div className="mt-4 pt-4 border-t border-slate-700 flex items-center gap-2 text-sm text-blue-400 group-hover:text-blue-300">
                          <span>Launch Lumina R</span>
                          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </div>
                      )}
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </div>

          {/* Key Insight */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 p-8 rounded-2xl bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-400/30 backdrop-blur-sm"
          >
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center flex-shrink-0">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <div>
                <h4 className="text-xl font-bold text-white mb-2">Real-Time Intelligence Propagation</h4>
                <p className="text-blue-100 leading-relaxed">
                  Change a strategic assumption and watch risk exposures and financial projections update instantly.
                  No manual reconciliation. No version conflicts. One source of truth flowing through your entire organization.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Feature Highlights */}
      <section className="bg-slate-950 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Built for Decision Makers
            </h2>
            <p className="text-xl text-slate-400">
              Features that matter for strategic planning
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Target, title: 'Scenario Planning', description: 'Model multiple futures' },
              { icon: BarChart3, title: 'Live Dashboards', description: 'Real-time insights' },
              { icon: Lock, title: 'Access Control', description: 'Role-based security' },
              { icon: FileText, title: 'Audit Trails', description: 'Full traceability' },
            ].map((feature, idx) => {
              const Icon = feature.icon
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.05 }}
                  className="p-6 rounded-xl bg-slate-900 border border-slate-800 hover:border-blue-500/50 hover:bg-slate-800 transition-all group"
                >
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-600 to-indigo-700 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="text-lg font-bold text-white mb-2">{feature.title}</h4>
                  <p className="text-sm text-slate-400">{feature.description}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative overflow-hidden py-24">
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920&q=80)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/95 via-indigo-900/90 to-purple-900/95" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl font-bold text-white mb-6">
              Ready to Unify Your Intelligence?
            </h2>
            <p className="text-xl text-blue-100 mb-10">
              Experience the platform where strategy, risk, and finance become one continuous flow.
            </p>
            <button
              onClick={handleTryDemo}
              className="px-12 py-5 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:from-blue-500 hover:via-indigo-500 hover:to-purple-500 text-white text-lg font-bold rounded-xl shadow-2xl hover:shadow-blue-500/50 hover:scale-105 transition-all flex items-center gap-3 mx-auto group"
            >
              <Sparkles className="w-6 h-6" />
              Try Live Demo Now
              <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-800 bg-slate-950 py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-8">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 via-indigo-600 to-purple-600" />
              <div>
                <span className="text-xl font-bold text-white block">Lumina One</span>
                <span className="text-xs text-slate-400">Unified Intelligence Platform</span>
              </div>
            </div>

            <div className="flex items-center gap-8 text-sm text-slate-400">
              <span>Enterprise</span>
              <span>•</span>
              <span>Governance</span>
              <span>•</span>
              <span>Auditability</span>
            </div>
          </div>

          <div className="pt-6 border-t border-slate-800 flex flex-col md:flex-row items-center justify-between gap-4">
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
