/**
 * Lumina ONE Logo
 * Three interlocking circles representing S, R, F converging into unified center
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
      {/* Three interlocking circles */}
      <circle
        cx="50"
        cy="30"
        r="20"
        stroke="url(#gradient-blue)"
        strokeWidth="3"
        fill="none"
        opacity="0.9"
      />
      <circle
        cx="35"
        cy="55"
        r="20"
        stroke="url(#gradient-indigo)"
        strokeWidth="3"
        fill="none"
        opacity="0.9"
      />
      <circle
        cx="65"
        cy="55"
        r="20"
        stroke="url(#gradient-purple)"
        strokeWidth="3"
        fill="none"
        opacity="0.9"
      />

      {/* Central convergence point */}
      <circle
        cx="50"
        cy="47"
        r="8"
        fill="url(#gradient-center)"
        opacity="1"
      />

      {/* Inner glow */}
      <circle
        cx="50"
        cy="47"
        r="5"
        fill="white"
        opacity="0.8"
      />

      {/* Gradient definitions */}
      <defs>
        <linearGradient id="gradient-blue" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#3b82f6" />
          <stop offset="100%" stopColor="#1d4ed8" />
        </linearGradient>
        <linearGradient id="gradient-indigo" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#6366f1" />
          <stop offset="100%" stopColor="#4338ca" />
        </linearGradient>
        <linearGradient id="gradient-purple" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#a855f7" />
          <stop offset="100%" stopColor="#7e22ce" />
        </linearGradient>
        <radialGradient id="gradient-center">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="1" />
          <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.9" />
        </radialGradient>
      </defs>
    </svg>
  )
}

/**
 * Lumina ONE Wordmark
 * Professional text logo for header
 */
export function LuminaOneWordmark({ className = '' }: { className?: string }) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <LuminaOneLogo size={36} />
      <div className="flex flex-col">
        <span className="text-lg font-light tracking-wider text-white/90">LUMINA</span>
        <span className="text-2xl font-bold tracking-tight text-white -mt-2">ONE</span>
      </div>
    </div>
  )
}
