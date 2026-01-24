import { LucideIcon } from 'lucide-react'

interface ModuleCubeProps {
  label: string
  icon: LucideIcon
  color: 'blue' | 'indigo' | 'purple'
  size?: 'small' | 'medium' | 'large'
}

export function ModuleCube({ label, icon: Icon, color, size = 'medium' }: ModuleCubeProps) {
  const sizeClasses = {
    small: 'w-32 h-32',
    medium: 'w-48 h-48',
    large: 'w-64 h-64'
  }

  const colorClasses = {
    blue: {
      bg: 'bg-blue-900/20',
      border: 'border-blue-500/30',
      glow: 'shadow-blue-500/20',
      grid: 'border-blue-400/20',
      icon: 'text-blue-400'
    },
    indigo: {
      bg: 'bg-indigo-900/20',
      border: 'border-indigo-500/30',
      glow: 'shadow-indigo-500/20',
      grid: 'border-indigo-400/20',
      icon: 'text-indigo-400'
    },
    purple: {
      bg: 'bg-purple-900/20',
      border: 'border-purple-500/30',
      glow: 'shadow-purple-500/20',
      grid: 'border-purple-400/20',
      icon: 'text-purple-400'
    }
  }

  const colors = colorClasses[color]

  return (
    <div className={`${sizeClasses[size]} mx-auto perspective-1000`}>
      <div
        className="relative w-full h-full preserve-3d hover:rotate-y-12 hover:rotate-x-6 transition-transform duration-700"
        style={{
          transformStyle: 'preserve-3d',
          transform: 'rotateX(10deg) rotateY(-15deg)'
        }}
      >
        {/* Main cube face */}
        <div
          className={`
            absolute inset-0
            ${colors.bg}
            backdrop-blur-md
            border-2 ${colors.border}
            ${colors.glow}
            shadow-2xl
          `}
          style={{
            transform: 'translateZ(30px)',
            borderRadius: '4px'
          }}
        >
          {/* Internal grid pattern */}
          <div className="absolute inset-0 grid grid-cols-4 grid-rows-4 opacity-40">
            {Array.from({ length: 16 }).map((_, i) => (
              <div key={i} className={`border ${colors.grid}`} />
            ))}
          </div>

          {/* Icon */}
          <div className="absolute inset-0 flex items-center justify-center">
            <Icon className={`w-16 h-16 ${colors.icon} opacity-90`} strokeWidth={1.5} />
          </div>

          {/* Label badge */}
          <div className="absolute top-3 right-3">
            <div className={`
              w-10 h-10 rounded-lg
              ${colors.bg}
              border ${colors.border}
              flex items-center justify-center
              font-bold text-white text-sm
              backdrop-blur-sm
            `}>
              {label}
            </div>
          </div>
        </div>

        {/* Top face */}
        <div
          className={`
            absolute inset-0
            ${colors.bg}
            border ${colors.border}
            opacity-60
          `}
          style={{
            transform: 'rotateX(90deg) translateZ(30px)',
            transformOrigin: 'top'
          }}
        />

        {/* Right face */}
        <div
          className={`
            absolute inset-0
            ${colors.bg}
            border ${colors.border}
            opacity-50
          `}
          style={{
            transform: 'rotateY(90deg) translateZ(30px)',
            transformOrigin: 'right'
          }}
        />

        {/* Shadow/glow */}
        <div
          className={`absolute inset-0 ${colors.glow} blur-3xl opacity-30 -z-10`}
          style={{ transform: 'translateZ(0px)' }}
        />
      </div>
    </div>
  )
}
