/**
 * Lumina ONE Logo
 * Bold geometric "L1" monogram with professional wordmark
 */

export function LuminaOneLogo({ size = 40, className = '' }: { size?: number; className?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Bold L shape */}
      <path
        d="M20 20 L20 80 L60 80 L60 65 L35 65 L35 20 Z"
        fill="white"
      />

      {/* Bold 1 shape */}
      <path
        d="M70 35 L70 80 L85 80 L85 35 L85 20 L70 20 Z"
        fill="white"
        opacity="0.9"
      />

      {/* Accent line */}
      <rect
        x="60"
        y="20"
        width="4"
        height="60"
        fill="url(#gradient-accent)"
        opacity="0.6"
      />

      <defs>
        <linearGradient id="gradient-accent" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#7C3AED" />
          <stop offset="50%" stopColor="#DC2626" />
          <stop offset="100%" stopColor="#EAB308" />
        </linearGradient>
      </defs>
    </svg>
  )
}

/**
 * Lumina ONE Wordmark - Professional header logo
 */
export function LuminaOneWordmark({ className = '' }: { className?: string }) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <LuminaOneLogo size={40} />
      <div className="flex flex-col leading-none">
        <span className="text-sm font-light tracking-[0.3em] text-white/70 uppercase">Lumina</span>
        <span className="text-2xl font-bold tracking-tight text-white">ONE</span>
      </div>
    </div>
  )
}
