/**
 * Lumina ONE Logo - Black Translucent Diamond
 */

export function LuminaOneLogo({ size = 40, className = '' }: { size?: number; className?: string }) {
  return (
    <svg
      width={size}
      height={size * 1.2}
      viewBox="0 0 100 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Diamond shape - translucent black */}
      <path
        d="M 50 10 L 80 50 L 50 110 L 20 50 Z"
        fill="rgba(0, 0, 0, 0.6)"
        stroke="rgba(255, 255, 255, 0.3)"
        strokeWidth="1.5"
      />

      {/* Inner facets for depth */}
      <path
        d="M 50 10 L 50 50 L 80 50 Z"
        fill="rgba(255, 255, 255, 0.1)"
      />
      <path
        d="M 50 10 L 50 50 L 20 50 Z"
        fill="rgba(0, 0, 0, 0.3)"
      />
      <path
        d="M 50 50 L 80 50 L 50 110 Z"
        fill="rgba(0, 0, 0, 0.4)"
      />
      <path
        d="M 50 50 L 20 50 L 50 110 Z"
        fill="rgba(0, 0, 0, 0.5)"
      />

      {/* Center highlight */}
      <circle
        cx="50"
        cy="50"
        r="3"
        fill="rgba(255, 255, 255, 0.8)"
      />
    </svg>
  )
}

/**
 * Lumina ONE Wordmark - Professional header logo
 */
export function LuminaOneWordmark({ className = '' }: { className?: string }) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <LuminaOneLogo size={36} />
      <div className="flex flex-col leading-none">
        <span className="text-sm font-light tracking-[0.3em] text-white/70 uppercase">Lumina</span>
        <span className="text-2xl font-bold tracking-tight text-white">ONE</span>
      </div>
    </div>
  )
}
