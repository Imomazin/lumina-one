import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { TrendingUp, Shield, BarChart3 } from 'lucide-react'

interface Module {
  id: string
  title: string
  subtitle: string
  icon: typeof TrendingUp
  color: string
  bgGradient: string
  iconColor: string
  position: number
}

interface TriangulatedRotatingScrollerProps {
  theme?: 'dark' | 'white'
}

export function TriangulatedRotatingScroller({ theme = 'dark' }: TriangulatedRotatingScrollerProps) {
  const [currentIndex, setCurrentIndex] = useState(0)

  const modules: Module[] = [
    {
      id: 'strategy',
      title: 'Strategy',
      subtitle: 'Define objectives and model scenarios',
      icon: TrendingUp,
      color: 'purple',
      bgGradient: 'from-purple-500/20 via-purple-600/10 to-transparent',
      iconColor: 'text-purple-400',
      position: 0
    },
    {
      id: 'risk',
      title: 'Risk',
      subtitle: 'Automatically derived risk analysis',
      icon: Shield,
      color: 'red',
      bgGradient: 'from-red-500/20 via-red-600/10 to-transparent',
      iconColor: 'text-red-400',
      position: 1
    },
    {
      id: 'finance',
      title: 'Finance',
      subtitle: 'Risk-adjusted financial forecasts',
      icon: BarChart3,
      color: 'yellow',
      bgGradient: 'from-amber-500/20 via-amber-600/10 to-transparent',
      iconColor: 'text-amber-400',
      position: 2
    }
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % modules.length)
    }, 3000)

    return () => clearInterval(interval)
  }, [modules.length])

  // Calculate positions for triangular layout
  const getPosition = (index: number, current: number) => {
    const diff = (index - current + modules.length) % modules.length

    // Center position (current item)
    if (diff === 0) {
      return {
        x: 0,
        y: 0,
        scale: 1.2,
        opacity: 1,
        zIndex: 30
      }
    }

    // Left position
    if (diff === 1) {
      return {
        x: -200,
        y: 150,
        scale: 0.7,
        opacity: 0.5,
        zIndex: 20
      }
    }

    // Right position
    return {
      x: 200,
      y: 150,
      scale: 0.7,
      opacity: 0.5,
      zIndex: 10
    }
  }

  const isDark = theme === 'dark'

  return (
    <div className="relative w-full h-[600px] flex items-center justify-center overflow-visible">
      {/* Background glow effect */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className={`w-96 h-96 rounded-full blur-[100px] ${modules[currentIndex].bgGradient} bg-gradient-to-br`} />
      </div>

      {/* Rotating triangle of modules */}
      <div className="relative w-full h-full flex items-center justify-center">
        {modules.map((module, index) => {
          const position = getPosition(index, currentIndex)
          const Icon = module.icon
          const isActive = index === currentIndex

          return (
            <motion.div
              key={module.id}
              animate={position}
              transition={{
                duration: 0.7,
                ease: [0.4, 0, 0.2, 1]
              }}
              className="absolute"
              style={{ zIndex: position.zIndex }}
            >
              <div
                className={`
                  relative rounded-2xl border backdrop-blur-sm
                  ${isDark ? 'bg-black/40 border-white/10' : 'bg-white/40 border-gray-300'}
                  ${isActive ? 'shadow-2xl' : 'shadow-lg'}
                  transition-shadow duration-700
                  w-64 h-64
                  flex flex-col items-center justify-center
                  p-8
                `}
              >
                {/* Icon with glow */}
                <div className="relative mb-6">
                  <div className={`absolute inset-0 blur-xl ${module.iconColor} opacity-50`}>
                    <Icon className="w-16 h-16" />
                  </div>
                  <Icon className={`w-16 h-16 relative ${module.iconColor}`} />
                </div>

                {/* Title */}
                <h3
                  className={`
                    text-2xl font-bold mb-2 text-center
                    ${isDark ? 'text-white' : 'text-gray-900'}
                  `}
                >
                  {module.title}
                </h3>

                {/* Subtitle - only show on active */}
                <AnimatePresence>
                  {isActive && (
                    <motion.p
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className={`
                        text-sm text-center leading-relaxed
                        ${isDark ? 'text-white/60' : 'text-gray-600'}
                      `}
                    >
                      {module.subtitle}
                    </motion.p>
                  )}
                </AnimatePresence>

                {/* Active indicator */}
                {isActive && (
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className={`absolute -bottom-2 left-1/2 -translate-x-1/2 w-12 h-1 rounded-full ${
                      module.color === 'purple' ? 'bg-purple-500' :
                      module.color === 'red' ? 'bg-red-500' :
                      'bg-amber-500'
                    }`}
                  />
                )}
              </div>
            </motion.div>
          )
        })}
      </div>

      {/* Center connection lines - forming a triangle */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        style={{ zIndex: 5 }}
      >
        <defs>
          <linearGradient id="line-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor={isDark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)'} />
            <stop offset="50%" stopColor={isDark ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.05)'} />
            <stop offset="100%" stopColor={isDark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)'} />
          </linearGradient>
        </defs>

        {/* Triangle connecting the three positions */}
        <motion.path
          d={`
            M ${window.innerWidth / 2} ${300 - 100}
            L ${window.innerWidth / 2 - 200} ${300 + 150}
            L ${window.innerWidth / 2 + 200} ${300 + 150}
            Z
          `}
          stroke="url(#line-gradient)"
          strokeWidth="2"
          fill="none"
          strokeDasharray="8 8"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
        />
      </svg>

      {/* Progress dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-40">
        {modules.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`
              w-2 h-2 rounded-full transition-all duration-300
              ${index === currentIndex
                ? isDark
                  ? 'bg-white w-8'
                  : 'bg-gray-900 w-8'
                : isDark
                ? 'bg-white/30 hover:bg-white/50'
                : 'bg-gray-400 hover:bg-gray-600'
              }
            `}
            aria-label={`Go to ${modules[index].title}`}
          />
        ))}
      </div>
    </div>
  )
}
