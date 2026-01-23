import { LucideIcon } from 'lucide-react'
import { gradients } from '../../theme'

export interface StatCardProps {
  title: string
  value: string | number
  icon?: LucideIcon
  trend?: {
    value: number
    label: string
  }
  variant?: 'primary' | 'success' | 'warning' | 'danger' | 'neutral'
  className?: string
}

export function StatCard({
  title,
  value,
  icon: Icon,
  trend,
  variant = 'primary',
  className = '',
}: StatCardProps) {
  const variantGradients = {
    primary: gradients.primary,
    success: gradients.success,
    warning: gradients.warning,
    danger: gradients.danger,
    neutral: gradients.neutral,
  }

  const gradient = variantGradients[variant]

  return (
    <div
      className={`relative overflow-hidden p-8 rounded-2xl ${gradient} shadow-2xl transform hover:scale-105 transition-all duration-300 ${className}`}
    >
      {/* Decorative circle */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16" />

      <div className="relative">
        {Icon && (
          <div className="mb-4">
            <div className="w-12 h-12 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center border border-white/30">
              <Icon className="w-6 h-6 text-white" />
            </div>
          </div>
        )}

        <div className="text-5xl font-bold text-white mb-2">{value}</div>

        <div className="text-sm font-semibold text-white/80 uppercase tracking-wide mb-2">
          {title}
        </div>

        {trend && (
          <div className="flex items-center gap-2 text-xs text-white/70">
            <span
              className={`font-semibold ${
                trend.value > 0 ? 'text-green-300' : trend.value < 0 ? 'text-red-300' : 'text-white/70'
              }`}
            >
              {trend.value > 0 ? '+' : ''}
              {trend.value}%
            </span>
            <span>{trend.label}</span>
          </div>
        )}
      </div>
    </div>
  )
}
