import { useState, useEffect, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { TrendingUp, Shield, BarChart3, Sparkles, ArrowRightLeft, Zap } from 'lucide-react'

interface Module {
  id: string
  title: string
  subtitle: string
  icon: typeof TrendingUp
  color: string
  bgGradient: string
  iconColor: string
  position: number
  glowColor: string
}

interface TriangulatedRotatingScrollerProps {
  theme?: 'dark' | 'white'
}

export function TriangulatedRotatingScroller({ theme = 'dark' }: TriangulatedRotatingScrollerProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isHovered, setIsHovered] = useState(false)

  const modules: Module[] = [
    {
      id: 'strategy',
      title: 'Strategy',
      subtitle: 'Define objectives and model scenarios',
      icon: TrendingUp,
      color: 'purple',
      bgGradient: 'from-purple-500/20 via-purple-600/10 to-transparent',
      iconColor: 'text-purple-400',
      glowColor: 'rgba(168, 85, 247, 0.4)',
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
      glowColor: 'rgba(239, 68, 68, 0.4)',
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
      glowColor: 'rgba(251, 191, 36, 0.4)',
      position: 2
    }
  ]

  // Generate floating particles
  const particles = useMemo(() => {
    return Array.from({ length: 30 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 4 + 1,
      color: i % 3 === 0 ? 'rgba(168, 85, 247, 0.6)' : i % 3 === 1 ? 'rgba(239, 68, 68, 0.6)' : 'rgba(251, 191, 36, 0.6)',
      delay: Math.random() * 5
    }))
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isHovered) {
        setCurrentIndex((prev) => (prev + 1) % modules.length)
      }
    }, 3000)

    return () => clearInterval(interval)
  }, [modules.length, isHovered])

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
    <div
      className="relative w-full h-[600px] flex items-center justify-center overflow-visible"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Animated floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute rounded-full"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              width: particle.size,
              height: particle.size,
              backgroundColor: particle.color,
              boxShadow: `0 0 ${particle.size * 2}px ${particle.color}`
            }}
            animate={{
              y: [0, -30, 0],
              x: [0, Math.random() * 20 - 10, 0],
              opacity: [0.3, 0.8, 0.3],
              scale: [1, 1.2, 1]
            }}
            transition={{
              duration: 4 + Math.random() * 2,
              repeat: Infinity,
              delay: particle.delay,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      {/* Enhanced background glow effect */}
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.div
          className={`w-96 h-96 rounded-full blur-[120px] ${modules[currentIndex].bgGradient} bg-gradient-to-br`}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.5, 0.8, 0.5]
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      {/* Pulsing energy ring */}
      <motion.div
        className="absolute"
        style={{
          width: 400,
          height: 400,
          borderRadius: '50%',
          border: `2px solid ${modules[currentIndex].glowColor}`,
          boxShadow: `0 0 40px ${modules[currentIndex].glowColor}`
        }}
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.3, 0.1, 0.3]
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

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
              className="absolute cursor-pointer"
              style={{ zIndex: position.zIndex }}
              onClick={() => setCurrentIndex(index)}
              whileHover={{ scale: 1.05 }}
            >
              <div
                className={`
                  relative rounded-2xl border backdrop-blur-md
                  ${isDark ? 'bg-black/50 border-white/20' : 'bg-white/60 border-gray-300'}
                  ${isActive ? 'shadow-2xl ring-2' : 'shadow-lg'}
                  transition-all duration-700
                  w-64 h-64
                  flex flex-col items-center justify-center
                  p-8
                  hover:border-opacity-100
                  ${isActive ? module.color === 'purple' ? 'ring-purple-500/50' :
                                module.color === 'red' ? 'ring-red-500/50' :
                                'ring-amber-500/50' : ''}
                `}
                style={{
                  boxShadow: isActive ? `0 20px 60px ${module.glowColor}` : undefined
                }}
              >
                {/* Icon with enhanced glow */}
                <div className="relative mb-6">
                  <motion.div
                    className={`absolute inset-0 blur-2xl ${module.iconColor} opacity-60`}
                    animate={isActive ? {
                      scale: [1, 1.3, 1],
                      opacity: [0.4, 0.8, 0.4]
                    } : {}}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    <Icon className="w-16 h-16" />
                  </motion.div>
                  <motion.div
                    animate={isActive ? { rotate: [0, 5, -5, 0] } : {}}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <Icon className={`w-16 h-16 relative ${module.iconColor}`} />
                  </motion.div>

                  {/* Sparkle effect for active card */}
                  {isActive && (
                    <motion.div
                      className="absolute -top-1 -right-1"
                      animate={{
                        scale: [0, 1, 0],
                        rotate: [0, 180, 360]
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    >
                      <Sparkles className={`w-5 h-5 ${module.iconColor}`} />
                    </motion.div>
                  )}
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
                        ${isDark ? 'text-white/70' : 'text-gray-600'}
                      `}
                    >
                      {module.subtitle}
                    </motion.p>
                  )}
                </AnimatePresence>

                {/* Active indicator */}
                {isActive && (
                  <motion.div
                    initial={{ scale: 0, width: 0 }}
                    animate={{ scale: 1, width: 48 }}
                    className={`absolute -bottom-2 left-1/2 -translate-x-1/2 h-1 rounded-full ${
                      module.color === 'purple' ? 'bg-purple-500 shadow-purple-500/50' :
                      module.color === 'red' ? 'bg-red-500 shadow-red-500/50' :
                      'bg-amber-500 shadow-amber-500/50'
                    } shadow-lg`}
                  />
                )}
              </div>
            </motion.div>
          )
        })}
      </div>

      {/* Enhanced connection lines - forming a triangle with data flow */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        style={{ zIndex: 5 }}
      >
        <defs>
          <linearGradient id="line-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor={isDark ? 'rgba(255,255,255,0.2)' : 'rgba(0,0,0,0.15)'} />
            <stop offset="50%" stopColor={isDark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.08)'} />
            <stop offset="100%" stopColor={isDark ? 'rgba(255,255,255,0.2)' : 'rgba(0,0,0,0.15)'} />
          </linearGradient>

          <linearGradient id="flow-gradient">
            <stop offset="0%" stopColor="rgba(168, 85, 247, 0)" />
            <stop offset="50%" stopColor="rgba(168, 85, 247, 0.8)" />
            <stop offset="100%" stopColor="rgba(168, 85, 247, 0)" />
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
          strokeWidth="3"
          fill="none"
          strokeDasharray="12 8"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{
            pathLength: 1,
            opacity: 1,
            strokeDashoffset: [0, -40]
          }}
          transition={{
            pathLength: { duration: 1.5, ease: "easeInOut" },
            opacity: { duration: 1.5, ease: "easeInOut" },
            strokeDashoffset: { duration: 3, repeat: Infinity, ease: "linear" }
          }}
        />

        {/* Animated data flow particles */}
        {[0, 1, 2].map((i) => (
          <motion.circle
            key={i}
            r="4"
            fill={modules[currentIndex].glowColor}
            initial={{ opacity: 0 }}
            animate={{
              opacity: [0, 1, 1, 0],
              offsetDistance: ['0%', '100%']
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: i * 0.7,
              ease: "linear"
            }}
            style={{
              offsetPath: `path("M ${window.innerWidth / 2} ${300 - 100} L ${window.innerWidth / 2 - 200} ${300 + 150} L ${window.innerWidth / 2 + 200} ${300 + 150} Z")`
            }}
          >
            <animateMotion
              dur="2s"
              repeatCount="indefinite"
              begin={`${i * 0.7}s`}
            >
              <mpath href="#triangle-path" />
            </animateMotion>
          </motion.circle>
        ))}
      </svg>

      {/* Data flow indicators */}
      <div className="absolute bottom-24 left-1/2 -translate-x-1/2 flex items-center gap-3 z-40">
        <motion.div
          animate={{
            x: [-10, 10, -10],
            opacity: [0.3, 1, 0.3]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <ArrowRightLeft className={`w-5 h-5 ${modules[currentIndex].iconColor}`} />
        </motion.div>
        <span className={`text-xs font-medium ${isDark ? 'text-white/60' : 'text-gray-600'}`}>
          Real-time Sync
        </span>
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.5, 1, 0.5]
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <Zap className={`w-4 h-4 ${modules[currentIndex].iconColor}`} />
        </motion.div>
      </div>

      {/* Enhanced progress dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-40">
        {modules.map((module, index) => (
          <motion.button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`
              rounded-full transition-all duration-300
              ${index === currentIndex
                ? 'w-8 h-2'
                : 'w-2 h-2'
              }
              ${index === currentIndex
                ? module.color === 'purple' ? 'bg-purple-500' :
                  module.color === 'red' ? 'bg-red-500' :
                  'bg-amber-500'
                : isDark
                ? 'bg-white/30 hover:bg-white/50'
                : 'bg-gray-400 hover:bg-gray-600'
              }
            `}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            aria-label={`Go to ${modules[index].title}`}
          >
            {index === currentIndex && (
              <motion.div
                className="w-full h-full rounded-full"
                animate={{
                  boxShadow: [
                    `0 0 0px ${module.glowColor}`,
                    `0 0 12px ${module.glowColor}`,
                    `0 0 0px ${module.glowColor}`
                  ]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            )}
          </motion.button>
        ))}
      </div>
    </div>
  )
}
