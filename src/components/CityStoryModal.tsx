import { motion, AnimatePresence } from 'framer-motion'
import { X, TrendingUp, Shield, BarChart3, MapPin, Calendar, Users, CheckCircle } from 'lucide-react'

export interface CityStory {
  city: string
  country: string
  imageUrl: string
  company: string
  industry: string
  year: string
  overview: string
  strategy: {
    objective: string
    approach: string
    metrics: { label: string; value: string }[]
  }
  risk: {
    challenge: string
    mitigation: string
    metrics: { label: string; value: string }[]
  }
  finance: {
    investment: string
    roi: string
    metrics: { label: string; value: string }[]
  }
  outcomes: string[]
  quote: {
    text: string
    author: string
    role: string
  }
}

interface CityStoryModalProps {
  story: CityStory | null
  onClose: () => void
  theme?: 'dark' | 'white'
}

export function CityStoryModal({ story, onClose, theme = 'dark' }: CityStoryModalProps) {
  const isDark = theme === 'dark'

  if (!story) return null

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className={`absolute inset-0 ${isDark ? 'bg-black/80' : 'bg-black/50'} backdrop-blur-sm`}
        />

        {/* Modal */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className={`
            relative w-full max-w-5xl max-h-[90vh] overflow-y-auto
            rounded-2xl border shadow-2xl
            ${isDark ? 'bg-gray-900 border-white/10' : 'bg-white border-gray-200'}
          `}
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className={`
              absolute top-4 right-4 z-10 p-2 rounded-lg
              ${isDark ? 'bg-white/10 hover:bg-white/20 text-white' : 'bg-gray-100 hover:bg-gray-200 text-gray-900'}
              transition-colors
            `}
          >
            <X className="w-5 h-5" />
          </button>

          {/* Hero Image */}
          <div className="relative h-64 overflow-hidden rounded-t-2xl">
            <img
              src={story.imageUrl}
              alt={story.city}
              className="w-full h-full object-cover"
            />
            <div className={`absolute inset-0 ${isDark ? 'bg-gradient-to-t from-gray-900 via-gray-900/60' : 'bg-gradient-to-t from-white via-white/60'}`} />

            {/* City Info Overlay */}
            <div className="absolute bottom-6 left-6 right-6">
              <div className="flex items-center gap-2 mb-2">
                <MapPin className={`w-5 h-5 ${isDark ? 'text-blue-400' : 'text-blue-600'}`} />
                <span className={`text-sm font-medium ${isDark ? 'text-white/80' : 'text-gray-700'}`}>
                  {story.city}, {story.country}
                </span>
              </div>
              <h2 className={`text-3xl font-bold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                {story.company}
              </h2>
              <div className="flex flex-wrap items-center gap-4 text-sm">
                <span className={`px-3 py-1 rounded-full ${isDark ? 'bg-white/10 text-white/80' : 'bg-gray-100 text-gray-700'}`}>
                  {story.industry}
                </span>
                <span className={`flex items-center gap-1 ${isDark ? 'text-white/60' : 'text-gray-600'}`}>
                  <Calendar className="w-4 h-4" />
                  {story.year}
                </span>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="p-8 space-y-8">
            {/* Overview */}
            <div>
              <p className={`text-lg leading-relaxed ${isDark ? 'text-white/80' : 'text-gray-700'}`}>
                {story.overview}
              </p>
            </div>

            {/* Triple Framework Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Strategy */}
              <div className={`rounded-xl border p-6 ${isDark ? 'bg-purple-500/5 border-purple-500/20' : 'bg-purple-50 border-purple-200'}`}>
                <div className="flex items-center gap-3 mb-4">
                  <div className={`p-2 rounded-lg ${isDark ? 'bg-purple-500/20' : 'bg-purple-100'}`}>
                    <TrendingUp className="w-5 h-5 text-purple-500" />
                  </div>
                  <h3 className={`text-lg font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                    Strategy
                  </h3>
                </div>

                <div className="space-y-3">
                  <div>
                    <p className={`text-xs font-medium uppercase tracking-wider mb-1 ${isDark ? 'text-purple-400' : 'text-purple-600'}`}>
                      Objective
                    </p>
                    <p className={`text-sm ${isDark ? 'text-white/70' : 'text-gray-700'}`}>
                      {story.strategy.objective}
                    </p>
                  </div>

                  <div>
                    <p className={`text-xs font-medium uppercase tracking-wider mb-1 ${isDark ? 'text-purple-400' : 'text-purple-600'}`}>
                      Approach
                    </p>
                    <p className={`text-sm ${isDark ? 'text-white/70' : 'text-gray-700'}`}>
                      {story.strategy.approach}
                    </p>
                  </div>

                  <div className="pt-2 space-y-2">
                    {story.strategy.metrics.map((metric, idx) => (
                      <div key={idx} className="flex justify-between items-center">
                        <span className={`text-xs ${isDark ? 'text-white/60' : 'text-gray-600'}`}>
                          {metric.label}
                        </span>
                        <span className={`text-sm font-semibold ${isDark ? 'text-purple-400' : 'text-purple-600'}`}>
                          {metric.value}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Risk */}
              <div className={`rounded-xl border p-6 ${isDark ? 'bg-red-500/5 border-red-500/20' : 'bg-red-50 border-red-200'}`}>
                <div className="flex items-center gap-3 mb-4">
                  <div className={`p-2 rounded-lg ${isDark ? 'bg-red-500/20' : 'bg-red-100'}`}>
                    <Shield className="w-5 h-5 text-red-500" />
                  </div>
                  <h3 className={`text-lg font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                    Risk
                  </h3>
                </div>

                <div className="space-y-3">
                  <div>
                    <p className={`text-xs font-medium uppercase tracking-wider mb-1 ${isDark ? 'text-red-400' : 'text-red-600'}`}>
                      Challenge
                    </p>
                    <p className={`text-sm ${isDark ? 'text-white/70' : 'text-gray-700'}`}>
                      {story.risk.challenge}
                    </p>
                  </div>

                  <div>
                    <p className={`text-xs font-medium uppercase tracking-wider mb-1 ${isDark ? 'text-red-400' : 'text-red-600'}`}>
                      Mitigation
                    </p>
                    <p className={`text-sm ${isDark ? 'text-white/70' : 'text-gray-700'}`}>
                      {story.risk.mitigation}
                    </p>
                  </div>

                  <div className="pt-2 space-y-2">
                    {story.risk.metrics.map((metric, idx) => (
                      <div key={idx} className="flex justify-between items-center">
                        <span className={`text-xs ${isDark ? 'text-white/60' : 'text-gray-600'}`}>
                          {metric.label}
                        </span>
                        <span className={`text-sm font-semibold ${isDark ? 'text-red-400' : 'text-red-600'}`}>
                          {metric.value}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Finance */}
              <div className={`rounded-xl border p-6 ${isDark ? 'bg-amber-500/5 border-amber-500/20' : 'bg-amber-50 border-amber-200'}`}>
                <div className="flex items-center gap-3 mb-4">
                  <div className={`p-2 rounded-lg ${isDark ? 'bg-amber-500/20' : 'bg-amber-100'}`}>
                    <BarChart3 className="w-5 h-5 text-amber-500" />
                  </div>
                  <h3 className={`text-lg font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                    Finance
                  </h3>
                </div>

                <div className="space-y-3">
                  <div>
                    <p className={`text-xs font-medium uppercase tracking-wider mb-1 ${isDark ? 'text-amber-400' : 'text-amber-600'}`}>
                      Investment
                    </p>
                    <p className={`text-sm ${isDark ? 'text-white/70' : 'text-gray-700'}`}>
                      {story.finance.investment}
                    </p>
                  </div>

                  <div>
                    <p className={`text-xs font-medium uppercase tracking-wider mb-1 ${isDark ? 'text-amber-400' : 'text-amber-600'}`}>
                      ROI
                    </p>
                    <p className={`text-sm ${isDark ? 'text-white/70' : 'text-gray-700'}`}>
                      {story.finance.roi}
                    </p>
                  </div>

                  <div className="pt-2 space-y-2">
                    {story.finance.metrics.map((metric, idx) => (
                      <div key={idx} className="flex justify-between items-center">
                        <span className={`text-xs ${isDark ? 'text-white/60' : 'text-gray-600'}`}>
                          {metric.label}
                        </span>
                        <span className={`text-sm font-semibold ${isDark ? 'text-amber-400' : 'text-amber-600'}`}>
                          {metric.value}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Outcomes */}
            <div className={`rounded-xl border p-6 ${isDark ? 'bg-white/5 border-white/10' : 'bg-gray-50 border-gray-200'}`}>
              <h3 className={`text-lg font-semibold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                Key Outcomes
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {story.outcomes.map((outcome, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <CheckCircle className={`w-5 h-5 mt-0.5 flex-shrink-0 ${isDark ? 'text-green-400' : 'text-green-600'}`} />
                    <span className={`text-sm ${isDark ? 'text-white/70' : 'text-gray-700'}`}>
                      {outcome}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Quote */}
            <div className={`rounded-xl border p-6 ${isDark ? 'bg-blue-500/5 border-blue-500/20' : 'bg-blue-50 border-blue-200'}`}>
              <div className="flex items-start gap-4">
                <div className={`text-6xl leading-none ${isDark ? 'text-blue-400/30' : 'text-blue-600/30'}`}>
                  "
                </div>
                <div className="flex-1 pt-2">
                  <p className={`text-lg italic mb-4 ${isDark ? 'text-white/80' : 'text-gray-700'}`}>
                    {story.quote.text}
                  </p>
                  <div className="flex items-center gap-3">
                    <Users className={`w-5 h-5 ${isDark ? 'text-blue-400' : 'text-blue-600'}`} />
                    <div>
                      <p className={`font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                        {story.quote.author}
                      </p>
                      <p className={`text-sm ${isDark ? 'text-white/60' : 'text-gray-600'}`}>
                        {story.quote.role}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  )
}
